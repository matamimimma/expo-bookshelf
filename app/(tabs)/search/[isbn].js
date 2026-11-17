import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import DetailsScreen from '../../components/DetailsScreen';

export default function BookDetails() {
    const { isbn } = useLocalSearchParams();

    return (
        <View style={styles.background}>
            <View style={styles.container}>
                <Text>SEARCH / BOOK DETAILS</Text>
                <DetailsScreen isbn={isbn} />

                <Pressable
                    onPress={() => console.log("add pressed")}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? '#bebebe' : '#d4d4d4'
                        },
                        styles.button
                    ]}>
                    <Text>Add to bookshelf</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#7a3232',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 50,
        gap: 10,
    },
    container: {
        width: '90%',
        height: '95%',
        backgroundColor: '#fff',
        alignItems: 'center',
        gap: 5,
        padding: 13,
        borderRadius: 8
    },
    button: {
        borderWidth: 1,
        borderColor: '#002a46',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: '40%',
        padding: 8,
    },
});
