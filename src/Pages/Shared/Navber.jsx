import React from 'react';

const Navber = () => {
    return (
        <div  className='py-4 px-8 bg-gray-800 text-center text-white'>
            <header className="py-4 px-8">
                <nav className="flex justify-between items-center">
                    <a href="/" className="text-3xl font-bold">Recruitment Solution App</a>
                    <div>
                        <a href="/" className="text-gray-300 hover:text-white px-4 py-2">Home</a>
                        <a href="/login" className="text-gray-300 hover:text-white px-4 py-2">Login</a>
                        <a href="/register" className="bg-white text-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md">Register</a>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Navber;