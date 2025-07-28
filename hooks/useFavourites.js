"use client";

import useNotificationCtx from "@/store/useNotificationCtx";
import { useState, useEffect } from "react";

const useFavourites = () => {
  const [favList, setFavList] = useState([]);
  const { notifyUser } = useNotificationCtx();

  useEffect(() => {
    const storedFavourites =
      JSON.parse(localStorage.getItem("favourites")) || [];
    setFavList(storedFavourites);
  }, []);

  const toggleFavourite = (id) => {
    if (favList.includes(id)) {
      setFavList(favList.filter((favId) => favId !== id));
      localStorage.setItem(
        "favourites",
        JSON.stringify(favList.filter((favId) => favId !== id))
      );
      notifyUser("info", "Guide removed from shortcuts");
    } else {
      setFavList([...favList, id]);
      localStorage.setItem("favourites", JSON.stringify([...favList, id]));
      notifyUser("success", "Guide added to shortcuts");
    }
  };

  return { favourites: favList, toggleFavourite };
};

export default useFavourites;
