const hello = require('./hello');

test('properly creates and add an element', ()=>{
    expect(insertElement().toBe('hello world'))
})