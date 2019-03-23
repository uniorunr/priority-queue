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

			return this.root.data;
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
		return this.root === null;
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
		const initialNode = node; 
		const parentNode = initialNode.parent;

		if (initialNode === parentNode) this.root = initialNode;
		
		if (parentNode) {
			if (initialNode.priority > parentNode.priority) {
				if (this.parentNodes.includes(initialNode) &&
				this.parentNodes.includes(parentNode)) {
					[
						this.parentNodes[this.parentNodes.indexOf(initialNode)],
						this.parentNodes[this.parentNodes.indexOf(parentNode)]
					] = [
						this.parentNodes[this.parentNodes.indexOf(parentNode)],
						this.parentNodes[this.parentNodes.indexOf(initialNode)]
					]
				} else if (!this.parentNodes.includes(parentNode) 
				&& this.parentNodes.includes(initialNode)) {
					this.parentNodes[this.parentNodes.indexOf(initialNode)] = parentNode;
				}

				initialNode.swapWithParent();
				this.shiftNodeUp(initialNode);
			}
		} else this.root = initialNode;
	} 

	shiftNodeDown(node) {
		
	}
}

const h = new MaxHeap();
h.push(42, 15);
h.push(15, 14);
h.push(0, 16);
h.push(100, 100);

const test = h.pop();
const test1 = h.pop();
const test2 = h.pop();
const test3 = h.pop();

module.exports = MaxHeap;
