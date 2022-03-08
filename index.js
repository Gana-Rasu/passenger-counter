const count  = document.querySelector("#count-el");
const increment = document.querySelector("#increment-btn");
const save = document.querySelector("#save-btn");
const passenger = document.querySelector("#passenger");



// connecting increment buton with people entered
let count_no = 0;
increment.addEventListener("click",(e)=>{
    count_no=count_no+1;
count.innerHTML = count_no;
    console.log(count); 
});



//connecting save button with passenger 
save.addEventListener("click",(e)=>{
let countstr = count_no +" "+"-";
passenger.innerHTML =  passenger.innerHTML + countstr;
count_no = 0;
count.innerHTML = count_no;

})