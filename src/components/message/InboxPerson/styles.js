
import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen"
const styles = StyleSheet.create({
    container: {
        paddingLeft: wp('5%'),
        paddingRight: wp('5%'),
        paddingTop: wp('8%'),
        flexDirection:"row",
        justifyContent: "space-between"
    },
    imageContainer: {
        marginLeft: -30,
        width: wp('30%')
    },
    image: {
        height: hp('5%'),
        width: hp('5%')
    },
    textContainer: {
        width: wp('55%'),
        marginLeft:-wp('14%')
        
    },
    title: {
        fontWeight: "bold",
        fontSize: hp('2.5%')
    },
    text: {
        fontSize: hp('1.7%'),
        color: '#7A869A'
    },
    icon: {
        marginLeft: wp('28%')
    }
    
    
});

export default styles;