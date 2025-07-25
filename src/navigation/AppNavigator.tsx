import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../pages/HomePage';
import SendPaymentPage from '../pages/SendPaymentPage';
import ReceivePaymentPage from '../pages/ReceivePaymentPage';
import HistoryPage from '../pages/HistoryPage';

export type RootStackParamList = {
  Home: undefined;
  SendPayment: undefined;
  ReceivePayment: undefined;
  History: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="SendPayment" component={SendPaymentPage} />
      <Stack.Screen name="ReceivePayment" component={ReceivePaymentPage} />
      <Stack.Screen name="History" component={HistoryPage} />
    </Stack.Navigator>
  );
}