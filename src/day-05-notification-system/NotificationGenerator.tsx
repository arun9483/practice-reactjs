import useNotificationSystem from './useNotificationSystem';
import { generateNotification } from './util';

const NotificationGenerator = () => {
  const { addNotification } = useNotificationSystem();
  return (
    <button
      onClick={() => {
        const notification = generateNotification();
        addNotification(notification);
      }}
    >
      generate new notification
    </button>
  );
};

export default NotificationGenerator;
