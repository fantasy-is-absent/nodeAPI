const db = require('../db')


module.exports = {
  getUsers() {
    return db.collection('users').find({}).toArray()
  },

  async createUser(data) {
    const ops = { upsert: true, returnOriginal: false };
    const modifier = { $set: data, $currentDate: { lastModified: true } }
    const query = { name: data.name }
    const {value: user} = await db.collection('users').findOneAndUpdate(query, modifier, ops);
    return user
  },

  async deleteUser(id) {
    const query = {_id: db.ObjectId(id)}
    const {value: user} = await db.collection('users').findOneAndDelete(query)
    return user
  }
}