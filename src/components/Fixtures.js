import React from 'react';
import PLBG from '../img/PLBackground.jpg';
import uefa from '../img/uefa.mp4';
import uefabg from '../img/uefa.png';

const RowStyle = {
    // backgroundImage: `url(${uefabg})`,
    width: 'auto',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
  
const ColStyle = {
    opacity: 0.95,
};

const Header2Style = {
    // color: '#3d195b',
    color: 'white',
};

const Header3Style = {
    color: 'white',
  };

const Fixtures = (props) => {
    return (

        
        <div className="uefa">
                    <div className="Welcome" style={{position:"relative"}}>
            {/* <video autoPlay style={{
                position:"relative",
                width: "100%",
                zIndex: "0",
                opacity: "0.95",
            }}>
                <source type="video/mp4" src={uefa}/>  
                </video> */}
                <div className="overlay" style={{
                    // position: "absolute", //Important to keep video in background
                    top: "0",
                    bottom: "0",
                    left: "0",
                    zIndex: "1",
                    fontSize: "22px",
                    color: "white",
                    background: "#3d195b",
                    width: "100%",
                    opacity: "0.9",
                }}>
                    <div className="Header"  style={Header2Style}>
            <h2>So what's going in the Champions League?</h2>
        </div>
                    <div className="Row" style={RowStyle}>
        {/* <video
                autoPlay
                muted
                loop
                style={{
                position: "fixed",
                width: "100%",
                left: 0,
                top: 0
                }}
            >
                <source src={uefa} type="video/mp4" />
            </video> */}
            <div className="Col" style={ColStyle}>
            <h3 style={Header3Style}>Top Scorers</h3>
            <iframe frameborder="0"  scrolling="no" width="500" height="500"
            src="https://www.fctables.com/championsleague/iframe=/?type=top-scorers&lang_id=2&country=67&template=5&team=180530&timezone=America/New_York&time=24&limit=10&ppo=1&pte=1&pgo=1&pma=1&pas=1&ppe=1&width=500&height=700&font=Arial&fs=17&lh=34&bg=FFFFFF&fc=000000&logo=1&tlink=1&ths=1&thb=1&thba=fff7ff&thc=000000&bc=3d195b&hob=fafafa&hobc=947194&lc=333333&sh=0&hfb=0&hbc=610c61&hfc=FFFFFF">
            </iframe>
            </div>
            <div className="Col" style={ColStyle}>
            <h3 style={Header3Style}>Fixtures & Results</h3>
            <iframe frameborder="0"  scrolling="no" width="500" height="500" 
              src="https://www.fctables.com/championsleague/iframe/?type=league-scores&lang_id=2&country=67&template=5&team=180530&timezone=America/New_York&time=24&width=500&height=500&font=Arial&fs=17&lh=34&bg=FFFFFF&fc=000000&logo=1&tlink=1&scoreb=f4454f&scorefc=FFFFFF&sgdcoreb=3d195b&sgdcorefc=FFFFFF&sh=0&hfb=0&hbc=610c61&hfc=FFFFFF">
            </iframe>
            </div>
            {/* <div className="Col" style={ColStyle}>
            <h3 style={Header3Style}>Top Scorers</h3>
            <iframe frameborder="0"  scrolling="yes" width="520" height="500 " src="https://www.fctables.com/england/premier-league/iframe=/?type=top-scorers&lang_id=2&country=67&template=10&team=&timezone=Pacific/Midway&time=24&limit=30&ppo=1&pte=1&pgo=1&pma=1&pas=1&ppe=1&width=520&height=700&font=Verdana&fs=12&lh=22&bg=FFFFFF&fc=333333&logo=1&tlink=1&ths=1&thb=1&thba=FFFFFF&thc=000000&bc=dddddd&hob=f5f5f5&hobc=ebe7e7&lc=333333&sh=1&hfb=1&hbc=3bafda&hfc=FFFFFF"></iframe></div>
            <div className="Col" style={ColStyle}>
            <h3 style={Header3Style}>Fixtures & Results</h3>
            <iframe frameborder="0"  scrolling="yes" width="520" height="500" src="https://www.fctables.com/england/premier-league/iframe/?type=league-scores&lang_id=2&country=67&template=10&team=180231&timezone=Pacific/Midway&time=24&width=520&height=500&font=Verdana&fs=12&lh=22&bg=FFFFFF&fc=333333&logo=1&tlink=1&scoreb=f4454f&scorefc=FFFFFF&sgdcoreb=8f8d8d&sgdcorefc=FFFFFF&sh=1&hfb=1&hbc=3bafda&hfc=FFFFFF"></iframe>
            </div> */}
            </div>
            <div className="Row" style={RowStyle}>
            {/* <div className="Col" style={ColStyle}>
            <h3 style={Header3Style}>Last Match</h3>
            <iframe frameborder="0"  scrolling="no" width="520" height="200" src="https://www.fctables.com/teams/arsenal-180231/iframe/?type=team-last-match&lang_id=2&country=67&template=10&team=180231&timezone=Pacific/Midway&time=24&width=520&height=200&font=Verdana&fs=12&lh=22&bg=FFFFFF&fc=333333&logo=1&tlink=1&scfs=22&scfc=333333&scb=1&sclg=1&teamls=80&sh=1&hfb=1&hbc=3bafda&hfc=FFFFFF"></iframe>
            </div>
            <div className="Col" style={ColStyle}>
            <h3 style={Header3Style}>Next Match</h3>
            <iframe frameborder="0"  scrolling="no" width="520" height="200" src="https://www.fctables.com/teams/arsenal-180231/iframe/?type=team-next-match&lang_id=2&country=67&template=10&team=180231&timezone=Pacific/Midway&time=24&width=520&height=200&font=Verdana&fs=12&lh=22&bg=FFFFFF&fc=333333&logo=1&tlink=1&scfs=22&scfc=333333&scb=1&sclg=1&teamls=80&sh=1&hfb=1&hbc=3bafda&hfc=FFFFFF"></iframe></div> */}
        </div>
                    <div className="copyright" style={{position: "absolute", bottom: 0, fontSize: "12px"}}>
                        <p style={{
                            padding: "10px 0",
                            margin: "0 10px",
                        }}>&copy;All rights reserved by UEFA.</p>
                    </div>
                </div>
        </div>

        {/* <div className="Header"  style={Header2Style}>
            <h2>So what's going in the Champions League?</h2>
        </div>
        <div className="Row" style={RowStyle}>
        <video
                autoPlay
                muted
                loop
                style={{
                position: "fixed",
                width: "100%",
                left: 0,
                top: 0
                }}
            >
                <source src={uefa} type="video/mp4" />
            </video>
            <div className="Col" style={ColStyle}>
            <h3 style={Header3Style}>Top Scorers</h3>
            <iframe frameborder="0"  scrolling="no" width="500" height="500"
            src="https://www.fctables.com/championsleague/iframe=/?type=top-scorers&lang_id=2&country=67&template=5&team=180530&timezone=America/New_York&time=24&limit=10&ppo=1&pte=1&pgo=1&pma=1&pas=1&ppe=1&width=500&height=700&font=Arial&fs=17&lh=34&bg=FFFFFF&fc=000000&logo=1&tlink=1&ths=1&thb=1&thba=fff7ff&thc=000000&bc=3d195b&hob=fafafa&hobc=947194&lc=333333&sh=0&hfb=0&hbc=610c61&hfc=FFFFFF">
            </iframe>
            </div>
            <div className="Col" style={ColStyle}>
            <h3 style={Header3Style}>Fixtures & Results</h3>
            <iframe frameborder="0"  scrolling="no" width="500" height="500" 
              src="https://www.fctables.com/championsleague/iframe/?type=league-scores&lang_id=2&country=67&template=5&team=180530&timezone=America/New_York&time=24&width=500&height=500&font=Arial&fs=17&lh=34&bg=FFFFFF&fc=000000&logo=1&tlink=1&scoreb=f4454f&scorefc=FFFFFF&sgdcoreb=3d195b&sgdcorefc=FFFFFF&sh=0&hfb=0&hbc=610c61&hfc=FFFFFF">
            </iframe>
            </div>
        </div> */}
        </div>
    );
};

export default Fixtures;
