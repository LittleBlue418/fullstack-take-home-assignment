import { useState } from "react";
import { Button } from "../../Controlls/Button";
import { useAppContext } from "../../../contexts/AppContext";
import { TickIcon } from "../../Icons/TickIcon";
import { CrossIcon } from "../../Icons/CrossIcon";

export const CreatePlaylistModal = () => {
  const [value, setValue] = useState("");
  const [formState, setFormState] = useState("empty");
  const { checkPlaylistNameAvailableAndSet, setModalOpen, setView } =
    useAppContext();

  const onFormSubmit = () => {
    setFormState("checking");
    const success = checkPlaylistNameAvailableAndSet(value);
    if (success) {
      setFormState("success");
    } else {
      setFormState("fail");
    }
  };

  return (
      <div className="mx-auto p-6 mt-20 w-3/4 bg-[#333] border-#767676 border-2 rounded-lg min-w-[340px] max-w-[440px] min-h-[280px] flex flex-col">
        <div className="flex justify-between mb-4">
          <h3 className="text-xl mt-1">Create a new Playlist</h3>
          <Button
            onClick={() => setModalOpen(false)}
            className="bg-[#222] p-2 rounded-lg"
          >
            <CrossIcon />
          </Button>
        </div>

        <form
          onSubmit={(e) => onFormSubmit(e.preventDefault())}
          className="flex flex-col flex-grow justify-between"
        >
          <input
            placeholder="Add a playlist name"
            onChange={(e) => {
              setValue(e.currentTarget.value);
              setFormState("empty");
            }}
            value={value}
            type="text"
            className="bg-[#222] py-1 my-2 px-2 mb-4"
            id="CreatePlaylistForm"
          />
          {formState === "success" && (
            <label htmlFor="CreatePlaylistForm" className="flex mb-1">
              <TickIcon stroke="green" className="w-1/5" />
              Your playlist has been created
            </label>
          )}
          {formState === "fail" && (
            <label htmlFor="CreatePlaylistForm" className="flex mb-1">
              <CrossIcon stroke="red" className="w-1/5" />
              It looks like you already have a playlist with that name!
            </label>
          )}

          {formState === "success" ? (
            <Button
              onClick={() => {
                setView("playlists");
                setModalOpen(false);
              }}
              className="w-36 mx-auto bg-[#222] py-2 px-4 mb-2 rounded-lg text-white"
            >
              View playlist
            </Button>
          ) : (
            <Button
              type="submit"
              onSubmit={(e) => onFormSubmit(e.preventDefault())}
              disabled={
                formState === "checking" ||
                formState === "fail" ||
                formState === "success"
                  ? true
                  : false
              }
              className={`w-36 mx-auto bg-[#222] py-2 px-4 rounded-lg mb-2 ${
                formState === "empty" ? "text-white" : "text-gray-400"
              }`}
            >
              {formState === "empty" && <>Save</>}
              {formState === "checking" && <>Checking...</>}
              {formState === "fail" && <>Unavailable</>}
            </Button>
          )}
        </form>
      </div>
  );
};
