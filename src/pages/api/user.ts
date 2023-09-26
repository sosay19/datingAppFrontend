// user.ts

import { NextApiRequest, NextApiResponse } from 'next';

export default (_req: NextApiRequest, res: NextApiResponse) => {
    // Simulate user data
    const user = {
        id: 1,
        name: 'John Doe',
        age: 30,
        bio: 'I love hiking and traveling!',
    };

    res.status(200).json(user);
};
