import { User } from "../models/user.js";
export const newUser = async (req, res, next) => {
    try {
        return next(new Error("meri error"));
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
    }
    catch (error) {
        return res.status(400).json({
            success: false,
            message: error,
        });
    }
};
