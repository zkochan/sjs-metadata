import Metadata from '../src/index';


QUnit.test('imports', assert => {
    assert.ok(typeof Metadata === 'function');
});

QUnit.test('get undefined', assert => {
    let fn = () => {};
    assert.ok(Metadata.get(fn, 'test') === undefined);
});
