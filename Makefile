install: install-deps

install-deps:
	npm ci

build:
	rm -rf dist
	npm run build

test:
	npm test

test-watch:
	npm test -- --watch

test-coverage:
	npm test -- --coverage

lint:
	npx eslint .

run:
	npx babel-node src/bin/run.js

.PHONY: test
