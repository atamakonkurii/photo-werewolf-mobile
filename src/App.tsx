import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PhotoWerewolfScreen } from "./screen/Game/PhotoWerewolf";
import { HomeScreen } from "./screen/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          //ヘッダーを表示しない
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PhotoWereWolf" component={PhotoWerewolfScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
