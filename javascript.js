let container = document.getElementById('container')

 

let gridSize = 4;

createGrid(gridSize);

 function createGrid(gridSize)
 {
    for (let rows = 0; rows < gridSize; rows++)
    {
        for (let columns = 0; columns < gridSize; columns++)
       {
     
         let tag = document.createElement("div");
         tag.innerHTML = "<div class='gridbox'> </div>"
       container.append( tag)
       }
            
    }
     
 }
   
function dynamicContainer() {

}