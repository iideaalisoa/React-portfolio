import React from 'react'
import './home.css'
import profile1 from "../assets/profile1.jpg"
import {FiMenu} from 'react-icons/fi'
import {BsFillPhoneFill, BsLinkedin, BsFacebook} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
function Navbar (){
    return(
        <nav>
        <div class="nav__content">
            <div class="logo"><a href="#">Stéphanie</a></div>
            <label for="check" class = "checkbox">
                <FiMenu />
            </label>
            <input type="checkbox" name="check" id="check"/>
            <ul>                
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Contacts</a></li>
            </ul>
        </div>
    </nav>
    )
}

const Home = () => {
  return (
    <div>
        <Navbar />
        
    <section class="section">
        <div class="section__container">
            <div class="content">
                <p class="subtitle">HELLO</p>
                <h1 class="title">
                    I'm <span>Stephanie <br/> </span>a Web Developer
                </h1>
                <p class="description">
                    Welcome to my web developer portfolio! My name is ANJARATIANA Idealisoa Stéphanie Ilaria,
                    computer science student at ISPM Antsobolo, M2. Passionate about web development,
                    here is the information about me and my contacts, you can also download my CV right here:s
                </p>
                <div class="action__btns">
                    
                    <button class="portfolio">Upload my CV</button>
                </div>
            </div>
            <div class="image">
                <img src={profile1} alt="profile1" />
            </div>
            
            <div >
                <p class="subtitle">SKILLS</p>
                <div className='skil-box'>
                    <span className='titleP'>HTML</span>
                    <div className='skil-bar'>
                        <span className='skil-per'>
                           {/* <span className='tooltip'></span>*/}
                        </span>
                    </div>
                </div>
                <div className='skil-box'>
                    <span className='titleP'>CSS</span>
                    <div className='skil-bar'>
                        <span className='skil-per css'>
                           {/* <span className='tooltip'></span>*/}
                        </span>
                    </div>
                </div>
                <div className='skil-box'>
                    <span className='titleP'>Javascript</span>
                    <div className='skil-bar'>
                        <span className='skil-per js'>
                            {/*<span className='tooltip'></span>*/}
                        </span>
                    </div>
                </div>
                <div className='skil-box'>
                    <span className='titleP'>NodeJS</span>
                    <div className='skil-bar'>
                        <span className='skil-per node'>
                            {/*<span className='tooltip'></span>*/}
                        </span>
                    </div>
                </div>
            </div>
            <div className='left'>
                <p class="subtitle">CONTACTS</p>
                <div className='contact'><BsFillPhoneFill/><span> Téléphone: </span> 034 16 155 89</div>   
                <div className='contact'><MdEmail/> <span> Email:</span>  stephanieilaria@gmail.com</div>
                <div className='contact'><BsLinkedin/> <span> LinkedIn:</span> Stephanie Ilaria</div> 
                <div className='contact'><BsFacebook/> <span> Facebook:</span> Stephanie Ilaria</div> 
            </div>
        </div>
    </section>
    </div>
  )
}

export default Home
