function node(val){
    this.value = val;
    this.edges = [];
    this.searched = false;
    this.parent = null;
}

node.prototype.set = function(property,value = undefined) {
	let properties = [];
	for(let i in this){
		properties.push(i);
	}
	if(property == 'edges'){
		this.edges.push(value);
	} else {
	this[property] = value;
	}
};

node.prototype.rm = function(){
	let properties = [];
	for(let i in this){
		properties.push(i);
	}
	if(property == 'edges'){
		this.edges[value] = undefined;
	} else {
		this[property] = undefined;
	}
}