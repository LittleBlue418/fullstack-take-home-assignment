import React from "react";
import styles from "./TrackRow.module.css";
import { PlayIcon } from "../Icons/PlayIcon";
import { Button } from "../Controlls/Button";

function TrackRow({ track, handlePlay }) {
  return (
    <div className="flex items-center  h-20 border-b border-1 border-gray-700">
      <Button
        className="w-10 h-10 rounded-full bg-[#333] flex items-center justify-center mr-4"
        onClick={() => handlePlay(track)}
      >
        <PlayIcon />
      </Button>
      <div className={styles.trackInfo}>
        <div className={styles.trackTitle}>{track.title}</div>
        <div className={styles.trackArtist}>
          {track.main_artists.join(", ")}
        </div>
      </div>
    </div>
  );
}

export default TrackRow;
