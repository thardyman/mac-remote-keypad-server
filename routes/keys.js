
var allkeys = [
	{key:7, label:'7', id:'7'},
	{key:8, label:'8', id:'8'},
	{key:9, label:'9', id:'9'},
	{key:'/', label:'/', id:'slash'},

	{key:4, label:'4', id:'4'},
	{key:5, label:'5', id:'5'},
	{key:6, label:'6', id:'6'},
	{key:'*', label:'*', id:'star'},

	{key:1, label:'1', id:'1'},
	{key:2, label:'2', id:'2'},
	{key:3, label:'3', id:'3'},
	{key:'+', label:'+', id:'plus'},

	{key:',', label:',', id:'comma'},
	{key:0, label:'0', id:'0'},
	{key:'.', label:'.', id:'dot'},
	{key:'-', label:'-', id:'minus'}
];

exports.getKeyById = function(keyId){
	return allkeys.filter(function(item){return item.id === keyId})[0].key;
}

exports.raw = function(){
	return allkeys;
}
