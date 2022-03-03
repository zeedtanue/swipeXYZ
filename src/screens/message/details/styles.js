
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
        marginTop:hp('5%'),
        margin: hp('.1%'),
        minHeight: hp('65%')
    },
    headerContainer: {
        flexDirection: "row",
        marginTop: hp('3%'),
        justifyContent: "space-between"
    },
    goBack: {
        alignSelf: "center",
        paddingTop: hp('1%')
    },
    image: {
        marginLeft: wp('5%'),
        height: hp('5%'),
        width: hp('5%'),
        marginRight: wp('4%')   
    },
    headerTextContainer: {
        width: wp('40%')
    },
    headerName: {
        fontSize:hp('2%'),
        fontWeight: "bold",
        paddingTop:hp('.5%')
    },
    status:{
        color: 'green'
    },
    iconCall: {
        paddingTop: hp('1%'),
        width:wp('12%')
    },
    recieveText: {
        padding:hp('2%'),
        overflow: "hidden",
        borderWidth:.2,
        borderRadius: 20,
        width: wp('70%')
    },
    timeText: {
        color: '#7A869A',
        fontSize: hp('1.5%'),
        padding: 5,
        paddingLeft: 30,
        
    },
    sendText: {
        padding:hp('2%'),
        backgroundColor:'#F15223',
        color: 'white',
        alignSelf:"flex-end",
        overflow: "hidden",
        borderWidth:.2,
        borderRadius: 20,
        width: wp('70%'),
        marginLeft: wp('9%')
    },
    footerConteiner:{
        flexDirection:"row"
    },
    plusButton: {
        borderWidth: .2,
        padding: 10,
        borderRadius: 10
    },
    input: {
        minWidth: wp('60%'),
        height: hp('3%'),
        backgroundColor: 'white',
        paddingLeft:5,
        paddingTop:5,
        borderWidth:.2,
        borderRadius:10,
        marginLeft:5
    },
    sendIcon:{
        padding: 10,
        borderRadius: 10,
        marginLeft:10,
        borderWidth: 4,
        backgroundColor:'#F15223',
        borderColor: '#F15223'



    }
    
    
});

export default styles;