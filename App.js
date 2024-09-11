const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Frame2 from "./screens/Frame2";
import Frame from "./screens/Frame";
import Frame1 from "./screens/Frame1";
import Frame3 from "./screens/Frame3";
import Frame4 from "./screens/Frame4";
import Frame5 from "./screens/Frame5";
import Frame6 from "./screens/Frame6";
import Frame7 from "./screens/Frame7";
import Frame8 from "./screens/Frame8";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Frame2"
              component={Frame2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame"
              component={Frame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame1"
              component={Frame1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame3"
              component={Frame3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame4"
              component={Frame4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame5"
              component={Frame5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame6"
              component={Frame6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame7"
              component={Frame7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame8"
              component={Frame8}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
