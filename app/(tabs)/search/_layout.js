import { Stack } from 'expo-router';

export default function SearchLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    headerTitle: "Search"
                }}
            />
            <Stack.Screen
                name="[isbn]"
                options={{
                    headerTitle: "Book details"
                }}
            />
        </Stack>
    );
}
