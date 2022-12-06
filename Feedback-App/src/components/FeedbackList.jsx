import Feedbackitem from './FeedbackItem'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {
   const {feedback,deleteFeedback} = useContext (FeedbackContext)
  return (
    <div>
      <div className="feedback-list">
        {
            feedback.map((item)=>(
                <Feedbackitem 
                   data={item} 
                   key={item.id}>
                </Feedbackitem>
            ))
        }
      </div>
    </div>
  )
}


export default FeedbackList
