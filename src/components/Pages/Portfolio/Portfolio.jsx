import React from 'react';
import Intro from '../Home/Intro';
import projects from '../../../Projects';
import FeatureCard from '../Home/FeatureCard';

function Portfolio() {

    return (
            <div>
                <Intro title={<h2 style={{color: 'grey'}} className='intro-title'><br/>Portfolio</h2>} />
                
               <div className='project-container'> 
               <h2 className='portfolio-title'>Projects</h2>
                
                    {projects.map( project => <div className='project-feature-card'> <FeatureCard key={project.id} project={project}/> </div>)}
               

               </div>
            
            </div>
            );
}

export default Portfolio;