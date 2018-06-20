const jwt = require('jsonwebtoken');
const SECRET = "This is a password";

const makeToken = (user) => {
    const payload = {
        sub: user._id,
        name: user.username
    }

    const options = {
        expiresIn: '24h'
    }
    return jwt.sign(payload, SECRET, options)  //encrypting the token
}

// const verifyToken = ( req, res, next) => {
//     const token = req.headers.authorization;
// }


module.exports = makeToken
