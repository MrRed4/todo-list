class Project {
    constructor(title, desc, colour) {
        if (!title) {
            this.title = 'Unnamed Project'
        } else {
            this.title = title
        }
        this.desc = desc
        this.colour = colour
    }

    numberOfTodos = 0;
    tasks = [];
    isActive = false;

    get numberOfTasks() {
        return this.numberOfTodos
    }

    changeTitle(newTitle) {
        this.title = newTitle
    }

    changeDesc(newDesc) {
        this.desc = newDesc
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

class ProjectAfterJSON {
    constructor(obj) {
        this.title = obj.title
        this.desc = obj.desc
        this.colour = obj.colour
        this.numberOfTodos = obj.numberOfTodos
        this.tasks = obj.tasks
        this.isActive = obj.isActive
    }

    get numberOfTasks() {
        return this.numberOfTodos
    }

    changeTitle(newTitle) {
        this.title = newTitle
    }

    changeDesc(newDesc) {
        this.desc = newDesc
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

export { Project, ProjectAfterJSON }