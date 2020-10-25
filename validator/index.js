exports.requireSignupValidator = (req, res, next) => {
    req.check('names', 'Name is required').notEmpty();
    req.check('surnames', 'Surnames are required').notEmpty();
    req.check('email','Email must be an valid Email').isEmail();

    const errors = req.validationResult();

    if(errors){
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({
            error: firstError
        });
    }

    next();
};


exports.requireLoginValidator = (req, res, next) => {
    req.check('email','Email must be an valid Email').isEmail();
    req.check('password','Password is required').notEmpty();

    const errors = req.validationResult();

    if(errors){
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({
            error: firstError
        });
    }

    next();
};

exports.isTweetValid = (req, res, next) => {
    req.check('message', 'The Message is required').notEmpty();

    const errors = req.validationResult();

    if (errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({
            error: firstError
        });
    }

    next();
}