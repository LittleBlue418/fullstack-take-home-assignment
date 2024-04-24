import { Button } from "../../../components/Controlls/Button";
import { useAppContext } from "../../../contexts/AppContext";


export const EmptyPlaylistView = () => {
  const { setModalOpen } = useAppContext();
  return (
    <div className="my-10 flex flex-col items-center justify-center">
      <div className="text-center m-10 text-gray-400">
        It looks like you don't have any custom playlists yet, why not make one?
      </div>
      <Button
        onClick={() => setModalOpen('create')}
        className="bg-gray-700 hover:bg-gray-500 p-3 rounded-lg"
        ariaLabel="Create a new playlist"
      >
        Create Playlist
      </Button>
    </div>
  );
};
