import { create } from "zustand";

export const useSidebarStore = create((set) => ({
  isSidebarOpen: false,
  openSidebar: () => set({ isSidebarOpen: true }),
  closeSidebar: () => set({ isSidebarOpen: false }),
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));


export const usePopoverStore = create((set) => ({
  isPopoverOpen: false,
  togglePopover: () => set((state) => ({ isPopoverOpen: !state.isPopoverOpen })),
  closePopover: () => set({ isPopoverOpen: false }),
}));
