const btn = document.getElementById("add_btn");
const input = document.getElementById("input");
let ids = 1;
btn.addEventListener('click',()=>{

    if(!input.value==''){

        const cb1 =  document.getElementById("card-bord1");
        let button = document.createElement('button');
        let new_div = document.createElement('div');
        new_div.appendChild(button);
        button.setAttribute('id','open_btn');
        new_div.setAttribute('draggable','true');
        new_div.setAttribute('class','dragg');
        new_div.setAttribute('id',`div-id${ids}`);
        ids++;
        new_div.innerHTML += `<details>
        <summary>${input.value}</summary>
        <p id="content" contenteditable="True">please enter description about the task</p>
        </details>`;
        new_div.innerHTML += '<i class="fa-regular fa-circle"></i><br>&nbsp';
        cb1.appendChild(new_div);
        input.value ='';
        window.addEventListener('keydown',(e)=>{
            if(e.keyCode==13 || e.keyIdentifier=='Enter'){
                if(e.target.id=='content'){
                    e.preventDefault()
                }
            }
        })
        
    }
    else{
        alert("Please enter valid task !");
    } 
    
    
    let p_val = document.querySelectorAll('p');

    p_val.forEach(val => {
        console.log
        val.addEventListener('mouseover',()=>{
            if(val.innerHTML ==''){
                val.innerHTML = "please enter description about the task";
            }
        })
    
    }); 
    let soruce = document.querySelectorAll(".dragg");
    let target = document.querySelector(".box2");
    let target2 = document.querySelector(".box3");
    let target3 = document.querySelector(".box4");

    soruce.forEach(soruces => {
        soruces.addEventListener('dragstart',(e)=>{
            e.dataTransfer.setData('text/plain',e.target.id);
            
        });    
    });
    
    
    target.addEventListener('dragover',(e)=>{
        if(e.target.id=='card-bord2'){
            e.preventDefault();
        }
    })  
    
    target.addEventListener('drop',(e)=>{
        const soruceId = e.dataTransfer.getData('text/plain');
        const ele = document.getElementById(soruceId);
        if((e.target.id)=='card-bord2' && ele.parentNode.className=='box1'){
            e.preventDefault();
            document.querySelector(`#${soruceId} i`).className = "fa-solid fa-hourglass";
            e.target.appendChild(document.getElementById(soruceId));
        }   
    })  
    
    target2.addEventListener('dragover',(e)=>{
        if(e.target.id=='card-bord3'){
            e.preventDefault();
        }
    })  

    target2.addEventListener('drop',(e)=>{
        const soruceId = e.dataTransfer.getData('text/plain');
        const ele = document.getElementById(soruceId);
        
        if((e.target.id)=='card-bord3' && ele.parentNode.className=='box2'){
            e.preventDefault();
            document.querySelector(`#${soruceId} i`).className = 'fa-solid fa-pen-to-square';
            e.target.appendChild(document.getElementById(soruceId));
        }
    })  

    target3.addEventListener('dragover',(e)=>{
        if(e.target.id=='card-bord4'){
            e.preventDefault();
        }
    })  

    target3.addEventListener('drop',(e)=>{
        const soruceId = e.dataTransfer.getData('text/plain');
        const ele = document.getElementById(soruceId);
        
        if((e.target.id)=='card-bord4' && ele.parentNode.className=='box3'){
            e.preventDefault();
            document.querySelector(`#${soruceId} i`).className = 'fa-solid fa-check';
            e.target.appendChild(document.getElementById(soruceId));
        }
    })  

    
})

