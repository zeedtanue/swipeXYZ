
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
        fontSize: hp('2.9%'),
        lineHeight:hp('4%'),
        marginTop: hp('2%'),
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
    outerCircle: {
        borderWidth:hp('6%'),
        height: hp('16%'),
        width: hp('16%'),
        alignSelf:"center",
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: hp('15%'),
        borderColor: '#fceee9'
    },
    innerCircle: {
        borderWidth:hp('5%'),
        height: hp('10%'),
        width: hp('10%'),
        borderRadius: hp('15%'),
        borderColor: '#FD7753'
    },
    image: {
        height: hp('4%'),
        width: hp('4%'),
        alignSelf:"center",
        margin: -12,

    }
    
});

export default styles;