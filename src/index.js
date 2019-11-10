import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(configrequest=>{
    console.log(configrequest)
    return configrequest
},
error=>{
    
    console.log(error)
    return Promise.reject(error)
});

axios.interceptors.response.use(configresponse=>{
    console.log(configresponse)
    return configresponse
},
error=>{
    
    console.log(error)
    return Promise.reject(error)
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
