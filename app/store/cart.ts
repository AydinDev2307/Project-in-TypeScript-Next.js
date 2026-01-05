'use client';

import { create } from 'zustand';
import { IProducts } from '@/app/types/types';

interface CartItem extends IProducts {
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addToCart: (product: IProducts) => void;
  removeFromCart: (id: number) => void;
}

export const useCartStore = create<CartState>((set, get) => ({
  cart: [],
  addToCart: (product) => {
    const exists = get().cart.find((p) => p.id === product.id);

    set({
      cart: exists
        ? get().cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...get().cart, { ...product, quantity: 1 }],
    });
  },

  removeFromCart: (id) => {
    set({
      cart: get().cart.filter((item) => item.id !== id),
    });
  },
}));
