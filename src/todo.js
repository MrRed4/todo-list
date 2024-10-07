class Task { 
    constructor(title, desc, dueDate, prio, creationDate) {
        if (!title) {
            this.title = 'Unnamed Task'
        } else {
            this.title = title
        }
        this.desc = desc
        this.dueDate = dueDate
        if (prio <= 0) {
            this.prio = 'Low'
        } else if (prio >= 3) {
            this.prio = 'High'
        } else {
            this.prio = 'Moderate'
        }
        this.creationDate = creationDate
    }

    increasePrio() {
        if (this.prio < 3) {
            this.prio = this.prio + 1
        } else {
            alert('Prio cannot be higher than 3')
        }
    }

    descreasePrio() {
        if (this.prio > 1) {
            this.prio = this.prio - 1
        } else {
            alert('Prio cannot be lower than 1')
        }
    }
}

export default Task