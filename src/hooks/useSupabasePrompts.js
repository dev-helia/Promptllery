// ✅ 正确的 hook 写法
import { useState, useEffect } from "react";
import supabase from "../lib/supabaseClient";

export default function useSupabasePrompts(userEmail) {
  const [prompts, setPrompts] = useState([]);
  const [likes, setLikes] = useState([]);
  const [favoritedIndexes, setFavoritedIndexes] = useState([]);

  useEffect(() => {
    async function fetchPrompts() {
      const { data, error } = await supabase
        .from("prompts")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data) {
        setPrompts(data);
        setLikes(data.map((p) => p.like_count || 0));
      }
    }

    fetchPrompts();
  }, []);

  useEffect(() => {
    if (!userEmail || prompts.length === 0) return;

    async function fetchFavorites() {
      const { data, error } = await supabase
        .from("favorites")
        .select("prompt_id")
        .eq("username", userEmail);

      if (data) {
        const favoriteIds = data.map((f) => f.prompt_id);
        const indexes = prompts
          .map((p, i) => (favoriteIds.includes(p.id) ? i : null))
          .filter((i) => i !== null);
        setFavoritedIndexes(indexes);
      }
    }

    fetchFavorites();
  }, [userEmail, prompts]);

  return {
    prompts,
    setPrompts,
    likes,
    setLikes,
    favoritedIndexes,
    setFavoritedIndexes,
  };
}
