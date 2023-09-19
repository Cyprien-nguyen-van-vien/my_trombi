import Widget from "../widget";
import { Image, Text, StyleSheet, View } from 'react-native';

class WidgetRandomCat extends Widget {

    state = {}

    async componentDidMount() {
        this.newCat();
    }

    newCat = async () => {
        if (this.props === undefined || this.props.interpreter === undefined || this.props.interpreter.randomCat === undefined)
            return;
        const data = await this.props.interpreter.randomCat();
        if (data === undefined || data === null)
            return;
        this.setState({ data: data });
    }

    onPress = () => {
        this.newCat();
    }

    content() {
        if (this.state.data === undefined)
            return <View style={styles.picture} />;
        return <View>
            <Image style={styles.picture} className={this.state.version} source={{ uri: this.state.data }}></Image>
        </View>;
    }

}

const styles = StyleSheet.create({
    picture: {
        width: 200,
        height: 200,
        borderRadius: 15,
    }
});

const weatherCode = []

export default WidgetRandomCat