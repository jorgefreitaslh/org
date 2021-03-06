## Technologies used:

###Tools and Configuration:
* yarn
* eslint (using airbnb configuration as the base, and relaxed as desired)

###Server:
* Node
* Express
* Sequelize  (Relational Database ORM)
* Postgres

###Client:
* React
* Redux
* redux-form

## Setup

You'll need to have yarn installed.  The best way to do that is to install it via homebrew on your Mac.

```
brew update
brew install yarn
```

Set up the project by installing libraries for both the client and server...

```
cd org
yarn install

cd client
yarn install
```

## Database

### Setup 
The application uses Postgres.  **You'll need to have Postgres running, and have a database created**.  Change the database configuration for development in /server/config/config.json file.  In production, the DATABASE_URL env variable will be used to connect to the database.

We're using Sequelize as the ORM, so please see [their website](http://docs.sequelizejs.com/en/v3/) for more information.  There's a .sequelizerc file in the root of the project that sets up the directories for everything.

### Migrations

To create the database tables.

```
cd server
npm run db:migrate
```

## Starting the Application
To start the application.

```
cd org
npm start
```