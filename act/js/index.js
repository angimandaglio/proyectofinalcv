document.querySelector('button').onclick =function (){
    var image = document.getElementById ('imagen');
    image.style.width =  '100%';
    image.style.height = 'auto';
}

document.querySelector('button').ondblclick =function() {
    var image = document.getElementById ('imagen');
    image.style.width = '40%';
    image.style.height = 'auto';
}