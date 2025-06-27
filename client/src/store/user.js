import { create } from "zustand";

const initialUser = { userName: "", roomType: "", inRoom: false };

const useUserStore = create((set) => ({
  user: initialUser,
  setUserState: (data) => set(() => ({ user: data })),
}));

export default useUserStore;
