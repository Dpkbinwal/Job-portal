import React from 'react'

const About = () => {
  return (
  <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
    <header className="w-full bg-blue-600 text-white p-4 text-center">
      <h1 className="text-3xl font-bold">About Us</h1>
    </header>
    <main className="flex flex-col md:flex-row items-center mt-8 space-y-6 md:space-y-0 md:space-x-6">
      <div className="flex-1">
        <img
          src="https://via.placeholder.com/600"
          alt="Team"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
        <p className="text-gray-700 mb-4">
          We are a dedicated team of professionals committed to providing the best services to our clients.
          Our goal is to offer innovative solutions and unparalleled support.
        </p>
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-4">
          Our mission is to drive success through quality and commitment. We aim to exceed expectations in all
          aspects of our work and create lasting relationships with our clients.
        </p>
        <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
        <p className="text-gray-700 mb-4">
          To be the leading provider of top-notch services, continuously improving and adapting to meet the
          changing needs of our clients and the market.
        </p>
      </div>
    </main>
    <footer className="w-full bg-blue-600 text-white p-4 text-center mt-8">
      <p>&copy; 2024 Our Company. All rights reserved.</p>
    </footer>
  </div>
);
}
  

export default About


