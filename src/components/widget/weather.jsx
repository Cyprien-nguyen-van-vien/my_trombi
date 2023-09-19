import Widget from "../widget";
import { View, Text, StyleSheet } from 'react-native';

function getWeatherCodeText(code) {
    text = weatherCode[0][2];
    for (let i = 0; i < weatherCode.length; i++) {
        if (code < weatherCode[i][0])
            return text;
        text = weatherCode[i][2];
    }
    return text;
}

function getWeatherCodeIcon(code) {
    text = weatherCode[0][1];
    for (let i = 0; i < weatherCode.length; i++) {
        if (code < weatherCode[i][0])
            return text;
        text = weatherCode[i][1];
    }
    return text;
}

class WidgetWeather extends Widget {

    state = { focused: false }

    async componentDidMount() {
        if (this.props === undefined || this.props.interpreter === undefined || this.props.interpreter.weather === undefined)
            return;
        const data = await this.props.interpreter.weather();
        this.setState({ data: data });
    }

    onPress = () => {
        this.setState({ focused: !this.state.focused })
    }

    content() {
        if (this.state.data === undefined)
            return "...";
        if (this.state.data.current_weather === undefined)
            return "Parsing Error"
        data = this.state.data.current_weather;
        return (
            <View style={[styles.mainContainer, styles["mainContainer" +
                (data.is_day !== undefined ? data.is_day : "")
            ]]}>
                <Text style={styles.textTitle}>
                    Météo - Paris
                </Text>
                {data.temperature !== undefined ?
                    <Text style={styles.textTemperature}>
                        {
                            data.weathercode !== undefined ?
                            <Text style={styles.weathercodeIcon}>
                                {getWeatherCodeIcon(data.weathercode)}
                            </Text> : ""
                        }{" "}
                        <Text style={styles.textTemperatureValue}>{data.temperature}</Text>°C
                    </Text> : null}
                {this.state.focused ?
                    <View>
                        <Text style={styles.weathercode}>
                        {(data.weathercode !== undefined) ?
                            getWeatherCodeText(data.weathercode) : null}
                        {(data.weathercode !== undefined && data.is_day !== undefined) ?
                            (data.is_day ? " 🌞 " : " 🌜 ") : ""}
                        {(data.is_day !== undefined ? (data.is_day ? "Jour" : "Nuit") : "")}
                        {""/*"\n"*/}
                        </Text>
                        {""/*
                        {data.windspeed === undefined ? "" :
                            <Text style={styles.textWind}>
                                💨 Vent: <Text style={styles.textWindValue}>
                                    {data.windspeed}
                                </Text> km/h
                            </Text>
                        }*/}
                    </View>
                : ""}
                <Text style={styles.textSource}>
                    Données fournies par open-meteo.com
                </Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    mainContainer: {
        borderRadius: 10,
    },
    mainContainer0: {
        backgroundColor: "rgba(134, 74, 232, 0.7)"
    },
    mainContainer1: {
        backgroundColor: "rgba(74, 182, 232, 0.7)"
    },
    textTitle: {
        alignSelf: 'center',
        margin: 7
    },
    textSource: {
        alignSelf: 'center',
        margin: 7,
        color: "rgba(50, 50, 50, 0.6)"
    },
    textTemperature: {
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    textTemperatureValue: {
        fontSize: 40
    },
    textWind: {
        alignSelf: 'center',
    },
    textWindValue: {
        fontWeight: 'bold',
        fontSize: 20
    },
    weathercode: {
        alignSelf: 'center',
    },
    weathercodeIcon: {
        fontSize: 40
    },
    weathercodeValue: {}
});

const weatherCode = [
    [0, "☀️", "Ciel découvert"],
    [1, "🌤️", "Ciel peu couvert"],
    [2, "⛅", "Partiellement Nuageux"],
    [3, "☁️", "Nuageux"],

    [45, "☁️", "Brouillard"],
    [48, "☁️", "Brouillard givrant"],

    [51, "🌧️", "Bruine (légère)"],
    [53, "🌧️", "Bruine (modérée)"],
    [55, "🌧️", "Bruine (dense)"],
    [56, "🌧️", "Bruine verglaçante (légère)"],
    [57, "🌧️", "Bruine verglaçante (dense)"],

    [61, "🌧️", "Pluie (légère)"],
    [63, "🌧️", "Pluie (modérée)"],
    [65, "🌧️", "Pluie (lourde)"],
    [66, "🌧️", "Pluie verglaçante (légère)"],
    [67, "🌧️", "Pluie verglaçante (lourde)"],

    [71, "🌨️", "Neige (légère)"],
    [73, "🌨️", "Neige (modérée)"],
    [75, "🌨️", "Neige (lourde)"],
    [77, "🌨️", "Flocons"],

    [80, "🌧️", "Averse (légère)"],
    [81, "🌧️", "Averse (modérée)"],
    [82, "🌧️", "Averse (violente)"],
    [85, "🌨️", "Averse de neige (légère)"],
    [86, "🌨️", "Averse de neige (lourde)"],

    [95, "🌩️", "Orage"],
    [96, "⛈️", "Orage avec grêle (modéré)"],
    [99, "⛈️", "Orage avec grêle (lourde)"],
]

export default WidgetWeather
