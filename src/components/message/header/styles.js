
import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen"
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: wp('10%'),
        position: 'absolute',
        top:0,
        marginTop: hp('5%'),
        flexDirection: "row",

        
    },
    text: {
        fontWeight: "bold",
        fontSize: hp('3%'),
        marginLeft: wp('20%'),
    },
    icon: {
        marginLeft: wp('28%')
    }
    
    
});

export default styles;