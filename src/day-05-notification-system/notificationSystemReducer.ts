import { generateNotifications } from './util';

export interface Notification {
  id: string;
  title: string;
  message: string;
  notificationType: 'success' | 'warning' | 'error';
}

type Action = { type: 'ADD_NOTIFICATION'; payload: Notification } | { type: 'REMOVE_NOTIFICATION'; id: string };

export const defaultNotifications: Notification[] = generateNotifications(5);

export function notificationSystemReducer(prevState: Notification[], action: Action) {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      return [...prevState, action.payload];
    case 'REMOVE_NOTIFICATION':
      return prevState.filter((notification) => notification.id !== action.id);
    default:
      return prevState;
  }
}
