start:
	@yarn start
deploy:
	@yarn build && cf push
tests:
	@./node_modules/.bin/mocha