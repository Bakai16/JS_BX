
function func({color, width, height}) {
	console.log(color);
    console.log(width);
    console.log(height);
}

func( {color: 'blue', width: 400, height: 500} );

// expected output:
// blue
// 400
// 500
