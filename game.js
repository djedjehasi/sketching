const container = document.querySelector('.container');


function cubes(){
    const div = [];
    for(let i = 0; i < 256; i++){
        div[i] = document.createElement('div');
        div[i].classList.add('cube');
        div[i].setAttribute('id', `${i}`);
        container.appendChild(div[i]);
    }
    const divCubes = document.querySelectorAll('.cube');

    divCubes.forEach((div) =>{
        div.addEventListener('mouseover', () => {
            div.classList.add('hover')
        });
    });
}


cubes();


/*buildGrid();


const button = document.querySelector('button');

function buildGrid(){

    const button = document.querySelector('button');
    grid = button.addEventListener('click', () => {
        prompt("enter number of grid between 2-100:");
    });

    grid = grid * grid;
}


*/