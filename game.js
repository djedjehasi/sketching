const container = document.querySelector('.container');


function cubes(n){
    const div = [];
    for(let i = 0; i < n; i++){
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

let grid = 256;

function buildGrild(){
    const button = document.querySelector('button');

    button.addEventListener('click', () => {
        grid = prompt('enter number:');
        grid = grid * grid;
        return grid
    })

}

cubes(grid);
buildGrild();
