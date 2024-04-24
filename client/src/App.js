import React, { useState, useEffect } from "react";
import styles from "./App.module.css";

import { Navigation } from "./components/Navigation/Navigation";
import { AllTracks } from "./views/AllTracks/AllTracks";
import { Playlists } from "./views/Playlists/Playlists";
import { AudioPlayer } from "./components/AudioPlayer/AudioPlayer";
import { useAppContext } from "./contexts/AppContext";
import { Playlist } from "./views/Playlist/Playlist";
import { CRUDPlaylistModal } from "./components/CRUDModals/CRUDPlaylistModal";

function App() {
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState();

  const { modalOpen, view } = useAppContext();

  useEffect(() => {
    fetch("http://0.0.0.0:8000/tracks/", { mode: "cors" })
      .then((res) => res.json())
      .then((data) => setTracks(data));
  }, []);

  const handlePlay = (track) => setCurrentTrack(track);

  return (
    <>
      <main className={styles.app}>
        <Navigation />
        {view === "all" && (
          <AllTracks tracks={tracks} handlePlay={handlePlay} />
        )}
        {view === "playlists" && <Playlists />}
        {view === "playlist" && <Playlist />}
      </main>
      {currentTrack && <AudioPlayer track={currentTrack} />}
      {modalOpen && <CRUDPlaylistModal />}
    </>
  );
}

export default App;
