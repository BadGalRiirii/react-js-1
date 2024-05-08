import React from 'react';

function TestComponents() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-green-700">Sample Table</h1>
      <table className="min-w-full">
        <thead>
          <tr className="bg-green-200">
            <th className="px-6 py-3 border-b-2 border-green-400 text-left text-xs font-semibold text-green-700 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 border-b-2 border-green-400 text-left text-xs font-semibold text-green-700 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 border-b-2 border-green-400 text-left text-xs font-semibold text-green-700 uppercase tracking-wider">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-green-100">
            <td className="px-6 py-4 whitespace-nowrap border-b border-green-400">1</td>
            <td className="px-6 py-4 whitespace-nowrap border-b border-green-400">John Doe</td>
            <td className="px-6 py-4 whitespace-nowrap border-b border-green-400">john.doe@example.com</td>
          </tr>
          <tr className="bg-green-100">
            <td className="px-6 py-4 whitespace-nowrap border-b border-green-400">2</td>
            <td className="px-6 py-4 whitespace-nowrap border-b border-green-400">Jane Smith</td>
            <td className="px-6 py-4 whitespace-nowrap border-b border-green-400">jane.smith@example.com</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
}

export default TestComponents;
