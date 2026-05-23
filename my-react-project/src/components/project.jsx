import "./project.css"

function Project(props) {

    return(
    <div className="project">
        <h2 className="projectName">{props.title}</h2>
        <p className="projectText">{props.text}</p>
        <p className="projectTechList">{props.list}</p>
        <a href={props.projectLink} target="_blank" rel="noreferrer">
            <img src={props.image} alt="project image" className="projectImg" />
        </a>

    </div>
  )
}

export default Project