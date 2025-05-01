import { useReducer } from 'react';
import './TabManagementWindow.css';
import { tabsManagerReducer, initialState } from './tabsManagerReducer';

interface TabManagementWindowProp {
  closeWindowHandler: () => void;
}
const TabManagementWindow: React.FC<TabManagementWindowProp> = ({ closeWindowHandler }) => {
  const [tabManager, dispatch] = useReducer(tabsManagerReducer, initialState);

  return (
    <div className="tab-management-window">
      <div className="tab-list-container">
        <div className="tab-list">
          {tabManager.tabs.map((tab) => {
            return (
              <div className={tab.id === tabManager.activeTabId ? 'tab active' : 'tab'} key={tab.id} onClick={() => dispatch({ action: 'SWITCH_TO_TAB', payload: { activeTabId: tab.id } })}>
                <span>{tab.id}</span>
                <button onClick={() => dispatch({ action: 'CLOSE_TAB', payload: { tabId: tab.id } })}>X</button>
              </div>
            );
          })}
        </div>
        <div className="add-tab">
          <button onClick={() => dispatch({ action: 'OPEN_TAB' })}>+</button>
        </div>
      </div>
      <div className="tab-content-area">
        <h3>Tab content</h3>
        <div>{tabManager.activeTabId ?? "There are no tabs open. Click the + button to add a new tab"}</div>
      </div>
      <div>
        <button onClick={closeWindowHandler}>close window</button>
      </div>
    </div>
  );
};

export default TabManagementWindow;
