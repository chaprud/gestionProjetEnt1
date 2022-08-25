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
        console.log(e.target);
        e.target.classList.add("active"); /* ajoute  la classe active sur la cible  que la fonction ecoute l evenement  clique*/
        for(let i=0;i<all.length; i++)
        {
            if(all[i] !== e.target) /* si  le li est strictement different du li cible   au clic alors on enléve  la classe active. */
                {
                    all[i].classList.remove("active"); /*alors on enléve  la classe active.*/
                }      
        }
    } )
})      

