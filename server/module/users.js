const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_I = 10;


const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    }, 
    password: {
        type: String,
        required: true,
        minlength: 6,
        trim: true
    }
})

// Hashing of Password. Here we use bcrypt middleware.
// Pre middleware work before saving the data into database.

userSchema.pre('save', function(next){
    // next() :-> so that it will not stop working.
    var user = this;
    if(user.isModified('password')){
        // only work when password is get modified.
        bcrypt.genSalt(SALT_I, function(err, salt){
            // generate salts with number of iteration it looks like this (sdjkfsdfkk$jlsf$sfkl$skfsdkf$ks;kdfsdf)
            if(err) return next(err);
            bcrypt.hash(user.password, salt, function(err, hash){
                // hashing the password with salt 
                if(err) return next(err);
                
                user.password = hash;
                next();
            })
        })
    }else{
        next();
    }
    
})



const User = mongoose.model('User', userSchema);

module.exports = { User } 
// export default User;