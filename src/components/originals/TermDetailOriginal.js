import React from 'react';
import PropTypes from 'prop-types';

function TermDetail(props) {
  const { term, onClickingDelete, onClickingEdit } = props;

  return(
    <React.Fragment>
      <h1>Term Detail</h1>
      <h2>{ term.name }</h2>
      <p>{ term.body }</p>
      <button onClick={ () => onClickingDelete(term.id) }>Delete </button>
      <button onClick={ onClickingEdit }>Edit </button>
    </React.Fragment>
  )
}

TermDetail.propTypes = {
  term: PropTypes.object,
  onClickingDelete: PropTypes.func
}

export default TermDetail;