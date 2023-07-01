import React from 'react';
import CandidateSearchPage from './CandiateSearchPage';


const Homepage = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-900 to-blue-700 text-white">
   
      <main className="max-w-4xl mx-auto py-8 px-8">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">Streamline Your Hiring Process</h1>
          <p className="text-lg mb-8">Discover the power of our online recruitment solution.</p>
          <a href="/features" className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-md">Learn More</a>
        </section>
        <CandidateSearchPage />
        <section className="flex justify-center mt-16">
          <img src="https://i.ibb.co/Kxspq7z/my-img01-1.jpg" alt="Illustration" className="max-w-md rounded-lg shadow-lg" />
        </section>
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-4">Key Features</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <li className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M2 4a2 2 0 00-2 2v8a2 2 0 002 2h3v2h10a2 2 0 002-2v-2h1a2 2 0 002-2V6a2 2 0 00-2-2H2zm0 2h16v4H2V6zm4 4h8v2H6v-2zm0 4h8v2H6v-2zm10-7H2v5h16V9z" clipRule="evenodd" />
                </svg>
                <span className="ml-2 text-xl font-semibold">Efficient Candidate Search</span>
              </div>
              <p className="text-gray-700">Find the right candidates quickly with advanced search filters and matching algorithms.</p>
            </li>
            <li className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M2 4a2 2 0 00-2 2v8a2 2 0 002 2h3v2h10a2 2 0 002-2v-2h1a2 2 0 002-2V6a2 2 0 00-2-2H2zm0 2h16v4H2V6zm4 4h8v2H6v-2zm0 4h8v2H6v-2zm10-7H2v5h16V9z" clipRule="evenodd" />
                </svg>
                <span className="ml-2 text-xl font-semibold">Integrated Evaluation System</span>
              </div>
              <p className="text-gray-700">Evaluate candidates efficiently with our built-in evaluation tools and collaborative features.</p>
            </li>
          </ul>
        </section>
      </main>
      <footer className="py-4 px-8 bg-gray-800 text-center">
        <p className="text-gray-300">&copy; 2023 Recruitment Solution App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
