import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:30
    },
    camera: {
        flex: 1,
        backgroundColor: 'black',
        aspectRatio: 9 / 16,
    },
    bottomBarContainer: {
        position: "absolute",
        bottom: 0,
        alignItems: "center",
        flexDirection: "row"
    },
    recordButtonContainer: {
        flex: 1,
        marginHorizontal: 30
    },
    recordButton: {
        borderWidth: 8,
        borderColor: '#ff999987',
        backgroundColor: '#ff4040',
        borderRadius: 100,
        height:80,
        width: 80,
        alignSelf: "center",
        marginBottom: 30
    },
    galleryButton: {
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 10,
        overflow: "hidden",
        width: 50,
        height: 50
    },
    galleryButtonImage: {
        width: 50,
        height: 50
    },
    sideBarContainer: {
        top: 60,
        right: 0, 
        marginHorizontal: 20,
        position: "absolute"
    },
    sideBarButton: {
        alignItems: "center",
        marginBottom: 25
    }

});

export default styles;