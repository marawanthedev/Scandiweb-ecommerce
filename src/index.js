import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { onError } from "@apollo/client/link/error"
import store from "./redux/store"
import reportWebVitals from "./reportWebVitals";

// apolo setup
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
} from "@apollo/client";

// apolo initalization
const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache()
});

client
    .query({
        query: gql `
      query{
category(input:{title:"clothes"}){
 name
products{
  name
  inStock
  prices{
    currency
    amount
  }
  gallery
		}
	}
}
    `
    })
    .then(result => console.log(result));

ReactDOM.render(

    <
    BrowserRouter >
    <
    ApolloProvider client = { client } >

    <
    Provider store = { store } >
    <
    App / >

    <
    /Provider> < /
    ApolloProvider > < /
    BrowserRouter > ,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();