

function getAllCategory(){
	return [
		         
		    {
				"categoryId" : 1,
				"categoryName" : "cadets",
				"gender" : "boys",
				"matchType" : "singles"
			},
			 {
				"categoryId" : 2,
				"categoryName" : "cadets",
				"gender" : "girls",
				"matchType" : "singles"
			},
			 {
				"categoryId" : 3,
				"categoryName" : "Juniors",
				"gender" : "boys",
				"matchType" : "singles"
			},
			 {
				"categoryId" : 4,
				"categoryName" : "Juniros",
				"gender" : "girls",
				"matchType" : "singles"
			}
	
			];
	
}


function createCategory(name,gender,type){
	console.log(name+":"+gender+":"+type);
	localSaveCategory(name,gender,type);
}

function updateCategory(name,gender,type){
	console.log(name+":"+gender+":"+type);
}

function deleteCategory(name,gender,type){
	console.log(name+":"+gender+":"+type);
}

var key = 'category';

function clearLocalStorage(){
	$.localStorage.remove(key);
}

function localSaveCategory(name,gender,type){
	//$.localStorage.remove(key);
var obj = new Category(name, gender, type);

var ret = $.localStorage.get(key);
if(ret!=null)
{
	ret[ret.length] = obj;
}else{
	ret = new Array();
	ret[0] = obj;
}	
	
$.localStorage.set(key,JSON.stringify(ret));
	
	var ret = $.localStorage.get(key);
	var instance = ret[0];
	console.log("Object in localStorage: "+instance.name);
}

function Category(name, gender, type){
	this.name = name;
	this.gender = gender;
	this.type = type;
}

function readCategory(name){
	
	var cats = $.localStorage.get(key);
	console.log(cats);

	 $.each(cats, function(index,cat) {
		    if(cat.name === 'cadet'){
		    	console.log("present in local: "+cat)
		    	return cat;
		    }
	 });

}

