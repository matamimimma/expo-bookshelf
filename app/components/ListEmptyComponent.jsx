import { StyleSheet, View, Text } from 'react-native';

const ListEmptyComponent = () => (
    <View style={styles.container}>
        <Text style={styles.text}>
            Nothing to show yet.
        </Text>
        <Text style={styles.text}>
            Start by searching for a movie title.
        </Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        height: 200,
        padding: 5,
        borderRadius: 8
    },
    text: {
        fontSize: 26,
    },
});

export default ListEmptyComponent
