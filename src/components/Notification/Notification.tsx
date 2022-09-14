import React, { useEffect } from 'react';
import { useNotificationStore } from '../../store/user';
import Text from '../Text';
import { Styles } from './styles';

const AUTO_CLOSE = 3;
export const Notification = (): JSX.Element => {
  const { notification, setNotification }: any = useNotificationStore();

  useEffect(() => {
    if (notification.open && AUTO_CLOSE > 0) {
      setTimeout(() => {
        const payload = {
          error: false,
          open: false,
          message: '',
        };
        setNotification(payload);
      }, AUTO_CLOSE * 1000);
    }
  }, [notification]);

  return (
    <Styles.Container open={notification.open} error={notification.error}>
      <Text color="#fff" bold>
        {notification.message}
      </Text>
    </Styles.Container>
  );
};
