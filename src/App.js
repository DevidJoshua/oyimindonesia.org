
import React from 'react';
import logo from './logo.png'

function App() {
  return (
   <div>
      <video autoPlay="autoPlay" loop="loop"  muted style={{position:'absolute',zIndex:1,margin:0,padding:0,opacity:0.2,objectFit:'cover',overflow:'hidden'}} className="size1" width={'auto'} height={1009}>
       <source src="http://media.oyimindonesia.org/video-profile.mp4" type="video/mp4"/>
      </video>
      <div className="bg-g1 size1 flex-w flex-col-c-sb p-l-15 p-r-15 p-t-55 p-b-35 respon1">
        
        <div style={{zIndex:10}}>
          <span />
            <div className="flex-col-c p-t-50 p-b-50">
            <h3 className="l1-txt1 txt-center p-b-10">
              One Year In Mission Indonesia
            </h3>
            <p className="txt-center l1-txt2 p-b-60">
              Our website is under construction
            </p>
            <div className='flex-w flex-c cd100 p-b-82'>
              <img src={logo} style={{width:'20%'}}/>
            </div>
            {/* <div className="flex-w flex-c cd100 p-b-82">
              <div className="flex-col-c-m size2 how-countdown">
                <span className="l1-txt3 p-b-9 days">35</span>
                <span className="s1-txt1">Days</span>
              </div>
              <div className="flex-col-c-m size2 how-countdown">
                <span className="l1-txt3 p-b-9 hours">17</span>
                <span className="s1-txt1">Hours</span>
              </div>
              <div className="flex-col-c-m size2 how-countdown">
                <span className="l1-txt3 p-b-9 minutes">50</span>
                <span className="s1-txt1">Minutes</span>
              </div>
              <div className="flex-col-c-m size2 how-countdown">
                <span className="l1-txt3 p-b-9 seconds">39</span>
                <span className="s1-txt1">Seconds</span>
              </div>
            </div> */}
            <button className="flex-c-m s1-txt2 size3 how-btn" onClick={()=>window.locattion='https://web.facebook.com/oneyearinmissionindonesia'}>
              Follow us for update now!
            </button>
          </div>
        </div>
        <span className="s1-txt3 txt-center">
            @ 2020 One Year In Mission Indonesia official website
          </span>
      </div>
   </div>

  );
}

export default App;
