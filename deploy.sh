#!/usr/bin/env sh

docker pull danlooo/icarus-frontend || :
docker pull danlooo/icarus-backend || :

docker-compose build

docker push danlooo/icarus-frontend || :
docker push danlooo/icarus-backend || :

docker-compose up