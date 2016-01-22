module.exports = function (req, res, next) {
    console.log('check if user has access to this app');
    next();
};
