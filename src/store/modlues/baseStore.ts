import { defineStore } from "pinia";

const useBaseStore = defineStore("base", {
  state: () => {
    return {
      tabIndex: 0,
      menuIndex: 0,
    };
  },
  actions: {
    setTabIndex(index: number) {
      this.tabIndex = index;
    },
    setMenuIndex(index: number) {
      this.menuIndex = index;
    },
  },
  persist: {
    storage: window.sessionStorage,
  },
});

export default useBaseStore;
