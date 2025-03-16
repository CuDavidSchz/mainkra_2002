exports.setUserData = (req, res, next) => {
    res.locals.nombre = req.cookies.nombre_usuario || null;
    next();
};
