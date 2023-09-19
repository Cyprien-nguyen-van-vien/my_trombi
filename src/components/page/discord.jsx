import React from 'react';
import { WebView } from 'react-native-webview';

export default function Discord() {
    return (
        <WebView source={{ uri: 'https://discord.com/login/tester-site-mobile.html' }} />
    );
}
