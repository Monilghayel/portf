const Hero = () => {
  return (
    <section id="hero" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in-up">
          <h2 className="text-4xl font-serif leading-tight animate-slide-in-left">
            I'm Monil Ghayel, an independent software developer from Surat, Gujarat.
          </h2>
          <p className="mt-6 text-grey animate-slide-in-right">
            I am a full-stack developer with experience in .NET Core, React.js, MySQL, AWS, and more. I have interned at Cybersecurity Umbrella, Acmegrade/Mood Indigo IIT Bombay, and Konceptca Education. I am passionate about building secure, scalable, and user-friendly applications, and I enjoy helping companies get their products and ideas off the ground.
          </p>
          <div className="mt-6 flex space-x-4 animate-fade-in-up-delayed">
            <a 
              href="mailto:monilghayelbusiness@gmail.com" 
              className="text-grey hover:text-almost-black transition-all duration-300 hover:scale-105 hover:translate-y-[-2px]"
            >
              Email
            </a>
            <a 
              href="https://www.linkedin.com/in/monilghayel" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-grey hover:text-almost-black transition-all duration-300 hover:scale-105 hover:translate-y-[-2px]"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 