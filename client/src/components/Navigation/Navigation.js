import logo from "../../assets/logo.svg";
import { Button } from "../Controlls/Button";
import { PlusIcon } from "../Icons/PlusIcon";

export const Navigation = ({ setView, view }) => {
  return (
    <nav>
      <img src={logo} alt="Logo" className="w-10 h-10" />
      <div className="flex items-center">
        <Button
          onClick={() => setView("all")}
          className={`mr-6 ${view === 'all' ? 'border-b-2 h-12 border-white' : '' }`}
          ariaLabel="Navigate to all tracks"
        >
          Tracks
        </Button>
        <Button
          onClick={() => setView("playlist")}
          className={`mr-6 ${view === 'all' ? 'border-b-2 h-12 border-white' : '' }`}
          ariaLabel="Navigate to your playlists"
        >
          Playlists
        </Button>
        <Button
          className="text-gray-600 flex h-7 w-7 items-center hover:text-gray-500 hover:border-gray-500 justify-center border-gray-600 border-2 rounded-full"
          ariaLabel="Create a new playlist"
        >
          <PlusIcon />
        </Button>
      </div>
    </nav>
  );
};
