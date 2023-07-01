const gridContainer = document.querySelector('.grid-container');

const btnCreate = document.querySelector('.btnCreate');

const gridItem = document.createElement('div');
gridItem.classList.add('grid-item');


btnCreate.addEventListener('click', () => {
    let gridNumber = prompt('Enter a grid number');

    if (gridNumber <= 100 & gridNumber >= 0) {
        gridContainer.style['display'] = 'grid';
        gridContainer.style['grid-template-columns'] = `repeat(${gridNumber}, 40px)`;
        gridContainer.style['grid-template-rows'] = `repeat(${gridNumber}, 40px)`;
        gridContainer.style['gap'] = '1px';

        while (gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.firstChild);
        }

        function addGrid(gridNumber){
            let i = 0;
            do {              
                let hello = gridContainer.appendChild(gridItem.cloneNode(true));

                function colorGrid(e){
                    e.target.style.backgroundColor = "red";
                }
        
                hello.addEventListener("mouseover", colorGrid); 
  
            i++;
            } while (i < gridNumber * gridNumber);
        }


        
        addGrid(gridNumber);

    } else {
        alert('Invalid input. Grid number must be less than 100');
    }

});

