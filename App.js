import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Login from './src/screens/Login'
import CreateUser from './src/screens/CreateUser'
import Tasks from './src/screens/Tasks'
import Account from './src/screens/Account'
import About from './src/screens/About'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Tabs"
            screenOptions={{
                headerTitleAlign: 'center',
                headerTintColor: '#FFF',
                headerStyle: { backgroundColor: '#F60'},
            }}>
                <Stack.Screen name="Login" component={Login} 
                options={{ headerShown: false }} />

                <Stack.Screen name="CreateUser" 
                component={CreateUser} options = {{title: 'Cadastro de Usuário'}}/>

                <Stack.Screen name="Tasks" component={Tabs} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

//Rodapé
function Tabs(){
    return (
        <Tab.Navigator>
            <Tab.Screen name="Tasks" component={Tasks} 
            options={{title: "Tarefas", 
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="format-list-checkbox" color={color} size={size} />
              ),}} />
            <Tab.Screen name="Account" component={Account} 
            options={{title: "Dados do usuário"}} />
            <Tab.Screen name="About" component={About} 
            options={{title: "Sobre o aplicativo"}} />
        </Tab.Navigator>
    );
}