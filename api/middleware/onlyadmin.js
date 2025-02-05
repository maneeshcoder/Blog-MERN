// import jwt from 'jsonwebtoken'
// export const onlyadmin = async (req, res, next) => {
//     try {
//         const token = req.cookies.access_token
//         if (!token) {
//             return next(403, 'Unathorized')
//         }
//         const decodeToken = jwt.verify(token, process.env.JWT_SECRET)
//         if (decodeToken.role === 'admin') {
//             req.user = decodeToken
//             next()
//         } else {
//             return next(403, 'Unathorized')
//         }
//     } catch (error) {
//         next(500, error.message)
//     }
// }
import jwt from 'jsonwebtoken';

export const onlyadmin = async (req, res, next) => {
    try {
        const token = req.cookies.access_token;
        if (!token) {
            return res.status(403).json({ message: "Unauthorized: No token provided" });
        }
        const decodeToken = jwt.verify(token, process.env.JWT_SECRET);
        if (decodeToken.role !== 'admin') {
            return res.status(403).json({ message: "Unauthorized: Admin access required" });
        }
        req.user = decodeToken;
        next();

    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
};
