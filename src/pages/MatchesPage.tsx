// MatchesPage.tsx

import React, { useState, useEffect } from 'react';
import MatchCard from './MatchCard'; // Create a MatchCard component to display individual matches

interface MatchesPageProps {
  // You can add any necessary props here
}

const MatchesPage: React.FC<MatchesPageProps> = ({}) => {
  const [matches, setMatches] = useState<any[]>([]); // Replace 'any' with the actual type of your matches

  // Simulate fetching user matches from an API or database
  useEffect(() => {
    // Replace this with actual API calls to fetch user matches
    const fetchUserMatches = async () => {
      try {
        const response = await fetch('/api/matches');
        const data = await response.json();
        setMatches(data.matches);
      } catch (error) {
        console.error('Error fetching user matches:', error);
      }
    };

    fetchUserMatches();
  }, []);

  return (
    <div className="matches-page">
      <h2>Your Matches</h2>
      <div className="match-list">
        {matches.map((match, index) => (
          <MatchCard key={index} match={match} />
        ))}
      </div>
    </div>
  );
};

export default MatchesPage;
