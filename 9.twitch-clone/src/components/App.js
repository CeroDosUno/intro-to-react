import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

const PageOne = () =>{
  return( <div>
    pg1
    <Link to="/pagetwo"> Page2 </Link>

    </div>);
};

const PageTwo = () =>{
  return( <div>
    PageTwo
    !!BAD
    <Link to="/"> Page1 </Link>
    </div>);
};

const App = () =>{
  return(
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne}/>
          <Route path="/pagetwo" exact component={PageTwo}/>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
