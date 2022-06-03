// Implement a Stack without using a JS Array

class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }

  get peek() {
    return this.items[this.top];
  }

  push(val) {
    this.top++;
    this.items[this.top] = val;
  }

  pop() {
    if (this.top < 0) {
      return null;
    }
    delete this.items[this.top]
    this.top--;
  }
}

describe('Stack', function() {
  let stack = new Stack();

  beforeEach(() => {
    stack = new Stack();
  })

  it('is created empty', () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });

  it('can push to the top', function() {
    stack.push('Abacate');
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe('Abacate');
  });

  it('can pop off', () => {
    stack.push('Laranja');
    stack.push('Abacate');
    expect(stack.top).toBe(1);
    stack.pop();
    expect(stack.peek).toBe('Laranja');
    expect(stack.top).toBe(0);

    stack.pop();
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });
})