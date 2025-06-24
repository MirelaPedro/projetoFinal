import { createContext, useContext, useState } from "react";


const PlaylistContext = createContext();

export default function ProviderPlaylist({children}){

    const [playlist, setPlaylist] = useState([]); /* Array do carrinho */

    /* Função para adicionar a playlist*/
    function addMusic(music){
        setPlaylist((anterior) => [...anterior, music]);
    }

    function deleteMusic(music){
        
    }

    return(
        <PlaylistContext.Provider value={{playlist, addMusic}}>
            {children}
        </PlaylistContext.Provider>
    )
}


export function usePlaylist(){
    return useContext(PlaylistContext);
}
