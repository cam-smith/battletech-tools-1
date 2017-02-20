function generateUUID(){
    var d = new Date().getTime();
    if(window.performance && typeof window.performance.now === "function"){
        d += performance.now(); //use high-precision timer if available
    }
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
}

function sortByLocationThenName( a, b ) {
	if( a.location > b.location )
		return 1;
	if( a.location < b.location )
		return -1;
	if( a.name > b.name )
		return 1;
	if( a.name < b.name )
		return -1;
	return 0;
}

function sortByCategoryThenName( a, b ) {
	if( a.local_category > b.local_category )
		return 1;
	if( a.local_category < b.local_category )
		return -1;
	//~ if( a.local_name > b.local_name )
		//~ return 1;
	//~ if( a.local_name < b.local_name )
		//~ return -1;
	return 0;
}
