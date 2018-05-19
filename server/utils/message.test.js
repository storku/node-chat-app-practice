const expect = require('expect');

const { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    const from = 'Hello';
    const text = 'Bye';
    const message = generateMessage(from, text);

    expect(typeof message.createdAt).toBe('number');
    expect(message.from).toBe(from);
    expect(message.text).toBe(text);
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    const from = 'Hello';
    const latitude = 2222;
    const longitude = 1111;
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    const message = generateLocationMessage(from, latitude, longitude);

    expect(typeof message.createdAt).toBe('number');
    expect(message.from).toBe(from);
    expect(message.url).toBe(url);
  });
});
