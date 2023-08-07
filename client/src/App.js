import logo from './logo.svg';
import './App.css';
// import IndexPage from './components/pages/IndexPage';
// import DonatePage from './components/pages/DonatePage';
import HeaderPage from './components/pages/HeaderPage';
import FooterPage from './components/pages/FooterPage';
import Content from './components/pages/Content'

function App() {
  return (
    <>
      <HeaderPage />
      {/* <IndexPage /> */}
      {/* <DonatePage /> */}
      {<Content />}
      <FooterPage />
    </>
  );
}

export default App;