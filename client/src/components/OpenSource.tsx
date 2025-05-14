// @ts-nocheck

import React, { useEffect, useState } from 'react';

const repoDescriptions = {
  BioDrop: 'A platform to help developers showcase their bios and social links.',
  CreatorsRegistry: 'An open-source registry to help creators get discovered and supported.'
};

const PullRequests = () => {
  const [prs, setPrs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPRs = async () => {
      try {
        const res = await fetch(
          'https://api.github.com/search/issues?q=type:pr+author:SuperGrut'
        );
        const data = await res.json();

        // Filter PRs to only BioDrop and CreatorsRegistry
        const filtered = data.items.filter(pr =>
          pr.repository_url.includes('BioDrop') || pr.repository_url.includes('CreatorsRegistry')
        );

        // Optional: Sort by most recent
        filtered.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

        setPrs(filtered);
      } catch (err) {
        console.error('Failed to fetch PRs', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPRs();
  }, []);

  if (loading) return <p>Loading PRs...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Open Source Contributions</h2>
      {prs.length === 0 ? (
        <p>No PRs found for BioDrop or CreatorsRegistry.</p>
      ) : (
        <ul className="space-y-4">
          {prs.map(pr => {
            const repoName = pr.repository_url.split('/').pop();
            const description = repoDescriptions[repoName] || 'No description available.';
            return (
              <li key={pr.id} className="border p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold">{repoName}</h3>
                <p className="text-sm text-gray-600 mb-1">{description}</p>
                <a
                  href={pr.html_url}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  #{pr.number} - {pr.title}
                </a>
                <p className="text-sm text-gray-500">Created at: {new Date(pr.created_at).toLocaleDateString()}</p>
                <p className={`text-sm mt-1 ${pr.state === 'open' ? 'text-yellow-600' : 'text-green-600'}`}>
                  Status: {pr.state}
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default PullRequests;
