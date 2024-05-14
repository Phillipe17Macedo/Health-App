import { MaterialIcons, Ionicons, AntDesign, FontAwesome6 } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
import { StyleSheet, Pressable } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#8CBF1F',
        tabBarInactiveTintColor: '#025940',
        tabBarShowLabel: true,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#fff',
          width: '90%',
          bottom: 8,
          borderWidth: 0.5,
          borderColor: '#DFEBF2',
          alignSelf: 'center',
          marginVertical: 5,
          marginHorizontal: 18,
          borderRadius: 60,
          height: 70,
          paddingTop: 10,
          paddingBottom: 12,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 4,          
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          headerShown: true,
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return <Ionicons name="home" size={28} color={color} />;
            }

            return <Ionicons name="home-sharp" size={28} color={color} />;
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
            backgroundColor: '#65A693',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
          },
        }}
      />
      <Tabs.Screen
        name="servicos"
        options={{
          title: 'Serviços',
          headerShown: true,
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return <FontAwesome6 name="sitemap" size={30} color={color} />;
            }
            return <FontAwesome6 name="sitemap" size={30} color={color} />;
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
            backgroundColor: '#65A693',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
          },
        }}
      />
      <Tabs.Screen
        name="opcoes"
        options={{
          title: 'Opções',
          headerShown: true,
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return <FontAwesome6 name="gear" size={30} color={color} />;
            }
            return <FontAwesome6 name="gear" size={30} color={color} />;
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
            backgroundColor: '#65A693',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
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
