import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Explore from "./explore";
import HistoryScreen from "./history";
import HomeScreen from "./home";
import Profile from "./profile";
import { Ionicons } from "@expo/vector-icons"; // Import the icon library
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";
import { DataProvider } from "@/components/services/DataService";
const Tab = createBottomTabNavigator();

export default function TabLayout() {
  return (
    <DataProvider>
      <Tab.Navigator initialRouteName="home">
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Prediction"
          component={Explore}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons
                name="batch-prediction"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="History"
          component={HistoryScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="clockcircle" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome6 name="user-gear" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </DataProvider>
  );
}
