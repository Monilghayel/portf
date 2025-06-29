import React from 'react';

const ResumeContent = () => (
  <div className="min-h-screen bg-white">
    {/* Header */}
    <header className="bg-black text-white py-6 px-4 text-center">
      <h1 className="text-4xl font-bold mb-2">Monil Ghayel</h1>
      <div className="text-sm mb-1">
        <span className="mr-2">+91 9316290091</span>
        <a href="mailto:monilghayelbusiness@gmail.com" className="underline hover:text-gray-300 mr-2">monilghayelbusiness@gmail.com</a>
        <a href="https://www.linkedin.com/in/monilghayel" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300 mr-2">LinkedIn</a>
        <span>Surat, Gujarat - 395009</span>
      </div>
    </header>

    <main className="max-w-3xl mx-auto py-10 px-4">
      {/* Education */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b pb-1 mb-4">EDUCATION</h2>
        <div className="flex justify-between mb-2">
          <div>
            <div className="font-semibold">VEER NARMAD SOUTH GUJARAT UNIVERSITY, DEPT. OF ICT</div>
            <div>BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY (BSc IT)</div>
          </div>
          <div>2021 - 2024</div>
        </div>
        <div className="flex justify-between">
          <div>
            <div className="font-semibold">VEER NARMAD SOUTH GUJARAT UNIVERSITY, DEPT. OF ICT</div>
            <div>MASTER OF SCIENCE IN INFORMATION TECHNOLOGY (MSc IT)</div>
          </div>
          <div>2024 - Present</div>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b pb-1 mb-4">EXPERIENCE</h2>
        <div className="mb-4">
          <div className="font-semibold">CYBERSECURITY UMBRELLA | FULL-STACK Developer Intern (Surat, Gujarat)</div>
          <div className="text-sm text-gray-600">Oct-2024 – May-2025</div>
          <div className="mt-1 text-gray-800 text-sm">Contributed to coding, debugging, and cybersecurity projects using .NET Core, React.js, MySQL, and AWS, maintaining data confidentiality and applying best practices. Completed a six-month internship recognized for professionalism, teamwork, and proactive learning; tools used include Gophish and Keepnet.</div>
        </div>
        <div className="mb-4">
          <div className="font-semibold">ACMEGRADE / MOOD INDIGO IIT BOMBAY | Web Development Intern (Bengaluru, Karnataka)</div>
          <div className="text-sm text-gray-600">Feb-2024 – April-2024</div>
          <div className="mt-1 text-gray-800 text-sm">Completed internship in web development, showing dedication, hard work, and strong project performance. Recognized for commitment to learning and teamwork; worked with PHP, JavaScript, HTML, CSS, and MySQL.</div>
        </div>
        <div>
          <div className="font-semibold">KONCEPTCA EDUCATION | Data Entry Operator (Surat, Gujarat)</div>
          <div className="text-sm text-gray-600">March-2023 – May-2023</div>
          <div className="mt-1 text-gray-800 text-sm">Accurately entered and managed student, financial, and course data while ensuring integrity and confidentiality. Assisted with reports and record maintenance, developing strong attention to detail and time management skills.</div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b pb-1 mb-4">TECHNICAL SKILLS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <span className="font-semibold">Frontend:</span> React.js, JavaScript, HTML, CSS/Tailwind, JSF
          </div>
          <div>
            <span className="font-semibold">Backend:</span> ASP.NET Core, Node.js, Express.js, Java EE (Spring Boot)
          </div>
          <div>
            <span className="font-semibold">Database:</span> MySQL, MongoDB, Oracle, SQL Server
          </div>
          <div>
            <span className="font-semibold">Other technology:</span> C, Python, Java, PHP, VB.NET, Kotlin, PL/SQL, C#, Swift
          </div>
        </div>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-2xl font-bold border-b pb-1 mb-4">PROJECTS</h2>
        <div className="mb-4">
          <div className="font-semibold">PHISHING SIMULATION TOOL <span className="text-xs font-normal">[ASP.NET Core, React.js, TailwindCSS, SQL Server, AWS, SMTP]</span></div>
          <ul className="list-disc ml-6 text-gray-800 text-sm">
            <li>Build a phishing simulation tool for employees featuring a training lab, report dashboard, phishing tool, and mail templates.</li>
          </ul>
        </div>
        <div className="mb-4">
          <div className="font-semibold">MAKE YOUR TRIP TRAVEL MANAGEMENT SYSTEM <span className="text-xs font-normal">[ASP.NET Core, React.js, TailwindCSS, SQL Server]</span></div>
          <ul className="list-disc ml-6 text-gray-800 text-sm">
            <li>Built user and admin modules for managing travel bookings featuring trip booking, admin dashboard, and clean interface.</li>
          </ul>
        </div>
        <div className="mb-4">
          <div className="font-semibold">CITY BROKER PLATFORM FOR BROKERS TO CUSTOMER <span className="text-xs font-normal">[JSF, CSS, JAVA EE(REST), MySQL]</span></div>
          <ul className="list-disc ml-6 text-gray-800 text-sm">
            <li>Built common platform where broker can showcase their properties and customer can book those featuring property booking, appointment system, admin dashboard, and dynamic design.</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">MUSCLE & MIND FITNESS HUB <span className="text-xs font-normal">[Bootstrap, JavaScript, HTML, CSS, PHP, MySQL]</span></div>
          <ul className="list-disc ml-6 text-gray-800 text-sm">
            <li>Built Ecommerce site for gym product and gym manual for workout and diet featuring add to cart, diet calculator, workout manual, and admin reports.</li>
          </ul>
        </div>
      </section>
    </main>
  </div>
);

export default ResumeContent; 