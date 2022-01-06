import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PGGUI from './screens/PGGUI';


class App extends React.Component {

  render(){
    return (
      <BrowserRouter>
        <div className="App">
            <main>
                <Route path="/" exact component={PGGUI}></Route>
            </main>
        </div>
        </BrowserRouter>
    );
  }


}



export default App;
