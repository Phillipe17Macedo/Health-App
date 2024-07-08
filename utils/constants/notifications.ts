import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native';

export const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
};

export const getFCMToken = async () => {
  const fcmToken = await messaging().getToken();
  if (fcmToken) {
    console.log('Your Firebase Cloud Messaging Token is:', fcmToken);
  } else {
    console.log('Failed to get FCM token');
  }
};

export const notificationListener = async () => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log('Notification caused app to open from background state:', remoteMessage.notification);
  });

  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log('Notification caused app to open from quit state:', remoteMessage.notification);
      }
    });

  messaging().onMessage(async remoteMessage => {
    console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
    Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  });
};