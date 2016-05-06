var todos = ["Buy food"];

var input = prompt("What would you like to do?");


while(input !== "quit") {

if(input === "list"){
		
listTodo();	

} 

else if (input === "new")
	{
	addTodo();
	}

 else if(input === "delete"){
 
 deleteTodo();
}

input = prompt("What would you like to do?");

}

console.log("Ok, you are done!");


function listTodo() {
		console.log("*************")
		todos.forEach(function(todo, i){
			console.log(i + ": " + todo);
		});

	console.log("*************");
}

function addTodo() {
	var newTodo = prompt("Enter new todo");
// enters the new todo along with confirmation message after
	todos.push(newTodo);
	console.log("Added Todo");
}

function deleteTodo() {
	 var index = prompt("Enter index of todo to delete");
// asks what is the index of todo to delete along with confirmation msg
	 todos.splice(index,1);
//2nd value specifiies the number of deleted items	 
	 console.log("Deleted Todo");
}
