import mongodb = require('mongodb');

const server = new mongodb.Server('localhost', 27017, {auto_reconnect: true});
const db = new mongodb.Db('dojo', server, { w: 1 });
db.open(function() {});

export interface User {
    _id: string;
    email: string;
    first_name: string;
    last_name: string;
}

export interface Image {
    _id: mongodb.ObjectID;
    user: string;
    title: string;
    imageUri: string;
    comments: Comment[];
}

export interface Comment {
    text: string;
    user: string;
}
