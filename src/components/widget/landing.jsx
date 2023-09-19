import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, TouchableOpacity, View, Modal, Image } from 'react-native';
import { paletteGetBackground1, paletteGetInput1, paletteGetInput2 } from '../../theme/palette';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: true,
        };
    }

    toggleModal = () => {
        this.setState((prevState) => ({ isModalVisible: !prevState.isModalVisible }));
    };

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
        return (
            <View style={styles.container}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.isModalVisible}
                    onRequestClose={() => {
                        this.toggleModal();
                    }}
                >
                    <View style={styles.modalContainer}>
                        <Text style={styles.title}>
                            Title
                        </Text>
                        <View style={{ top: '15%', left: '-2%', position: 'static', paddingVertical: '30%' }}>
                            <ScrollView contentContainerStyle={this.stylesPageContainer}>
                                <View style={this.stylesContainer}>
                                    <View style={styles.backgroundText}>
                                        <Text style={styles.textInfo}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor, felis nec iaculis dictum, ligula mi vulputate metus, ut euismod nibh neque ut velit. Fusce quis lorem sed est finibus feugiat. Donec vel lorem gravida, convallis neque vel, fringilla ante. Curabitur luctus feugiat enim vel varius. Donec tempus dapibus eros, et sodales magna fermentum et. Praesent ac nunc libero. Mauris eu felis quis nisi dapibus ultricies vel quis nibh. Maecenas dictum elementum tortor, a rhoncus eros venenatis et. Nam cursus nunc ut massa auctor, a pellentesque tellus pellentesque. Morbi eu erat dui. Aenean aliquet mattis imperdiet.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor, felis nec iaculis dictum, ligula mi vulputate metus, ut euismod nibh neque ut velit. Fusce quis lorem sed est finibus feugiat. Donec vel lorem gravida, convallis neque vel, fringilla ante. Curabitur luctus feugiat enim vel varius. Donec tempus dapibus eros, et sodales magna fermentum et. Praesent ac nunc libero. Mauris eu felis quis nisi dapibus ultricies vel quis nibh. Maecenas dictum elementum tortor, a rhoncus eros venenatis et. Nam cursus nunc ut massa auctor, a pellentesque tellus pellentesque. Morbi eu erat dui. Aenean aliquet mattis imperdiet.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor, felis nec iaculis dictum, ligula mi vulputate metus, ut euismod nibh neque ut velit. Fusce quis lorem sed est finibus feugiat. Donec vel lorem gravida, convallis neque vel, fringilla ante. Curabitur luctus feugiat enim vel varius. Donec tempus dapibus eros, et sodales magna fermentum et. Praesent ac nunc libero. Mauris eu felis quis nisi dapibus ultricies vel quis nibh. Maecenas dictum elementum tortor, a rhoncus eros venenatis et. Nam cursus nunc ut massa auctor, a pellentesque tellus pellentesque. Morbi eu erat dui. Aenean aliquet mattis imperdiet.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor, felis nec iaculis dictum, ligula mi vulputate metus, ut euismod nibh neque ut velit. Fusce quis lorem sed est finibus feugiat. Donec vel lorem gravida, convallis neque vel, fringilla ante. Curabitur luctus feugiat enim vel varius. Donec tempus dapibus eros, et sodales magna fermentum et. Praesent ac nunc libero. Mauris eu felis quis nisi dapibus ultricies vel quis nibh. Maecenas dictum elementum tortor, a rhoncus eros venenatis et. Nam cursus nunc ut massa auctor, a pellentesque tellus pellentesque. Morbi eu erat dui. Aenean aliquet mattis imperdiet.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor, felis nec iaculis dictum, ligula mi vulputate metus, ut euismod nibh neque ut velit. Fusce quis lorem sed est finibus feugiat. Donec vel lorem gravida, convallis neque vel, fringilla ante. Curabitur luctus feugiat enim vel varius. Donec tempus dapibus eros, et sodales magna fermentum et. Praesent ac nunc libero. Mauris eu felis quis nisi dapibus ultricies vel quis nibh. Maecenas dictum elementum tortor, a rhoncus eros venenatis et. Nam cursus nunc ut massa auctor, a pellentesque tellus pellentesque. Morbi eu erat dui. Aenean aliquet mattis imperdiet.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor, felis nec iaculis dictum, ligula mi vulputate metus, ut euismod nibh neque ut velit. Fusce quis lorem sed est finibus feugiat. Donec vel lorem gravida, convallis neque vel, fringilla ante. Curabitur luctus feugiat enim vel varius. Donec tempus dapibus eros, et sodales magna fermentum et. Praesent ac nunc libero. Mauris eu felis quis nisi dapibus ultricies vel quis nibh. Maecenas dictum elementum tortor, a rhoncus eros venenatis et. Nam cursus nunc ut massa auctor, a pellentesque tellus pellentesque. Morbi eu erat dui. Aenean aliquet mattis imperdiet.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor, felis nec iaculis dictum, ligula mi vulputate metus, ut euismod nibh neque ut velit. Fusce quis lorem sed est finibus feugiat. Donec vel lorem gravida, convallis neque vel, fringilla ante. Curabitur luctus feugiat enim vel varius. Donec tempus dapibus eros, et sodales magna fermentum et. Praesent ac nunc libero. Mauris eu felis quis nisi dapibus ultricies vel quis nibh. Maecenas dictum elementum tortor, a rhoncus eros venenatis et. Nam cursus nunc ut massa auctor, a pellentesque tellus pellentesque. Morbi eu erat dui. Aenean aliquet mattis imperdiet.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor, felis nec iaculis dictum, ligula mi vulputate metus, ut euismod nibh neque ut velit. Fusce quis lorem sed est finibus feugiat. Donec vel lorem gravida, convallis neque vel, fringilla ante. Curabitur luctus feugiat enim vel varius. Donec tempus dapibus eros, et sodales magna fermentum et. Praesent ac nunc libero. Mauris eu felis quis nisi dapibus ultricies vel quis nibh. Maecenas dictum elementum tortor, a rhoncus eros venenatis et. Nam cursus nunc ut massa auctor, a pellentesque tellus pellentesque. Morbi eu erat dui. Aenean aliquet mattis imperdiet.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor, felis nec iaculis dictum, ligula mi vulputate metus, ut euismod nibh neque ut velit. Fusce quis lorem sed est finibus feugiat. Donec vel lorem gravida, convallis neque vel, fringilla ante. Curabitur luctus feugiat enim vel varius. Donec tempus dapibus eros, et sodales magna fermentum et. Praesent ac nunc libero. Mauris eu felis quis nisi dapibus ultricies vel quis nibh. Maecenas dictum elementum tortor, a rhoncus eros venenatis et. Nam cursus nunc ut massa auctor, a pellentesque tellus pellentesque. Morbi eu erat dui. Aenean aliquet mattis imperdiet.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor, felis nec iaculis dictum, ligula mi vulputate metus, ut euismod nibh neque ut velit. Fusce quis lorem sed est finibus feugiat. Donec vel lorem gravida, convallis neque vel, fringilla ante. Curabitur luctus feugiat enim vel varius. Donec tempus dapibus eros, et sodales magna fermentum et. Praesent ac nunc libero. Mauris eu felis quis nisi dapibus ultricies vel quis nibh. Maecenas dictum elementum tortor, a rhoncus eros venenatis et. Nam cursus nunc ut massa auctor, a pellentesque tellus pellentesque. Morbi eu erat dui. Aenean aliquet mattis imperdiet.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor, felis nec iaculis dictum, ligula mi vulputate metus, ut euismod nibh neque ut velit. Fusce quis lorem sed est finibus feugiat. Donec vel lorem gravida, convallis neque vel, fringilla ante. Curabitur luctus feugiat enim vel varius. Donec tempus dapibus eros, et sodales magna fermentum et. Praesent ac nunc libero. Mauris eu felis quis nisi dapibus ultricies vel quis nibh. Maecenas dictum elementum tortor, a rhoncus eros venenatis et. Nam cursus nunc ut massa auctor, a pellentesque tellus pellentesque. Morbi eu erat dui. Aenean aliquet mattis imperdiet.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor, felis nec iaculis dictum, ligula mi vulputate metus, ut euismod nibh neque ut velit. Fusce quis lorem sed est finibus feugiat. Donec vel lorem gravida, convallis neque vel, fringilla ante. Curabitur luctus feugiat enim vel varius. Donec tempus dapibus eros, et sodales magna fermentum et. Praesent ac nunc libero. Mauris eu felis quis nisi dapibus ultricies vel quis nibh. Maecenas dictum elementum tortor, a rhoncus eros venenatis et. Nam cursus nunc ut massa auctor, a pellentesque tellus pellentesque. Morbi eu erat dui. Aenean aliquet mattis imperdiet.
                                        </Text>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                        <TouchableOpacity style={styles.closeButton} onPress={this.toggleModal}>
                            <Image style={styles.cross} source={require('../../../assets/cross.png')} />
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        );
    }

    render() {
        return this.content();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: paletteGetBackground1(),
    },
    textInfo: {
        fontSize: 15,
        textAlign: 'justify',
    },
    backgroundText: {
        top: '10%',
        backgroundColor: 'gray',
        borderRadius: 25,
        maxWidth: '95%',
        height: 'auto',
        padding: 6,
        //        position: 'absolute',
    },
    title: {
        fontSize: 50,
        color: 'white',
        fontWeight: 'bold',
        top: '15%',
        position: 'absolute',
    },
    closeButton: {
        backgroundColor: paletteGetInput1(),
        margin: 3,
        borderWidth: 1,
        borderColor: paletteGetInput2(),
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        top: '-95%',
        left: '40%'
    },
    cross: {
        width: '75%',
        height: '75%',
    },
});

export default LandingPage;
