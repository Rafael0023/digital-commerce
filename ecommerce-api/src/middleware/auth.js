const jwt = require('jsonwebtoken');
const User = require('../models/user.js');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ message: 'Token requerido para acceder' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({ message: 'Token inválido - usuario no encontrado' });
    }

    req.user = user;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'El token ha expirado' });
    }
    res.status(401).json({ message: 'Token inválido' });
  }
};


const roleAuth = (roles = []) => {
  return (req, res, next) => {
    auth(req, res, () => {
      if (!roles.includes(req.user.rol)) {
        return res.status(403).json({ message: 'Acceso denegado: rol insuficiente' });
      }
      next();
    });
  };
};


const adminAuth = roleAuth(['admin']);

module.exports = { auth, adminAuth, roleAuth };


