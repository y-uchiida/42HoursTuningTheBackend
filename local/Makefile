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

cp_slow_query:
	@docker cp $(shell docker-compose -f docker-compose-local.yaml ps -q mysql):/var/lib/mysql/slow_query.log ./localMysql/mysql_log/slow_query.log

nginx:
	@docker-compose -f docker-compose-local.yaml exec nginx bash
mysql:
	@docker-compose -f docker-compose-local.yaml exec mysql bash
backend:
	@docker-compose -f docker-compose-local.yaml exec backend bash
frontend:
	@docker-compose -f docker-compose-local.yaml exec backend bash

.PHONY: up-d down restart ps logs build nginx mysql backend frontend cp_slow_query
