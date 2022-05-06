import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  console.log(courseDetails)
  const {courseTitle, description, duration, tagsList} = courseDetails

  const renderTagsList = eachList => (
    <li className="list-item" key={eachList.id}>
      {eachList.name}
    </li>
  )
  return (
    <>
      <div className="course-timeline-card">
        <div className="courseTitle-duration">
          <h2 className="course-title">{courseTitle}</h2>
          <div className="icon-container">
            <AiFillClockCircle className="icon" />
            <p className="course-duration">{duration}</p>
          </div>
        </div>
        <p className="course-description">{description}</p>
        <ul className="tags-lists-container">
          {tagsList.map(eachList => renderTagsList(eachList))}
        </ul>
      </div>
    </>
  )
}

export default CourseTimelineCard
