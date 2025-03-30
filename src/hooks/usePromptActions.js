// hooks/usePromptActions.js
import { useState } from "react";
import supabase from "../lib/supabaseClient";

export default function usePromptActions({
  prompts,
  username,
  setLikes,
  setFavoritedIndexes,
}) {
  const [likedIndexes, setLikedIndexes] = useState([]);

  const toggleLike = async (index, likes) => {
    if (likedIndexes.includes(index)) return;

    const newLikes = [...likes];
    newLikes[index] += 1;
    setLikes(newLikes);
    setLikedIndexes([...likedIndexes, index]);

    const promptId = prompts[index].id;
    await supabase
      .from("prompts")
      .update({ like_count: newLikes[index] })
      .eq("id", promptId);
  };

  const toggleFavorite = async (index, favoritedIndexes) => {
    const promptId = prompts[index].id;

    if (favoritedIndexes.includes(index)) {
      await supabase
        .from("favorites")
        .delete()
        .eq("prompt_id", promptId)
        .eq("username", username);
    } else {
      await supabase
        .from("favorites")
        .insert([{ prompt_id: promptId, username }]);
    }

    setFavoritedIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return {
    likedIndexes,
    toggleLike,
    toggleFavorite,
  };
}
