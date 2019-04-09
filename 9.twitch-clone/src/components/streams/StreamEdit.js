import React from 'react';


const StreamEdit = (props) =>{
  console.log(props);

  return (
      <div>
        StreamEdit
      </div>
  );
}

//ownProps is the props being passed to streamedit.
const mapStateToProps = (state, ownProps) => {
  return{
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(null)(StreamEdit);
