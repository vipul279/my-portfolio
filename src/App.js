import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App h-screen relative">
    <div
      className="fixed  -top-2 -left-3 -right-3 bottom-0 border-red-500 animate-border-glow bg-[url('https://img.freepik.com/free-vector/gradient-hexagonal-background_23-2148946476.jpg?semt=ais_hybrid')] bg-cover bg-center blur-custom overflow-hidden"
    ></div>
    <div className="relative z-10">
      <Header />
      <About />
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  </div>
  );
}

export default App;
