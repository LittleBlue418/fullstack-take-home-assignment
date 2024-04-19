import { Button } from "../../components/Controlls/Button";

export const Playlists = () => {
  return (
    <div className="my-10 flex flex-col items-center">
      <div className="text-center m-10 text-gray-400">
        It looks like you don't have any custom playlists yet, why not make one?
      </div>
      <Button
        className="bg-gray-700 hover:bg-gray-500 p-3 rounded-lg"
        ariaLabel="Create a new playlist"
      >
        Create Playlist
      </Button>
    </div>
  );
};
