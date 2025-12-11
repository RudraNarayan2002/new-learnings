import { atom } from "jotai";

export const cartItemsAtom = atom<string[]>([]);

export const cartCountAtom = atom((get) => {
  const items = get(cartItemsAtom);
  return items.length;
});
