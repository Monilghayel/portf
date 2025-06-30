import React from 'react';

const Experience = () => (
  <section id="experience" className="py-20">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-serif mb-8 animate-slide-in-left">Experience</h2>
      <div className="mb-8 flex items-start gap-3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <img src="https://logo.clearbit.com/cybersecurityumbrella.com" alt="Cybersecurity Umbrella Logo" className="rounded-full w-12 h-12 object-cover mt-1 bg-white p-1 border transition-all duration-300 hover:scale-110" onError={(e) => {e.target.onerror=null;e.target.src='https://placehold.co/48x48?text=CU';}} />
        <div>
          <div className="font-bold transition-all duration-300 hover:text-accent">CYBERSECURITY UMBRELLA | FULL-STACK Developer Intern (Surat, Gujarat)</div>
          <div className="text-sm text-gray-600">Oct-2024 – May-2025</div>
          <div className="mt-1 text-grey text-sm">Contributed to coding, debugging, and cybersecurity projects using .NET Core, React.js, MySQL, and AWS, maintaining data confidentiality and applying best practices. Completed a six-month internship recognized for professionalism, teamwork, and proactive learning; tools used include Gophish and Keepnet.</div>
          <div className="mt-3 flex gap-4 items-center">
            <a href="https://drive.google.com/file/d/1a_x0cjALzovqFrXVmJjyBeWZOVMzCHuv/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-block bg-accent text-red-600 text-xs font-semibold px-2 py-1 rounded-full border border-red-400 text-xs text-accent underline transition-all duration-300 hover:scale-105 hover:translate-y-[-1px]">View Certificate 1</a>
            <a href="https://drive.google.com/file/d/1dXgkvfp-Wk8xDcVxKIZKmO6qNOJMxJaW/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-block bg-accent text-red-600 text-xs font-semibold px-2 py-1 rounded-full border border-red-400 text-xs text-accent underline transition-all duration-300 hover:scale-105 hover:translate-y-[-1px]">View Certificate 2</a>
          </div>
        </div>
      </div>
      <div className="mb-8 flex items-start gap-3 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <img src="https://logo.clearbit.com/acmegrade.com" alt="Acmegrade Logo" className="rounded-full w-12 h-12 object-cover mt-1 bg-white p-1 border transition-all duration-300 hover:scale-110" onError={(e) => {e.target.onerror=null;e.target.src='https://placehold.co/48x48?text=AG';}} />
        <div>
          <div className="font-bold transition-all duration-300 hover:text-accent">ACMEGRADE / MOOD INDIGO IIT BOMBAY | Web Development Intern (Bengaluru, Karnataka)</div>
          <div className="text-sm text-gray-600">Feb-2024 – April-2024</div>
          <div className="mt-1 text-grey text-sm">Completed internship in web development, showing dedication, hard work, and strong project performance. Recognized for commitment to learning and teamwork; worked with PHP, JavaScript, HTML, CSS, and MySQL.</div>
          <div className="mt-3 flex gap-4 items-center">
            <a href="https://drive.google.com/file/d/1TNRAS186yGLc6G3zLZAinhhWFktKk7sO/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-block bg-accent text-red-600 text-xs font-semibold px-2 py-1 rounded-full border border-red-400  text-xs text-accent underline transition-all duration-300 hover:scale-105 hover:translate-y-[-1px]">Internship Certificate</a>
            <a href="https://drive.google.com/file/d/1ntyHJvx_BI6XOhV5ZTA1GVZgBzFO3RFq/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-block bg-accent text-red-600 text-xs font-semibold px-2 py-1 rounded-full border border-red-400 text-xs text-accent underline transition-all duration-300 hover:scale-105 hover:translate-y-[-1px]">Training Certificate</a>
          </div>
        </div>
      </div>
      <div className="flex items-start gap-3 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <img src="https://logo.clearbit.com/konceptca.com" alt="Konceptca Education Logo" className="rounded-full w-12 h-12 object-cover mt-1 bg-white p-1 border transition-all duration-300 hover:scale-110" onError={(e) => {e.target.onerror=null;e.target.src='https://placehold.co/48x48?text=KE';}} />
        <div>
          <div className="font-bold transition-all duration-300 hover:text-accent">KONCEPTCA EDUCATION | Data Entry Operator (Surat, Gujarat)</div>
          <div className="text-sm text-gray-600">March-2023 – May-2023</div>
          <div className="mt-1 text-grey text-sm">Accurately entered and managed student, financial, and course data while ensuring integrity and confidentiality. Assisted with reports and record maintenance, developing strong attention to detail and time management skills.</div>
        </div>
      </div>
    </div>
  </section>
);

export default Experience; 