import { useAppContext } from "../../contexts/AppContext";
import { EmptyPlaylistView } from "./components/EmptyPlaylistView";
import { PlaylistLineItem } from "./components/PlaylistLineItem";

export const Playlists = () => {
  const { userPlaylists } = useAppContext();

  return (
    <div>
      {userPlaylists && userPlaylists.length > 0 ? (
        <div className="w-full mt-4">
          {userPlaylists.map((playlist) => (
            <PlaylistLineItem playlist={playlist} />
          ))}
        </div>
      ) : (
        <EmptyPlaylistView />
      )}
    </div>
  );
};
