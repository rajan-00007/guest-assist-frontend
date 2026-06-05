import { create } from "zustand";
import { persist } from "zustand/middleware";
 
interface CartStore {
  cart: Record<string, number>;
  addItem: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cart: {},

      addItem: (id) =>
        set((state) => ({
          cart: { ...state.cart, [id]: 1 },
        })),

      increaseQuantity: (id) =>
        set((state) => ({
          cart: { ...state.cart, [id]: (state.cart[id] || 0) + 1 },
        })),

      decreaseQuantity: (id) =>
        set((state) => {
          const updatedCart = { ...state.cart };
          if (updatedCart[id] > 1) {
            updatedCart[id] -= 1;
          } else {
            delete updatedCart[id];
          }
          return { cart: updatedCart };
        }),

      clearCart: () => set({ cart: {} }),
    }),
    {
      name: "guest-assist-cart-storage",
    }
  )
);
