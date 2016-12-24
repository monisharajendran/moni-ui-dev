

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
}

function updateCategory(name,gender,type){
	console.log(name+":"+gender+":"+type);
}

function deleteCategory(name,gender,type){
	console.log(name+":"+gender+":"+type);
}
