import React from 'react'
import PropTypes from 'prop-types';

function Card({children, reverse}) {
   // console.log(children);
  return (
    <div className={`card ${reverse && 'reverse-active'}`}>  {/*conditional class in React*/}
      {children}
    </div>
  )
}

Card.propTypes = {
 children:PropTypes.node.isRequired,
 reverse:PropTypes.bool
}   

export default Card
