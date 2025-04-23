import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AntDesign from "@expo/vector-icons/AntDesign";

import { Button } from "react-native";

import Movies from "./src/pages/Movies";
import MovieDetail from "./src/pages/MovieDetail";
import Profile from "./src/pages/Profile";
import Config from "./src/pages/Config";

const StackAuth = createStackNavigator();
const StackApp = createStackNavigator();

const Tab = createBottomTabNavigator();

function AppStack() {
  return (
    <StackApp.Navigator initialRouteName="Movies">
      <StackApp.Screen
        name="Movies"
        options={{
          headerTitle: "Meus Filmes",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerRight: () => (
            <Button
              onPress={() => alert("This is a button!")}
              title="Info"
              color="#fff"
            />
          ),
          headerShown: false,
        }}
        component={Movies}
      />
      <StackApp.Screen
        name="MovieDail"
        component={MovieDetail}
        options={{
          headerTitle: "Detalhes do Filme",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </StackApp.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={AppStack}
          options={{
            headerShown: false,
            tabBarLabel: "Início",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="user" size={size} color={color} />
            ),
            tabBarLabel: "Perfil",
            headerTitle: "Perfil",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Tab.Screen
          name="Config"
          component={Config}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="setting" size={size} color={color} />
            ),
            tabBarLabel: "Configurações",
            headerTitle: "Configurações",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
