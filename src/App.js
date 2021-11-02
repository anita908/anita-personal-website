import React, { useEffect, useState } from 'react'

import Anita from './HandWriting/HandWritingAnita'
import resume from './Utility/Jo-Yu Wu Resume.pdf'
import yvideo from './Utility/yvideo.png'
import { setTextAnimation } from './setTextAnimation'
import './App.css';

function App() {

  const [currentTime, setCurrentTime] = useState(new Date())
  
  useEffect(() => {
    setTextAnimation(0.1,5,0,'linear','#ffffff',true)

    var timer = setInterval(()=>setCurrentTime(new Date()), 1000 )
    return function cleanup() {
        clearInterval(timer)
    }
  })

  return (
    <div className="App">
      <header className="App-header ">
        <div className="App-overflow" />
        <div className="App-title">
          <p>{currentTime.toLocaleDateString()} {currentTime.toLocaleTimeString()} </p>
          <Anita />
        </div>

        <div>
          <span className="App-sub-title">Welcome to Anita's Personal Website</span>
        </div>

        <h1 className="App-sub-headers">About me !</h1>
        <div className="App-description">
          <p>My name is Jo-Yu, but I go with <span>Anita</span></p>
          <p>I Go to <span>BYU</span> (go cougars!!)</p>
          <p>Major in master of information system management <span>(MISM)</span></p>
          <p>Love swimming, it helps me relax and exercise, must go every week !</p>
          <p>Enjoy programming, I love how the code is connected</p>
          <p>Love BYU slogan/motto, 'Enter to Learn; Go Forth to Serve', I hope to apply all I learn to serve others</p>
        </div>

        <h1 className="App-sub-headers">Skills I have ! !</h1>
        <div className="App-skills">
          <span>React</span>
          <span>Redux</span>
          <span>JavaScript</span>
          <span>WordPress</span>
          <span>VBA</span>
          <span>ASP.NET</span>
          <span>MySQL</span>
          <span>C++</span>
          <span>Git</span>
          <span>Swift</span>
          <span>JAVA</span>
          <span>HTML/CSS</span>
        </div>

        <h1 className="App-sub-headers">Projects ⟡</h1>

        <h1 className="App-third-headers">Yvideo -</h1>
        <p className="App-project-text">
          I currently work as a <span>front end developer at BYU</span>. Our team is developing a web-based system for streaming video and audio content using React/Redux. 
          <a href={'http://yvideo.byu.edu/'} target="_blank" rel="noreferrer">http://yvideo.byu.edu/</a>
        </p>
        <a href={'https://github.com/BYU-ODH/yvideo-client'} target="_blank" rel="noreferrer"><img className="App-yvideo-img"  src={yvideo} alt={'yvideo'} ></img></a>

        <h1 className="App-third-headers">CodeWell -</h1>
        <p className="App-project-text">
          I had entrepreneurial experience to <span>start a company</span>. Our team had established an <span>educational platform</span> written by Typescript, aiming to teach programming via the Internet. 
        </p>
        <p className="App-project-text">
          Following are our Github repositories and a short youtube video to show our students how to submit their assignments.
        </p>
        <div className="App-codewell-link">
          <p>Github: </p>
          <a href={'https://github.com/anita908/codewell-portal'} target="_blank" rel="noreferrer">Portal</a>
          <a href={'https://github.com/anita908/codewell-server'} target="_blank" rel="noreferrer">Server</a>
        </div>
        <div className="App-codeWell-video">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/J80DjuLNpBo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>

        <h1 className="App-sub-headers">Contact Info</h1>
        <div className="App-contact">
          <p>Email: anita248846@gmail.com</p>
          <p>Resume: <a href={resume} download>Click to download</a></p>
          <p>LinkedIn: <a href={'https://www.linkedin.com/in/joyu-wu/'} target="_blank" rel="noreferrer">https://www.linkedin.com/in/joyu-wu/</a></p>
          <p>Github: <a href={'https://github.com/anita908'} target="_blank" rel="noreferrer">https://github.com/anita908</a></p>
        </div>
        <div className="App-footer">
          <footer> <small>&copy; Copyright {new Date().getFullYear()}, Jo-Yu Wu</small> </footer>
        </div>
      </header>
    </div>
  );
}

export default App;
