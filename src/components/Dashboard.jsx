import React, { Component } from 'react';

class Dashboard extends Component {
  render() {
    return (
      <main className="flex-1 bg-green-700 p-8 text-white">
        <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-4">Sample Table</h1>
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b-2 border-green-600 text-left text-xs font-semibold text-green-200 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 border-b-2 border-green-600 text-left text-xs font-semibold text-green-200 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 border-b-2 border-green-600 text-left text-xs font-semibold text-green-200 uppercase tracking-wider">Email</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-green-800">
                <td className="px-6 py-4 whitespace-nowrap border-b border-green-600">1</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-green-600">John Doe</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-green-600">john.doe@example.com</td>
              </tr>
              <tr className="bg-green-900">
                <td className="px-6 py-4 whitespace-nowrap border-b border-green-600">2</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-green-600">Jane Smith</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-green-600">jane.smith@example.com</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </main>
    );
  }
}

export default Dashboard;
