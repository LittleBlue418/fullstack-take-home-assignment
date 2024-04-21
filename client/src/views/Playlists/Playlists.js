import { Button } from "../../components/Controlls/Button";
import { useAppContext } from "../../contexts/AppContext";

export const Playlists = () => {
  const { userPlaylists } = useAppContext();
  console.log("userPlaylists", userPlaylists);
  return (
    <div className="my-10 flex flex-col items-center">
      {userPlaylists && userPlaylists.length > 0 ? (
        <div>
          Your playlists
          <div>
            {userPlaylists.map((playlist) => (
              <div>
                <div>Playlist name: </div>
                <div>{playlist[0].name}</div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="text-center m-10 text-gray-400">
            It looks like you don't have any custom playlists yet, why not make
            one?
          </div>
          <Button
            className="bg-gray-700 hover:bg-gray-500 p-3 rounded-lg"
            ariaLabel="Create a new playlist"
          >
            Create Playlist
          </Button>
        </div>
      )}
    </div>
  );
};
