import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Resume = () => {
  const componentRef = useRef();

  const handleDownload = () => {
    const element = componentRef.current;

    html2canvas(element)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save('resume.pdf');
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-0.5">
      <header className="w-full bg-blue-800 text-white p-4 text-center">
        <h1 className="text-3xl font-bold">Resume</h1>
      </header>
      <main ref={componentRef} className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 mt-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
          <div className="text-gray-700">
            <p>Email: john.doe@example.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>LinkedIn: linkedin.com/in/johndoe</p>
            <p>GitHub: github.com/johndoe</p>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Professional Summary</h2>
          <p className="text-gray-700">
            Highly skilled and results-oriented software engineer with over 5 years of experience in developing web applications.
            Proficient in React, Node.js, and Tailwind CSS. Passionate about creating user-friendly and efficient applications.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Experience</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Software Engineer</h3>
            <p className="text-gray-700">ABC Company | Jan 2020 - Present</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Developed and maintained web applications using React and Node.js.</li>
              <li>Collaborated with cross-functional teams to define and implement new features.</li>
              <li>Optimized applications for maximum speed and scalability.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Junior Developer</h3>
            <p className="text-gray-700">XYZ Inc. | Jun 2017 - Dec 2019</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Assisted in the development of web applications using JavaScript and CSS.</li>
              <li>Performed code reviews and testing to ensure quality and performance.</li>
              <li>Contributed to the design and implementation of new features.</li>
            </ul>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Education</h2>
          <div>
            <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
            <p className="text-gray-700">University of Somewhere | Graduated May 2017</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-2">Skills</h2>
          <div className="text-gray-700">
            <p>React, Node.js, Tailwind CSS, JavaScript, HTML, CSS, Git, Agile Methodologies</p>
          </div>
        </section>
      </main>
      <div>
      <button
        onClick={handleDownload}
        className="mt-8 mr-3 bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Download Resume PDF
      </button>
      
      <button
        className="mt-8 bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        <a href="https://www.overleaf.com/" target="_blank" >Edit Resume Here</a>
      </button>
      </div>
      <footer className="w-full bg-blue-800 text-white p-4 text-center mt-8">
        <p>&copy; 2024 Job Alert. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Resume;
