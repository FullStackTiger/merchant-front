import React, { Component } from 'react';
import {UIRouter,UIView,pushStateLocationPlugin} from '@uirouter/react';
import Header from './component/header';
import Merchant from './component/merchant';
import Dashboard from './component/dashboard';
const states=[
  {
    url:'/',
    name:'home',
    component:Merchant
  },
  {
    url:'/dashboard',
    name:'dashboard',
    component:Dashboard
  }
]

class App extends Component {
  render() {
    return (
      <UIRouter plugins={[pushStateLocationPlugin]} states={states}>
        <div>
          <Header />
          <UIView render={(RoutedComponent,props)=>(<RoutedComponent {...props}/>)} />
        </div>
      
      </UIRouter>
      // <div className="main">
      //     {/* <Header/>
      //     <Merchant /> */}
      // </div>
    );
  }
}

export default App;