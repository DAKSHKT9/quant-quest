exports.roleMiddleware = (allowedRoles) => {
    return (req, res, next) => {
      // Check if the user is authenticated
      if (!req.user) {
        return res.status(401).json({ message: 'Unauthorized: No user logged in' });
      }
  
      // Check if the user's role is included in the allowed roles array
      if (!allowedRoles.includes(req.user.role)) {
        return res.status(403).json({ message: `Forbidden: Requires one of the following roles: ${allowedRoles.join(', ')}` });
      }
  
      // If the user's role is included, proceed to the next middleware or route handler
      next();
    };
  };