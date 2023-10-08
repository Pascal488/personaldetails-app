import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { store } from "./store/store.ts";
import { Provider } from "react-redux"
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context';


const httpLink = createHttpLink({
  uri:'http://localhost:8000/'
});

const authLink = setContext((_, { headers }:any) => {
  const token = localStorage.getItem('token');
  console.log(typeof token);  
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",   
    }
  }
});
export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
  </ApolloProvider>
);

