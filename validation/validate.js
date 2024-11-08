const validateUser = (username) => {
    if (username) {
        console.log('El nombre es obligatorio')
        return false;
    }
    return true;
}

const validatePassword = (password) => {
    if (password < 6) {
        console.log('La contraseña debe tener al menos 6 caracteres')
        return false;
    }
    return true;
}

const validateEmail = (email) => {
    if (email) {
        console.log('El email es obligatorio')
        return false;
    }
    return true;
}

export default {
    validateUser,
    validatePassword,
    validateEmail
}