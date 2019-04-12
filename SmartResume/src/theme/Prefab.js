import {ActivityIndicator, Text, View} from "react-native";
import React from "react";








export const ShowLoading = (props) => {

        if (props.visible) {
            return (
                <View
                    style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        zIndex: 1
                    }}>
                    <Text>{props.loadingMsg}</Text>
                    <ActivityIndicator size="large" color="#ACFAC7"/>

                </View>
            )

        } else {
            return (
                <View>
                </View>
            )
        }
    }


;


