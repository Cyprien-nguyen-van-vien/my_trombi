import React, { Component } from 'react';
import { View } from 'react-native';
import Navbar from './navbar';

class Page extends Component {

    stylesPageContainer = {
        width: '100%',
        height: '100%',
    }
    stylesContainer = {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignSelf: 'center',
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
            <View style={this.stylesPageContainer}>
                <Navbar interpreter={interpreter} wrapper={wrapper} />
                <View style={this.stylesContainer}>
                    {this.content()}
                </View>
            </View>
        );
    }

}

export default Page;