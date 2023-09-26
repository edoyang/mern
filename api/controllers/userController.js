const User = require('../models/User');

exports.registerUser = async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    await user.save();
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: 'Email already registered.' });
    } else {
      res.status(400).json({ message: 'Error registering user.', error });
    }
  }
};

exports.loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ isAuthenticated: false, message: 'Invalid email or password.' });
    }
    
    if (req.body.password === user.password) {
      // Passwords match, user is authenticated
      return res.status(200).json({ 
        isAuthenticated: true, 
        name: user.name,
        userRole: user.userRole  // Send the userRole in the response
      });
    } else {
      return res.status(401).json({ isAuthenticated: false, message: 'Invalid email or password.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error during login.', error });
  }
};

