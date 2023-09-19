import React, { Component } from 'react';
import { paletteGetBackground } from '../theme/palette';
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Push_notification from '../notification/notification';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showHome: true,
            isPressed: false,
            isModalVisible: false,
        };
    }

    handlePressingHome = () => {
        if (this.props !== undefined && this.props.wrapper !== undefined && this.props.wrapper.setPage !== undefined)
            this.props.wrapper.setPage();
        //        this.setState({ showHome: true });
    };

    handlePressingSettings = () => {
        if (this.props !== undefined && this.props.onSubmitSettings !== undefined)
            this.props.onSubmitSettings();
        //        this.setState({ showHome: true });
    };

    handlePressingMyAccount = () => {
        if (this.props !== undefined && this.props.wrapper !== undefined && this.props.wrapper.setPage !== undefined)
            this.props.wrapper.setPage("profileSelf");
    }

    handlePressingDisconnect = () => {
        if (this.props !== undefined && this.props.interpreter !== undefined && this.props.interpreter.logout !== undefined) {
            this.props.interpreter.logout();
            if (this.props.wrapper !== undefined) {
                if (this.props.wrapper.setPage !== undefined)
                    this.props.wrapper.setPage();
                if (this.props.wrapper.setMemory !== undefined)
                    this.props.wrapper.setMemory("displayedAppWrapper");
            }
        }
        //        this.setState({ showHome: true });
    };

    handlePressIn = () => {
        this.setState({ isPressed: true });
    };

    handlePressOut = () => {
        this.setState({ isPressed: false });
    };

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    closeModal = () => {
        this.setState({ isModalVisible: false });
    };

    refresh = () => {
        if (this.props !== undefined && this.props.interpreter !== undefined && this.props.interpreter.resetMemory !== undefined) {
            this.props.interpreter.resetMemory();
            if (this.props.wrapper !== undefined) {
                if (this.props.wrapper.setPage !== undefined)
                    this.props.wrapper.setPage();
                if (this.props.wrapper.setMemory !== undefined)
                    this.props.wrapper.setMemory("displayedAppWrapper");
            }
        }
    }

    render() {
        const { isPressed } = this.state;
        const buttonStyle = [
            styles.button,
            isPressed && styles.buttonHover,
        ];

        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>

                    <TouchableOpacity style={buttonStyle}
                        onPress={async () => { await Push_notification(); }}>
                        <Image style={styles.settings} source={require('../../assets/notification.png')} />
                    </TouchableOpacity>
                    <Text style={styles.space}></Text>
                    <TouchableOpacity
                        style={buttonStyle}
                        onPressIn={this.handlePressIn}
                        onPressOut={this.handlePressOut}
                        onPress={() => { this.toggleModal(); }}>
                        <Image style={styles.settings} source={require('../../assets/settings.png')} />
                    </TouchableOpacity>
                    <Text style={styles.space}></Text>
                    <TouchableOpacity
                        style={buttonStyle}
                        onPressIn={this.handlePressIn}
                        onPressOut={this.handlePressOut}
                        onPress={() => { this.handlePressingHome(); }}>
                        <Image style={styles.settings} source={require('../../assets/home.png')}/>
                    </TouchableOpacity>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.isModalVisible}
                        onRequestClose={() => {
                            this.closeModal();
                        }}
                    >
                        <View style={styles.modalContainer}>
                            <TouchableOpacity style={styles.buttonMyAccount}
                                onPress={this.handlePressingMyAccount}>
                                <Text style={styles.buttonAccount}>Mon profil</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonLogout}
                                onPressIn={this.handlePressIn}
                                onPressOut={this.handlePressOut}
                                onPress={this.handlePressingDisconnect}
                            >
                                <Text style={styles.buttonDisconnect}>Se déconnecter</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonContain} onPress={this.refresh}>
                                <Text style={styles.buttonModal}>Rafraichir</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonContain} onPress={this.toggleModal}>
                                <Text style={styles.buttonModal}>Retour</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                </View>
            </View>
        );
    }
}

const buttonSize = 40;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flex: 1,
        borderColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: paletteGetBackground(),
    },
    buttonContainer: {
        position: 'static',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 100,
        width: buttonSize,
        height: buttonSize,
        top: '125%',
        left: '775%',
    },
    buttonContain: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: 10,
        width: 140,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        top: '35%'
    },
    buttonMyAccount: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: 10,
        width: 140,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        top: '-25%'
    },
    buttonLogout: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: 10,
        width: 140,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 10,
        top: '30%'
    },
    button: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderColor: 'gray',
        borderRadius: 100,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -25 },
        shadowOpacity: 0.18,
        shadowRadius: 14,
        elevation: 1,
        color: 'black',
        padding: 7,
        textAlign: 'center',
        fontSize: 16,
    },
    buttonHover: {
        shadowColor: 'black',
        transform: [{ scale: 1.05 }, { rotate: '-1deg' }],
    },
    buttonText: {
        color: '#2F4F4F',
        fontWeight: 'bold',
    },
    buttonModal: {
        color: '#2F4F4F',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    buttonDisconnect: {
        color: 'red',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    buttonAccount: {
        color: '#2F4F4F',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    settings: {
        width: '100%',
        height: '100%',
    },
    space: {
        fontSize: 6
    }
});

export default Navbar;
