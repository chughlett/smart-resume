import {StyleSheet} from "react-native";
import {btnColor, borderColors, headingTextSize} from "../../Theme/colors";
import {smallerTextSize} from "../../Theme/dimens";


export const Style = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: '#fff',
    },

    upperBoxStyle: {
        flex: 0.5,
        justifyContent: 'flex-end',
        alignItems: 'center'

    },

    headingTextStyle: {

        color: btnColor,
        fontSize: headingTextSize,
        fontWeight: 'bold',
        padding: 10,
        justifyContent: 'center',

    },

    centerBoxStyle: {
        flex: 2, justifyContent: 'center', alignItems: 'center', padding: 10,
        resizeMode: 'cover'
    },

    editTextBoxStyle: {
        width: '100%',
        height: '30%',
        justifyContent: 'space-around', alignItems: 'center', padding: 10,

    }, bottomBoxStyle: {
        flex: 0.5, justifyContent: 'center', alignItems: 'center'

    },

    editTextContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'

    }, textInputStyle: {
        width: '100%',
        padding: 10,
        borderRadius: 5,

    },
    btnContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',

    },

    subHeading: {
        color: 'red',
        fontSize: smallerTextSize,
        borderRadius: 5,

    },



});
