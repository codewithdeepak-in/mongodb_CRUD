const bcrypt = require('bcrypt');
const saltRound = 10;

(
    async () => {
        try {
            const salt = await bcrypt.genSalt(saltRound);
            console.log(salt);
            bcrypt.hash('password123', salt, (err, hash) => {
                console.log(hash);
            })
        } catch (err) {

        }
    }
)()