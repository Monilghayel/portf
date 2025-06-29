const PortfolioBanner = () => {
  return (
    <div className="bg-black text-center py-4 animate-fade-in-up">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-white text-sm">
          Want to know more about me ?.{' '}
          <a 
            href="https://www.linkedin.com/in/monil-ghayel" 
            className="underline text-accent transition-all duration-300 hover:scale-105 hover:translate-y-[-1px]"
          >
            View on LinkedIn
          </a>
        </p>
      </div>
    </div>
  );
};

export default PortfolioBanner; 