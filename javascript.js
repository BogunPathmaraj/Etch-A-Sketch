let container = document.getElementById('container')

 

let gridSize = prompt("Enter the grid size");

createGrid(gridSize);

 function createGrid(gridSize)
 {
    for (let rows = 0; rows < gridSize; rows++)
    {
        

        for (let columns = 0; columns < gridSize; columns++)
       {
        
         let tag = document.createElement("div");
         tag.innerHTML = `<div class='gridbox'> ${columns} </div>`
       container.append( tag)
      
      
      
       let boxes = document.getElementsByClassName('gridbox')

       for (let i =0; i < boxes.length; i++)
       {
        let dimension = ((960 - gridSize*2)/(gridSize) + 'px').toString(); 
              boxes[i].style.height = `${dimension}` 
              boxes[i].style.width = `${dimension}`
              console.log(boxes[i] )
              console.log(dimension)
       }
       }
            
    }
     
     

 }
   

 