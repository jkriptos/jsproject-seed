import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {
  it('shall pass', () => {
    expect(true).to.equal(!0);
  });
});

describe('index.html', () => {
  it('should say Ehlo guvner!', (done) => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    jsdom.env(index, function(err, window) {
      const h1 = window.document.querySelector('h1');
      expect(h1.innerHTML).to.equal("Ehlo guvner!");
      done();
      window.close();
    });
  });
});
