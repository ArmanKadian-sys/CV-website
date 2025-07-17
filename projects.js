let container_id=[];
let my_url=["https://armankadian-sys.github.io/To-do-list/","https://armankadian-sys.github.io/Calculator/","https://armankadian-sys.github.io/game/","https://armankadian-sys.github.io/ClothingCSS/","https://armankadian-sys.github.io/ClothingWork/"];
let my_code=["https://github.com/ArmanKadian-sys/To-do-list","https://github.com/ArmanKadian-sys/Calculator","https://github.com/ArmanKadian-sys/game","https://github.com/ArmanKadian-sys/ClothingCSS","https://github.com/ArmanKadian-sys/ClothingWork"];
let objref=[];
let hoverStates = [];




document.querySelectorAll(".project_part2").forEach(
    (element)=>{ 
        let mynum=parseInt(element.id);
         hoverStates[mynum] = false;
       
        container_id[mynum]=element.innerHTML;
        objref[mynum]=element;
    }
)



document.querySelectorAll(".project_part2").forEach(
    (element)=>{
        let mynum=parseInt(element.id);




        element.addEventListener('mouseenter',(event)=>{
             if (hoverStates[mynum]) return;
    hoverStates[mynum] = true;
            console.log('hi')



     objref[mynum].innerHTML=`<div class="a_part1"><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#EFEFEF"><path d="m387-311 261-169-261-169v338ZM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm0-600v600-600Z"/></svg><a href=${my_url[mynum]}>PROJECT</a></div>
    <div class="a_part2"><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#EFEFEF"><path d="M320-242 80-482l242-242 43 43-199 199 197 197-43 43Zm318 2-43-43 199-199-197-197 43-43 240 240-242 242Z"/></svg><a href=${my_code[mynum]}>CODE</a></div>`
            



})


         element.addEventListener('mouseleave',(event)=>{

           objref[mynum].innerHTML=`${container_id[mynum]}`;
           hoverStates[mynum] = false;
         console.log(container_id[mynum]);
        })

    }
)









