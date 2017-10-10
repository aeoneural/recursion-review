// var ex = [1,[2,3],[[4]],5]
// console.log(ex)

// var flatten = function(arr){ 
// 	return arr.reduce(function(acc, curr){ 
// 		return acc.concat(curr)
// 	}, [])
// }

// console.log(flatten(ex))

console.log(JSON.stringify('hello'))
console.log(JSON.stringify(["1",2,3]))
console.log(JSON.stringify({'a':'A'}))



console.log(JSON.parse('"hello"'))


// "["1",2,3]" 
// "{"a":"A"}"
// ""hello""

// check the first element 
	// if [] {}
		// recurse 
			// if num: 
				// return num 
			// if string: 
				// return string 
			// if null: 
				// return null 
				

