const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.allNodes = [];
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
		this.allNodes.push(node);

    if (!this.root) this.root = node;
    
    if (this.allNodes.length > 1) {
			this.allNodes.map((node, index) => {
				node.left = this.allNodes[index * 2 + 1] || null;
				node.right = this.allNodes[index * 2 + 2] || null;
				if (index !== 0) {
					node.parent = this.allNodes[Math.floor(index / 2)];
				}
			})
		};

		this.parentNodes.forEach((element, index) => {
			if (element.left && element.right) {
				this.parentNodes.splice(index, 1);
			}
		});
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
