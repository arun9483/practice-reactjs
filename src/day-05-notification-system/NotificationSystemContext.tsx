import { createContext } from 'react';
import { Notification } from './notificationSystemReducer';

interface NotificationSystemContextType {
  notifications: Notification[];
  addNotification: (notification: Notification) => void;
  removeNotification: (id: string) => void;
}

const defaultNotificationSystemContext: NotificationSystemContextType = {
  notifications: [],
  addNotification: (notification: Notification) => {
    console.log(notification);
  },
  removeNotification: (id: string) => {
    console.log(id);
  },
};

export const NotificationSystemContext = createContext<NotificationSystemContextType>(defaultNotificationSystemContext);
