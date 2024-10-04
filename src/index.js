import Task from "./todo.js"
import Project from "./project.js"
import "./styles.css"

const ProjectList = (() => {

    const projects = [];

    function removeProject(index) {
        projects.splice(index, 1)
    }

    function addProject(project) {
        projects.push(project)
    }

    function addTodo(newTodo, project) {
        projects[project].addTodo(newTodo)
    }

    const getProjects = () => projects

    const numberOfTasks = (project) => projects[project].taskNo()

    return { addProject, getProjects, removeProject, addTodo, numberOfTasks }
})()

createDefault()

const newProjectBtn = document.querySelector('.new-project')
const newTodoBtn = document.querySelector('.new-todo')
const confirmNewProject = document.querySelector('#confirmProjectBtn')
const confirmNewTodo = document.querySelector('#confirmTodoBtn')

newProjectBtn.addEventListener('click', () => {document.querySelector('#project-dialog').showModal()})
confirmNewProject.addEventListener('click', submitProject)

newTodoBtn.addEventListener('click', () => {document.querySelector('#todo-dialog').showModal()})
confirmNewTodo.addEventListener('click', submitTask)


function submitProject() {
    const projectName = document.querySelector('#new-project-name')
    const projectDescription = document.querySelector('#new-project-description')
    const projectColour = document.querySelector('#new-project-colour')

    createProject(projectName.value, projectDescription.value, projectColour.value)
    renderProjects()

    projectName.value = ''
    projectDescription.value = ''
    projectColour.value = '#000000'
}

function createProject(name, desc, colour) {
    let newProject = new Project(name, desc, colour)
    ProjectList.addProject(newProject)
}


function submitTask() {
    const taskName = document.querySelector('#new-task-name')
    const taskDescription = document.querySelector('#new-task-description')
    const taskDueDate = document.querySelector('#new-task-date')
    const taskPrio = document.querySelector('#new-task-priority')

    createTask(taskName.value, taskDescription.value, taskDueDate.value, taskPrio.value, new Date().toLocaleDateString("en-AU"))

    taskName.value = ''
    taskDescription.value = ''
    taskDueDate.value = ''
    renderTodoItems()
}

function createTask(title, desc, dueDate, prio, date) {
    let newTask = new Task(title, desc, dueDate, prio, date)
    ProjectList.getProjects().forEach((project) => {
        if (project.isActive) {
            project.addTodo(newTask)
        }
    })
}

function createDefault() {
    const defaultProject = new Project('Default Project', 'A simple description for your project', '#f5b942')
    const defaultTodo = new Task('First Task', 'Default todo list item', new Date().toLocaleDateString("en-AU"), 0, new Date().toLocaleDateString("en-AU"))
    defaultProject.addTodo(defaultTodo)
    defaultProject.isActive = true;
    ProjectList.addProject(defaultProject)
}

function renderProjects() {
    const projectBar = document.querySelector('#projects')
    const projectDesc = document.querySelector('.project-description')
    projectBar.innerHTML = ''

    ProjectList.getProjects().forEach((project, index) => {
        const tab = document.createElement('button')
        tab.addEventListener('click', changeActiveProject)
        tab.classList = index
        tab.textContent = `${project.title} [${project.numberOfTasks}]`
        tab.style = `border-bottom: 4px solid ${project.colour}`
        projectBar.appendChild(tab)

        if (project.isActive) {
            projectDesc.textContent = project.desc
            tab.classList.add('active')
        } 

    })
}

function renderTodoItems() {
    const container = document.querySelector('.todo-items')
    container.innerHTML = ''

    ProjectList.getProjects().forEach((project) => {
        if (project.isActive) {
            project.tasks.forEach((task, index) => {
                const x = document.createElement('button')
                const card = document.createElement('div')
                const title = document.createElement('h3')
                const description = document.createElement('p')
                const dueDate = document.createElement('p')
                const priority = document.createElement('p')
                const topDiv = document.createElement('div')
                const botDiv = document.createElement('div')

                x.textContent = 'X'
                title.textContent = `${task.title}`
                description.textContent = `${task.desc}`
                dueDate.textContent = `${task.dueDate}`
                priority.textContent = `${task.prioLabel}`

                card.classList = `card ${index} ${task.prioLabel}`
                x.classList = `${index}`
                botDiv.classList = 'task-info'
                
                container.appendChild(card)
                card.appendChild(topDiv)
                topDiv.appendChild(title)
                topDiv.appendChild(x)
                card.appendChild(description)
                card.appendChild(botDiv)
                botDiv.appendChild(priority)
                botDiv.appendChild(dueDate)

                x.addEventListener('click', removeTask)
            })
        }
    })
    renderProjects()
}

function changeActiveProject(e) {
    ProjectList.getProjects().forEach((project) => {
        project.isActive = false
    })
    ProjectList.getProjects()[e.target.classList[0]].toggleActive()
    render()
}

function removeTask(e) {
    ProjectList.getProjects().forEach((project) => {
        if (project.isActive) {
            project.removeTodo(e.target.classList.value)
        }
    })
    render()
}

function render() {
    renderTodoItems()
    renderProjects()
}

render()