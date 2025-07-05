import { Tabs } from "expo-router";
import { View } from "react-native";
import {
  Home,
  User,
  FileText,
  Settings,
  Bell,
  MessageCircle,
  Settings2,
  AlertCircleIcon,
} from "lucide-react-native";
import { useColorScheme } from "~/lib/useColorScheme";
import { ThemeToggle } from "~/components/ThemeToggle";
import { Button } from "~/components/ui/button";

export default function TabLayout() {
  const { isDarkColorScheme } = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: isDarkColorScheme ? "#fff" : "#000",
        tabBarInactiveTintColor: isDarkColorScheme ? "#666" : "#999",
        tabBarStyle: {
          backgroundColor: isDarkColorScheme ? "#1a1a1a" : "#fff",
        },
        headerStyle: {
          backgroundColor: isDarkColorScheme ? "#1a1a1a" : "#fff",
        },
        headerTintColor: isDarkColorScheme ? "#fff" : "#000",
        headerShadowVisible: false,
        headerRight: () => <HeaderRight />,
        headerLeft: () => (
          <>
            <View className='flex-row items-center gap-2 ml-4'>
              <Button
                variant='ghost'
                size='sm'
                onPress={() => {
                  // Add your back navigation action here
                  console.log("Back button pressed");
                }}
              >
                <AlertCircleIcon size={20} />
              </Button>
            </View>
          </>
        ),
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: "Home",

          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name='requests'
        options={{
          title: "Requests",
          headerTitle: "",
          tabBarIcon: ({ color, size }) => (
            <FileText color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name='services'
        options={{
          title: "Services",
          headerTitle: "",
          tabBarIcon: ({ color, size }) => (
            <Settings color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}

export const HeaderRight = () => (
  <View className='flex-row items-center gap-2 mr-4'>
    <Button
      variant='ghost'
      size='sm'
      className='p-2'
      onPress={() => {
        console.log("Bell pressed");
      }}
    >
      <Bell size={20} />
    </Button>
    <Button
      variant='ghost'
      size='sm'
      className='p-2'
      onPress={() => {
        console.log("Messages pressed");
      }}
    >
      <MessageCircle size={20} />
    </Button>
    <Button
      variant='ghost'
      size='sm'
      className='p-2'
      onPress={() => {
        console.log("Settings pressed");
      }}
    >
      <Settings2 size={20} />
    </Button>
    <ThemeToggle />
  </View>
);
