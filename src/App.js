import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import QuoteBox from './components/QuoteBox';
import './App.css';

const initialState = { 
  quote: "", quoteEs: "", quoteEn: "", 
  author: "", authorEn: "", bgColor: "", textColor: "", 
  langEnglish: false 
}
const reducer = (state = initialState, action) => {
  switch(action.type){
    case "UPDATE_QUOTE":
      return {...state, quote: action.payload};
    case "UPDATE_QUOTE_EN":
      return {...state, quoteEn: action.payload};
    case "UPDATE_AUTHOR":
      return {...state, author: action.payload};
    case "UPDATE_AUTHOR_EN":
      return {...state, authorEn: action.payload};
    case "UPDATE_BG_COLOR":
      return {...state, bgColor: action.payload};
    case "UPDATE_TEXT_COLOR":
      return {...state, textColor: action.payload};
    case "SET_LANG_ENGLISH":
      return {...state, langEnglish: action.payload}
    default: return state;
  }
}
const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <div className="App">
      <QuoteBox />
    </div>
  </Provider>
);

export default App;
