import React, { useEffect, useState } from 'react'
import resume from './Jo-Yu Wu Resume.pdf'
import yvideo from './yvideo.png'
import './App.css';

function App() {

  const [currentTime, setCurrentTime] = useState(new Date())
  

  useEffect(() => {
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
          <h1>Anita Wu</h1>
        </div>
      
       <p>Welcome to Anita's Personal Website</p>
        
        <h1 class="App-sub-headers">About me ! </h1>
        <p>Go yo BYU (go cougars!!)</p>
        <p>Major in master of information system management (MISM)</p>
        <p>Love swimming, help me relax and exercise, will go every week</p>
        <p>Enjoy programming, love how the code is connected</p>

        <h1 class="App-sub-headers">Skills I have ! !</h1>
        <div class="App-skills">
          <span>React</span>
          <span>JavaScript</span>
          <span>wordpress</span>
          <span>VBA</span>
          <span> ASP.NET</span>
          <span>mySQL</span>
          <span>C++</span>
          <span>git</span>
          <span>swift</span>
          <span>JAVA</span>
          <span>HTML/CSS</span>
        </div>

        <h1 class="App-sub-headers">Projects</h1>
        <p class="App-yvideo-text">
          I currently work as a web developer at BYU. Our team is developing a web-based system for streaming video and audio content using React/Redux. 
          <a href={'http://yvideo.byu.edu/'} target="_blank" rel="noreferrer">http://yvideo.byu.edu/</a>
        </p>
        <a href={'https://github.com/BYU-ODH/yvideo-client'} target="_blank" rel="noreferrer"><img src={yvideo} alt={'yvideo'} class="App-yvideo-img"></img></a>

        <h1 class="App-sub-headers">Contact Info</h1>
        <p>Email: anita248846@gmail.com</p>
        <p>Resume: <a href={resume} download>Click to download</a></p>
        <p>Github: <a href={'https://github.com/anita908'} target="_blank" rel="noreferrer">https://github.com/anita908</a></p>
        <div class="App-footer"></div>
      </header>
    </div>
  );
}

export default App;
