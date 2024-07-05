import { Platform } from "react-native";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import * as Permissions from "expo-permissions";

// Configuração das notificações
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

// Função para registrar dispositivo para notificações push
export async function registerForPushNotificationsAsync() {
  let token;

  if (Device.isDevice) {
    const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }

    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}

// Função para lidar com notificações recebidas
export function handleNotificationReceived(notification: Notifications.Notification) {
  console.log('Notification received: ', notification);
}

// Função para lidar com notificações respondidas
export function handleNotificationResponse(response: Notifications.NotificationResponse) {
  console.log('Notification response: ', response);
}

// Listener para notificações recebidas enquanto o aplicativo está em primeiro plano
Notifications.addNotificationReceivedListener(handleNotificationReceived);

// Listener para respostas de notificações
Notifications.addNotificationResponseReceivedListener(handleNotificationResponse);
