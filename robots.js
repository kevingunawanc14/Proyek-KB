class Robot {
    constructor(pos, direction, score, type, target, status, path, clock) {
        this.pos = pos
        this.direction = direction
        this.score = score
        this.type = type
        this.target = target
        this.status = status
        this.path = path
        this.clock = clock
    }
}

class Trash {
    constructor(pos, direction, alive, target) {
        this.pos = pos
        this.direction = direction
        this.alive = alive
        this.target = target
    }
}