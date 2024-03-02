
const clickme=document.querySelector(".click-me");

const empInputs=document.querySelector(".parent");

const spntag=document.querySelector("#fm>span");

const addempbtn=document.getElementById("addempbtn");

const fm=document.getElementById("fm");

const fbody=document.getElementById("bdy");

let count=2;//this is for counting the records we have

// console.log(clickme);

//function popup is for input form display and not display
function popup(){
    if(empInputs.style.display==="none"){
        empInputs.style.display='flex';
    }else{
        empInputs.style.display="none" ;
    }
}

//after clicking click me form will show up
clickme.addEventListener("click",function(){
popup();
});

//after clicking 'x' form will disappear
spntag.addEventListener("click",()=>{
    popup();
})

//this function take inputs and check all inputs are present or not even if one is not it will show null
function takeInputs(){
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const ph_no=document.getElementById("ph_no").value;
    const desg=document.getElementById("desg").value;
    const salary=document.getElementById("salary").value;

    let arr=[name,email,ph_no,desg,salary];

  let chk=  checkInput(arr);
  if(chk!==null){
    let e={
        no:`${count++}`,
        name:name,
        email:email,
        phone:ph_no,
        desg:desg,
        salary:salary
    }
    return e;
  }else{
    return null;
  }
}

//this function check all data is there or not if it is it will pass data object else send null
function checkInput(arr){
    for(let x in arr){
        if(arr[x]===""){
            return null;
        }
    }
}

//this event will check emp added or not
addempbtn.addEventListener("click",(e)=>{
e.preventDefault();
let x=takeInputs();
fm.reset();
if(x!==null){
    createROW(x) ;
}
})


//buttons are created which are created as soon as we create element it should be there
let btn1;
let btn2;


//This function create element and add event listners to the buttons of edit and Delete
function createROW(obj){

    const trow=document.createElement("tr");//row created

    let td; //for tabl data

    //loop is going to run untill object all keys are iterated and by using value we are creating td elemnts for row and appending in row
    for(let x in obj){
      td=document.createElement("td");
      td.innerText+=`${obj[x]}`;
      trow.appendChild(td);
    }

    //Edit and delete buttons are creataed here
     btn1=document.createElement("button");
     btn2=document.createElement("button");


     //Button text is added
    btn1.innerText+="Edit";
    btn2.innerText+="Delete";

    //adding classname to buttons
    // btn1.setAttribute("id","edit");

    // btn2.setAttribute("id","edit");
    //table data is ccreated and both buttons are addded in it
    td=document.createElement("td");
    td.setAttribute("id","edit");
    td.appendChild(btn1);
    td.append(btn2);
    trow.append(td);


    fbody.appendChild(trow);//row is appended to table here


    //event listner for edit button
    btn1.addEventListener("click",(e)=>{

        //by using for loop we are accessing each child node of row and using promt,setting value in td thats how we are editing the row
        for(let i=0;i<5;i++){
           
            if(i===0){
                let v= prompt("enter name");

                if(v!==""&&v!==null){
                    e.target.parentNode.parentNode.childNodes[i+1].innerText=v;
                }
            }else if(i===1){
                let v= prompt("enter email");

                if(v!==""&&v!==null){
                    e.target.parentNode.parentNode.childNodes[i+1].innerText=v;
                }
                
            }else if(i===2){
                let v= prompt("enter phone number");

                if(v!==""&&v!==null){
                    e.target.parentNode.parentNode.childNodes[i+1].innerText=v;
                }
            }else if(i===3){
                let v= prompt("ENTER THE FOLLOWING NO ONLY\n 1:dev 2:qa 3:tester 4:manager");

                if(v==='1'&&v!==null){
                    e.target.parentNode.parentNode.childNodes[i+1].innerText="Devloper";  
                }else if(v==='2'&&v!==null){
                    e.target.parentNode.parentNode.childNodes[i+1].innerText="QA";
                }else if(v==='3'&&v!==null){
                    e.target.parentNode.parentNode.childNodes[i+1].innerText="Tester";
                }else if(v==='4'&&v!==null){
                    e.target.parentNode.parentNode.childNodes[i+1].innerText="Manager";
                }

               
            }else if(i===4){
                let v= prompt("enter salary");

                if(v!==""&&v!==null){
                    e.target.parentNode.parentNode.childNodes[i+1].innerText=v;
                }
            }
           
        // console.log(v);
      
        
        }
   
    });

   //event listner for delete
    btn2.addEventListener("click",(e)=>{
        e.target.parentNode.parentNode.remove();//by using parent node and again parent node accesing row and then removing the row
    });
   
}



//BY USING LOCAL STORAGE WE CAN STORE  DATA ALSO MAYBE LATER



