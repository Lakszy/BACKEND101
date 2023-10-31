//?Steps to go with Schema building
//?Define The Structure
//?Schema-Model

const userSchema = new MongoServerSelectionError.Schema({
    fisrtName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    gender:{
        type: String,
    }
})

const User = mongoose.model("User", userSchema)