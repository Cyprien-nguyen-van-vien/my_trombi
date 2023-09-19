import Widget from "../widget";
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import { paletteGetInput2, paletteGetColor, paletteGetColor1, paletteGetColor2 } from "../../theme/palette";

class WidgetWebPage extends Widget {

    state = { pressed: false }

    onPress = () => {
        if (!this.state.pressed)
            this.setState({ pressed: true });
    }

    onPressClose = () => {
        if (this.state.pressed)
            this.setState({ pressed: false });
    }

    content() {
        url = undefined
        if (this.props !== undefined && this.props.url !== undefined)
            url = this.props.url
        if (url === undefined || !this.state.pressed)
            return <View style={{ width: "100%", minWidth:350 }}>
                <Text style={styles.buttonTextPre}>Accès à</Text>
                <Text style={styles.buttonText}>{(url !== undefined ? url : "???")}</Text>
            </View>
        return <View style={{ width: "100%", minWidth:350, height: 700 }}>
            <TouchableOpacity onPress={this.onPressClose} style={styles.backButtonTop}>
                <Text style={styles.backButtonText}>
                    Fermer
                </Text>
            </TouchableOpacity>
            <View style={styles.webViewContainer}>
                <WebView nestedScrollEnabled source={{uri: url }} />
            </View>
            <TouchableOpacity onPress={this.onPressClose} style={styles.backButtonBottom}>
                <Text style={styles.backButtonText}>
                    Fermer
                </Text>
            </TouchableOpacity>
        </View>;
    }

}

const styles = StyleSheet.create({
    buttonText: {
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    buttonTextPre: {
        alignSelf: 'center',
    },
    backButtonTop: {
        borderColor: 'red',
        borderWidth: 5,
        width: "100%",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    backButtonBottom: {
        borderColor: 'red',
        borderWidth: 5,
        width: "100%",
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    backButtonText: {
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    webViewContainer: {
        borderColor: paletteGetInput2(),
        borderWidth: 5,
        width: "100%",
        height: 700 - 58,
    },
});

export default WidgetWebPage
