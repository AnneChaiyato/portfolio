import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import FeatureCard from './FeatureCard';
import projects from '../../../Projects';

function Feature(props) {

    const responsive = {
        superLargeDesktop: {
            breakpoint: {max: 4000, min: 3000 },
            items: 4,
            
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3,

        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };

    return (
        <div className='feature-container'>
            <h3>PROJECTS</h3>
            <Carousel
                ssr 
                responsive={responsive}    
                infinite={true}
                itemClass="feature-card">

                {projects.map(project => { 
                return <FeatureCard key={project.id} project={project} page='home'/>})}
  
            </Carousel>
        </div>
        
        );

}

export default Feature;