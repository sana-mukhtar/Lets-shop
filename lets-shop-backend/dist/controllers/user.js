import { User } from "../models/user.js";
import { TryCatch } from "../middlewares/error.js";
export const newUser = TryCatch(async (req, res, next) => {
    const { name, email, photo, dob, _id, gender, role } = req.body;
    const user = await User.create({
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
