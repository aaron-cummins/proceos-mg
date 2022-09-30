const router = require("express").Router();
const pool = require("../db");

router.post("/auth", async(req, res, next) => {
    try {
        const user = req.body;
        
        const userExist = await pool.query("SELECT * FROM nomina_personal Where email = $1 and activo = 'true'", [user.email]);
        
        if(userExist.rows.length !== 0) {
            return res.status(200).json({ message: "Usuario encontrado", status: true});
        }else{
            return res.status(404).json({ message: "Usuario NO encontrado", status: false});
        }

    } catch (error) {
        next(error);
    }
});

module.exports = router;