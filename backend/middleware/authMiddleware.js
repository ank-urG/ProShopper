import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../model/userModel.js'

const protect = asyncHandler(async (req, res, next) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      //console.log(req.headers.authorization)
      token = req.headers.authorization.slice(7)
      //console.log(token, process.env.JWT_SECRET)
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      //console.log(decoded)

      req.user = await User.findById(decoded.id).select('-password')
      next()
    } catch (error) {
      //console.error(error)
      res.status(401)
      throw new Error('Not authorized, token failed!')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not Authorized, No token')
  }
})

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next()
  } else {
    res.status(401)
    throw new Error('Not authorized as an admin')
  }
}

export { protect, admin }
