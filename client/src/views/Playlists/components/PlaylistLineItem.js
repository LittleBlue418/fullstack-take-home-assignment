import { Button } from "../../../components/Controlls/Button";
import { useAppContext } from "../../../contexts/AppContext";

export const PlaylistLineItem = ({ playlist }) => {
  const { setView, setSelectedPlaylist } = useAppContext();
  return (
    <Button
      onClick={() => {
        setSelectedPlaylist(playlist);
        setView("playlist");
      }}
      className="py-4 border-b-2 border-gray-700 flex items-center"
    >
      <div className="w-4 h-4 bg-pink-300 mr-6" />
      <h3 className="text-xl">{playlist.name}</h3>
    </Button>
  );
};
