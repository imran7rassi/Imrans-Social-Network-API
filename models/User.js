
// requiring the mangoose
const { Schema, model, Types } = require('mongoose');

// adding the user schema
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },

    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],

    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },

  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);


// this is the friend count
// that shows the friends lenght
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// create the User
// model using the UserSchema
const User = model('User', userSchema);

// export the User model
module.exports = User;