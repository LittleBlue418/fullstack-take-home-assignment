import { useState } from "react";
import { Button } from "../Controlls/Button";
import { useAppContext } from "../../contexts/AppContext";
import { TickIcon } from "../Icons/TickIcon";
import { CrossIcon } from "../Icons/CrossIcon";

export const CreatePlaylistModal = () => {
  const [value, setValue] = useState("");
  const [formState, setFormState] = useState("empty");
  const { checkPlaylistNameAvailableAndSet, setModalOpen } = useAppContext();

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
    <div className="fixed top-0 bottom-0 right-0 left-0">
      <div className="mx-auto p-6 mt-20 w-3/4 bg-[#333] border-#767676 border-2 rounded-lg">
        <div className="flex justify-between mb-4">
          <h3 className="text-xl ">Create a new Playlist</h3>
          <Button
            onClick={() => setModalOpen(false)}
            className="bg-[#222] p-2 rounded-lg"
          >
            <CrossIcon />
          </Button>
        </div>

        <form
          onSubmit={(e) => onFormSubmit(e.preventDefault())}
          className="flex flex-col"
        >
          <input
            placeholder="Add a playlist name"
            onChange={(e) => {
              setValue(e.currentTarget.value);
              setFormState("empty");
            }}
            value={value}
            type="text"
            className="bg-[#222] py-1 px-2 mb-4"
            id="CreatePlaylistForm"
          />
          {formState === "success" && (
            <label htmlFor="CreatePlaylistForm" className="flex">
              <TickIcon stroke="green" className="w-1/5" />
              Your playlist has been created
            </label>
          )}
          {formState === "fail" && (
            <label htmlFor="CreatePlaylistForm" className="flex">
              <CrossIcon stroke="red" className="w-1/5" />
              Hey it looks like you already have a playlist with that name!
              Please choose a different name or re-name your existing playlist.
            </label>
          )}

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
            className={`w-36 mx-auto bg-[#222]  py-2 px-4 rounded-lg ${
              formState === "empty" ? "text-white" : "text-gray-400"
            }`}
          >
            {formState === "empty" && <>Save</>}
            {formState === "checking" && <>Checking...</>}
            {formState === "fail" && <>Unavailable</>}
            {formState === "success" && <>Saved!</>}
          </Button>
        </form>
      </div>
    </div>
  );
};
