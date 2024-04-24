import { Button } from "../../Controlls/Button";
import { useAppContext } from "../../../contexts/AppContext";
import { CrossIcon } from "../../Icons/CrossIcon";
import { CreatePlaylistModal } from "../CreatePlaylistModal/CreatePlaylistModal";

export const AddToPlaylistModal = () => {
  const { userPlaylists, setModalOpen } = useAppContext();

  return (
    <div className="mx-auto p-6 mt-20 w-3/4 bg-[#333] border-#767676 border-2 rounded-lg min-w-[340px] max-w-[440px] min-h-[280px] flex flex-col">
      <div className="flex justify-between mb-4">
        <h3 className="text-xl mt-1">Add to playlist</h3>
        <Button
          onClick={() => setModalOpen(false)}
          className="bg-[#222] p-2 rounded-lg"
        >
          <CrossIcon />
        </Button>
      </div>

      {userPlaylists.length ? (
        /*
          Sorry lovely code reviewers my mind is falling away like pieces of wet cake. 
          it is late, and thus -> psudocode!

          A form
          An input
          A dropdown with existing playlists
          at the bottom of a drop down an option to make new playlists (goes to new playlist creator)
          if (new)
          -> add track to context temp to 'hold on to it' then directly add it to new playlist
          if (select)
          -> Add track to playlist object

          great success
          */
        <></>
      ) : (

        /*
          This will look terrible, sorry. I would change the classes on the modal so I could easilly switch out the 
          contense.
        */
        <CreatePlaylistModal />
      )}
    </div>
  );
};
