import backgroundImage from './assets/background_1.jpg';
import logo from './assets/logo.png';

import './App.css';

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <header className="App-header">
        <div class="container">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="iframe">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSejqwUBCnXTtsHslcPdawc-SysO0qBog1ryFRiRbrzJuxwG9w/viewform?embedded=true"
              width="640"
              height="960"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              title="tonebirds survery"
            >
              Loading…
            </iframe>
          </div>
        </div>
        <div class="credit">
          Photo by{' '}
          <a href="https://unsplash.com/@claybanks?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Clay Banks
          </a>{' '}
          on{' '}
          <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Unsplash
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
