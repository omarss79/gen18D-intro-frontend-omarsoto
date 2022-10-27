import React from 'react';
import NavBar from './components/NavBar';
import SearchPage from './pages/SearchPage';
import CreatePage from './pages/CreatePage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <React.Fragment>
      <div>
        <span>Componente App!</span>
      </div>
      <NavBar></NavBar>

      <SearchPage/>
      <CreatePage/>
      <AboutPage/>

    </React.Fragment>
  );
}

export default App;
