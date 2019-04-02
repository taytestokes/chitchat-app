module.exports = {
    login: (req, res) => {
        return res.send(req.user);
    },

    register: (req, res) => {
        return res.send(req.user);
    },

    logout: (req, res) => {
        req.logOut();
        res.send('User signed out!')
    }
}