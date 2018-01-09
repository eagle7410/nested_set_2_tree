
const nested2Tree = (arr) => {

	const getChilds = (target, arr) => {

		let childs = [];
		let noChild = [];

		arr.map(current => {
			if ((current.left > target.left) && (current.right < target.right)) {
				childs.push(current)
			} else {
				noChild.push(current)
			}
		});

		for (let i = 0; i < childs.length; i++){
			childs = getChilds(childs[i], childs);
		}

		target.childs = childs;

		return noChild;

	};

	for (let i = 0; i < arr.length; i++){
		arr = getChilds(arr[i], arr);
	}

	return arr;
}

if (typeof define === 'function' && define.amd) define(function() { return nested2Tree; });
else if (typeof module !== 'undefined') {
	module.exports = nested2Tree;
	module.exports.default = nested2Tree;
} else if (typeof self !== 'undefined') self.nested2Tree = nested2Tree;
else window.nested2Tree = nested2Tree;
