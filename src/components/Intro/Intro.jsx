import "./Intro.css";
import logo from "../../assets/logo-site.png"; 
import film from "../../assets/film.mp4"

function Intro() {
    return (
    <>
        <div className="container"></div>
            <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                <source src={film}/>
            </video>
            <img src={logo} className="logo-intro" alt="logo du site" />
                <a href="">
                    <span>ENTER</span>
                    <span>ENTER</span>
                </a>
        
    </>
        


    )

    }
export default Intro;