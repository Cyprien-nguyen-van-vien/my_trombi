import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, Pressable, TouchableOpacity, Modal } from 'react-native';
import ScrollPage from '../scrollPage';

class PageTrombi extends ScrollPage {

    state = {
        loaded: false,
        data: undefined,
        isModalVisible: false,
        images: {},
    }

    handlePressIn = () => {
        this.setState({ isPressed: true });
    };

    handlePressOut = () => {
        this.setState({ isPressed: false });
    };

    async componentDidMount() {
        if (this.props === undefined || this.props.interpreter === undefined)
            return;
        let images = {}
        let data = await this.props.interpreter.employees();
        const imageRefreshRate = 6;
        if (data === null)
            this.setState({ loaded: true, data: undefined, images: {} });
        else {
            this.setState({ loaded: true, data: data, images: {} });
            for (let employeeID = 0; employeeID < Object.keys(data).length; employeeID++) {
                if (this.props.interpreter.data == null || this.props.interpreter.data["employeesIDImage" + data[employeeID].id] !== true) {
                    await this.props.interpreter.employeesIDImage(data[employeeID].id);
                    images[data[employeeID].id] = true;
                    if ((employeeID + 1) % imageRefreshRate == 0)
                        this.setState({ images: images });
                } else {
                    images[data[employeeID].id] = true;
                }
            }
            this.setState({ images: images });
        }
    }

    generateCell(employeeData) {
        return (
            <View style={styles.cell}>
                <TouchableOpacity
                    style={styles.pictureButton}
                    onPressIn={() => {
                        if (this.props.wrapper === undefined || this.props.wrapper.setPage === undefined)
                            return;
                        this.props.wrapper.setPage("profile", employeeData["id"]);
                    }}
                    onPressOut={this.handlePressOut}
                >
                    <Text style={styles.surname}>{employeeData.surname?.toUpperCase()}</Text>
                    <Text style={styles.name}>{employeeData.name}</Text>
                    {this.state.images[employeeData["id"]] === true ? <Image style={styles.picture} source={{ uri: "https://masurao.fr/api/employees/" + employeeData["id"] + "/image" }}></Image> : <></>}
                </TouchableOpacity>
            </View>
        )
    }

    content() {
        if (!this.state.loaded)
            return (<Text>Loading...</Text>)
        if (!this.state.loaded)
            return (<Text>Something went wrong</Text>)
        output = [];
        outputSegment = "";
        for (let employeeID = 0; employeeID < Object.keys(this.state.data).length; employeeID++) {
            const employeeData = this.state.data[employeeID];
            if ("name" in employeeData && employeeData["surname"]) {
                if (employeeID % 2 == 0) {
                    outputSegment = this.generateCell(employeeData);
                } else {
                    output.push(
                        <View style={styles.row} id={"CellGroup" + employeeID.toString()}>
                            {outputSegment}
                            {this.generateCell(employeeData)}
                        </View>
                    )
                    outputSegment = "";
                }
            }
        }
        return (output);
    }

}

const styles = StyleSheet.create({
    scroll: {
        paddingVertical: '30%',
    },
    row: {
        flexDirection: 'row',
    },
    namebox: {
        position: "absolute",
    },
    surname: {
        top: '75%',
        left: '5%',
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: { 'width': -1, 'height': 1 },
        textShadowRadius: 10
    },
    name: {
        top: '45%',
        left: "5%",
        color: 'white',
        fontSize: 15,
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: { 'width': -1, 'height': 1 },
        textShadowRadius: 10
    },
    cell: {
        width: '40%',
        ouRadius: 10,
        margin: 10,
        top: '20%',
        left: '0.15%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignSelf: 'center',
    },
    pictureButton: {
        width: 100,
        height: 125,
        borderRadius: 10,
    },
    picture: {
        top: '-55%',
        width: 100,
        height: 100,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});

export default PageTrombi
