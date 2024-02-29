import { User } from "../models/user.js";
import ErrorHandler from "../utils/utility-class.js";
import { TryCatch } from "../middlewares/error.js";
export const newUser = TryCatch(async (req, res, next) => {
    const { name, email, photo, dob, _id, gender, role } = req.body;
    let user = await User.findById(_id);
    if (user)
        return res.status(200).json({
            success: true,
            message: `Welcome ${user.name}`,
        });
    if (!_id || !name || !photo || !dob || gender || !email)
        return next(new ErrorHandler("please add all fields", 400));
    user = await User.create({
        name,
        email,
        photo,
        dob: new Date(dob),
        _id,
        gender,
        role,
    });
    return res.status(201).json({
        success: true,
        message: `Welcome ${user.name}`,
    });
});
export const getAllUsers = TryCatch(async (req, res, next) => {
    const users = await User.find({});
    return res.status(201).json({
        success: true,
        users,
    });
});
