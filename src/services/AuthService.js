const token = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('7p8o5k4e-7a8p9i');
        }, 2000);
    })
};

export default {
    login: token
}