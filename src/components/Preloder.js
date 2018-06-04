import React from "react";

class Preloder extends React.Component {

    render() {
        return (
            <div className="bubblewrapper preloader bubblecloudloader row">
            <div >
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="sun"></div>
                
                <p className="line-1 anim-typewriter">When the app is loading hover on the cloud ;-)!</p>
                </div>
            </div>
        );

    }

}

export default Preloder;