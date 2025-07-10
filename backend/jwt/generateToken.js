import jwt from "jsonwebtoken"

const createTokenAndSaveCookie = (userid,res) => {
  const token = jwt.sign({userid},process.env.JWT_TOKEN,{expiresIn:"20h"})

  res.cookie('jwt',token,{
    httpOnly:true, // xsc
    secure:true,
    sameSite:"strict" //crf
  })
}

export default createTokenAndSaveCookie