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
		return this.parentNodes.length;
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
		let initialNode = node; 
		let parentNode = initialNode.parent;
		while (initialNode.parent) {
			if (initialNode.priority > parentNode.priority) {
				initialNode.swapWithParent();
			} else break;
		}
		if (!initialNode.parent) this.root = node; 
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
