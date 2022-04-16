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

cp_slow_query:
	@docker cp $(shell docker-compose ps -q mysql):/var/lib/mysql/slow_query.log ./mysql/mysql_log/slow_query.log

nginx:
	@docker-compose exec nginx bash
mysql:
	@docker-compose exec mysql bash
backend:
	@docker-compose exec backend bash
frontend:
	@docker-compose exec backend bash

.PHONY: up-d down restart ps logs build nginx mysql backend frontend
