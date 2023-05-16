export const register = (req, res) =>{
    // chck existing user

    const q = "SELECT FROM users WHERE username=? OR email=?"
    db.query(q, [req.body.username, req.body.email], (err, res) =>{
        if(err) return res.json(err);
        if(data.length) return res.status(409).json('user already exists');
    })

}

export const login = (req, res) =>{
    
}

export const logout = (req, res) =>{
    
}