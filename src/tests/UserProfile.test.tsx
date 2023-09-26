// UserProfile.test.tsx

import React from 'react';
import { render } from '@testing-library/react';
import UserProfile from './UserProfile'; // Import your UserProfile component
import { User } from '../types/userTypes'; // Import the User interface

// Define a mock user data for testing
const mockUser: User = {
    id: 1,
    name: 'John Doe',
    age: 30,
    bio: 'I love hiking and traveling!',
};

describe('UserProfile component', () => {
    it('renders user data correctly', () => {
        // Render the UserProfile component with the mock user data
        const { getByText, getByAltText } = render(<UserProfile user={mockUser} />);

        // Assert that the user's name, age, and bio are displayed
        expect(getByText('John Doe')).toBeInTheDocument();
        expect(getByText('Age: 30')).toBeInTheDocument();
        expect(getByText('Bio: I love hiking and traveling!')).toBeInTheDocument();

        // Assert that the user's image is displayed with the alt text
        const userImage = getByAltText('John Doe');
        expect(userImage).toBeInTheDocument();
        expect(userImage.getAttribute('src')).toBe('/images/1.jpg'); // Adjust the path as needed
    });
});
