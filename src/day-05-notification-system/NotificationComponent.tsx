import { FC, useEffect } from 'react';
import { Notification } from './notificationSystemReducer';
import useNotificationSystem from './useNotificationSystem';
import './NotificationComponent.css';

const duration = 3000;

interface NotificationComponentProp {
  notification: Notification;
}

const NotificationComponent: FC<NotificationComponentProp> = ({ notification }) => {
  const { id, title, message, notificationType } = notification;
  const { removeNotification } = useNotificationSystem();

  useEffect(() => {
    if (notificationType === 'success') {
      setTimeout(() => removeNotification(id), duration);
    }
  }, [id, notificationType, removeNotification]);

  return (
    <div key={id} className={`notification ${notificationType}`}>
      <div className="title-cta">
        <h4 className="title">{title}</h4>
        <div className="cta">
          <button onClick={() => removeNotification(id)}>x</button>
        </div>
      </div>
      <div className="message">{message}</div>
    </div>
  );
};

export default NotificationComponent;
