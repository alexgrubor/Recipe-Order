import { create } from "zustand";

interface CartItem {
    id: number | string;
    name: string;
    price: number;
}

interface CartStore {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (itemId: string) => void;
    updateQuantity: (itemId: string, newQuantity: number) => void;
    clearCart: () => void;
  }

  const useCartStore = create<CartStore>((set) => ({
    items: [],
    addItem: (item) => set((state) => ({ items: [...state.items, item] })),
    removeItem: (itemId) =>
      set((state) => ({
        items: state.items.filter((i) => i.id !== itemId),
      })),
    updateQuantity: (itemId, newQuantity) =>
      set((state) => ({
        items: state.items.map((i) => (i.id === itemId ? { ...i, quantity: newQuantity } : i)),
      })),
    clearCart: () => set({ items: [] }),
  }));
  
  export default useCartStore;