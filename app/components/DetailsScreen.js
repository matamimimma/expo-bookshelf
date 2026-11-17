import { StyleSheet, Text, View, Image } from "react-native";

export default function DetailsScreen({ isbn }) {
    const bookTmp = {
            title: 'Dune',
            authors: ['Frank Herbert', 'John Doe'],
            publishers: ['New English Library'],
            publishDate: '1969',
            pageCount: null,
            coverUrl: 'https://covers.openlibrary.org/b/id/11481354-M.jpg',
        }

    return (
        <View style={{ alignItems: 'center' }}>
            <Text>ISBN: {isbn}</Text>

            <Image
                style={styles.img}
                source={{ uri: bookTmp.coverUrl }}
            />

            <Text style={styles.header}>{bookTmp.title}</Text>

            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                Author(s): {bookTmp.authors.join(', ')}
            </Text>

            <Text style={{ fontSize: 20 }}>
                Published: {bookTmp.publishDate}
            </Text>

            <Text style={{ fontSize: 20 }}>
                Pages: {bookTmp.pageCount ?? 'Unknown'}
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        width: '60%',
        aspectRatio: 2 / 3,
        marginTop: 10,
        marginBottom: 10,
    },
    header: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
    },
});
