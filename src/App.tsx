import Contact from './components/Contact';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-slate-900 text-center py-6">
        <p className="text-gray-400">© 2024 DevOps.Pro. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;