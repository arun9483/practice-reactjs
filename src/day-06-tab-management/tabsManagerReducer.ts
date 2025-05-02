export interface Tab {
  title: string;
  id: string;
}

export interface TabsManager<T extends Tab> {
  tabs: T[];
  activeTabId: string | null;
}

export type Action<T extends Tab> =
  | { action: 'OPEN_TAB'; payload: { newTab: T } }
  | { action: 'CLOSE_TAB'; payload: { tabId: string } }
  | { action: 'SWITCH_TO_TAB'; payload: { activeTabId: string } };

export function tabsManagerReducer<T extends Tab>(state: TabsManager<T>, action: Action<T>): TabsManager<T> {
  switch (action.action) {
    case 'OPEN_TAB': {
      const newTab = action.payload.newTab;
      return {
        ...state,
        tabs: [...state.tabs, newTab],
        activeTabId: newTab.id,
      };
    }
    case 'CLOSE_TAB': {
      const index = state.tabs.findIndex((tab) => tab.id === action.payload.tabId);
      if (index === -1) return state; // Tab not found

      let newActiveTabId: string | null = state.activeTabId;

      if (state.activeTabId === action.payload.tabId) {
        if (state.tabs.length === 1) {
          // Case 1: No tabs remain
          newActiveTabId = null;
        } else if (index === state.tabs.length - 1) {
          // Case 2.a: Closed tab is the last tab, switch to the previous tab
          newActiveTabId = state.tabs[index - 1]?.id;
        } else {
          // Case 2.b: Closed tab is not the last tab, switch to the next tab
          newActiveTabId = state.tabs[index + 1]?.id;
        }
      }
      return {
        ...state,
        tabs: state.tabs.filter((tab) => tab.id !== action.payload.tabId),
        activeTabId: newActiveTabId,
      };
    }
    case 'SWITCH_TO_TAB': {
      const tabExists = state.tabs.some((tab) => tab.id === action.payload.activeTabId);
      if (!tabExists) return state; // Prevent switching to a non-existing tab

      return {
        ...state,
        activeTabId: action.payload.activeTabId,
      };
    }
    default:
      return state;
  }
}
