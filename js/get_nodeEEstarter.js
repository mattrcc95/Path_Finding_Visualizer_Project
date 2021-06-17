function getNode(id) {
    if(extrema.length<2 && (Number(id) != extrema[0]) && document.getElementById(id).className != "wall" ){
        document.getElementById(id).className = "starting_end"; //cambia la classe dell'oggetto
        extrema.push(Number(id)); 
    }
    if(extrema.length==2){
        solver(extrema);
        document.getElementById('itemsContainer').style.pointerEvents = 'none'; 
    }
}