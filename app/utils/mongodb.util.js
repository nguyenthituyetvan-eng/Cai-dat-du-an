// const { MongoClient } = require("mongodb");
// class MongoDB {
//   static client;
//   static connect = async (uri) => {
//     if (this.client) return this.client;
//     this.client = await MongoClient.connect(uri, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     return this.client;
//   };
// }
// module.exports = MongoDB;
const { MongoClient } = require("mongodb");

class MongoDB {
  static client;

  static async connect(uri) {
    if (this.client) return this.client;

    this.client = new MongoClient(uri);
    await this.client.connect();

    return this.client;
  }
}

module.exports = MongoDB;
