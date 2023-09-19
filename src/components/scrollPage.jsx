import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import Navbar from './navbar';

class ScrollPage extends Component {

    stylesPageContainer = {
        paddingVertical: '30%'
    }
    stylesContainer = {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 15,
        marginTop: -50,
    }

    content() {
        return;
    }

    render() {
        interpreter = undefined;
        wrapper = undefined;
        if (this.props !== undefined) {
            if (this.props.interpreter !== undefined)
                interpreter = this.props.interpreter;
            if (this.props.wrapper !== undefined)
                wrapper = this.props.wrapper;
        }
        return (
            <ScrollView contentContainerStyle={this.stylesPageContainer}>
                <View style={this.stylesContainer}>
                    {this.content()}
                </View>
                <Navbar interpreter={interpreter} wrapper={wrapper} />
            </ScrollView>
        );
    }

}

export default ScrollPage;