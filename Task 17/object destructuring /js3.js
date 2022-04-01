let options = {
	width:  400,
	height: 500,
};

let {color = "black",  width, height } = options;

console.log(color);
console.log(width);
console.log(height);

//expected output:
// black
// 400
// 500