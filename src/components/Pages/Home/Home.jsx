import React from 'react';
import Intro from './Intro';
import Feature from './Feature';


function Home() {

    return (
        <div>
            <Intro title={<h2 className='intro-title'>Design<br/>&nbsp;&nbsp;Develop</h2>}/>
            <Feature />
        </div>
        );
}

export default Home;