function grid_generator() {
    container = document.getElementById('itemsContainer');
    //generates and labels the graph nodes with an ID value
    for (let i = 0; i < side2; ++i) {
        for (let j = 0; j < side1; ++j) {
            let box_id = j + (side1 * i);
            let currNode = new GraphNode(box_id);
            currNode.setAdjacents(fill_adjacent(box_id, i));
            graph.adjacency_list[box_id] = currNode;
            container.innerHTML += '<div class="box" id = "' + box_id + '" onClick="getNode(this.id)" onmousemove="createWalls(this.id, event)"></div>';
        }
    }
}

function fill_adjacent(index, i) {
    let index_left = index - 1;
    let index_right = index + 1;
    let index_up = index - side1;
    let index_down = index + side1;
    let neighbors = [index_left, index_right, index_up, index_down];
    let adj_list = new Array();
    let isRightSide = index == (i + 1) * side1 - 1;
    let isLeftSide = index % side1 == 0;
    let isInBound = false;
    let k = 0;

    for (let i = 0; i < 4; ++i) {
        isInBound = (neighbors[i] >= 0 && neighbors[i] <= (side1 * side2 - 1));

        if (isInBound) {

            if (isRightSide) {
                if (neighbors[i] != index_right) {
                    adj_list[k] = new GraphNode(neighbors[i]);
                    ++k;
                }
            }

            else if (isLeftSide) {
                if (neighbors[i] != index_left) {
                    adj_list[k] = new GraphNode(neighbors[i]);
                    ++k;
                }
            }

            else {
                adj_list[k] = new GraphNode(neighbors[i]);
                ++k;
            }
        }
    }

    return adj_list;
}

    //create adjacancy list of the graph  for a square grid <--> optimized in O(N^2/2) OPS
/*
    //Edges --> O(N)
    for (var i = 0; i < side; ++i) {
        if (i === 0) {
            graph.adjacency_list[i].addNode(new GraphNode(i + 1));
            graph.adjacency_list[i].addNode(new GraphNode(i + side));
            i_top = i + side * (side - 1);
            graph.adjacency_list[i_top].addNode(new GraphNode(i_top + 1));
            graph.adjacency_list[i_top].addNode(new GraphNode(i_top - side));
        }
        else if (i === side - 1) {
            graph.adjacency_list[i].addNode(new GraphNode(i - 1));
            graph.adjacency_list[i].addNode(new GraphNode(i + side));
            i_top = i + side * (side - 1);
            graph.adjacency_list[i_top].addNode(new GraphNode(i_top - 1));
            graph.adjacency_list[i_top].addNode(new GraphNode(i_top - side));
        }
        else {
            graph.adjacency_list[i].addNode(new GraphNode(i + 1));
            graph.adjacency_list[i].addNode(new GraphNode(i - 1));
            graph.adjacency_list[i].addNode(new GraphNode(i + side));
            i_top = i + side * (side - 1);
            graph.adjacency_list[i_top].addNode(new GraphNode(i_top + 1));
            graph.adjacency_list[i_top].addNode(new GraphNode(i_top - 1));
            graph.adjacency_list[i_top].addNode(new GraphNode(i_top - side));
            i_left = i * side;
            graph.adjacency_list[i_left].addNode(new GraphNode(i_left + 1));
            graph.adjacency_list[i_left].addNode(new GraphNode(i_left + side));
            graph.adjacency_list[i_left].addNode(new GraphNode(i_left - side));
            i_right = i * side + (side - 1);
            graph.adjacency_list[i_right].addNode(new GraphNode(i_right - 1));
            graph.adjacency_list[i_right].addNode(new GraphNode(i_right + side));
            graph.adjacency_list[i_right].addNode(new GraphNode(i_right - side));
        }
    }

    //Body --> O( (N-2)^2 / 2 )
    for (var level = 2; level <= side - 1; ++level) {
        for (var i = level - 1; i <= side - 2; ++i) {
            i_diag = (side - i) * (side - 1) - ((side - 2) - (side - level));
            //main diag
            graph.adjacency_list[i_diag].addNode(new GraphNode(i_diag + 1));
            graph.adjacency_list[i_diag].addNode(new GraphNode(i_diag - 1));
            graph.adjacency_list[i_diag].addNode(new GraphNode(i_diag + side));
            graph.adjacency_list[i_diag].addNode(new GraphNode(i_diag - side));
            if (level > 2) {
                i_diag_up = i_diag + (side + 1) * (level - 2);
                graph.adjacency_list[i_diag_up].addNode(new GraphNode(i_diag_up + 1));
                graph.adjacency_list[i_diag_up].addNode(new GraphNode(i_diag_up - 1));
                graph.adjacency_list[i_diag_up].addNode(new GraphNode(i_diag_up + side));
                graph.adjacency_list[i_diag_up].addNode(new GraphNode(i_diag_up - side));
            }
        }
    }

    console.log("graph --> allocated");
*/



