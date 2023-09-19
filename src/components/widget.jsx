import React, { Component } from 'react'
import { paletteGetInput1, paletteGetInput2, paletteGetInput3 } from "../theme/palette";
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { withDefault } from "../utility/lipBasics";

class Widget extends Component {

    interpreter = (this.props !== undefined) ? this.props.interpreter : undefined;
    wrapper = (this.props !== undefined) ? this.props.wrapper : undefined;

    onPress() {
    }

    content() {
        if (this.props.name === undefined)
            return (
                <Text>
                    Undefined Widget
                </Text>
            )
        return (
            <Text>
                Undefined Widget '{withDefault(this.props.name)}'
            </Text>
        )
    }

    render() {
        return (
            <TouchableOpacity onPress={this.onPress} style={styles.mainContainer}>
                <Text style={styles.mainText}>
                    {this.content()}
                </Text>
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 40,
        alignSelf: 'center',
        backgroundColor: paletteGetInput1(),
        padding: 10,
        borderWidth: 1,
        borderColor: paletteGetInput2(),
        borderRadius: 20,
        left: '-0.5%',
    },
    mainText: {
        color: paletteGetInput3(),
    }
})

export default Widget
