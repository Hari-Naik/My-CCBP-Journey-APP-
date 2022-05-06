import './index.css'
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    categoryId,
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails

  return (
    <div className="project-details-container">
      <img src={imageUrl} alt={categoryId} className="project-img" />
      <div className="title-duration">
        <h3 className="project-title">{projectTitle}</h3>
        <div className="duration-card">
          <AiFillCalendar className="icon" />
          <p className="project-duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl} className="link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
