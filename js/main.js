window.addEventListener('scroll',()=>{
    // console.log(scroll);
    var height = document.getElementById('navbar').clientHeight;
    var scrolled = window.scrollY
    if(scrolled > height){
        document.getElementById('navbar').classList.add('scrolled');

    }else{
        document.getElementById('navbar').classList.remove('scrolled');
    }
});


// window.onload = ()=>{
//     var message = document.getElementById('message-menu');
//     var mouseIsOver = false;
//     // console.log(this);

//     message.onmouseover  = ()=>{
//         mouseIsOver = true;
//     }
//     message.onmouseout = ()=>{
//         mouseIsOver = false;
//     }

//     console.log(mouseIsOver);
// }


window.onload = () => {
    document.getElementById('message-menu').onmouseover = ()=>{
        document.getElementById('message').classList.add('display');
    }
    document.getElementById('message-menu').onmouseout = ()=>{
        document.getElementById('message').classList.remove('display');
    }
}