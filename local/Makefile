up-d:
	@docker-compose -f docker-compose-local.yaml up -d

down:
	docker-compose -f docker-compose-local.yaml down

restart: down up-d

ps:
	@docker-compose -f docker-compose-local.yaml ps

logs:
	@docker-compose -f docker-compose-local.yaml logs

build:
	docker-compose -f docker-compose-local.yaml build

nginx:
	@docker-compose -f docker-compose-local.yaml exec nginx bash

.PHONY: up-d down restart ps logs build nginx
