import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { router } from 'expo-router';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Pressable,
    ActivityIndicator
} from 'react-native';
import FlatListComponent from '../../components/FlatListComponent';

export default function Search() {
    const booksTmp = [
        {
            isbn: '9780450000898',
            title: 'Dune',
            authors: ['Frank Herbert'],
            firstPublishedYear: 1965,
            coverUrl: 'https://covers.openlibrary.org/b/id/11481354-M.jpg',
        },
        {
            isbn: '9788422615866',
            title: 'The Hobbit',
            authors: ['J.R.R. Tolkien'],
            firstPublishedYear: 1937,
            coverUrl: 'https://covers.openlibrary.org/b/id/14627509-M.jpg',
        },
        {
            isbn: '0606395741',
            title: 'It',
            authors: ['Stephen King'],
            firstPublishedYear: 1986,
            coverUrl: 'https://covers.openlibrary.org/b/id/8569284-M.jpg',
        },
        {
            isbn: '1',
            title: 'Dune',
            authors: ['Frank Herbert'],
            firstPublishedYear: 1965,
            coverUrl: 'https://covers.openlibrary.org/b/id/11481354-M.jpg',
        },
        {
            isbn: '2',
            title: 'The Hobbit',
            authors: ['J.R.R. Tolkien'],
            firstPublishedYear: 1937,
            coverUrl: 'https://covers.openlibrary.org/b/id/14627509-M.jpg',
        },
        {
            isbn: '3',
            title: 'It',
            authors: ['Stephen King'],
            firstPublishedYear: 1986,
            coverUrl: 'https://covers.openlibrary.org/b/id/8569284-M.jpg',
        },
    ]

    const detailsPath = '../(tabs)/search/[isbn]'
    const [input, setInput] = useState('');

    return (
        <View style={styles.background}>
            <StatusBar style="auto" />

            <View style={{
                width: '95%',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <TextInput style={styles.inputField}
                    placeholder='search'
                    keyboardType='default'
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={input}
                    onChangeText={(value) => setInput(value)}
                />
                <Pressable
                    onPress={() => console.log("search pressed")}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? '#bebebe' : '#d4d4d4'
                        },
                        styles.button
                    ]}>
                    <Text>Search</Text>
                </Pressable>
            </View>

            <View style={styles.container}>
                <FlatListComponent data={booksTmp} path={detailsPath} />
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
        paddingBottom: 30,
        paddingTop: 25,
        gap: 10,
    },
    container: {
        width: '95%',
        height: '95%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        borderRadius: 8
    },
    inputField: {
        backgroundColor: '#fff',
        borderColor: '#411a1a',
        paddingHorizontal: 15,
        borderWidth: 1,
        borderRadius: 5,
        width: '70%',
        minWidth: 170,
    },
    button: {
        borderWidth: 1,
        borderColor: '#002a46',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: '25%',
        padding: 8,
    },
});
