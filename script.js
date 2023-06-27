const gridContainer = document.querySelector('.grid-container');

const btnCreate = document.querySelector('.btnCreate');

gridContainer.style['display'] = 'grid';
gridContainer.style['grid-template-columns'] = 'repeat(16, 40px)';
gridContainer.style['grid-template-rows'] = 'repeat(16, 40px)';
gridContainer.style['gap'] = '1px';

btnCreate.addEventListener('click', () => {
    let gridNumber = prompt('Enter a grid number');

    gridContainer.style['display'] = 'grid';
    gridContainer.style['grid-template-columns'] = `repeat(${gridNumber}, 40px)`;
    gridContainer.style['grid-template-rows'] = `repeat(${gridNumber}, 40px)`;
    gridContainer.style['gap'] = '1px';

    console.log(gridNumber * 2);

    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    for (let i = 0; i < gridNumber * gridNumber; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.setAttribute('id', i);
        gridContainer.appendChild(gridItem);


        gridItem.style['background-color'] = "#ccc";
        gridItem.style['border'] = "1px solid black";

        gridItem.addEventListener('mouseover', (e) => {
            const hoveredElementId = e.target.id;

            console.log(hoveredElementId);

            gridItem.style['background-color'] = "black";
        });
    }

});


// for (let i = 0; i < 0; i++) {
//     const gridItem = document.createElement('div');
//     gridItem.classList.add('grid-item');
//     gridItem.setAttribute('id', i);
//     gridContainer.appendChild(gridItem);

//     gridItem.style['background-color'] = "#ccc";
//     gridItem.style['border'] = "1px solid black";

//     gridItem.addEventListener('mouseover', (e) => {
//         const hoveredElementId = e.target.id;

//         console.log(hoveredElementId);

//         gridItem.style['background-color'] = "black";
//     });
// }