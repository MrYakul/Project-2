const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    avatar: {
      type: String, default: 'https://i.stack.imgur.com/l60Hf.png'
    },

    description: {
      type: String,
      default: "I'm a mystery."
    },

    role: {
      type: String,
      enum: ['CINEPHILE', 'ADMIN'],
      default: 'CINEPHILE'
    },

    myGenres: {
      type: [String],
      enum: ['Action', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Romance', 'Thriller', 'Western'],
      required: true
    },

    favMovies: {
      type: [String],
      enum: [],
      required: false
    },

    // myEvents: [{
    //   // type: mongoose.Schema.Types.ObjectId,
    //   ref: 'Event',
    //   required: false
    // }]
  },
  {
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
