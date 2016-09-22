const fs = require('fs'),

	  SRC_DIR = '../src';

var args = process.argv.slice(2),
	dest = args.find(arg => /^\-o=.+$/.test(arg)),
	debug = args.some(arg => /^debug$/.test(arg));

dest = dest ? dest.slice(3) : '.';

require('zcompile')({
	src: SRC_DIR,
	dst: dest,

	files: fs.readdirSync(SRC_DIR),
	debug: debug,
});