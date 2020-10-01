import React, { Component } from 'react'
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import { Provider } from 'react-redux';
import store from './store';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemModal from './components/ItemModal';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavbar />
        <Container>
          <ItemModal />
        </Container>
        <ShoppingList />
      </Provider>
    )
  }
}
