import { LogBox } from 'react-native';
import * as Notifications from 'expo-notifications';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true
    }),
});

export default async function Push_notification() {
    await Notifications.scheduleNotificationAsync({
        content: {
            title: 'Anniversaire Joffrey 🔱',
            body: 'Evenement aujourd hui: 🎂 Joyeux 42 ans 🎂'
        },
        trigger: { seconds: 1 }
    });
}
//data: { data: '42' }
