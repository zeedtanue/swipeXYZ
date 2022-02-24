import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen"
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf:"center",
        backgroundColor: "white"
    },
    imageContainer: {
        marginTop: hp('20%')
    },
    buttonContainer: {
        marginBottom: hp('10%')
    },
    buttonOrrange: {
        backgroundColor: '#F15223',
        width: wp('80%'),
        height: hp('7%'),
        borderRadius: 20,
        alignSelf:"center",
        alignItems: "center",
        position: 'relative',
        marginBottom: hp('2%')
    },
    buttonText: {
        color: 'white',
        fontSize: hp('2%'),
        padding: hp('2%')
    },
    buttonWhite: {
        width: wp('80%'),
        height: hp('7%'),
        borderWidth: 0.3,
        borderRadius: 20,
        alignSelf:"center",
        alignItems: "center",
        position: 'relative',
    },
    buttonTextBlack: {
        fontSize: hp('2%'),
        padding: hp('2%'),
    }
});

export default styles;