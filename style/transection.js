const buttoon = document.getElementById('colorChange');

const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
let colorIndex = 0;


buttoon.addEventListener('click',function(){
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1)%colors.length;
});

