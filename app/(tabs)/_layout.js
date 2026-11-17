import { Tabs } from "expo-router";

const TabsLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="App"
                options={{
                    headerTitle: "Home",
                    title: "Home",
                    headerShown: true
                }}
            />
            <Tabs.Screen
                name="user"
                options={{
                    title: "User",
                    headerShown: false
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    title: "Search",
                    headerShown: false
                }}
            />
        </Tabs>
    )
};

export default TabsLayout;
