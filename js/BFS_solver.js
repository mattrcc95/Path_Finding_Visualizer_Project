function solver(extrema) {
    counter = 0;
    counter_neighbors = 0;
    startingNode = extrema[0];
    endNode = extrema[1];

    main_prev = BFS(startingNode, endNode);

    shortestPath = reconstructPath(startingNode, endNode, main_prev); //shortest path is defined as gloabl entity in the class_definition routine
    printAll(allNeighbors); //allNeighbors is defined as gloabl entity in the class_definition routine
}

function BFS(startingNode, endNode) { 
    currentNode = new Number();
    isEndFound = false;
    q = new Array();
    visited = new Array(side1 * side2).fill(false);
    local_neighbors = new Array();
    prev = new Array(side1 * side2).fill(null);

    q.push(startingNode);
    visited[startingNode] = true;

    while (q.length > 0) {
        currentNode = q.shift();
        let k=0; //neighbors index

        for (let j = 0; j < graph.adjacency_list[currentNode].getAdjacents().length; ++j) {
            if (!walls.has(graph.adjacency_list[currentNode].getAdjacents()[j].getValue())) { //put in local_neighbors iif is not a wall
                local_neighbors[k] = graph.adjacency_list[currentNode].getAdjacents()[j].getValue();
                k++;
            }
        }
        allNeighbors.push(...local_neighbors); //allNeighbors is defined as gloabl entity in the class_definition routine

        for (let next of local_neighbors) {
            if (!visited[next]) {
                q.push(next);
                visited[next] = true;
                prev[next] = currentNode;
                if (local_neighbors.includes(endNode)) {
                    isEndFound = true;
                }
            }
        }

        if (isEndFound) {
            return prev;
        }

    }

    return prev;
}

function reconstructPath(startingNode, endNode, prev) {
    path = new Array();
    for (let i = endNode; i != null; i = prev[i]) { //doesnt work perfectly... TO BE FIXED
        path.unshift(i);
    }

    if (path[0] == startingNode) { //if a path exists, return the path
        return path;
    }
    path.length = 0; //otherwise, return empty path
    return path;
}

//print neighobrs of visited node
function printAll(path) {
    setTimeout(function () {
        selectNeighbors(path[counter_neighbors]);
        ++counter_neighbors;
        if (counter_neighbors < path.length) {
            printAll(path);
            if (counter_neighbors == path.length - 1 && shortestPath.length != 0) {
                printPath(shortestPath);
            }
            //else, fai bordo del grafico rosso che trema per tot secondi o lo rifa per tot secondi 
            //quando entra il mouse dentro, fino a che non si cancella con clear
        }
    }, 1);
}

function selectNeighbors(node) {
    if (document.getElementById(node.toString()).className != "starting_end") {
        document.getElementById(node.toString()).className = "neighbors";
    }
}


//Print final path
function printPath(path) {
    setTimeout(function () {
        selectNode(path[counter]);
        ++counter;
        if (counter < path.length) {
            printPath(path);
        }
    }, 20);
}

function selectNode(node) {
    if (document.getElementById(node.toString()).className != "starting_end") {
        document.getElementById(node.toString()).className = "selected";
    }
}
