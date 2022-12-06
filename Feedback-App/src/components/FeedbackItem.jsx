import { FaTimes,FaEdit } from 'react-icons/fa'
import Card from "./shared/Card"
import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext'
import { useContext } from 'react'

function FeedbackItem({data}) {
  const {editFeedback, deleteFeedback} = useContext(FeedbackContext)
  
  return (
    
      <Card reverse={false}>
        <div className="num-display">{data.rating}</div>
        <button className="close" 
         onClick={()=>{ deleteFeedback(data.id)}}>
          <FaTimes color="purple"/>
        </button>
        <button className='edit' onClick={()=>editFeedback(data)}>
          <FaEdit color="purple"/>
        </button>
        <div className="text-display">{data.text}</div>
      </Card>
    
  )
}

FeedbackItem.propTypes = {
  data:PropTypes.object.isRequired
  }

export default FeedbackItem
