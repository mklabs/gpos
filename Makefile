
all: build

serve:
	list .

build: bro brolib minify stat
bro:
	browserify -e index.js -s Gpos > dist/bundle.js

brolib:
	browserify -e lib/index.js -s Gpos > dist/gpos.js

minify: uglify uglifylib

uglify:
	uglifyjs dist/bundle.js -o dist/bundle.min.js

uglifylib:
	uglifyjs dist/gpos.js -o dist/gpos.min.js

stat:
	bash -c "ls -lah dist/ | grep '.js'"

watchify:
	watchify index.js -p livereactload -o dist/gpos.js

ghpages:
	git subtree push --prefix yov origin gh-pages

ci: commit
commit:
	bash -c 'git commit -am "$(curl -s whatthecommit.com/index.txt)"'

push:
	git push origin master

deploy: ghpages push
