import React from 'react';
import Intro from '../Home/Intro';


function About() {
    return (
        <div className='about-container'>
            <Intro title={<h2 className='intro-title' style={{color: 'grey'}}><br/>About&nbsp;Me</h2>}/>
            <div className='about-summary'>
                <h2>Summary</h2>
                {<p className="summary-content">
                I'm a recent Computer Science graduate from the University of Victoria. Throughout my academic journey, I've acquired the fundamentals of Computer Science, including <b>data structures</b>, <b>algorithms</b>, <b>computer networking</b>, <b>programming languages</b>, and <b>problem-solving skills</b> (arguably the most important skill).
                I enjoy solving problems and challenging myself by learning new things, whether it's a <b>new language</b> or <b>framework</b>. I've worked with various programming languages such as <b>Python</b>, <b>C</b>, <b>C++</b>, and <b>Shell</b> scripting for <b>automating</b> tests during my time at the university.<br /><br />
                Recently, my focus has been on <b>full-stack</b> development, allowing me to work with both <b>front-end</b> and <b>back-end technologies</b>. I've gained proficiency in <b>HTML/CSS</b>, <b>JavaScript</b>, <b>Node.js</b>, <b>React</b>, <b>NoSQL</b>, and <b>Docker</b>.<br />
                What truly excites me is the process of turning a <b>vision</b> into <b>reality</b> and witnessing it spring to life.
                </p>}
            </div>
            <div className='hobby-container'>
                <h2 className='hobby-title'> Other things I enjoy </h2>
                {/* Section 1 */}
                <div className='hobby-section-l'>
                    <div className='left-img'>
                        <img className='l-img-1' src='/assets/nature3.png' alt='nature view' loading='lazy'/>
                        <img className='l-img-2' src='/assets/nature1.png' alt='nature view' loading='lazy'/>
                    </div>
                    <div className='hobby-content'>
                        <h3>Hiking</h3>
                        <p>I'm fortunate enough to live on Vancouver Island in British Columbia, Canada, where nature is abundant. Hiking is one of my favorite activities to do. What's not to like about pushing your boundaries and being rewarded with beautiful natural scenery? Here is a list of hikes I have enjoyed and would recommend to anyone to try out: Mt. Work | Jocelyn Hill | Mt. Wells </p>
                    </div>
                </div>
                {/* Section 2 */}
                <div className='hobby-section-r'>
                    <div className='hobby-content'>
                            <h3>SUP</h3>
                            <p>Another perk of living on an island is that there're water all around. I enjoy paddleboarding in the Summer. There's something oddly soothing about skimming the water's surface while doing a balancing act on the board, all to avoid an unplanned splashdown. It's like a crash course in mindfulness—just you, the board, and the task of staying dry! </p>
                    </div>
                    <div className='right-img'>
                        <img className='r-img-1' src='assets/paddleboard0.png' alt='a person carrying many paddleboard bags' loading='lazy'/>
                        <img className='r-img-2' src='assets/paddleboard1.png'alt='paddleboard in the ocean' loading='lazy'/>
                    </div>
                </div>
                {/* Section 3 */}
                <div className='hobby-section-l'>
                    <div className='right-img sm-img'>
                        <img className='r-img-1' src='assets/garden0.png' alt='pea plant' loading='lazy'/>
                        <img className='r-img-2' src='assets/garden2.png' alt='tomato plant' loading='lazy'/>
                    </div>
                    <div className='hobby-content'>
                        <h3>Garden</h3>
                        <p>Gardening is where I unwind and find my peace. It's my go-to spot for relaxation, allowing me to escape the daily hustle. The simple pleasure of watching my plants grow, seeing each new leaf emerge, fills me with joy. It's like a series of small, delightful surprises that unfold gradually over time. </p>
                    </div>
                </div>
                {/* Section 4 */}
                <div className='hobby-section-r'>
                    <div className='hobby-content'>
                            <h3>Donuts</h3>
                            <p>Donuts are my guilty pleasure. I love everything about them—the soft, doughy texture and the sugary sweetness. Yum!😋 </p>
                    </div>
                    <div className='right-img'>
                        <img className='r-img-1' src='assets/donut1.png' alt='a box of donuts' loading='lazy'/>
                        <img className='r-img-2' src='assets/donut2.png' alt='hand holding a donut' loading='lazy'/>
                    </div>
                </div>
            </div>
        </div>);
}

export default About;