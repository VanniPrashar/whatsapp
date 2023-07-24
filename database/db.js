import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${passwordD}@ac-oqq9ajl-shard-00-00.jn3njcw.mongodb.net:27017,ac-oqq9ajl-shard-00-01.jn3njcw.mongodb.net:27017,ac-oqq9ajl-shard-00-02.jn3njcw.mongodb.net:27017/?ssl=true&replicaSet=atlas-37f4m5-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
       await mongoose.connect(URL, { useUnifiedTopology: true, useFindAndModify: false });
       console.log('Database connected Successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }

}
