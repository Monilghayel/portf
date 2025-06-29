const Footer = () => {
  return (
    <footer className="bg-cream py-20 animate-fade-in-up">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="animate-slide-in-left">
            <h3 className="text-lg font-serif font-bold">Monil Ghayel</h3>
            <p className="mt-2 text-sm text-grey">An independent full-stack developer from Surat, Gujarat, India.</p>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="font-bold text-sm text-accent tracking-widest">PAGES</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:text-almost-black transition-all duration-300 hover:scale-105 hover:translate-y-[-1px]">Home</a></li>
              <li><a href="#" className="hover:text-almost-black transition-all duration-300 hover:scale-105 hover:translate-y-[-1px]">Projects</a></li>
              <li><a href="#" className="hover:text-almost-black transition-all duration-300 hover:scale-105 hover:translate-y-[-1px]">About</a></li>
              <li><a href="#" className="hover:text-almost-black transition-all duration-300 hover:scale-105 hover:translate-y-[-1px]">Blog</a></li>
              <li><a href="#" className="hover:text-almost-black transition-all duration-300 hover:scale-105 hover:translate-y-[-1px]">Now</a></li>
            </ul>
          </div>
          <div className="animate-slide-in-right">
            <h4 className="font-bold text-sm text-accent tracking-widest">GET IN TOUCH</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="mailto:monilghayelbusiness@gmail.com" className="hover:text-almost-black transition-all duration-300 hover:scale-105 hover:translate-y-[-1px]">Email</a></li>
              <li><a href="https://www.linkedin.com/in/monilghayel" target="_blank" rel="noopener noreferrer" className="hover:text-almost-black transition-all duration-300 hover:scale-105 hover:translate-y-[-1px]">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 