import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { store } from "./store/store.ts";
import { Provider } from "react-redux"
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  uri: '',
  cache: new InMemoryCache(),
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
  </ApolloProvider>
);
