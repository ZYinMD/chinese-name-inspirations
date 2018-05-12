module.exports = function (app) {
    app.get('/*', (req, res) => res.sendFile('../client/build/index.html'));
};

