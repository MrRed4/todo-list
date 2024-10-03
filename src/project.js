class Project {
    constructor(title, desc) {
        this.title = title
        this.desc = desc
    }

    numberOfTodos = 0;
    tasks = [];
    isActive = false;

    changeTitle(newTitle) {
        this.title = newTitle
    }

    changeDesc(newDesc) {
        this.desc = newDesc
    }

    taskNo() {
        return this.tasks.length
    }

    addTodo(task) {
        this.tasks.push(task)
        this.numberOfTodos++
    }

    removeTodo(task) {
        this.tasks.splice(task, 1)
        this.numberOfTodos--
    }

    toggleActive() {
        this.isActive ? this.isActive = false : this.isActive = true 
    }
}

export default Project