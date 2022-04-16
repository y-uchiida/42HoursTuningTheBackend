up-d:
	@docker-compose up -d

down:
	docker-compose down

restart: down up-d

ps:
	@docker-compose ps

logs:
	@docker-compose logs

build:
	docker-compose build

nginx:
	@docker-compose exec nginx bash

.phony:
	up-d down restart ps logs build nginx
