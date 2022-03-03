
import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen"
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        padding: wp('10%')
    },
    buttonContainer: {
        borderColor: '#0000001A',
        borderRadius:15,
        borderWidth:.5,
        padding:20,
        width:65,
        height:65,
        position: 'absolute',
        top:0,
        margin:hp('5%'),
        marginTop: hp('8%')
    },
    contentContainer: {
        marginTop: hp('10%')
    }
    
    
});

export default styles;