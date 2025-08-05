import React from 'react';
import Video from '../assets/vid/video.mp4';

class OmOss extends React.Component {
    render() {
        return (
            <section className="aboutUsSection">
        <div id="aboutUsContainer">
            <div className="weAreThaiVagnen"><h2>Vi är Thai-vagnen</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, nihil non sapiente dicta veniam culpa fugiat commodi aliquid dolores, itaque nobis harum ducimus odit expedita. Vero consequatur nobis itaque id?
                </p>
            </div>

               <video controls src ={Video} class = "video"></video>
            
    
        </div>
            </section>
        );
    }
}

export default OmOss;