import create from 'zustand';

export const useUserStore = create((set) => ({
  user: {},
  journal: {
    id: 0,
    title: '',
  },
  setUser: (value: any) => set(() => ({ user: value })),
  setJournal: (value: string) => set(() => ({ journal: value })),
}));

export const useNotificationStore = create((set) => ({
  notification: {
    open: false,
    message: '',
    error: false,
  },
  setNotification: (value: any) => set(() => ({ notification: value })),
}));
