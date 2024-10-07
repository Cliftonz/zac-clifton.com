// src/Projects.tsx
import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: 'autoscaler.dev',
      description: 'Intelligent autoscaler for ECS',
      link: null, // No link provided for autoscaler.dev
      status: 'dead', // Status tag set to dead
    },
    {
      name: 'CSGrader.org',
      description: 'AI programming assignment grader for universities.',
      link: null, // No link provided for CSGrader.org
      status: 'dead', // Status tag set to dead
    },
    {
      name: 'CSLabs',
      description: 'Virtualized datacenter environments for security and networking classes. Could simulate 1 machine to the backbone of the internet.',
      link: 'https://github.com/ius-csg/cslabs-webapp',
      backendLink: 'https://github.com/ius-csg/cslabs-backend',
      status: 'dead', // Status tag set to dead
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Past Projects</h2>
      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="min-w-full bg-white divide-y divide-gray-200">
          <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Link</th>
          </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
          {projects.map((project, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{project.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.status}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.description}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                {project.link ? <a href={project.link} target="_blank" rel="noopener noreferrer">WebApp</a> : 'No Link'}
                {project.backendLink && <span> | <a href={project.backendLink} target="_blank" rel="noopener noreferrer">Backend</a></span>}
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Projects;