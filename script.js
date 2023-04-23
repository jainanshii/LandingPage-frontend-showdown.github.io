let img=document.getElementById("images")
let ig=document.getElementById("ig")
let test=document.getElementById("test");
let cont=document.getElementById("cont");
let test1=document.getElementById("test1");
let cont1=document.getElementById("cont1");

let images=[
    {
        image:"/Machu Picchu (1).jpg"
    },
    {
        image:"/Machu Picchu (2).jpg"
    },
    {
        image:"/Machu Picchu (4).jpg"
    },
    {
        image:"/Machu Picchu (5).jpg"
    },
    {
        image:"/Machu Picchu (6).jpg"
    },
]
let imagenumber=0;
function slide(){
           ig.src=images[imagenumber].image;
       imagenumber++;
       if(imagenumber>=images.length)
       imagenumber=0;
    
}
setInterval(slide,2000);
test.addEventListener("click",review);
test1.addEventListener("click",review);
function review(){
    cont.style.display="block";
    test.style.display="none";
    test.style.color="black";
    cont1.style.display="block";
    test1.style.display="none";
    test1.style.color="black";
}