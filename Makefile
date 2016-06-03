
all: build

# Serve
serve:
	list .

# Build
build: bro minify css stat

css:
	bash -c 'cp lib/gpos.css dist/'

bro: brolib demo
	browserify -e index.js -g yo-yoify -s Gpos > dist/bundle.js

demo:
	browserify -e demo.js > dist/demo.js

brolib:
	browserify -e gpos.js -g yo-yoify -s Gpos > dist/gpos.js

minify: uglify uglifylib

uglify:
	uglifyjs dist/bundle.js -o dist/bundle.min.js

uglifylib:
	uglifyjs dist/gpos.js -o dist/gpos.min.js

stat:
	bash -c "ls -lah dist/ | grep '.js'"

watchify:
	watchify index.js -p livereactload -o dist/gpos.js

# Deploy
ghpages:
	git subtree push --prefix dist origin gh-pages

ci: commit
commit:
	bash -c 'git commit -am "$(curl -s whatthecommit.com/index.txt)"'

push:
	git push origin master

deploy: ghpages push

release: version push publish

version:
	standard-version -m '%s'

publish:
	npm publish

push:
	git push origin master --tags

version:
	standard-version

# Tests
zuul:
	zuul --local 3000 --ui mocha-qunit -- test/gpos.js

watch:
	watchd Makefile package.json test/gpos.js lib/index.js -c "bake bro"


test: zuul

# Misc

opn: opn-home opn-test

opn-home:
	opn http://localhost:3000

opn-test:
	opn http://localhost:3000/__zuul

help:
	zuul --help
