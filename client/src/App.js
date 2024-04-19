import React, { useState, useEffect } from "react";
import styles from "./App.module.css";

import { Navigation } from "./components/Navigation/Navigation";
import { AllTracks } from "./views/AllTracks/AllTracks";
import { Playlists } from "./views/Playlists/Playlists";
import { AudioPlayer } from "./components/AudioPlayer/AudioPlayer";


function App() {
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState();
  const [view, setView] = useState("all");

  useEffect(() => {
    fetch("http://0.0.0.0:8000/tracks/", { mode: "cors" })
      .then((res) => res.json())
      .then((data) => setTracks(data));
  }, []);

  const handlePlay = (track) => setCurrentTrack(track);

  return (
    <>
      <main className={styles.app}>
        <Navigation setView={setView} view={view} />
        {view === "all" && (
          <AllTracks tracks={tracks} handlePlay={handlePlay} />
        )}
        {view === "playlist" && <Playlists />}
      </main>
      {currentTrack && <AudioPlayer track={currentTrack} />}
    </>
  );
}

export default App;
