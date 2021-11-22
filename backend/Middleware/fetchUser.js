const jwt = require('jsonwebtoken');
const JWT_SECRET = "SumitisGoodboy";

const fetchUser = (req,res,next) =>{

    //  GET the user from the jwt token and add id to req Object
    const token = req.header('auth-token');
    if(!token){
        res.send(401).send({error : "Please authenticate using a valid Token "})
    }
    try {
        const data = jwt.verify(token, JWT_SECRET)
        req.user = data.user
        next();
        
    } catch (error) {
        res.send(401).send({error : "Please authenticate using a valid Token "})
    }


}


module.exports = fetchUser;