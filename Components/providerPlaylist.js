import { createContext, useContext, useState, useEffect } from "react";

import {db, auth} from "../controller";
import {doc, setDoc, getDoc} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const PlaylistContext = createContext();

/* Obs.: não sei se é para criar um novo contexto ou se tem como reututilizar esse, vou tentar o segundo */

export default function ProviderPlaylist({children}){
    /* Variáveis */
    const [userEmail, setUserEmail] = useState(null);
    const [loadingPlaylist, setLoadingPlaylist] = useState(true); 
    const [playlist, setPlaylist] = useState([]);

    const [song, setSong] = useState({});

    function songPage(music){
        setSong(music);
    }


    /* Função para adcionar a playlist ao firebase */
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            setUserEmail(user);
            setLoadingPlaylist(true);

            if(user) {
                try {
                    const docRef = doc(db, 'playlist', user.uid);
                    const docSnap = await getDoc(docRef);

                    if(docSnap.exists()){
                        const data = docSnap.data();
                        setPlaylist(Array.isArray(data.songs) ? data.songs : []);
                    } else {
                        setPlaylist([]);
                    }
                } catch (error) {
                    console.log("Erro ao carregar playlist: ", error.message);
                    setPlaylist([]);
                }

            } else{
                setPlaylist([]);
            }

            setLoadingPlaylist(false);
        })

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        async function savePlaylist(list) {
            if( !userEmail || loadingPlaylist){
                return;
            }

            try {
                const docRef = doc(db, 'playlist', userEmail.uid);
                await setDoc(docRef, {songs: list})
            } catch (error) {
                console.log("Error ao salvar playlist: ", error.message);
            }
        }

        savePlaylist(playlist);
    }, [playlist, userEmail, loadingPlaylist]);

    /* Função para adicionar a playlist */
    function addMusic(music){
        setPlaylist((anterior) => [...anterior, music]);
    }

    function deleteMusic(index){
        const newList = [];
        setPlaylist((previousState) => {
            for (let i = 0; i < previousState.length; i++) {
                if (i !== index){
                    newList.push(previousState[i]);
                }
            }
            return newList;
        })
    }

    return(
        <PlaylistContext.Provider value={{playlist, addMusic, deleteMusic, songPage, song}}>
            {children}
        </PlaylistContext.Provider>
    )
}


export function usePlaylist(){
    return useContext(PlaylistContext);
}
