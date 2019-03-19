const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
	}

	push(data, priority) {
		const node = new Node(data, priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
	}

	pop() {
		if (this.root) {
			this.detachRoot();
		}
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
		
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
	}

	insertNode(node) {
    this.parentNodes.push(node);

    if (!this.root) this.root = node;
    
    if (this.parentNodes.length > 1) {
			this.parentNodes.map((node, index) => {
				node.left = this.parentNodes[index * 2 + 1] || null;
				node.right = this.parentNodes[index * 2 + 2] || null;
				if (index !== 0) {
					node.parent = this.parentNodes[Math.floor(index / 2)];
				}
			})
		};
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

let h;
h = new MaxHeap();

const nodes = [
  new Node(0, 0),
  new Node(1, 1),
  new Node(2, 2),
  new Node(3, 3),
  new Node(4, 4),
  new Node(5, 5),
  new Node(6, 6),
];

nodes.forEach(node => {
  h.insertNode(node);
});

module.exports = MaxHeap;
