
all: serve

serve:
	list .

browserify:
	browserify -e lib/search.js -p livereactload -o dist/gpos.js

watchify:
	watchify lib/search.js -p livereactload -o dist/gpos.js
