function createWalls(id, event) {
    if (event.buttons == 1) { //moving + left clicking --> create wall
        document.getElementById(id).className = "wall";
        walls.add(Number(id));
    }
}