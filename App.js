import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase/app'
import Constants from 'expo-constants';
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './src/redux/reducers/index'
import AuthScreen from './src/screens/auth';
import Route from './src/navigation/main';
const store = createStore(rootReducers, applyMiddleware(thunk))

// if(firebase.apps.length == 0 ){

// }

const firebaseConfig = {
  apiKey: "AIzaSyDzspFOEPQoI9JyRQes9vGewH_S0oeJJDQ",
  authDomain: "tiktok-swipexyz.firebaseapp.com",
  databaseURL: "https://tiktok-swipexyz-default-rtdb.firebaseio.com",
  projectId: "tiktok-swipexyz",
  storageBucket: "tiktok-swipexyz.appspot.com",
  messagingSenderId: "958708594798",
  appId: "1:958708594798:web:a2fdc48d5b574115150e7f"
};

firebase.initializeApp(firebaseConfig )

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchInterval: false, staleTime: Infinity } }
})

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Route/>

      </QueryClientProvider>
    </Provider>
    
  );
}


