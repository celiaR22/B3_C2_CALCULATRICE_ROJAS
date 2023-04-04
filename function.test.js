const { getResultOperation } = require("./calculatrice");

/// test bdd
test('addition', () => {
    expect(getResultOperation('2+2')).toBe(4);
}); 

test('soustraction', () => {
    expect(getResultOperation('16-6')).toBe(10);
}); 

test('multiplication', () => {
    expect(getResultOperation('25 * 2')).toBe(50);
}); 

test('division', () => {
    expect(getResultOperation('40/2')).toBe(20);
}); 

test('addition avec virgule', () => {
    expect(getResultOperation('5.5 + 2.5')).toBe(8);
}); 

test('soustraction avec virgule', () => {
    expect(getResultOperation('10.5 - 1.5')).toBe(9);
}); 

test('multiplication avec virgule', () => {
    expect(getResultOperation('25.5 * 2')).toBe(51);
}); 

test('division avec virgule', () => {
    expect(getResultOperation('10.5 / 2')).toBe(5.25);
}); 

// test tdd

test('opération --', () => {
    expect(getResultOperation('1-(-1)')).toBe(2);
}); 

test('opération +-', () => {
    expect(getResultOperation('1+(-1)')).toBe(0);
}); 

test('opération () priorité )', () => {
    expect(getResultOperation('9 * (15 - (18 - 7))')).toBe(36);
}); 
