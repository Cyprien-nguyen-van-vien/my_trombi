import React from 'react';
import { StyleSheet, View } from 'react-native';
import Widget from '../widget';
import Page from '../page';
import ScrollPage from '../scrollPage'
import WidgetTrombi from '../widget/trombi';
import WidgetNews from '../widget/news';
import LandingPage from '../widget/landing';
import WidgetWeather from '../widget/weather';
import WidgetRandomCat from '../widget/randomCat';
import WidgetWebPage from '../widget/webPage';

class PageHome extends ScrollPage {

    content() {
        interpreter = undefined;
        wrapper = undefined;
        if (this.props !== undefined) {
            if (this.props.interpreter !== undefined)
                interpreter = this.props.interpreter;
            if (this.props.wrapper !== undefined)
                wrapper = this.props.wrapper;
        }
        displayLandingPage = (wrapper !== undefined && (wrapper.memory === undefined || wrapper.memory.displayedAppWrapper === undefined || wrapper.memory.displayedAppWrapper !== true))
        if (displayLandingPage && wrapper.setMemory !== undefined)
            wrapper.setMemory("displayedAppWrapper", true);
        return (
            <View style={styles.container}>
                <WidgetTrombi interpreter={interpreter} wrapper={wrapper} />
                <WidgetWeather interpreter={interpreter} wrapper={wrapper} />
                <WidgetWebPage interpreter={interpreter} wrapper={wrapper} url="https://discord.com/login/tester-site-mobile.html" />
                <WidgetWebPage interpreter={interpreter} wrapper={wrapper} url="https://www.ratp.fr/" />
                <WidgetWebPage interpreter={interpreter} wrapper={wrapper} url="https://meteofrance.com/" />
                <WidgetWebPage interpreter={interpreter} wrapper={wrapper} url="https://www.bfmtv.com/" />
                <WidgetWebPage interpreter={interpreter} wrapper={wrapper} url="https://www.wordreference.com/fr/" />
                <WidgetWebPage interpreter={interpreter} wrapper={wrapper} url="https://www.nytimes.com/games/wordle/index.html" />

                <WidgetRandomCat interpreter={interpreter} wrapper={wrapper} />
                {displayLandingPage ? <LandingPage /> : ""}
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        top: '100%',
        left: '-1%',
    }
});

export default PageHome;
