include env_config
include .env

default: build



dc-build:
	docker build -t app .

# ---------- Development ----------
start: dc-build
	docker run  -p 4200:4200 app

sh: dc-build
	docker run --entrypoint=sh app

unittest: dc-build
	docker run --service-ports app test

# ---------- Testing ----------
test: dc-build
	docker run  app run test

build:
	docker build -t $(DOCKER_REG)$(SERVICE_NAME) .

