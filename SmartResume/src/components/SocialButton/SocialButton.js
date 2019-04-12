import React, {Component} from 'react';
import {Platform, SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import {styles} from "./style";
import Icon from "react-native-vector-icons/FontAwesome";
import {Style} from "../../Screens/Login/Style";
import {labelDarkColor} from "../../Theme/colors";




export const SocialButton = ({btnLabel, btnIcon,btnPress}) => (
    <TouchableOpacity

        style={styles.container}
        onPress={this.btnPress}

    >
        <Text style={styles.labelStyle}>{btnLabel}</Text>
        <Icon style={styles.icon}name={btnIcon} color={labelDarkColor}/>


    </TouchableOpacity>
);


