module.exports = mongoose => {
  return mongoose.model('user', mongoose.Schema({
      firstName: String,
      lastName: String,
      email: String
    },
    {timestamps: true}
  ))
};
