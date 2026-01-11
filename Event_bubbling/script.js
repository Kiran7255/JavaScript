let div = document.querySelector("div");
let ul=document.querySelector("ul");
let lis=document.querySelectorAll("li");


div.addEventListener("click",function(){
    console.log("div was clicked");
});

ul.addEventListener("click",function(event){
    //event.stopPropagation(); //stop kar deta hai bubbling ko 
    console.log("ul was clicked");

});

for(li of lis){
    li.addEventListener("click",function(event){
        //event.stopPropagation(); // li ke liye stop kar dega bubbling ko
        console.log("lis was clicked");

    });
}