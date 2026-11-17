import { StyleSheet, FlatList, Pressable } from 'react-native';
import { router } from 'expo-router';
import ItemCardComponent from './ItemCardComponent';
import ListEmptyComponent from './ListEmptyComponent';

const FlatListComponent = ({ data, path }) => (
    <FlatList
        style={styles.list}
        data={data}
        renderItem={({ item }) =>
            <Pressable
                onPress={() => router.push({
                    pathname: path,
                    params: { isbn: item.isbn }
                })}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? '#ddddddf8'
                            : '#f1f1f1f8'
                    },
                    styles.cardContainer
                ]}
            >
                <ItemCardComponent
                    title={item.title}
                    year={item.firstPublishedYear}
                    cover={item.coverUrl}
                    authors={item.authors}
                />
            </Pressable>
        }
        ListEmptyComponent={ListEmptyComponent}
        keyExtractor={item => item.isbn}
    />
)

const styles = StyleSheet.create({
    list: {
        width: '100%',
    },
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
        padding: 5,
        gap: 20,
        marginVertical: 5,
        borderRadius: 5,
    },
})

export default FlatListComponent
