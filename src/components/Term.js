import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';


function Term(props){
  return(
    <React.Fragment>
      <div onClick = {() => props.whenTermClicked(props.id)}>
        <p>{props.name}</p>
        <p>{props.parties}</p>
        {/* <button onClick = {()=> props.whenTermClicked(props.id)}>DETAILS</button> */}
      </div>
      <hr/>
    </React.Fragment>
  )
}


Term.propTypes = {

}
export default Term;


