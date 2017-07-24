import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active, selector, onClick }) => {
  if (active) {
    return <span className="label label-info">{selector}</span>
  }

  return (
    <span onClick={e => {onClick()}}>{selector}</span>
  );
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  selector: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;