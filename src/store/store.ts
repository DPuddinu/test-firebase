import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import type {} from '@redux-devtools/extension'; // required for devtools typing
import { User } from 'firebase/auth';

interface UserState {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        login: (user) => set(() => ({ user: user })),
        logout: () => set({ user: null })
      }),
      {
        name: 'abi-storage'
      }
    )
  )
);
