const gridContainer = document.querySelector('.grid-container');

const btnCreate = document.querySelector('.btnCreate');

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
                const gridItem = document.createElement('div');
                gridItem.classList.add('grid-item');

                gridContainer.appendChild(gridItem);
                // console.log(gridItem.target.id);

                function colorGrid(e){
                    e.target.style.backgroundColor = "red";
                    const hoveredElementId = e.target.id;
        
                     console.log(hoveredElementId);
                }

                gridItem.addEventListener("mouseover", colorGrid); 
  
            i++;
            } while (i < gridNumber * gridNumber);
        }

        addGrid(gridNumber);

    } else {
        alert('Invalid input. Grid number must be less than 100');
    }

});

