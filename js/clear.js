function clearAll() {
    clearWalls();
    clearAllNeighbors();
    document.getElementById('itemsContainer').style.pointerEvents = 'auto';
}

function clearExtrema() {
    for (let node of extrema) {
        document.getElementById(node.toString()).className = "box";
    }
    document.getElementById('itemsContainer').style.pointerEvents = 'auto';
    extrema.length = 0;
}

function clearShortestPath() {
    clearExtrema();
    for (let node of shortestPath) {
        document.getElementById(node.toString()).className = "box";
    }
    document.getElementById('itemsContainer').style.pointerEvents = 'auto';
    shortestPath.length = 0;
}

function clearWalls() {
    for (let node of walls) {
        document.getElementById(node.toString()).className = "box";
        walls.delete(node);
    }
    walls.size = 0;
}

function clearAllNeighbors() {
    clearShortestPath();
    clearExtrema();
    for (let node of allNeighbors) {
        document.getElementById(node.toString()).className = "box";
    }
    document.getElementById('itemsContainer').style.pointerEvents = 'auto';
    allNeighbors.length = 0;
}