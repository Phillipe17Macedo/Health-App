import {
  MaterialIcons,
  Ionicons,
  FontAwesome6,
} from "@expo/vector-icons";
import { Link, Tabs } from "expo-router";
import { StyleSheet, Pressable } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#03A66A",
        tabBarInactiveTintColor: "#9B9B9B",
        tabBarShowLabel: true,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#fff",
          width: "90%",
          bottom: 8,
          borderWidth: 0.5,
          borderColor: "#DFEBF2",
          alignSelf: "center",
          marginVertical: 5,
          marginHorizontal: 18,
          borderRadius: 15,
          height: 70,
          paddingTop: 10,
          paddingBottom: 12,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 4,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "normal",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Início",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return <FontAwesome6 name="house" size={25} color={color} />;
            }

            return <FontAwesome6 name="house" size={25} color={color} />;
          },
          headerRight: () => (
            <Link href="/perfil" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Ionicons
                    name="person-circle"
                    size={48}
                    color="#fff"
                    style={[styles.headerRight, { opacity: pressed ? 0.5 : 1 }]}
                  />
                )}
              </Pressable>
            </Link>
          ),
          headerStyle: {
            backgroundColor: "#107357",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 25,
          },
        }}
      />
      <Tabs.Screen
        name="servicos"
        options={{
          title: "Agendamentos",
          headerShown: true,
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return <FontAwesome6 name="laptop-medical" size={25} color={color} />;
            }
            return <FontAwesome6 name="laptop-medical" size={25} color={color} />;
          },
          headerRight: () => (
            <Link href="/perfil" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Ionicons
                    name="person-circle"
                    size={48}
                    color="#fff"
                    style={[styles.headerRight, { opacity: pressed ? 0.5 : 1 }]}
                  />
                )}
              </Pressable>
            </Link>
          ),
          headerStyle: {
            backgroundColor: "#03A66A",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 25,
          },
        }}
      />
      <Tabs.Screen
        name="guias"
        options={{
          title: "Guias",
          headerShown: true,
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return <FontAwesome6 name="newspaper" size={25} color={color} />;
            }
            return <FontAwesome6 name="newspaper" size={25} color={color} />;
          },
          headerRight: () => (
            <Link href="/perfil" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Ionicons
                    name="person-circle"
                    size={48}
                    color="#fff"
                    style={[styles.headerRight, { opacity: pressed ? 0.5 : 1 }]}
                  />
                )}
              </Pressable>
            </Link>
          ),
          headerStyle: {
            backgroundColor: "#03A66A",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 25,
          },
        }}
      />
      <Tabs.Screen
        name="financeiro"
        options={{
          title: "Financeiro",
          headerShown: true,
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return (
                <FontAwesome6 name="money-bill-transfer" size={25} color={color} />
              );
            }
            return <FontAwesome6 name="money-bill-transfer" size={25} color={color} />;
          },
          headerRight: () => (
            <Link href="/perfil" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Ionicons
                    name="person-circle"
                    size={48}
                    color="#fff"
                    style={[styles.headerRight, { opacity: pressed ? 0.5 : 1 }]}
                  />
                )}
              </Pressable>
            </Link>
          ),
          headerStyle: {
            backgroundColor: "#03A66A",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 25,
          },
        }}
      />
    </Tabs>
  );
}
const styles = StyleSheet.create({
  headerRight: {
    marginRight: 20,
  },
  tabBarIcon: {
    marginBottom: -3,
  },
});
