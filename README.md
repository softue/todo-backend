# todo-backend

This backend manages a todo list stored in a MongoDB server.

## How to install

    $ git clone https://github.com/softue/todo-backend
    $ cd todo-backend
    $ npm install
    $ cp .env.example .env

## Configure PORT and MONGODB

Open `.env` file and edit PORT and MONGODB variables according to your environment.

## Testing

We have some tests running in the database configured in `.env` file.

    $ npm run test