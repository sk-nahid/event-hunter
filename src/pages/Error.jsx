import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="max-w-xl text-center">
          <h1 className="text-7xl font-bold text-blue-600">404</h1>
          <h2 className="text-2xl font-semibold mt-4 text-gray-800">Page Not Found</h2>
          <p className="mt-2 text-gray-600">
            Sorry, the page you’re looking for doesn’t exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
          >
            Go Home
          </Link>
        </div>
      </div>
    );
};

export default Error;