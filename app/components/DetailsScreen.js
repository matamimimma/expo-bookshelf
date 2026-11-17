import { Text, View } from "react-native";

export default function DetailsScreen({ isbn }) {
    return (
        <View>
            <Text>ISBN: {isbn}</Text>
        </View>
    );
}
