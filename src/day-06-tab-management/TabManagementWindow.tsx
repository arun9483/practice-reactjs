import { Tab } from './tabsManagerReducer';
import './TabManagementWindow.css';

interface TabManagementWindowProps<T extends Tab> {
  tabs: T[];
  activeTabId: string | null;
  renderTabContent: (tabId: string) => React.ReactNode;
  onAddTab: () => void;
  onSwitchTab: (tabId: string) => void;
  onCloseTab: (tabId: string) => void;
}

const TabManagementWindow = <T extends Tab>({ tabs, activeTabId, renderTabContent, onAddTab, onSwitchTab, onCloseTab }: TabManagementWindowProps<T>) => {
  return (
    <div className="tab-management-window">
      <div className="tab-list-container">
        <div className="tab-list">
          {tabs.map((tab) => (
            <div className={tab.id === activeTabId ? 'tab active' : 'tab'} key={tab.id} onClick={() => onSwitchTab(tab.id)}>
              <span>{tab.title}</span>
              <button onClick={() => onCloseTab(tab.id)}>X</button>
            </div>
          ))}
        </div>
        <div className="add-tab">
          <button onClick={onAddTab}>+</button>
        </div>
      </div>
      <div className="tab-content-area">
        <h3>Tab content</h3>
        <div>{activeTabId ? renderTabContent(activeTabId) : tabs.length ? 'Select a tab to display content' : 'There are no tabs. Click the + button to add a new tab.'}</div>
      </div>
    </div>
  );
};

export default TabManagementWindow;
