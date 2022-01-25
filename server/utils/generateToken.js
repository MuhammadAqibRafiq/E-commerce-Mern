const jwt = require('jsonwebtoken');


const generateToken = (id) => {
    // console.log(process.env.SECRET_KEY)
    // console.log(id)
    return jwt.sign({ id }, process.env.SECRET_KEY, {
        expiresIn: "15d"
    })
}

module.exports = generateToken