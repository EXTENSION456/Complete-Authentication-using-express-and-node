import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  const token = req.cookies.token;
  try {
    if (!token) {
      return res.status(401).json({
        msg: "Unauthorized, no token provided",
        success: "false",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({
        msg: "Unauthorized",
        success: "false",
      });
    }

    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.log(error, "error in middleware verifyToken");
    return res.status(400).json({
      msg: "something's wrong",
      success: "false",
    });
  }
};
