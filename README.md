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