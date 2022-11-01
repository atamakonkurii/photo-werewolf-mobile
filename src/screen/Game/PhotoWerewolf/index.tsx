import { WaitingRoom } from "./WaitingRoom";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PhotoSelectRoom } from "./PhotoSelectRoom";

const PhotoWereWolfStack = createNativeStackNavigator();

export const PhotoWereWolf = () => {
  return (
    <PhotoWereWolfStack.Navigator
      initialRouteName="WaitingRoome"
      screenOptions={{
        //ヘッダーを表示しない
        headerShown: false,
      }}
    >
      <PhotoWereWolfStack.Screen name="WaitingRoom" component={WaitingRoom} />
      <PhotoWereWolfStack.Screen
        name="PhotoSelectRoom"
        component={PhotoSelectRoom}
      />
    </PhotoWereWolfStack.Navigator>
  );
};
