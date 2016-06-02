
all: serve

serve:
	list .

browserify:
	browserify -e lib/search.js -o dist/gpos.js

watchify:
	watchify lib/search.js -p livereactload -o dist/gpos.js


ghpages:
	git subtree push --prefix yov origin gh-pages

ci: commit
commit:
	git commit -am "$(curl -s whatthecommit.com/index.txt)"

push:
	git push origin master

deploy: ghpages push
