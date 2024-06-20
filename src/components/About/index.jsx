import React from 'react'

const About = () => {
  return (
  <div className=" bg-gray-100 flex flex-col items-center py-0.5">
    <header className="w-full bg-blue-800 text-white p-4 text-center">
      <h1 className="text-3xl font-bold">About Us</h1>
    </header>
    <main className="flex flex-col md:flex-row items-center mt-8 space-y-6 md:space-y-0 md:space-x-6 mx-4">
      <div className="flex-1">
        <img
          src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Team"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
        <p className="text-gray-700 mb-4">
        Welcome to Job Alert., where we connect job seekers in a seamless and efficient manner. Our dedicated team is passionate about creating a platform that simplifies the job search process, making it easier for candidates to find their dream jobs and for employers to discover the perfect talent. We cater to a diverse range of industries, ensuring a wide array of opportunities for every job seeker.
        </p>
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-4">
        Our mission is to empower individuals and businesses by providing a comprehensive job portal that bridges the gap between talent and opportunity. For job seekers, we offer an extensive database of job listings, along with tools and resources to enhance their job search experience. Whether you're a recent graduate, an experienced professional, or looking to change careers, we are here to support your journey. For employers, we provide access to a vast pool of qualified candidates, advanced search filters, and applicant tracking features to streamline the hiring process.
        </p>
        <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
        <p className="text-gray-700 mb-4">
        Our vision is to be the leading job portal that transforms the way people find and secure employment. We strive to make job opportunities accessible to everyone, regardless of location or background. Through continuous innovation and user-friendly features, we aim to create a community where job seekers and employers can connect effortlessly, fostering growth and success for all.
        </p>
      </div>
    </main>
    <footer className="w-full bg-blue-800 text-white p-4 text-center mt-8">
      <p>&copy; 2024 Job Alert. All rights reserved.</p>
    </footer>
  </div>
);
}
  

export default About


