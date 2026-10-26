function validateNumberParam(req, res, next, value, parameterName) {
    const number = Number(value);

    if (!Number.isFinite(number)) {
        return res.status(400).json({
            error: `Параметр ${parameterName} должен быть числом`
        });
    }

    next();
}

module.exports = {
    validateNumberParam
};