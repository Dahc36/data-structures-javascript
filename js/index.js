requirejs.config({
	//By default load any module IDs from js/lib
	baseUrl: 'js',
	//except, if the module ID starts with "app",
	//load it from the js/app directory. paths
	//config is relative to the baseUrl, and
	//never includes a ".js" extension since
	//the paths config could be for a directory.
	// paths: {
	// 	src: '../js'
	// }
});

// Start the main app logic.
requirejs(
	['name'],
	function(name) {
		console.log(name);
		document.getElementById('root').innerHTML = name;
	}
);