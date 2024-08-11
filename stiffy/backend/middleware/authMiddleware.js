const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  
 const token = req.header('Authorization')?.replace('Bearer ', ''); 
 console.log("issued token:",token)
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded Token:', decoded);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

module.exports = auth;
