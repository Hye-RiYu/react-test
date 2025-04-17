import { create } from "zustand";
import axios from "axios";

export const usePopularBooksStore = create((set) => ({
  books: [],
  isLoading: false,
  error: null,

  fetchPopularBooks: async () => {
    set({ isLoading: true, error: null });

    try {
      const res = await axios.get(
        "https://openlibrary.org/search.json?q=book&sort=edition_count&limit=12"
      );
      const data = res.data.docs;
      set({ books: data, isLoading: false });
    } catch (err) {
      set({ error: err.message, isLoading: false });
    }
  },
}));
