import { db } from "../db";
import bcrypt from "bcryptjs";

export const register = (req, res) =>{
    // check existing user

    const q = "SELECT FROM users WHERE username=? OR email=?"
    db.query(q, [req.body.username, req.body.email], (err, res) =>{
        if(err) return res.json(err);
        if(data.length) return res.status(409).json('user already exists');

        // hash the password and create user

        const salt = bcrypt.genSaltSync(10);
        const hash =bcrypt.hashSync(req.body.passwords, salt);

        const q = "INSERT INTO users (`username`, `email`, `password`) VALUES(?)"

        const values = [
            req.body.username, 
            req.body.email,  
            hash
        ]

        db.query(q, [values], (err, res) => {
            if (err) return res.json(err);
            return res.status(200).json('User has been created.');



    })

})
}

export const login = (req, res) =>{
    
}

export const logout = (req, res) =>{
    
}