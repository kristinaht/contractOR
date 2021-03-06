import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import { Card } from 'react-bootstrap';


function Term(props){

  const termStyle = {
    // display: 'flex',
    // backgroundColor: '#491823c0',
    textAlign: 'justify',
    border: '3px solid #166a80',
    width: '400px',
    height: '200px',
    padding: '2%',
    margin: '1%',
    boxShadow: '0 2px 4px 0 rgba(0,0,0,0.30)',
    color: '#929296',
    fontSize: '2rem',
  }


  return(
    <React.Fragment>
      <Card className='hover' style={termStyle} onClick = {() => props.whenTermClicked(props.id)}>
        <h2>Contractor: {props.contractor}</h2>
        <h4>Contracted Amount: ${props.fee}</h4>
        {/* <button onClick = {()=> props.whenTermClicked(props.id)}>DETAILS</button> */}
      </Card>
      {/* <hr/> */}
    </React.Fragment>
  )
}


Term.propTypes = {

}
export default Term;


