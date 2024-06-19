const bcrypt = require('bcrypt');

const getHashedPassword = async (password) => {
    const hashedPassword = await bcrypt.hash(password, 12);
    return hashedPassword;
};

const comparePasswords = async (plainPassword, hashedPassword) => {
    try {
        const passwordMatch = await bcrypt.compare(plainPassword, hashedPassword);
        return passwordMatch;
    } catch (error) {
        console.error('Error comparing passwords:', error);
        return false;
    }
};

module.exports = {
    getHashedPassword,
    comparePasswords
}