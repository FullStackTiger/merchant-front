import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();





// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// import { Route } from 'react-router';
// import './less/index.css';
// import './less/main.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import App from './App';
// import Dashboard from './component/dashboard';
// import Header from './component/header';
// const states=[
//     {
//         url:'/',
//         name:'home',
//         component: Merchant
//     },
//     {
//         url:'/dashboard',
//         name:'dashboard',
//         component:dashboard
//     }
// ];


// ReactDOM.render((
  
//     <BrowserRouter>
//         <div>
//             <Route exact path='/' component={App} />
//             <Route path='/dashboard' component={Dashboard} />
//         </div>
//     </BrowserRouter>
// ), document.getElementById('root'))
