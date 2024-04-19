import TrackRow from "../../components/TrackRow/TrackRow";

export const AllTracks = ({ tracks, handlePlay }) => {
  return (
    <>
      {tracks.map((track, ix) => (
        <TrackRow key={ix} track={track} handlePlay={handlePlay} />
      ))}
    </>
  );
};
