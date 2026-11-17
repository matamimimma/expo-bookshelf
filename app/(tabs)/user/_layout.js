import { Stack } from 'expo-router';

export default function UserLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    headerTitle: "User"
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
