import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Criar_conta from "./src/components/tela_login/create_account";
import Login from "./src/components/tela_login/login";
import Tela_principal from "./src/components/tela principal";
import Tela_abertura from "./src/components/tela_abertura";
const Stack = createNativeStackNavigator();
import Pedidos from "./src/components/selecionou_pedido/pedidos";
import Tela_carrinho from "./src/components/tela_carrinho";
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} >
        
        <Stack.Screen name="Tela_principal" component={Tela_principal} />
        <Stack.Screen name="Pedidos" component={Pedidos}/>
        <Stack.Screen name="Tela_carrinho" component={Tela_carrinho}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
