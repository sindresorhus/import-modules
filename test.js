import test from 'ava';
import m from '.';

test(t => {
	t.deepEqual(m('fixture'), {
		fooFoo: 'foo',
		barBar: 'bar'
	});
	t.deepEqual(Object.keys(m('fixture', {camelize: false})), ['bar-bar', 'foo-foo']);
	t.deepEqual(Object.keys(m()), ['index', 'package']);
	t.deepEqual(m('fixture/empty'), {});
	t.deepEqual(m('non-existent'), {});
});
