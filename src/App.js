// import './App.css';
import React from 'react';
import axios from 'axios';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
class App extends React.Component{
  constructor(
    props
  ){
    super(props);
    this.state = {
      booksArray: [],
      user: null,
    }
  }



  getBooks = async () => {
    //THIS IS A FILLER FOR TESTING PURPOSES: This should be removed before the final app is release.
    let exampleUser = {email: '321AWM'};
    await this.setState({user: exampleUser});

    // USE THIS URL FOR DEPLOYS:
    // const url = `https://can-of-books-backend-code301.herokuapp.com/books?email=${this.state.user.email}`;

    // USE THIS URL WHEN TESTING ON THE LOCAL MACHINE:
    const url = `http://localhost:3001/books?email=${this.state.user.email}`;

    console.log(`URL: ${url}`);


    try{
      const response = await axios.get(url);
      console.log(response.data);
      if(!Array.isArray(response.data)){
        let holdingArray = [];
        holdingArray.push(response.data);
        this.setState({booksArray: holdingArray});
      }else{
        this.setState({booksArray: response.data});
      }
    } catch (e){alert(e + ' Please try again.')}

    console.log(this.state.booksArray);
  }

  componentDidMount(){
    this.getBooks();
  }

  render(){
    return(
      <>
        {/* <p>The site is working</p> */}
        <Header user={{email: '321AWM'}}/>
        <Main booksArray={this.state.booksArray}/>
        <Footer/>
        {/* <p>The site is working part 2</p> */}
        {/* TODO //* ROUTER is MISSING  */}
      </>
    );
  }
}

export default App;
