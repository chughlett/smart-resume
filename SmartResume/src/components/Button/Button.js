import React, {Component} from 'react';
import {Platform, SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import {styles} from "./style";
import Icon from "react-native-vector-icons/EvilIcons";




export const Button = ({btnLabel,onPress}) => (
    <TouchableOpacity
        style={styles.container}
        onPress={onPress}
    >
        <Text style={styles.labelStyle}>{btnLabel}</Text>
    </TouchableOpacity>
);


