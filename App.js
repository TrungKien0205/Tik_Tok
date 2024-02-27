import 'react-native-gesture-handler';
import { StatusBar, StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
// import { useNavigation } from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreen"
import BottomTabNavigator from "./navigation/bottomTabNavigator";
import HomeScreen from './screens/HomeScreen';



export default function App() {

const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
           name="LoginScreen"
           component={LoginScreen}
         />
        <Stack.Screen
           name="Main"
           component={BottomTabNavigator}
         />
        
         

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  BottomTabIcon: {
    width: 20,
    height: 20,
    tintColor: "grey",
  },
  BottomTabIconFocused: {
    tintColor: "white",
  },
  newVideoButton: {
    width: 48,
    height: 24,
  },
});
// import { View, Text } from "react-native";
// import React from "react";

// const App = () => {
//   return (
//     <View>
//       <Text>App</Text>
//     </View>
//   );
// };

// export default App;