import {StyleSheet} from "react-native";
import {primaryColor} from "../../Theme/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,

        justifyContent:'center',
        alignItems:'center'


    },
    headerBarStyle:{
        backgroundColor:primaryColor,
        height:'10%',
        flexDirection:'row',
        alignItems:'center'

    },

});