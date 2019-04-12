

import React, { Component } from 'react';
import { Platform, SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { styles } from "./style";
import Icon from "react-native-vector-icons/EvilIcons";
import {Button} from "../../Components/Button";




type Props = {};

export class Home extends Component<Props> {

    _onCaptureImagePressed = () =>{
        this.props.navigation.navigate('ImageCapturePage')

    }

    render() {

        return (
            <View style={styles.container}>
                <SafeAreaView />


                <Button btnLabel={'Capture Image'} onPress={this._onCaptureImagePressed}/>



            </View>
        );
    }


}

