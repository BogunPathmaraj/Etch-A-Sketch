let container = document.getElementById('container')

let gridSize = prompt("Enter the grid size");

let boxes = document.getElementsByClassName('gridbox')

  createGrid(gridSize);

  
let button = document.getElementById('reset-btn') 
   button.addEventListener('click',() => resetGrid(boxes))


//The Dynamic Grid creation 
 function createGrid(gridSize)
 {
    for (let rows = 0; rows < gridSize; rows++)
    {
        

        for (let columns = 0; columns < gridSize; columns++)
       {
        
         let tag = document.createElement("div");
         tag.innerHTML = `<div class='gridbox'>   </div>`
          container.append( tag)
      
          for (let i =0; i < boxes.length; i++)
            {
            let dimension = ((960 - gridSize*2)/(gridSize) + 'px').toString(); 
                  boxes[i].style.height = `${dimension}` 
                  boxes[i].style.width = `${dimension}`
                  boxes[i].addEventListener('mouseover', () => {boxes[i].style.backgroundColor = 'red'})
            }
            
            
                 
      }
            
    }      

 } 

 
   
//The Random Color Generator
function randomColor(){

}

//Reset Grid color
function resetGrid(boxes )
{
   for (let i =0; i < boxes.length; i++)
      {
         boxes[i].style.backgroundColor = 'antiquewhite'
      }
}
 