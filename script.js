const gridContainer = document.querySelector('.grid-container');

const btnCreate = document.querySelector('.btnCreate');

// gridContainer.style['display'] = 'grid';
// gridContainer.style['grid-template-columns'] = 'repeat(16, 2fr)';
// gridContainer.style['grid-template-rows'] = 'repeat(16, 2fr)';
// gridContainer.style['gap'] = '1px';

btnCreate.addEventListener('click', () => {
    let gridNumber = prompt('Enter a grid number');

    console.log(gridNumber * 2);

    for (let i = 0; i < 32; i++) {
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

// gridContainer.style['display'] = 'grid';
// gridContainer.style['grid-template-columns'] = 'repeat(4, 40px)';
// gridContainer.style['grid-template-rows'] = 'repeat(4, 40px)';
// gridContainer.style['gap'] = '1px';

for (let i = 0; i < 256; i++) {
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