import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen"
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf:"center"
    },
    image: {
        alignSelf: "center"
    },
    title: {
        alignSelf:"center",
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: hp('3%'),
        padding: wp('3%'),
        lineHeight:hp('4%'),
        marginTop: hp('2%')

    },
    subTitleContainer: {
        width: wp('100%')

    },
    subTitle: {
        alignSelf:"center",
        textAlign: 'center',
        maxWidth: wp('55%'),
        margin:wp('5%'),
        lineHeight:hp('3%'),
        color:'#040415'

    }
});

export default styles;