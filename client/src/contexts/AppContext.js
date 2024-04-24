import React, { useState } from "react";

const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
  const [view, setView] = useState("all");
  const [modalOpen, setModalOpen] = useState(undefined);
  const [userPlaylists, setUserPlaylists] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState(undefined);

  const checkPlaylistNameAvailableAndSet = (value) => {
    if (
      userPlaylists.length >= 1 &&
      userPlaylists.find((playlist) => playlist.name === value)
    ) {
      return false;
    }

    const newPlaylistItem = { name: value, songs: [] };

    const newPlaylistCollection = [...userPlaylists, newPlaylistItem];

    setUserPlaylists(newPlaylistCollection);
    return true;
  };

  const value = {
    view,
    setView,
    modalOpen,
    setModalOpen,
    userPlaylists,
    setUserPlaylists,
    selectedPlaylist,
    setSelectedPlaylist,
    checkPlaylistNameAvailableAndSet,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
  const context = React.useContext(AppContext);
  return context;
};

export { AppContextProvider, useAppContext };
