const config = require('config');
const { MongoClient, ObjectId } = require('mongodb');


module.exports = {
  async connect() {
    if (!this.db) {
      const client = await MongoClient.connect(config.db.url, { useNewUrlParser: true });
      console.log('Connected to the mongodb');
      this.db = client.db(config.db.name);
    }
  },

  collection(name) {
    return this.db.collection(name);
  },

  ObjectId,
};
