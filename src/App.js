import React from 'react';
import { Appbar } from './appBar'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from './globalState'
import axios from 'axios'


export default function App(props){

    React.useEffect(()=>{
      axios.get('http://jsonplaceholder.typicode.com/posts')
      .then(res=>  console.log(res) )
      .catch(err=> console.log(err) )
    })

  return(
    <Provider>  
        <BrowserRouter>
           <Appbar/>
          
          

        </BrowserRouter>
    </Provider>
  )}







 