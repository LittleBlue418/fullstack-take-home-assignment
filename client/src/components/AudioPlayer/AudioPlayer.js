import React, { useRef, useState, useEffect } from "react";
import styles from "./AudioPlayer.module.css";

import { PlayIcon } from "../Icons/PlayIcon";
import { PauseIcon } from "../Icons/PauseIcon";
import { Button } from "../Controlls/Button";
import { PlusIcon } from "../Icons/PlusIcon";
import { useAppContext } from "../../contexts/AppContext";

export const AudioPlayer = ({ track }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);
  const { setModalOpen } = useAppContext();

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleTimeUpdate = (e) => {
    setProgress(e.target.currentTime / e.target.duration);
  };

  const handleSliderChange = (e) => {
    audioRef.current.currentTime =
      (e.target.value / 1000) * audioRef.current.duration;
  };

  const handleTogglePlaybackClick = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  useEffect(() => {
    audioRef.current.addEventListener("play", handlePlay);
    audioRef.current.addEventListener("pause", handlePause);
    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
  }, []);

  useEffect(() => {
    audioRef.current.play();
    audioRef.current.currentTime = 0;
  }, [track]);

  return (
    <>
      <audio src={track.audio} ref={audioRef} />
      <div className="fixed bottom-0 left-0 right-0 height-20 p-4 bg-[#333] border-md flex items-center">
        <Button
          onClick={handleTogglePlaybackClick}
          className="bg-gray-400 rounded-full w-[40px] h-[40px] flex items-center justify-center mr-4"
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </Button>
        <div className={styles.trackInfo}>
          <div className={styles.trackTitle}>{track.title}</div>
          <div className={styles.trackArtist}>
            {track.main_artists.join(", ")}
          </div>
        </div>
        <div className={styles.sliderContainer}>
          <input
            type="range"
            min="1"
            max="1000"
            value={progress * 1000}
            className={styles.slider}
            onChange={handleSliderChange}
          />
        </div>
        <Button onClick={() => setModalOpen('add')} className="text-gray-400 hover:text-gray-300 border-gray-400 border-2 hover:border-gray-300 rounded-full">
          <PlusIcon size="20" />
        </Button>
      </div>
    </>
  );
};
