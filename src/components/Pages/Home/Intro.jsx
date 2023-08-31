import React from 'react';

function Intro(props) {

    return (
            <div className='intro-container'>
               <h2 className='intro-name'>ANNE<br/>&nbsp;CHAIYATO</h2>
               <img className='intro-img' src='assets/headshot-smile-1.png' alt='smiley facial expression'></img> 
               {props.title}
            </div>
            );
}

export default Intro;