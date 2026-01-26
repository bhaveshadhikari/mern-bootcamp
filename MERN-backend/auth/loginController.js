import jwt from 'jsonwebtoken';

const SECRETKEY="HDGFJYVBY3ER7YTIUYVBETIUVBUYRI"
const loginController = (req, res, next)=>{
 console.log("login route: ", req.body)
 let {username, password} = req.body
 if (!username || !password){
    res.status(400).send("Cant be empty!!")
 }else{
    let token = jwt.sign({username, password}, SECRETKEY)
    res.status(200).send({token: token, message:"Auth success!!"})
 }
}

export default loginController