import {StyleSheet} from "react-native";
import {btnColor, primaryColor} from "../../Theme/colors";
import {btnCornerRadiusSize, btnPadding} from "../../Theme/dimens";

export const styles = StyleSheet.create({
    container: {
     backgroundColor: btnColor,
        width:'90%',
        margin:5,
        padding:btnPadding,
        borderRadius:btnCornerRadiusSize,
        justifyContent:'center',
        alignItems: 'center'

    },

    labelStyle: {

        color: 'white', fontWeight: 'bold',
    },
});