command = '';
todo = '';
todoList = ['asdf', 'jkl'];
indexToDelete ='';

while(true) {
    command = prompt("What would you like to do?");

    if (command === 'quit' || command === 'q') {
        console.log("Ok, i'll quit! Bye");
        break;
    }

    if (command === 'new') {
        todo = prompt("Enter new todo:");
        todoList.push(todo);
        console.log(`${todo} added to the list!`);
    }

    if (command === 'list') {
        console.log("**********");
        
        if (todoList.length === 0) {
            console.log("Empty Todo List.");
        } else {
            for (let i = 0; i < todoList.length; i++) {
                console.log(`${i}: ${todoList[i]}`);
            }
        }
        console.log("**********");
    }

    if (command === 'delete') {
        indexToDelete = parseInt(prompt("Which todo would you like to delete?"));

        while (Number.isNaN(indexToDelete) || indexToDelete < 0 || indexToDelete >= todoList.length) {
            indexToDelete = parseInt(prompt("Enter a valid index of todo to delete:"));
        }

        todoList.splice(indexToDelete, 1);
        console.log(`Todo #${indexToDelete} deleted!`);
    }

}