let toggle=document.querySelector('.toggle');
let body=document.querySelector('body');
toggle.addEventListener('click',function(){
    body.classList.toggle('open');
});

const all = document.querySelectorAll(".a");
console.log(all);


all.forEach(a => {
    a.addEventListener("click",(e)=>
    {
        // console.log(e.target);
        // e.target.classList.add("active"); /* ajoute  la classe active sur la cible  que la fonction ecoute l evenement  clique*/
        // for(let i=0;i<all.length; i++)
        // {
        //     if(all[i] !== e.target) /* si  le li est strictement different du li cible   au clic alors on enléve  la classe active. */
        //         {
        //             all[i].classList.remove("active"); /*alors on enléve  la classe active.*/
        //         }      
        // }
          // e.target.classList.add("active"); /* ajoute  la classe active sur la cible  que la fonction ecoute l evenement  clique*/
        for(let i=0;i<all.length; i++)
        {
            all[i].classList.remove("active"); /*alors on enléve  la classe active.*/

                
        }
        e.target.classList.add("active");
    } )
})      
// const scroll= document.getElementById("scroll");
// const accueil = document.getElementById("accueil");
// let height = accueil.clientHeight;

// const scroll1= document.getElementById("scroll1");
// const prestation= document.getElementById("prestation");
// let height1 = prestation.clientHeight; 

// const scroll2= document.getElementById("scroll2");
// const catalogue= document.getElementById("catalogue");
// let height2 = catalogue.clientHeight; 

// window.addEventListener("scroll",() =>
// {
//     console.log(window.scrollY)
//     if(  window.scrollY < height )
//     {
//         scroll.classList.add("active");
//     }
//     else
//     {
//         scroll.classList.remove("active");
//     }
// })


// window.addEventListener("scroll",() =>
// {
//     console.log(window.scrollY)
//     if(  window.scrollY<height1 )
//     {
//         scroll1.classList.add("active");
//     }
//     else
//     {
//         scroll1.classList.remove("active");
//     }
// })


// window.addEventListener("scroll",() =>
// {
//     console.log(window.scrollY)
//     if( window.scrollY>height1 & window.scrollY<)
//     {
//         scroll1.classList.add("active");
//     }
//     else
//     {
//         scroll1.classList.remove("active");
//     }
// })