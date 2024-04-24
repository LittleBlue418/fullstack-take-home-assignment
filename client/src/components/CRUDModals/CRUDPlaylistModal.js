import { useAppContext } from "../../contexts/AppContext";
import { AddToPlaylistModal } from "./AddToPlaylistModal/AddToPlaylistModal";
import { CreatePlaylistModal } from "./CreatePlaylistModal/CreatePlaylistModal";

export const CRUDPlaylistModal = () => {
  const { modalOpen } = useAppContext();

  const getModalInner = () => {
    switch (modalOpen) {
      case "create":
        return <CreatePlaylistModal />;
      case "add":
        return <AddToPlaylistModal />;
      default:
        <></>;
    }
  };

  console.log(getModalInner())

  return <div className="fixed top-0 bottom-0 right-0 left-0">{getModalInner()}</div>;
};
