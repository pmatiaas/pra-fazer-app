import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 30,
        alignItems: 'center',
        height: '100%',
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 20,
        fontSize: 18

    },
    info: {
        marginBottom: 10,
        fontSize: 18,
        padding: 10,
        borderWidth: 1,
        borderColor: '#F60',
        borderRadius: 10,
    },
    button: {
        position: 'absolute',
        bottom: 0,
        marginBottom: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#F60',
        borderRadius: 10,
        width: '100%'
    },
    textButton: {
        fontSize: 18,
        textAlign: 'center',
        color: '#F60'
    }

})

export default styles