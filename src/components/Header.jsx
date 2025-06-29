const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="py-8 animate-fade-in-down">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-xl font-serif font-bold animate-slide-in-left">Monil Ghayel</h1>
        <nav className="flex items-center space-x-6 text-sm font-medium text-grey animate-slide-in-right">
          <a 
            href="mailto:monilghayelbusiness@gmail.com" 
            className="text-accent transition-all duration-300 hover:scale-105 hover:translate-y-[-1px]"
          >
            monilghayelbusiness@gmail.com
          </a>
          <a 
            href="https://www.linkedin.com/in/monil-ghayel" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-almost-black transition-all duration-300 hover:scale-105 hover:translate-y-[-1px]"
          >
            LinkedIn
          </a>
          <button 
            onClick={() => scrollToSection('hero')}
            className="hover:text-almost-black transition-all duration-300 hover:scale-105 hover:translate-y-[-1px] cursor-pointer"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('experience')}
            className="hover:text-almost-black transition-all duration-300 hover:scale-105 hover:translate-y-[-1px] cursor-pointer"
          >
            Experience
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="hover:text-almost-black transition-all duration-300 hover:scale-105 hover:translate-y-[-1px] cursor-pointer"
          >
            Projects
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header; 