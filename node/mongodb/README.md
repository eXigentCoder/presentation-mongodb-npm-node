# Installation

https://www.mongodb.com/download-center?jmp=nav

Running as a service: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/#configure-a-windows-service-for-mongodb-community-edition

# Api Reference

To see all the possible methods and what they accept/return, see [the api docs.](http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html)

# Using the shell

Ensure that mongo is running and is in your path variable (e.g. `C:\Program Files\MongoDB\Server\3.2\bin`). Open up a terminal and type `mongo`

> `use <nameOfDb>`
> `db.test.insertOne({asd:true})`

Simple as that!

# Using some more advanced tools

Download and install [MongoChef](https://studio3t.com/download/) it's like the sql management studio of the mongo world.
[RoboMongo](https://robomongo.org/) is a great alternative if you aren't working with a replica set.

