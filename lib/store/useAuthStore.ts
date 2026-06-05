import { create } from 'zustand';

interface AuthState {
  isLoggedIn: boolean;
  userName: string | null;
  phoneNumber: string | null;
  login: (name: string, phone: string) => void;
  logout: () => void;
  initialize: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  userName: null,
  phoneNumber: null,
  login: (name, phone) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userName', name);
      localStorage.setItem('phoneNumber', phone);
    }
    set({ isLoggedIn: true, userName: name, phoneNumber: phone });
  },
  logout: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('userName');
      localStorage.removeItem('phoneNumber');
    }
    set({ isLoggedIn: false, userName: null, phoneNumber: null });
  },
  initialize: () => {
    if (typeof window !== 'undefined') {
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      const userName = localStorage.getItem('userName');
      const phoneNumber = localStorage.getItem('phoneNumber');
      set({ isLoggedIn, userName, phoneNumber });
    }
  }
}));
