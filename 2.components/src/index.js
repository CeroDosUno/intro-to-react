import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const commenttext= "great job!";
const fakerimages = [faker.image.avatar(),
  faker.image.avatar(),
  faker.image.avatar()];

const App = () =>{
  return (
    <div className="ui container comments">
    <CommentDetail author="Sam"
    currentime= "Today at 4:45 a.m."
    comment = {commenttext}
    avatarpic={fakerimages[1]}
    />

    <CommentDetail author="tammy"
    currentime= "Today at 4:45 a.m."
    comment = {commenttext}
    avatarpic={fakerimages[0]}
        />

    <CommentDetail author="nancy"
    currentime= "Today at 4:45 a.m."
    comment = {commenttext}
    avatarpic={fakerimages[2]}

    />

    </div>

  );
};

ReactDOM.render(
<App/>,
document.querySelector('#root')
);
