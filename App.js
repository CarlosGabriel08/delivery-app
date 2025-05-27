import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Criar_conta from "./src/components/tela_login/create_account";
import Login from "./src/components/tela_login/login";
import Tela_principal from "./src/components/tela principal";
import Pedido from "./src/components/selecionou_pedido";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Criar_conta">
        <Stack.Screen name="Criar_conta" component={Criar_conta} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Tela_principal" component={Tela_principal} />
        <Stack.Screen name="Pedido" component={Pedido}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

