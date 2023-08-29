# Important code of the project. 

### Creating Schema in mongoose. 

<pre>
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
</pre>

### Creating model.

<pre>
    const User = mongoose.model('User', userSchema);
</pre>

### How bcrypt hashing works.

<pre>
    userSchema.pre('save', function(next){
    // next() :-> so that it will not stop working because it's a middleware.
    var user = this;
    // this the new object we are going to add to the database.
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
</pre>