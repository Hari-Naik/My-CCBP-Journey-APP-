import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimelineView = item => {
    if (item.categoryId === 'COURSE') {
      return <CourseTimelineCard courseDetails={item} key={item.id} />
    }
    return <ProjectTimelineCard projectDetails={item} key={item.id} />
  }

  return (
    <div className="timeline-view-container">
      <h3 className="main-heading">My JOURNEY OF</h3>
      <p className="heading">CCBP 4.0</p>
      <div className="chrono-container">
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
          theme={{secondary: 'white'}}
        >
          {timelineItemsList.map(eachItem => renderTimelineView(eachItem))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
