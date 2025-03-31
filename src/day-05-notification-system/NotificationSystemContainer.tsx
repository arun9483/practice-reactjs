import NotificationGenerator from './NotificationGenerator';
import NotificationSystemProvider from './NotificationSystemProvider';

const NotificationSystemContainer = () => {
  return (
    <div>
      <h2>Notification System</h2>
      <NotificationSystemProvider position='top-right'>
        <NotificationGenerator />
      </NotificationSystemProvider>
    </div>
  );
};

export default NotificationSystemContainer;
