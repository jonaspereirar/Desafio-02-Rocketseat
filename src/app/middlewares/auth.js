import { promisify } from 'util';
import jwt from 'jsonwebtoken';

import authConfig from '../../config/auth';

export default async (req, res, next) => {
    const authHeader = req.headers.authorization; // sent by insomnia

    // console.log(authorization); //test

    if (!authHeader) {
        return res.status(401).json({ error: 'Token not provided' });
    }
    // [Bearer, token] unstructuring
    const [, token] = authHeader.split(' ');

    try {
        const decoded = await promisify(jwt.verify)(token, authConfig.secret);
        // console.log(decoded);
        req.userId = decoded.id;

        return next();
    } catch (err) {
        return res.status(401).json({ error: 'Token invalid' });
    }
};

// User Authentication Middleware Logged In.
