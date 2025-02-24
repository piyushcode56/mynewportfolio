import React from 'react'
import './Project.css';
import { useParams } from 'react-router-dom';
import projects from '../Projects';
import { Link } from 'react-router-dom';
const Project = () => {
    const {projectname} = useParams();
    const project = projects.find((project) => project.title === projectname);
    console.log(project);
  return (
    <div className='project-page'>
        <div className="project-details">
        <Link to={'/'}><button><i class="fa-solid fa-arrow-left"></i> Back</button></Link>
        <div className="project-details-introduction">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
        </div>
        <div className="project-details-image">
            <h2>Images</h2>
            {
                project.images.map((image) => {
                    return <img src={image} alt="" />
                })
            }
        </div>
        <div className="project-details-video">
            <h2>Videos</h2>
            {
                project.videos.map((video) => {
                    return <video src={video} controls></video>
                })
            }
        </div>
        <div className="project-details-links">
            <button><a href={project.githubLink} target='_blank' style={{color:'white'}}>View GitHub</a></button>
        </div>
        </div>
        <h4 style={{backgroundColor:'black', color:'white', textAlign:'center'}}>Made by Piyush Jha</h4>
    </div>
  )
}

export default Project
