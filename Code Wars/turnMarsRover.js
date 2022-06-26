// create function that tells mars rover whether to turn left or right based on current direction and target

// my solution
const turn = (current, target) => {
    if (current == 'N' && target == 'E') {
        return 'right';
    }
    else if (current == 'E' && target == 'S') {
        return 'right';
    }
    else if (current == "S" && target == 'W') {
        return 'right';
    }
    else if (current == 'W' && target == 'N') {
        return 'right';
    }
    else {
        return 'left';
    }

}

// Alternate solution
const directions = {
    N: { W: "left", E: "right" },
    S: { W: "right", E: "left" },
    W: { N: "right", S: "left" },
    E: { N: "left", S: "right" },
}

function turn2(current, target) {
    return directions[current][target]
}