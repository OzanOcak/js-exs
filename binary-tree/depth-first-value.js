class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const depthFirstValues = (root) => {
  if (root === null) return [];
  const stack = [root];
  const res = [];
  while (stack.length > 0) {
    const current = stack.pop();
    res.push(current.val);
    console.log(current.val);
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  console.log(res);
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

depthFirstValues(a);
