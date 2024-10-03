class Task { 
    constructor(title, desc, dueDate, prio, creationDate) {
        this.title = title
        this.desc = desc
        this.dueDate = dueDate
        this.prio = prio
        this.creationDate = creationDate
    }
    
    increasePrio() {
        if (this.prio < 3) {
            this.prio = this.prio + 1
        } else {
            console.log('Prio cannot be higher than 3')
        }
    }

    descreasePrio() {
        if (this.prio > 1) {
            this.prio = this.prio - 1
        } else {
            console.log('Prio cannot be lower than 1')
        }
    }

    calculatePrio() {
        if (this.prio <= 0) {
            return 'Low'
        } else if (this.prio >= 3) {
            return 'High'
        } else {
            return 'Moderate'
        }
    }
}

export default Task