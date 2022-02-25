import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen"


const colors =  ['#2D9E64', '#FFAA1B', '#06C1FF', '#FF7D7D', '#8A24FF', '#040415']
const random_item= (items) => {
  return items[Math.floor(Math.random()*items.length)];
}
const backGround = colors[Math.floor(Math.random() * colors.length)] 

const styles = StyleSheet.create({
    container: {
        borderWidth:.2, 
        padding: 10, 
        borderRadius:20,         
        margin: 10 
    },
    small: {
        width:100, 
    },
    text: { 
        alignSelf:'center', 
        fontWeight:'bold',
        paddingLeft: 10,
        paddingRight: 10
    },
    selected: {
        backgroundColor: backGround

    },
    notSelected: {

    },
    selectText: {
        color: 'white'
    },
    notSelectColor: {

    }
    
});

export default styles;