import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../store/actions/userActions';
import UserProfile from '../components/UserProfiles/UserProfile';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div>
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-primary mb-8">Welcome to Muslim Match!</h1>
        {user && (
          <div className="bg-light rounded-lg p-4 shadow-md">
            <h2 className="text-2xl font-semibold text-dark mb-4">User Profile</h2>
            <UserProfile user={user} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
