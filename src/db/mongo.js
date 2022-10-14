import { MONGO_URL } from '$env/static/private';
// const client = new MongoClient(MONGO_URL)

// export function start_mongo() {
// 	console.log('Starting mongo...');
// 	return client.connect();
// }

// export default client.db()


import mongoose from 'mongoose';

const db = await mongoose.connect(MONGO_URL, {});
export const start_mongo = async() => {
    console.log(`mongodb connected ${db.connection.host}`);
}
export default db;