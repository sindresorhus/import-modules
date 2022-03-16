export interface Options {
	/**
	Convert *dash-style* names (`foo-bar`) and *snake-style* names (`foo_bar`) to *camel-case* (`fooBar`).

	@default true
	*/
	readonly camelize?: boolean;

	/**
	File extensions to look for.

	Unless you've set the `fileExtensions` option, that means any `.js`, `.json`, `.node` files, in that order.

	Does not recurse. Ignores the caller file and files starting with `.` or `_`.

	@default ['.js', '.json', '.node']
	*/
	readonly fileExtensions?: string[];
}

/**
Import all modules in a directory.

@param directory - Directory to import modules from. Unless you've set the `fileExtensions` option, that means any `.js`, `.json`, `.node` files, in that order. Does not recurse. Ignores the caller file and files starting with `.` or `_`.

@example

```js
// Assuming `foo-bar.js`, `baz-faz.js` files under the `directory` folder.
const importModules = require('import-modules');

const modules = importModules('directory');

console.log(modules);
//=> {fooBar: [Function], bazFaz: [Function]}
```
*/
export default function importModules(
	directory?: string,
	options?: Options,
): Record<string, unknown>;
