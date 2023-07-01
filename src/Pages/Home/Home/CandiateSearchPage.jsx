import React, { useState, useEffect } from 'react';

const CandidateSearchPage = () => {
  const [location, setLocation] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [candidates, setCandidates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch candidate data from an API or mock data source
    // Replace the fetchCandidates function with your own implementation
    fetchCandidates();
  }, []);

  const fetchCandidates = async () => {
    // Simulating fetching candidate data from an API
    // Replace with your own API call or data retrieval logic
    try {
      setIsLoading(true);
      // Mock API response
      const response = await fetch('https://api.example.com/candidates');
      const data = await response.json();
      setCandidates(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching candidates:', error);
      setIsLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Perform search logic here based on location and job role
    // Filter candidates from the fetched candidate data
    const filteredCandidates = candidates.filter((candidate) => {
      return (
        candidate.location.toLowerCase().includes(location.toLowerCase()) &&
        candidate.jobRole.toLowerCase().includes(jobRole.toLowerCase())
      );
    });
    setCandidates(filteredCandidates);
  };

  return (
    <div className="max-w-4xl mx-auto px-8 py-8">
      <h2 className="text-3xl font-bold mb-4">Candidate Search</h2>
      <form onSubmit={handleSearch} className="mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="location" className="block text-white font-bold mb-2">
              Location
            </label>
            <input
              type="text"
              id="location"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="jobRole" className="block text-white font-bold mb-2">
              Job Role
            </label>
            <input
              type="text"
              id="jobRole"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter job role"
              value={jobRole}
              onChange={(e) => setJobRole(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"
        >
          Search
        </button>
      </form>
      {isLoading ? (
        <p>Loading candidates...</p>
      ) : (
        <>
          {candidates.length === 0 ? (
            <p>No candidates found.</p>
          ) : (
            <div>
              <h3 className="text-2xl font-bold mb-4">Search Results</h3>
              <ul>
                {candidates.map((candidate) => (
                  <li key={candidate.id} className="mb-4">
                    <div className="flex items-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                        <img
                          src={candidate.profilePicture}
                          alt={candidate.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold">{candidate.name}</h4>
                        <p className="text-gray-700">{candidate.location}</p>
                        <p className="text-gray-700">{candidate.jobRole}</p>
                      </div>
                    </div>
                    <div className="mt-2">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => handleCandidateEvaluation(candidate.id)}
                      >
                        Evaluate Candidate
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CandidateSearchPage;
