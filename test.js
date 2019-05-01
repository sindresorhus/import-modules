import test from 'ava';
import importModules from '.';

test('main', t => {
	t.deepEqual(importModules('fixture'), {
		fooFoo: 'foo',
		barBar: 'bar'
	});
	t.deepEqual(Object.keys(importModules('fixture', {camelize: false})), ['bar-bar', 'foo-foo']);
	t.deepEqual(Object.keys(importModules()), ['index', 'package']);
	t.deepEqual(importModules('fixture/empty'), {});
	t.deepEqual(importModules('non-existent'), {});
});
