import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Page from '../page';

class PageProfile extends Page {

    state = {
        loaded: false,
        data: undefined,
        picture: false,
    }

    useMe = false

    async componentDidMount() {
        if (this.props === undefined || this.props.interpreter === undefined)
            return;
        if (this.props.wrapper === undefined || this.props.wrapper.state === undefined)
            return;
        const useMe = this.useMe || (this.props.wrapper.state.data === undefined || this.props.wrapper.state.data === null);
        let data;
        if (useMe)
            data = await this.props.interpreter.employeesMe();
        else
            data = await this.props.interpreter.employeesID(this.props.wrapper.state.data);
        if (data === null)
            this.setState({ loaded: true, data: undefined });
        else
            this.setState({ loaded: true, data: data });
        if (data === null || data.id === undefined)
            return;
        await this.props.interpreter.employeesIDImage(data.id);
        this.setState({ picture: true });
    }

    content() {
        if (!this.state.loaded)
            return (<Text>Loading...</Text>)
        if (!this.state.data)
            return (<Text>Something went wrong</Text>)
        const data = this.state.data
        return (
            <View>
                {(this.state.picture) ? <Image style={styles.picture} source={{ uri: "https://masurao.fr/api/employees/" + data.id + "/image" }} /> : <></>}
                <View style={styles.container}>
                    <Text style={styles.surname}>
                        {data.surname !== undefined ? data.surname.toUpperCase() : ""} {data.name !== undefined ? data.name : "???"}
                        {"\n"}
                        {data.work !== undefined ? ("[" + data.work + "]") : ""}
                        {"\n"}
                        {data.email !== undefined ? data.email : "unknown"}
                    </Text>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignSelf: 'center',
    },
    surname: {
        color: 'white',
        fontSize: 23,
        top: '5%',
        left: '-0.7%',
    },
    picture: {
        width: 250,
        height: 250,
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 1,
        top: '25%',
        alignItems: 'center',
        alignSelf: 'center',
    },
});

export default PageProfile;
