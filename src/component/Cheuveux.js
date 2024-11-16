import React from 'react';
import './Cheuveux.css';
import Byfoufaa from '../Image/Byfoufaa.jpg';
import Panier from '../Image/Panier.png';
import signup from '../Image/signup.png';
import login from '../Image/login.png';
import Bracelet1 from '../Image/Bracelet1.jpg';
import Bracelet2 from '../Image/Bracelet2.jpg';
import Bracelet3 from '../Image/Bracelet3.jpg';
import Bracelet4 from '../Image/Bracelet4.jpg';
import Bracelet5 from '../Image/Bracelet5.jpg';
import Bracelet6 from '../Image/Bracelet6.jpg';
import Bracelet7 from '../Image/Bracelet7.jpg';
import Bracelet8 from '../Image/Bracelet8.jpg';
import Bracelet9 from '../Image/Bracelet9.jpg';
import Bracelet10 from '../Image/Bracelet10.jpg';
import Bracelet11 from '../Image/Bracelet11.jpg';
import Bracelet12 from '../Image/Bracelet12.jpg';
import Bracelet13 from '../Image/Bracelet13.jpg';
import Bracelet14 from '../Image/Bracelet14.jpg';
import Bracelet15 from '../Image/Bracelet15.jpg';
import image2 from '../Image/image2.jpg';




function Cheuveux() {
    return (
      <div>
        <div>

<div className="container">
        <header>
          <div  >
            <div className='block' ><h3>By-foufaa</h3></div>
            <div className='block' id="société">
            <img className='image' src={Byfoufaa} alt="logo by-foufaa"></img>   
            </div>
      
            <div className='block' id="search"> 
              <input  style={{ height: '40px' }} type="search" placeholder="Rechercher..." /> 
            </div>
            
            <div className='block' id="lien"> 
              <nav>
                <ul>
                  <li><a href="/Connexion"><img src={login} width= '40px'  height='40px' ></img></a></li>
                  <li><a href="/Compte"><img src={signup} width= '40px'  height='40px'></img></a></li>
                  <li><a href="/panier" > <img src={Panier} width= '50px'  height='50px'></img></a></li>
                </ul>
              </nav>
            </div>
          </div>
          </header>
          </div>

          <div>
        <footer>
          <div >
            <div id="footer-left">
              <h3>Contactez-nous</h3>
              <p>MasjedAissa, Monastir</p>
              <p>+216 27 820 895</p>
              <p>by-foufaa</p>
            </div>
            <div id="footer-center">
              <h3>Nos catégories</h3>   <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">whatsapp</a></li>
                <li><a href="#">Instagram</a></li>
              </ul>
            </div>
            <div id="footer-right">
              <h3>Suivez-nous</h3>
              <ul>
                <li><a href="/Collier">Collier</a></li>
                <li><a href="/Bracelet">Bracelet</a></li>
                <li><a href="/Boucles d'oreilles">Boucles d'oreilles</a></li>
		            <li><a href="/Cheuveux">Cheuveux</a></li>
              </ul>
            </div>
            <div id="footer-right1">
              <ul >
                <li><a href="/Sac">Sac</a></li>
                <li><a href="/Téléphone">Téléphone</a></li>
		            <li><a href="/Bague">Bague</a></li>
		            <li><a href="/Montre">Montre</a></li>
              </ul>
            </div>
            <div id="footer-bottom">
              <p>&copy; 2023 Plateforme de vente en ligne. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </div>
      </div>
       
        </div>
      

      


    )
}

export default Cheuveux;

