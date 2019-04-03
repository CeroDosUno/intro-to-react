import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

const App = () =>{
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img src={faker.image.avatar()} alt="avatar"/>
        </a>
        <div classname = "content">
          <a href="/" className="author">
           Sam
          </a>
          <div className="metadata">
            <span className="date">Today at 6:00 P.M.</span>
          </div>
          <div className="text">
            Nice blog post
          </div>
        </div>
      </div>

      <div className="comment">
        <a href="/" className="avatar">
          <img src={faker.image.avatar()} alt="avatar"/>
        </a>
        <div classname = "content">
          <a href="/" className="author">
           Sam
          </a>
          <div className="metadata">
            <span className="date">Today at 6:00 P.M.</span>
          </div>
          <div className="text">
            Nice blog post
          </div>
        </div>
      </div>

      <div className="comment">
        <a href="/" className="avatar">
          <img src={faker.image.avatar()} alt="avatar"/>
        </a>
        <div classname = "content">
          <a href="/" className="author">
           Sam
          </a>
          <div className="metadata">
            <span className="date">Today at 6:00 P.M.</span>
          </div>
          <div className="text">
            Nice blog post
          </div>
        </div>
      </div>
    </div>

  );
};

ReactDOM.render(
<App/>,
document.querySelector('#root')
);
