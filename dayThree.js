let hexSet ='123456789ABCDEF';
let getRandomColor = () =>{
    let color = '#'
    for(i=0;i<6;i++){
            color += hexSet[Math.floor(Math.random()*16)]
    }
    return color
}

const changeBackgroundColor = ()=>{
    document.body.style.backgroundColor = getRandomColor()
}


let index = 0
const names = ["Aarav","Sanya","Vikram","Neha","Rohan","Priya","Amit","Meera","Rajiv","Ananya"]

const user = document.getElementById('name');
user.innerText = names[index];

const next =()=>{
    index += 1;
    if(index === names.length){
        index = 0;
    }
    user.innerText = names[index]
}

const previous =()=>{
    index -= 1;
    if(index ===  -1){
        index = names.length -1;
    }
    user.innerText = names[index]
}