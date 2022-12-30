(function(){
	const d = window._config;
	window.apps={};
	for(var i in d.apps){
		getFile(`/modules/src/${d.apps[i]}/config.js`, function(e){
			eval(e);
		});
	}
	getFile(`/js/loadmods.js`, function(e){
		eval(e);
	});
})();