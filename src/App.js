import './App.css';
import Lev from "./Lev.jpg";
import ikonaFB from "./ikona-fb.jpg"
import ikonaIG from "./ikona-ig.jpg"
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo">Čajka Kajka</div>
        <nav>
          <ul className="menu-links">
            <li><a href="Moje projekty">Moje projekty</a></li>
            <li><a href="Kontakty">Kontakt</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="text-part">
          <article className="cite">
            <h2>"Keď si smutný, tak nebuď"</h2>
            <p>Simona 2022</p>
          </article>
          <article className="about">
            <h2>O mně</h2>
            <p>
              Jmenuji se Herold. <br /> Mám stabilní práci jako vodič autobusu,
              <br /> ale ve volném čase dělám weby.<br /> Mám tři děti a rád vařím.
            </p>
          </article>
        </div>
        <div className="profile-image-part">
          <img src={Lev} alt="Lev" width="500" height="333" />
        </div>
      </main>
      <footer>
        <p>©STUDENTSKÁ UNIE UTB, 2022</p>
        <div className="contact-links">
          <a className="mail-link" href="mailto:su@utb.cz">su@utb.cz</a>
          <div className="socials">
            <a
              href="https://www.facebook.com/studentskaunieutb/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={ikonaFB} alt="fb ikona" />
            </a>
            <a
              href="https://www.instagram.com/studentskaunieutb/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={ikonaIG} alt="ig ikona" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
