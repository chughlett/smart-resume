import {StyleSheet} from "react-native";
import {btnColor, btnSecondaryColor, labelDarkColor, primaryColor, primaryDarkColor} from "../../Theme/colors";
import {btnCornerRadiusSize, btnPadding} from "../../Theme/dimens";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: btnSecondaryColor,
        width: '90%',
        flexDirection: 'row',
        margin: 5,
        padding: btnPadding,
        borderRadius: btnCornerRadiusSize,
        justifyContent: 'center',
        alignItems: 'center'

    },

    labelStyle: {
        width: '90%',
        color:
        labelDarkColor,
        fontWeight: 'bold',

    },
    icon: {
        fontWeight: 'bold'
    }
});