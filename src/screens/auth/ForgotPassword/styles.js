
import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen"
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent:"center",
        padding: wp('10%')

    },
    title:{
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: hp('4%'),
        lineHeight:hp('4%'),
        marginBottom: hp('1%'),


    },
    subTitle: {
        lineHeight:hp('4%'),
        marginTop: hp('1%'),
        fontSize: hp('2%'),
        textAlign: 'center',
        fontWeight: "100",
        color: '#040415',
        marginBottom:hp('3%')
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 20,
        marginBottom:hp('2%'),
        marginTop:hp('2%'),
        width: wp('80%')
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
    row:{
        flexDirection: "row",
        alignSelf: "center"
    },
    checkboxContainer: {
        alignSelf: 'center',
        flexDirection: "row",
        marginBottom: 20,
      },
    checkbox: {
        alignSelf: "center",
        borderColor:'#F15223'
      },
    
});

export default styles;