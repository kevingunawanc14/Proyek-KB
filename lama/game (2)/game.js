
var map1 = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],      
[1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],      
[1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],      
[1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1],      
[1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],      
[1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],      
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],      
[1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],      
[1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],      
[1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1],      
[1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1],      
[1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1],      
[1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1],      
[1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1],      
[1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1],      
[1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1],      
[1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1],      
[1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],      
[1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],      
[1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],      
[1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],      
[1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],      
[1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],      
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],      
[1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],      
[1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],      
[1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],      
[1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],      
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],      
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]

var map2 = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1],
[1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1],
[1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1],
[1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
[1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
[1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
[1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
[1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
[1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
[1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1],
[1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1],
[1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1],
[1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]
var mapLoaded = false
var map = null
var started = false;

// Robots & Trashes
var robots = null
var trashes = null
var interval1 = null
var interval2 = null
var trash_can_move = true;


function loadMap(option) {
    if (started) {
        Swal.fire({
        title: 'A game has started!',
        showDenyButton: true,
        confirmButtonText: 'Change anyway',
        denyButtonText: `Back`,
      }).then((result) => {
        if (result.isConfirmed) {
            started = false
            loadMap(option);
        }
      })
    } else {
        if (option == 1) { map = map1 }
        if (option == 2) { map = map2 }
        resetAll();
        mapLoaded = true
        loadBots()
    }
}
function resetAll() {
    resetMap();
    resetBots();
    clearInterval(interval1)
    clearInterval(interval2)
}
function resetMap() {
    generateRoom(map.length, map[0].length)
    for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map[0].length; j++) {
            if (map[i][j] == 1) {
                document.getElementById(i + "," + j).style.backgroundColor = 'black'
            } else { document.getElementById(i + "," + j).style.backgroundColor = 'white' }
        }
    }
}
function resetBots() {
    robots = [{pos: [1, 1], direction: -1, score: 0, type: 2, target: [0, 0], status: 'chase', path: []}]
    trashes= [{pos: [21, 19], direction: -1, alive: true, target: [0, 0]}, {pos: [5, 6], direction: -1, alive: true, target: [0, 0]}]
}
function getRandomLoc() {
    return [Math.random() * map.length, Math.random() * map.length]
}


function Start() {
    if (!started) {
        if (mapLoaded) {
            started = true
            interval1 = setInterval(updateRobotPosition, 100)
            interval2 = setInterval(updateTrashPosition, 200)
            setInterval(loadBots, 1000)
        } else {
            Swal.fire('Load a Map first!')
        }
    } else {Swal.fire('A game is in progress!')}
}

// Update every 100 milisecond
function updateRobotPosition() {
    // Iterate each Robot
    for (var i = 0; i < robots.length; i++) {
        var robot = robots[i]

        if (robot.status == 'chase') {
            // Search closest Trash for target
            var bestDistance = 1000
            var target = null
            for (var j = 0; j < trashes.length; j++) {
                if (trashes[j].alive) {
                    var distance = PhytagorasDistance(robot.pos, trashes[j].pos)
                    if (distance <= 1) { robot.score++; trashes[j].alive = false; }
                    else if (bestDistance > distance) { bestDistance = distance; target = trashes[j]; }
                }
            }
            // If no remaining trashes
            if (target == null) { clearInterval(interval1); clearInterval(interval2); loadBots(); Swal.fire('Done!'); }

            // Robot 1 follows the target
            if (robot.type == 1) { robot.target = target.pos; }
            // Robot 2 follows 5 steps ahead of the target
            if (robot.type == 2) { 
                robot.target = [target.direction > 1? target.pos[0] : target.direction == 0? target.pos[0] - 5 : target.pos[0] + 5, target.direction < 2? target.pos[1] : target.direction == 2? target.pos[1] - 5 : target.pos[1] + 5];
                robot.target[0] = Math.max(Math.min(robot.target[0], map.length - 1), 0)
                robot.target[1] = Math.max(Math.min(robot.target[1], map[0].length - 1), 0)
            }
            // Robot 3 walks at random until he finds a close trash to target
            if (robot.type == 3) { robot.target = bestDistance < 8? target.pos : getRandomLoc(); }
            // Robot 4 cooperate with other Robots to circle the target
            if (robot.type == 4) { f = function() {
                var robottofollow = null
                for (var i = 0; i < robots.length; i++) {
                    if (robots[i].target == target.pos) {robottofollow = robots[i]}
                }
                if (robottofollow == null) {
                    return target.pos
                }
                return [robottofollow.pos[0] < target.pos[0]? target.pos[0] + (target.pos[0] - robottofollow.pos[0]) : robottofollow.pos[0] - (target.pos[0] - robottofollow.pos[0]), robottofollow.pos[1] < target.pos[1]? target.pos[1] + (target.pos[1] - robottofollow.pos[1]) : robottofollow.pos[1] - (target.pos[1] - robottofollow.pos[1])]
            }; robot.target = f(); }
            // Robot 5 follows the target until the target is close enough, then he run away
            if (robot.type == 5) { robot.target = bestDistance > 8? target.pos : getRandomLoc(); }
            }

        // using Pythagoras
        // Move(robot, 'closer');
        
        // using A*
        MoveA(robot)
    }
    loadBots()
}

function updateTrashPosition() {
    if (trash_can_move) {
        // Iterate each Trash
        for (var i = 0; i < trashes.length; i++) {
            var trash = trashes[i]

            if (trashes[i].alive) {
                // Search closest Robots to avoid
                var bestDistance = 1000
                var target = null
                for (var j = 0; j < robots.length; j++) {
                    var distance = PhytagorasDistance(robots[j].pos, trash.pos)
                    if (bestDistance > distance) { bestDistance = distance; target = robots[j]; }
                }

                // Run away from the robot
                trash.target = target.pos
                Move(trash, 'away')
            }
        }
    }

    // Load bot position on Screen
    loadBots()
}


// Pythagoras Way
function PhytagorasDistance(x, y) {
    return Math.sqrt(Math.pow(x[0] - y[0], 2) + Math.pow(x[1] - y[1], 2))
}
function Move(obj, type) {
    var bestState = null
    var bestDistance = type == 'closer'? 100 : 0
    var lastdirection = obj.alive? Math.random() > 0.8 ? -1 : obj.direction : obj.direction

    var position = obj.pos
    var target = obj.target

    if (position[0] > 0 && map[position[0] - 1][position[1]] == 0 && lastdirection != 1) {
        var state = [position[0] - 1, position[1]]
        var distance = PhytagorasDistance(target, state)
        if (type == 'closer'? bestDistance > distance : bestDistance < distance) { bestDistance = distance; bestState = state; obj.direction = 0; }
    }
    if (position[0] < map.length - 1 && map[position[0] + 1][position[1]] == 0 && lastdirection != 0) {
        var state = [position[0] + 1, position[1]]
        var distance = PhytagorasDistance(target, state)
        if (type == 'closer'? bestDistance > distance : bestDistance < distance) { bestDistance = distance; bestState = state; obj.direction = 1; }
    }
    if (position[1] > 0 && map[position[0]][position[1] - 1] == 0 && lastdirection != 3) {
        var state = [position[0], position[1] - 1]
        var distance = PhytagorasDistance(target, state)
        if (type == 'closer'? bestDistance > distance : bestDistance < distance) { bestDistance = distance; bestState = state; obj.direction = 2; }
    }
    if (position[1] < map[0].length - 1 && map[position[0]][position[1] + 1] == 0 && lastdirection != 2) {
        var state = [position[0], position[1] + 1]
        var distance = PhytagorasDistance(target, state)
        if (type == 'closer'? bestDistance > distance : bestDistance < distance) { bestDistance = distance; bestState = state; obj.direction = 3; }
    }

    if (bestState == null) {
        if (obj.direction == 0) { bestState = [obj.pos[0] + 1, obj.pos[1]]; obj.direction = 1 }
        else if (obj.direction == 1) { bestState = [obj.pos[0] - 1, obj.pos[1]]; obj.direction = 0 }
        else if (obj.direction == 2) { bestState = [obj.pos[0], obj.pos[1] + 1]; obj.direction = 3 }
        else if (obj.direction == 3) { bestState = [obj.pos[0], obj.pos[1] - 1]; obj.direction = 2 }
    }
    obj.pos = bestState;
}


// A* search Algorithm
function Astar(start, target) {
    var Exploring = [[start, ManhattanDistance(start, target), []]]
    var Explored = []

    while (Exploring.length != 0) {
        var tile = Exploring.pop() // Get best candidate for Exploring with lowest Cost
        var neighbors = getNeighbors(tile[0])
        
        // Iterate each neighboring tiles
        for (let i = 0; i < neighbors.length; i++) {
            // If target achieved, return history
            if (neighbors[i][0] == target[0] && neighbors[i][1] == target[1]) { tile[2].push(neighbors[i]); return tile[2]; }

            // Check if already exlored
            var notExplored = true
            for (let j = 0; j < Explored.length; j++) {
                if (neighbors[i][0] == Explored[j][0] && neighbors[i][1] == Explored[j][1]) { notExplored = false; }
            }
            
            if (notExplored) {
                var newTile = [neighbors[i], tile[1], tile[2].slice()]  // Make newTile
                newTile[1] += 1 + map[neighbors[i][0]][neighbors[i][1]] * 100 + ManhattanDistance(newTile[0], target) - ManhattanDistance(tile[0], target) //Update Cost
                newTile[2].push(neighbors[i])   // Update History
                
                // Add to Exploring with Priority Queue
                if (Exploring.length == 0) {
                    Exploring.push(newTile)
                } else {
                    var notadded = true
                    for (let j = 0; j < Exploring.length; j++) {
                        if (newTile[1] >= Exploring[j][1]) { Exploring.splice(j, 0, newTile); notadded = false; break; }
                    }
                    if (notadded) { Exploring.push(newTile) }
                }
            }
        }
        Explored.push(tile[0])  // Add tile Position to Explored
    }
}
function getNeighbors(position) {
    neighbors = []
    if (position[0] > 0) { neighbors.push([position[0] - 1, position[1]]) }
    if (position[0] < map.length - 1 ) { neighbors.push([position[0] + 1, position[1]]) }
    if (position[1] > 0) { neighbors.push([position[0], position[1] - 1]) }
    if (position[1] < map[0].length - 1) { neighbors.push([position[0], position[1] + 1]) }
    return neighbors
}
function ManhattanDistance(x, y) {
    return Math.abs(x[0] - y[0]) + Math.abs(x[1] - y[1])
}

function MoveA(obj) {
    obj.path = Astar(obj.pos, obj.target)
    obj.pos = obj.path[0]
}


// Show Bots on Screen
function loadBots() {
    resetMap();
    for (var i = 0; i < robots.length; i++) {
        for (let j = 1; j < robots[i].path.length; j++) {
            document.getElementById(robots[i].path[j][0] + "," + robots[i].path[j][1]).style.backgroundColor = 'rgb(144, 238, 144)'
        }
        document.getElementById(robots[i].pos[0] + "," + robots[i].pos[1]).style.backgroundColor = 'green'
    }
    for (var i = 0; i < trashes.length; i++) {
        if (trashes[i].alive) {document.getElementById(trashes[i].pos[0] + "," + trashes[i].pos[1]).style.backgroundColor = 'red'}
    }

    var str = ""
    for (var i = 0; i < robots.length; i++) {
        str += "<p>Robot" + i + " Score: " + robots[i].score + "</p>";
    }
    document.getElementById("botscore").innerHTML = str;
}