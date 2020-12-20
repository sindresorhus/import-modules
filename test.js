import test from 'ava';
import importModules from '.';

test('main', t => {
	t.deepEqual(importModules('fixture'), {
		fooFoo: 'foo',
		barFoo: 'bar_foo',
		barBar: 'bar'
	});
	t.deepEqual(Object.keys(importModules('fixture', {camelize: false})), ['bar-bar', 'bar_foo', 'foo-foo']);
	t.deepEqual(Object.keys(importModules('fixture', {camelize: false, fileExtensions: ['.xjs']})), ['non-standard']);
	t.deepEqual(Object.keys(importModules()), ['index', 'package']);
	t.deepEqual(importModules('fixture/empty'), {});
	t.deepEqual(importModules('non-existent'), {});
});
