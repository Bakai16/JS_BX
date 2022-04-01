function func({width, height, color = 'black'}) {
	console.log(width);
    console.log(height);
    console.log(color);
}

func( { width: 400, height: 500} );


// expected output:
// 400
// 500
// black