import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';


const commenttext= "great job!";
const fakerimages = [faker.image.avatar(),
  faker.image.avatar(),
  faker.image.avatar()];

const App = () =>{
  return (
    <div className="ui container comments">
    <ApprovalCard>
      <CommentDetail author="Sam"
      currentime= "Today at 4:45 a.m."
      comment = {commenttext}
      avatarpic={fakerimages[1]}
      />
    </ApprovalCard>

    <ApprovalCard>
      <CommentDetail author="tammy"
      currentime= "Today at 4:45 a.m."
      comment = {commenttext}
      avatarpic={fakerimages[0]}
          />
    </ApprovalCard>

    <ApprovalCard>

      <CommentDetail author="nancy"
      currentime= "Today at 4:45 a.m."
      comment = {commenttext}
      avatarpic={fakerimages[2]}
      />
    </ApprovalCard>


    </div>

  );
};

ReactDOM.render(
<App/>,
document.querySelector('#root')
);
