const userService = require('../services/user');

// 인증 처리
const auth = (req, res, next) => {
    
  /*
    관련 표준 문서에 있기 때문입니다. 
    일반 체계는 먼저 토큰 유형 (이 경우 "베어러")과 토큰 자체를 명시하는 것입니다.
  */
  const token = req.headers.authorization.split('Bearer ')[1];

    userService.verifytoken(token)
    .then((userinfo) => {   // 인증 성공
        console.log(userinfo)
        next();    
    })
    .catch((err) => {   // 인증 실패
        return res.json({ isAuth: false, message: err });
    });
}

module.exports = { auth } ;