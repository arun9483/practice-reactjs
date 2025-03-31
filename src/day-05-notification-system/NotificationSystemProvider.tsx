import { useCallback, useReducer } from 'react';
import { NotificationSystemContext } from './NotificationSystemContext';
import { notificationSystemReducer, defaultNotifications, Notification } from './notificationSystemReducer';
import NotificationComponent from './NotificationComponent';
import './NotificationSystemProvider.css';

interface NotificationSystemProviderProp {
  children: React.ReactNode;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'; // Add positions
}

const NotificationSystemProvider = ({ children, position = 'top-right' }: NotificationSystemProviderProp) => {
  const [notifications, dispatch] = useReducer(notificationSystemReducer, defaultNotifications);
  const addNotification = useCallback((notification: Notification) => {
    dispatch({ type: 'ADD_NOTIFICATION', payload: notification });
  }, []);

  const removeNotification = useCallback((id: string) => {
    dispatch({ type: 'REMOVE_NOTIFICATION', id });
  }, []);

  return (
    <NotificationSystemContext
      value={{
        notifications,
        addNotification,
        removeNotification,
      }}
    >
      <div className={`notifications-provider ${position}`}>
        {notifications.map((notification) => {
          return <NotificationComponent notification={notification} />;
        })}
      </div>
      {children}
    </NotificationSystemContext>
  );
};

export default NotificationSystemProvider;
