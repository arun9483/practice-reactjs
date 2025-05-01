import { useState } from 'react';
import TabManagementWindow from './TabManagementWindow';
import './index.css';
const TabManagementContainer = () => {
  const [isWindowOpened, setIsWindowOpened] = useState<boolean>(false);
  return (
    <div className="tab-management-container">
      {isWindowOpened ? (
        <TabManagementWindow
          closeWindowHandler={() => {
            setIsWindowOpened(false);
          }}
        />
      ) : (
        <div className="empty-container">
          No windows are open at the moment.{' '}
          <button
            onClick={() => {
              console.log('open new window');
              setIsWindowOpened(true);
            }}
          >
            click me!
          </button>{' '}
          to open a new one!
        </div>
      )}
    </div>
  );
};

export default TabManagementContainer;
