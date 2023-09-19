import Widget from "../widget";
import { StyleSheet, Image, Text, View } from 'react-native';

class WidgetNews extends Widget {

    state = {}

    async componentDidMount() {
        const response = await fetch("https://www.alphavantage.co/query?function=NEWS_SENTIMENT&limit=3&apikey=" + { APIKey });
        const data = await response.json();
        this.setState({ data: data, feed: data.feed });
    }

    getFeedContent(feed = undefined) {
        if (feed === undefined)
            return;
        console.log(feed.banner_image);
        return (
            <View key={feed.url}>
                {feed.title !== undefined ?
                    <Text style={styles.picture}>{feed.title}</Text> : <></>}
                {feed.banner_image !== undefined ?
                    <Image style={styles.picture} source={{ uri: feed.banner_image }}></Image> : <>NOPE!!!!!</>}
            </View>
        )
    }

    content() {
        if (this.state.feed === undefined) {
            if (this.state.data === undefined || (this.state.data.Information === undefined && this.state.data.Note === undefined))
                return "...";
            if (this.state.data.Information !== undefined)
                return this.state.data.Information;
            return this.state.data.Note;
        }
        output = []
        for (let i = 0; i < Object.keys(this.state.feed).length; i++)
            output.push(this.state.feed[i]);
        return (
            <>
                {output}
            </>
        )
    }

}

const APIKey = "YNFJ81N6YIG37AY3"

const styles = StyleSheet.create({
    picture: {
        width: 100,
        height: 100,
    }
});

export default WidgetNews