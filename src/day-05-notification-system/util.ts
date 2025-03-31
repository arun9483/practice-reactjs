import { faker } from '@faker-js/faker';
import { Notification } from './notificationSystemReducer';

export const generateNotifications = (n: number): Notification[] => {
  return Array.from({ length: n }, () => generateNotification());
};

export const generateNotification = (): Notification => {
  const notificationTypes: Notification['notificationType'][] = ['success', 'warning', 'error'];

  return {
    id: faker.string.uuid(),
    title: faker.lorem.sentence(),
    message: faker.lorem.paragraph(),
    notificationType: faker.helpers.arrayElement(notificationTypes),
  };
};
