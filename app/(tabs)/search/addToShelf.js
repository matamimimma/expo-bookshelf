import { useLocalSearchParams } from "expo-router";
import { useState } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';

export default function AddToShelf() {
    const { isbn } = useLocalSearchParams();
    const bookTmp = {
        title: 'Dune',
        authors: ['Frank Herbert', 'John Doe'],
        publishers: ['New English Library'],
        publishDate: '1969',
        pageCount: null,
        coverUrl: 'https://covers.openlibrary.org/b/id/11481354-M.jpg',
    }
    const [inputData, setInputData] = useState(bookTmp);

    return (
        <View style={styles.background}>
            <View style={styles.container}>
                <Text>ADD TO SHELF</Text>
                <Text>ISBN: {isbn}</Text>

                {/* FORM */}
                <View style={{
                    justifyContent: 'space-evenly',
                    height: '60%'
                }}>
                    <View style={styles.inputRow}>
                        <Text>Title</Text>
                        <View style={styles.inputField}>
                            <TextInput
                            placeholder='Title'
                            placeholderTextColor='#a1a1a1'
                            keyboardType='default'
                            value={inputData.title}
                            onChangeText={(value) =>
                                setInputData(prev => ({
                                ...prev,
                                title: value
                                }))
                            }
                            onEndEditing={(e) =>
                                console.log("lol")
                            }
                            />
                        </View>
                    </View>
                    <View style={styles.inputRow}>
                        <Text>Author(s)</Text>
                        <View style={styles.inputField}>
                            <TextInput
                                placeholder='John Smith'
                                placeholderTextColor='#a1a1a1'
                                keyboardType='default'
                                value={inputData.authors.join(', ')}
                                onChangeText={(value) =>
                                    setInputData(prev => ({
                                        ...prev,
                                        authors: value
                                    }))
                                }
                                onEndEditing={(e) =>
                                    console.log("lol")
                                }
                            />
                        </View>
                    </View>
                    <View style={styles.inputRow}>
                        <Text>Publisher(s)</Text>
                        <View style={styles.inputField}>
                            <TextInput
                                placeholder='WSOY'
                                placeholderTextColor='#a1a1a1'
                                keyboardType='default'
                                value={inputData.publishers.join(', ')}
                                onChangeText={(value) =>
                                    setInputData(prev => ({
                                        ...prev,
                                        publishers: value
                                    }))
                                }
                                onEndEditing={(e) =>
                                    console.log("lol")
                                }
                            />
                        </View>
                    </View>
                    <View style={styles.inputRow}>
                        <Text>Published</Text>
                        <View style={styles.inputField}>
                            <TextInput
                                placeholder='2001'
                                placeholderTextColor='#a1a1a1'
                                keyboardType='default'
                                value={inputData.publishDate}
                                onChangeText={(value) =>
                                    setInputData(prev => ({
                                        ...prev,
                                        publishDate: value
                                    }))
                                }
                                onEndEditing={(e) =>
                                    console.log("lol")
                                }
                            />
                        </View>
                    </View>
                    <View style={styles.inputRow}>
                        <Text>Pages</Text>
                        <View style={styles.inputField}>
                            <TextInput
                                placeholder='0'
                                placeholderTextColor='#a1a1a1'
                                keyboardType='default'
                                value={inputData.pageCount}
                                onChangeText={(value) =>
                                    setInputData(prev => ({
                                        ...prev,
                                        pageCount: value
                                    }))
                                }
                                onEndEditing={(e) =>
                                    console.log("lol")
                                }
                            />
                        </View>
                    </View>
                </View>

                <Pressable
                    onPress={() => console.log("ADD")}
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
    );
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
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
    },
    inputField: {
        borderColor: '#818181',
        borderWidth: 1,
        width: '50%',
        minWidth: 170,
    },
});
