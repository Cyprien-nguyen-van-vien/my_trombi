import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Page from '../page';
import { paletteGetInput1, paletteGetInput2 } from '../../theme/palette.js'

class PageLoginForm extends Page {
    state = {
        email: '',
        password: '',
        showPassword: false,
        request: { loading: false, done: false }
    };

    handleSubmit = () => {
        if (this.state.email.trim() === "" || this.state.password.trim() === "")
            return;
        console.log('Email:', this.state.email);
        console.log('Password:', this.state.password);
        if (this.props !== undefined && this.props.interpreter !== undefined && this.props.onSubmit !== undefined) {
            this.state.request.loading = true;
            this.props.interpreter.login(this.state.email, this.state.password).then(() => {
                this.state.request.loading = false;
                if (this.props.interpreter.isLoggedIn()) {
                    this.state.request.done = true;
                    this.props.onSubmit();
                } else {
                    this.state.request.done = false;
                    alert("Email ou Mot de passe incorrect");
                }
            })
        }
    };

    content() {
        return (
            <>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    placeholder="Email"
                    value={this.state.email}
                    onChangeText={(text) => this.setState({ email: text })}
                    style={styles.input}
                />
                <Text style={styles.label}>Mot de passe</Text>
                <View style={styles.passwordContainer}>
                    <TextInput
                        placeholder="Mot de passe"
                        value={this.state.password}
                        onChangeText={(text) => this.setState({ password: text })}
                        secureTextEntry={!this.state.showPassword}
                        style={styles.input}
                    />
                    <TouchableOpacity
                        onPress={() =>
                            this.setState((prevState) => ({
                                showPassword: !prevState.showPassword,
                            }))
                        }
                        style={styles.showHideButton}
                    >
                        <Image
                            source={
                                this.state.showPassword
                                    ? require('../../../assets/show.png')
                                    : require('../../../assets/hide.png')
                            }
                            style={styles.showHideButtonImage}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={this.handleSubmit} style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Se connecter</Text>
                    </View>
                </TouchableOpacity>
            </>
        );
    }
}

const styles = StyleSheet.create({
    pageContainer: {
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignSelf: 'center',
    },
    formContainer: {
        padding: 20,
        backgroundColor: paletteGetInput1(),
        borderRadius: 10,
        width: '80%',
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    showHideButton: {
        marginLeft: 10,
        top: '20%',
        left: 160,
        position: 'absolute',
    },
    showHideButtonImage: {
        width: 20,
        height: 20,
    },
    label: {
        color: 'white',
        fontSize: 20,
        marginBottom: 5,
        fontWeight: 'bold',
    },
    input: {
        width: 200,
        height: 40,
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
        paddingRight: 30,
        borderColor: 'gray',
        backgroundColor: paletteGetInput1(),
        borderRadius: 10,
        color: paletteGetInput2(),
    },
    buttonContainer: {
        marginTop: 20,
        alignSelf: 'center',
    },
    button: {
        backgroundColor: paletteGetInput1(),
        padding: 10,
        width: 140,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
    },
    buttonText: {
        color: paletteGetInput2(),
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    logo_survivor_next: {
        alignSelf: 'center',
        marginBottom: 20,
        height: 150,
        width: 150,
    },
});

export default PageLoginForm;
