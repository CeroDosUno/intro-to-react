import React from 'react';

const ApprovalCard = (props) =>{
  console.log(props.children);
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>

      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Reject</div>
{
            // <span className="left floated like">
            //   <i className="like icon"></i>
            //   Like
            // </span>
            // <span className="right floated star">
            //   <i className="star icon"></i>
            //   Favorite
            // </span>
}
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
