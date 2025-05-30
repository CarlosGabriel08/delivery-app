import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Criar_conta from "./src/components/tela_login/create_account";
import Login from "./src/components/tela_login/login";
import Tela_principal from "./src/components/tela principal";
import Tela_abertura from "./src/components/tela_abertura";
const Stack = createNativeStackNavigator();
import Pedidos from "./src/components/selecionou_pedido/pedidos";
import Tela_carrinho from "./src/components/tela_carrinho";
import Pedido_feito from "./src/components/pedido_feito";
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}  initialRouteName="Tela_abertura" >
        <Stack.Screen name="Tela_abertura" component={Tela_abertura} />
        <Stack.Screen name="Criar_conta" component={Criar_conta} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Tela_principal" component={Tela_principal} />
        <Stack.Screen name="Pedidos" component={Pedidos}/>
        <Stack.Screen name="Tela_carrinho" component={Tela_carrinho}/>
        <Stack.Screen name="Pedido_feito" component={Pedido_feito}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
