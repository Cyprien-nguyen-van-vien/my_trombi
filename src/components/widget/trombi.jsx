import Widget from "../widget";
import { View, Text, StyleSheet } from 'react-native';

class WidgetTrombi extends Widget {

    onPress = () => {
        if (this.wrapper !== undefined && this.wrapper.setPage !== undefined)
            this.wrapper.setPage("trombi");
    }

    content() {
        return (
            <View>
                <Text style={styles.buttonTextPre}>Accès au</Text>
                <Text style={styles.buttonText}>Trombinoscope</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    buttonText: {
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    buttonTextPre: {
        alignSelf: 'center',
    }
});

export default WidgetTrombi