const image = document.getElementById('speaker')

// TOD CHANGE IMAGE URL

// check window width on load, adjust image src
if (window.screen.width > 768) {

} else {
  console.log("low resolution");
}

// check window width on resize, adjust image src
window.addEventListener("resize", () =>{
    let width = window.screen.width
    if(width > 768){
        console.log('high resolution')

    }
    else{
        console.log("low resolution");
    }
})


