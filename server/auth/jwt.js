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

const verifyToken = ( req, res, next) => {
    const token = req.headers.authorization;
    if(token === undefined) {
        res.sendStatus(401);
        return
    }
    jwt.verify(token, SECRET, (err, payload) => {
        if(err){
            res.sendStatus(401).json({msg: 'Must contain a valid token'})
            return //does it matter if return is before or after?
        }
        req.payload = payload
        next()
    })
}


module.exports = { 
    makeToken,
    verifyToken
}
