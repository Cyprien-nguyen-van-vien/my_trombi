import React from 'react';
import { WebView } from 'react-native-webview';

export default function Twitter() {
    return (
        <WebView source={{ uri: 'https://twitter.com/i/flow/login' }} />
    );
}
