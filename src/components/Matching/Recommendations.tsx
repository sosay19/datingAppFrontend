// Recommendations.tsx

import React from 'react';

interface Recommendation {
    id: number;
    title: string;
    description: string;
    // Add more recommendation properties as needed
}

interface RecommendationsProps {
    recommendations: Recommendation[];
}

const Recommendations: React.FC<RecommendationsProps> = ({ recommendations }) => {
    return (
        <div className="recommendations">
            <h2>Recommended Items</h2>
            <div className="recommendation-list">
                {recommendations.map((recommendation) => (
                    <div key={recommendation.id} className="recommendation-item">
                        <h3>{recommendation.title}</h3>
                        <p>{recommendation.description}</p>
                        {/* Display more recommendation details here */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Recommendations;
