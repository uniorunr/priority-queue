class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (this.left && this.right) return;
		if (this.left) {
			this.right = node;
			node.parent = this;
		} else {
			this.left = node;
			node.parent = this;
		}
	}

	removeChild(node) {
		if (node === this.left) {
			this.left = null;
			node.parent = null;
		} else if (node === this.right) {
			this.right = null;
			node.parent = null;
		} else throw new Error('error');
	}

	remove() {
		if (!this.parent) return;
		this.parent.removeChild(this);
	}

	swapWithParent() {
		if (!this.parent) return;
		const grandFather = this.parent.parent;
		const parent = this.parent;
		const parentLeft = this.parent.left;
		const parentRight = this.parent.right;
		const left = this.left;
		const right = this.right;
		this.parent = grandFather;
		parent.parent = this;
		if (parent.right === this) {
			this.right = parent;
			this.left = parent.left;
			parent.parent = this;
			parent.left = left;
			parent.right = right;
			if (parentLeft) {
				parentLeft.parent = this;
			}
			if (grandFather && grandFather.right === parent) {
				grandFather.right = this;
			} else if (grandFather && grandFather.left === parent) {
				grandFather.left = this;
			}
		} else if (parent.left === this) {
			this.left = parent;
			this.right = parent.right;
			parent.parent = this;
			parent.left = left;
			parent.right = right;
			if (parentRight) {
				parentRight.parent = this;
			}
			if (grandFather && grandFather.right === parent) {
				grandFather.right = this;
			} else if (grandFather && grandFather.left === parent) {
				grandFather.left = this;
			}
		} 
	}
}

module.exports = Node;
