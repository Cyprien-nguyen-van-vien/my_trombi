import { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { APIInterpreter } from '../classes/apiInterpreter';
import { paletteGetBackground } from '../theme/palette';
import PageHome from './page/home';
import PageLoginForm from './page/loginform';
import PageTrombi from './page/trombi';
import Page from './page';
import PageProfile from './page/profile';
import PageProfileSelf from './page/profileSelf';

class PageDefault extends Page {

    content() {
        if (this.props.name !== undefined)
            return <Text>UnknownPage '{this.props.name}'</Text>;
        return <Text>UnknownPage</Text>
    }

}

class AppWrapper extends Component {
    #defaultPage = "login"
    #mainPage = "home"
    #pages = {
        "login": (interpreter = undefined, wrapper = this) => { return (<PageLoginForm interpreter={interpreter} wrapper={wrapper} onSubmit={() => { this.setPage(this.#mainPage) }} />) },
        "trombi": (interpreter = undefined, wrapper = this) => { return (<PageTrombi interpreter={interpreter} wrapper={wrapper} />) },
        "home": (interpreter = undefined, wrapper = this) => { return (<PageHome interpreter={interpreter} wrapper={wrapper} />) },
        "profile": (interpreter = undefined, wrapper = this) => { return (<PageProfile interpreter={interpreter} wrapper={wrapper} />) },
        "profileSelf": (interpreter = undefined, wrapper = this) => { return (<PageProfileSelf interpreter={interpreter} wrapper={wrapper} />) },
    }

    state = {
        page: this.#defaultPage
    };

    memory = { }

    interpreter = new APIInterpreter("673288fd9952ca48760a03fd6b156139", true);

    setPage(page = this.#defaultPage, data = undefined) {
        this.setState({ page: page, data: data });
    }

    setMemory(slot, value = undefined) {
        this.memory[slot] = value;
    }

    render() {
        output = undefined;
        if (this.state.page === "login") {
            if (this.interpreter.isLoggedIn())
                this.setPage(this.#mainPage);
        } else {
            if (!this.interpreter.isLoggedIn())
                this.setPage("login");
        }
        if (this.#pages[this.state.page] !== undefined)
            output = this.#pages[this.state.page](this.interpreter, this)
        if (output === undefined) {
            if (this.state.page !== undefined)
                output = <PageDefault name={this.state.page} />
            else
                output = <PageDefault />
        }
        return (
            <View style={styles.container}>
                {output}
                <StatusBar style="auto" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: paletteGetBackground(),
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default AppWrapper;