
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:30,
        backgroundColor: 'white'
    },
    formContainer: {
        margin : 20,
        flexDirection: "row"
    },
    inputText: {
        paddingVertical: 10,
        marginRight: 20,
        flex: 1
    },
    mediaPreview: {
        aspectRatio: 9 / 16,
        backgroundColor: 'black',
        width: 60,

    },
    buttonContainer: {
        flexDirection: "row" ,
        margin: 20  
    },
    cancelButton: {
        flexDirection:"row",
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 4,
        marginRight: 10,
    },
    postButton: {
        flexDirection:"row",
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 4,
        marginRight: 10,
        backgroundColor: '#ff4040'
    },
    cancelButtonText:{
        color: 'black',
        fontWeight: "bold",
        fontSize: 16,
        marginLeft: 5
    },
    postButtonText:{
        color: 'white',
        fontWeight: "bold",
        fontSize: 16,
        marginLeft: 5
    },
    spacer: {
        flex: 1
    },
    uploadingContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }

});

export default styles;