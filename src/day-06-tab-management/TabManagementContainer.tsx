import { useReducer } from 'react';
import TabManagementWindow from './TabManagementWindow';
import { tabsManagerReducer, TabsManager, Tab } from './tabsManagerReducer';
import './TabManagementContainer.css';

interface TabManagementContainerProps<T extends Tab> {
  initialState: TabsManager<T>;
  renderTabContent: (tab: T) => React.ReactNode;
  newTabHandler: () => T;
}

const TabManagementContainer = <T extends Tab>({ initialState, renderTabContent, newTabHandler }: TabManagementContainerProps<T>) => {
  const [tabManager, dispatch] = useReducer(tabsManagerReducer<T>, initialState);

  const handleAddTab = () => {
    const newTab: T = newTabHandler();
    dispatch({ action: 'OPEN_TAB', payload: { newTab } });
  };

  const handleSwitchTab = (tabId: string) => {
    dispatch({ action: 'SWITCH_TO_TAB', payload: { activeTabId: tabId } });
  };

  const handleCloseTab = (tabId: string) => {
    dispatch({ action: 'CLOSE_TAB', payload: { tabId } });
  };

  return (
    <div className="tab-management-container">
      <TabManagementWindow<T>
        tabs={tabManager.tabs}
        activeTabId={tabManager.activeTabId}
        renderTabContent={(tabId) => {
          const tab = tabManager.tabs.find((t) => t.id === tabId);
          return tab ? renderTabContent(tab) : 'Tab not found';
        }}
        onAddTab={handleAddTab}
        onSwitchTab={handleSwitchTab}
        onCloseTab={handleCloseTab}
      />
    </div>
  );
};

export default TabManagementContainer;
