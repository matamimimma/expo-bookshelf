import { StyleSheet, View, Text, Image } from 'react-native';

const ItemCard = ({title, cover, authors}) => (
    <View style={styles.cardContainer}>
        <View style={styles.imgContainer}>
            <Image
            style={styles.img}
            source={{ uri: cover }}
            />
        </View>
        <View style={{ flex: 1, gap: 10 }}>
            <Text style={styles.listHeader}>
                {title}
            </Text>
            <Text style={{ fontSize: 18 }}>{authors.join(', ')}</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
        padding: 5,
        gap: 20,
        marginVertical: 5,
        borderRadius: 5,
    },
    imgContainer: {
        height: 100,
        aspectRatio: 2 / 3,
        alignSelf: 'center',
    },
    img: {
        width: '100%',
        height: 100,
        resizeMode: 'cover',
        borderRadius: 3,
    },
    listHeader: {
        fontWeight: 'bold',
        fontSize: 24,
    },
})

export default ItemCard
