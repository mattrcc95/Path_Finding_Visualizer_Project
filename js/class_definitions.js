class GraphNode {
    constructor(value) {
      this.value = value;
      this.adjacents = []; 
    }
  
    addNode(node) { 
      this.adjacents.push(node);
    }

    removeNode(node){
      this.adjacents.shift(node);
    }

    getAdjacents() { 
        return this.adjacents;
    }

    setAdjacents(list){
      this.adjacents = list;
    }

    getValue(){
      return this.value;
    }
    
}

class Graph{
    constructor(){
        this.adjacency_list = [];
    }
}

//GLOBAL ENTITIES SEEN BY ALL THE ROUTINES
side1 = 40; //grid
side2  = 20; //sides

graph = new Graph(); //graph
walls = new Set(); //wall-set ---> faster query than simple array
extrema = new Array(); //starting/end nodes array
shortestPath = new Array(); //shortest path to be printed
allNeighbors = new Array(); //array which contains all the nodes, visited by the BFS order --> tp display the animation
