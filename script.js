const jwt = require('jsonwebtoken');

const SECRET_KEY = 'paul@123'; // Replace with an environment variable in production


const encrypt = (payload) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '1hr' });
};


const decrypt = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (err) {
    return null; 
  }
};

// Example Usage
const payload = { userId: 'Yo Yo Yo 1-4-8 3 to the 3 to the 6 to the 9. Representing the ABQ. What up BIATCH! Leave at the tone.', role: 'jessie pinkman' };
const token = encrypt(payload);
console.log('Generated Token:', token);

const decoded = decrypt(token);
if (decoded) {
  console.log('Decrypted Payload:', decoded);
  console.log('Success');
} else {
  console.log('Failed to decrypt token');
}

module.exports = {
  encrypt,
  decrypt
};
