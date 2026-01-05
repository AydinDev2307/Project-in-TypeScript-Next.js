'use client';

import { create } from 'zustand';
import { IProducts } from '@/app/types/types';

interface FavoriteState {
  favorites: IProducts[];
  toggleFavorite: (product: IProducts) => void;
}

export const useFavoriteStore = create<FavoriteState>((set, get) => ({
  favorites: [],
  toggleFavorite: (product) => {
    const exists = get().favorites.some((p) => p.id === product.id);

    set({
      favorites: exists
        ? get().favorites.filter((p) => p.id !== product.id)
        : [...get().favorites, product],
    });
  },
}));
