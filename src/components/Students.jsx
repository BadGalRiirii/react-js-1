import React, { Component } from 'react';

class Students extends Component {
  render() {
    return (
      <main className="flex-1 bg-green-100 p-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-green-800">Students</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-green-700">Welcome, Students!</h3>
            <p className="text-lg text-green-800">
              Here you can find information about your courses, grades, and upcoming assignments.
            </p>
          </div>
        </div>
      </main>
    );
  }
}

export default Students;
