function graph(){
    this.nodes = [];
    this.graph = {};
}

graph.prototype.addNode = function(node){
    if(!this.nodes.filter((val)=>{
        return val.toString().toLowerCase() == node.toString().toLowerCase()
    }).length > 0){
        this.nodes.push(node);
    }
}