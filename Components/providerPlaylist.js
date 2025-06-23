import { createContext, useContext, useState } from "react";

const PlaylistContext = createContext();

export default function ProviderPlaylist({children}){
    
    const [playlist, setPlaylist] = useState([]);

    function addMusic(music){
        setPlaylist((anterior) => [...anterior, music]);
        console.log("Musica add");
    }

    return(
        <playlistContext.Provider value={{playlist, addMusic}}>
            {children}
        </playlistContext.Provider>
    )
}

export function usePlaylist(){
    return useContext(PlaylistContext);
}

