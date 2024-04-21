import React, { useState, useEffect } from "react";
import styles from "./App.module.css";

import { Navigation } from "./components/Navigation/Navigation";
import { AllTracks } from "./views/AllTracks/AllTracks";
import { Playlists } from "./views/Playlists/Playlists";
import { AudioPlayer } from "./components/AudioPlayer/AudioPlayer";
import { CreatePlaylistModal } from "./components/CreatePlaylistModal/CreatePlaylistModal";
import { useAppContext } from "./contexts/AppContext";

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
        {view === "playlist" && <Playlists />}
      </main>
      {currentTrack && <AudioPlayer track={currentTrack} />}
      {modalOpen && <CreatePlaylistModal />}
    </>
  );
}

export default App;
