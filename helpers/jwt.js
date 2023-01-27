// const expressJwt = require("express-jwt");

// function authJwt () {
//     const secret = process.env.secret;
//     const api = process.env.API_URL;
//     return expressJwt({
//         secret,
//         algorithms: ["HS256"],
//         isRevoked : isRevoked,
//     });
// }

// module.exports = authJwt;



const { expressjwt: jwt } = require("express-jwt");
const authJwt = () => {
    const SECRET = process.env.SECRET;
    // const api = process.env.API_URL;
    return jwt({
        secret: "kinjal",
        algorithms: ["HS256"],
        // isRevoked: isRevoked,
    })
        .unless({ path: ["/user/login"] });

}

module.exports = authJwt();


