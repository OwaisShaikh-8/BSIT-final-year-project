import { response } from "express";
import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import createTokenAndSaveCookie from "../jwt/generateToken.js";

export const registerCustomer = async (req, res) => {
    const { fullname, email, password, confirmPassword, } = req.body;

    try {
        if (password != confirmPassword) {
            return res.status(404).json({ error: "Password do not match" })
        }

        const user = await User.findOne({ email })
        if (user) {
            return res.status(404).json({ error: "Use different email" })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = await new User({
            fullname,
            email,
            password: hashedPassword,
            role: "customer"
        })

        await newUser.save()
        if (newUser) {
            createTokenAndSaveCookie(newUser._id, res)
            res.status(201).json({ message: "user created succesfully", newUser })
        }
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "internal system error" })

    }
}


export const registerVendor = async (req, res) => {
    const { fullname, email, password, confirmPassword, companyName } = req.body;

    try {
        if (password != confirmPassword) {
            return res.status(404).json({ error: "Password do not match" })
        }

        const user = await User.findOne({ email })
        if (user) {
            return res.status(404).json({ error: "this email already exists" })
        }

        const usercompany = await User.findOne({ companyName })
        if (usercompany) {
            return res.status(404).json({ error: "Similer company already registered" })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = await new User({
            fullname,
            email,
            password: hashedPassword,
            role: "vendor",
            companyName
        })

        await newUser.save()
        if (newUser) {
            createTokenAndSaveCookie(newUser._id, res)
            res.status(201).json({ message: "Vendor Account Created succesfully", newUser })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "internal server error" })

    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email })
        const isMatch = await bcrypt.compare(password, user.password)

        if (!user || !isMatch) {
            res.status(404).json({ error: "invalid credentials" })
        }
        if (user || isMatch) {
            createTokenAndSaveCookie(user._id,res)
            res.status(201).json({ message: "login succesfully",user:{
                _id:user._id,
                fullname:user.fullname,
                email:user.email,
                role:user.role
            } })
            
        }



    } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
}
}

export const logout = (req,res) => {
  try {
    res.clearCookie("jwt")
    res.status(200).json({message:"user logout succesfully"})
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
}
}
