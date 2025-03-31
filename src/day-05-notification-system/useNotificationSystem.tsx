import { useContext } from 'react';
import { NotificationSystemContext } from './NotificationSystemContext';

const useNotificationSystem = () => {
  const context = useContext(NotificationSystemContext);
  if (!context) {
    throw new Error(`useNotificationSystem is used outside of NotificationSystemProvider`);
  }

  return context;
};

export default useNotificationSystem;
