import { Button } from "../../components/Controlls/Button";
import { EditIcon } from "../../components/Icons/EditIcon";
import { PlusIcon } from "../../components/Icons/PlusIcon";
import { useAppContext } from "../../contexts/AppContext";

export const Playlist = () => {
  const { selectedPlaylist, setView } = useAppContext();
  return (
    <div className="mt-8">
      <div className="flex justify-between">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-pink-300 mr-6" />
          <h2 className="text-xl">{selectedPlaylist.name}</h2>
        </div>

        <Button>
          <EditIcon />
        </Button>
      </div>
      <div>

        {selectedPlaylist.songs.length ? (
          <div>
            {selectedPlaylist.songs.map((song) => (
              <div>song</div>
            ))}
            <div className="text-md mt-6">Add more songs?</div>
            <Button
              onClick={() => setView("all")}
              className="text-gray-400 hover:text-gray-300 border-gray-400 border-2 hover:border-gray-300 rounded-full m-8"
            >
              <PlusIcon size="20" />
            </Button>
          </div>
        ) : (
          <div className="mt-20 flex flex-col items-center justify-center">
            <div className="text-lg">Let's add some songs!</div>
            <Button
              onClick={() => setView("all")}
              className="text-gray-400 hover:text-gray-300 border-gray-400 border-2 hover:border-gray-300 rounded-full m-8"
            >
              <PlusIcon size="50" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
