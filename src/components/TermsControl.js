import React from 'react';
import TermList from './TermList';
import AddTermForm from './AddTermForm';
import EditTermForm from './EditTermForm'; 

class TermsControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: false
    };
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    return(
      <React.Fragment>
        { currentlyVisibleState }
        <button>{ buttonText }</button>
      </React.Fragment>
    )
  }
}

export default TermsControl;