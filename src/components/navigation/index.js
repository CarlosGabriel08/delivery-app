import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Criar_conta from "./src/components/tela_login/create_account";
import Login from "./src/components/tela_login/login";
import OrderCompleted from "./src/components/pedidos/pedido_feito";
const Stack = createNativeStackNavigator();

export default function Navegação() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Criar_conta">
        <Stack.Screen name="Criar_conta" component={Criar_conta} options={{headerShown:false,}} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
