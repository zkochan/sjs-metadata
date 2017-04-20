import Metadata from '../src/index';


QUnit.test('imports', assert => {
    assert.ok(typeof Metadata === 'function');
});

QUnit.test('Metadata.get(...) -> errors', assert => {
    let target = () => {};
    assert.throws(() => {
        Metadata.get();
    }, 'Metadata.get()');

    assert.throws(() => {
        Metadata.get(1);
    }, 'Metadata.get(1)');

    assert.throws(() => {
        Metadata.get(target, 1);
    }, 'Metadata.get(target, 1)');
});


QUnit.test('Metadata.set(...)', assert => {
    let target = () => {};
    Metadata.set(target, 'key', 'property', 1);
    assert.equal(Metadata.get(target, 'key', 'property'), 1);
});


QUnit.test('Metadata.get(...) -> undefined', assert => {
    let target = () => {};
    assert.notEqual(Metadata.get(target, 'key'), undefined, 'Metadata.get(target, "key")');
    assert.equal(Metadata.get(target, 'key', 'property'), undefined, 'Metadata.get(target, "key", "property")');
});

QUnit.test('Metadata.find(...)', assert => {
    let target = () => {};
    assert.equal(Metadata.find(target, 'key'), undefined);
    assert.equal(Metadata.find(target, 'key', 'property'), undefined);
    Metadata.set(target, 'key', 'property', 1);
    assert.equal(Metadata.find(target, 'key').get('property'), 1);
    assert.equal(Metadata.find(target, 'key', 'property'), 1);
});

QUnit.test('Metadata.get(...)', assert => {
    let target = () => {};
    Metadata.set(target, 'key', 'property', 1);
    assert.equal(Metadata.get(target, 'key').get('property'), 1);
    assert.equal(Metadata.get(target, 'key', 'property'), 1);
});

QUnit.test('Metadata.has(...) :: empty', assert => {
    let target = () => {};
    assert.equal(Metadata.has(target, 'key'), false, 'Metadata.has(target, "key")');
    assert.equal(Metadata.has(target, 'key', 'property'), false, 'Metadata.has(target, "key", "property")');
});

QUnit.test('Metadata.has(...) :: not empty', assert => {
    let target = () => {};
    Metadata.set(target, 'key', 'property', 1);
    assert.equal(Metadata.has(target, 'key'), true, 'Metadata.has(target, "key")');
    assert.equal(Metadata.has(target, 'key', 'property'), true, 'Metadata.has(target, "key", "property")');
});
