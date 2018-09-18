// Processing the data from JSON using loops

var resource = "./data/movies.json";
// var rawData = JSON.parse(fetch(resource).then((Response)=>{console.log(1,Response);return Response.json()})
// .then((json)=>{ console.log(2); console.log(JSON.parse(json))}))

var rawData ;
fetch(resource).then(Response=>{return Response.json()}).then((json)=>{rawData = json}).then(()=>{
for (const i in rawData) {// OBJECT
    for(const j of rawData[i]){ // movies array
        for(const k in j){ // individual movies Object
            if(Array.isArray(j[k])){
                for(const l of j[k]){
                    console.log(l); // cast
                }
            }
            else{
                console.log(j[k]); // movie name
            }
        }
    }
}})
