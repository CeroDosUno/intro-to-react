import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () =>{
  return (
    <div className="ui container comments">
    <CommentDetail author="Sam"/>
    <CommentDetail author="tammy"/>
    <CommentDetail author="nancy"/>

    </div>

  );
};

ReactDOM.render(
<App/>,
document.querySelector('#root')
);
