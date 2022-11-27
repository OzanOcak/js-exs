class Value {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(value) {
    this.data = value;
  }
  remove(value) {
    this.data.pop;
  }
  getRandom() {
    let length = this.prototype.length;
    return Math.floor(Math.floor(Math.random() * (this.length - 1)));
  }
}

let v = new Value();
v.insert(4);
