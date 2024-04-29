// @ts-nocheck 
import { create, StateCreator } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

export interface CartItem {
  id: number | string;
  imageUrl: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (itemId: number | string) => void;
  updateQuantity: (itemId: number | string, newQuantity: number) => void;
  clearCart: () => void;
}

;


interface PersistedCartStore extends CartStore {
  persist: {
    setOptions: (options: PersistOptions<CartStore, any>) => void;
    clearStorage: () => void;
    rehydrate: () => Promise<void>;
  }
}

const useCartStore = create<CartStore>(
  persist(
    (set) => ({
      items: [],
      addItem: (item) => {
        const existingItem = useCartStore
          .getState()
          .items.find((i) => i.id === item.id);
        if (existingItem) {
          useCartStore
            .getState()
            .updateQuantity(item.id, existingItem.quantity + 1);
        } else {
          set((state) => ({ items: [...state.items, item] }));
        }
      },
      removeItem: (itemId) =>
        set((state) => ({ items: state.items.filter((i) => i.id !== itemId) })),
      updateQuantity: (itemId, newQuantity) =>
        set((state) => ({
          items: state.items.map((i) =>
            i.id === itemId ? { ...i, quantity: newQuantity } : i
          ),
        })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
    }
  )
);

export default useCartStore;
