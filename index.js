'use strict';
const fs = require('fs');
const path = require('path');

// Prevent caching of this module so module.parent is always accurate
delete require.cache[__filename];
const parentFile = module.parent.filename;
const parentDirectory = path.dirname(parentFile);

module.exports = (directory, options) => {
	directory = path.resolve(parentDirectory, directory || '');

	options = {
		camelize: true,
		...options
	};

	let files;
	try {
		files = fs.readdirSync(directory);
	} catch (_) {
		return {};
	}

	const done = new Set();
	const returnValue = {};

	// The default extensions used by NodeJS require().
	// Previously we relied on the now deprecated `require.extensions`.
	const extensions = new Set(['.js', '.json', '.node']);

	for (const extension of extensions) {
		for (const file of files) {
			const filenameStem = path.basename(file).replace(/\.\w+$/, '');
			const fullPath = path.join(directory, file);

			if (done.has(filenameStem) ||
				fullPath === parentFile ||
				path.extname(file) !== extension ||
				filenameStem[0] === '_' ||
				filenameStem[0] === '.') {
				continue;
			}

			const exportKey = options.camelize ? filenameStem.replace(/-(\w)/g, (m, p1) => p1.toUpperCase()) : filenameStem;

			returnValue[exportKey] = require(fullPath);
			done.add(filenameStem);
		}
	}

	return returnValue;
};

