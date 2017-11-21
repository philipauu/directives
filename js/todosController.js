angular
    .module("todoApp", [])
    .controller("TodosController", TodosController);

function TodosController() {
    // this is our hardcoded seed data
    this.all = [{
            task: "build an awesome to-do list",
            done: false
        },
        {
            task: "get super good at Angular",
            done: false
        },
        {
            task: "party on code",
            done: false
        },
        {
            task: "tackle the bonus challenges for this lesson",
            done: false
        },
        {
            task: "take a nap",
            done: false
        }
    ];

    //this will add our new function as a property on our controller, so we can use it in the view
    this.add = addTodo;
    this.newTodo = {
        task: '',
        done: false
    };

    // this just adds a new object to our array, with defaults for now
    function addTodo() {
        this.all.push({
            task: this.newTodo.task,
            done: false
        });

        this.newTodo.task = '';
    }

}