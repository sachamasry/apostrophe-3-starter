// modules/@apostrophecms/login/index.js
module.exports = {
    options: {
        totp: {
            // Should be a random string, exactly 10 characters long
            secret: 'totpsecret'
        }
    }
};
