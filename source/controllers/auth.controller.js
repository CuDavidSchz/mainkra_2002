exports.setCookie = (req, res) => {
    const { nombre } = req.body;
    if (!nombre) {
        return res.status(400).send("El nombre no puede estar vacío.");
    }

    res.cookie("nombre_usuario", nombre, { maxAge: 15, httpOnly: false });
    res.sendStatus(200);
};
