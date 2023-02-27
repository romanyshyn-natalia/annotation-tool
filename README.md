# Annotation Tool

This project was created using [create-payload-app using](https://payloadcms.com/docs/getting-started/installation) the blank template.

## Before
To create mongo collection with translations, please run the following:
```
cd mongo_collection
pip install -r requirements.txt
python create_collection.py
```

Payload Software Requirements:
* Yarn or NPM
* NodeJS version 10+
* A Mongo Database

## Run app

`npm run dev` will start up your application and reload on any changes.

### Docker

If you have docker and docker-compose installed, you can run `docker-compose up`

To build the docker image, run `docker build -t my-tag .`

Ensure you are passing all needed environment variables when starting up your container via `--env-file` or setting them with your deployment.

The 3 typical env vars will be `MONGODB_URI`, `PAYLOAD_SECRET`, and `PAYLOAD_CONFIG_PATH`

`docker run --env-file .env -p 3000:3000 my-tag`
