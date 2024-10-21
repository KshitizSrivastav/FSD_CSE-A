const button = document.getElementById("btn");
const container = document.getElementById("container");

function displayBulb(){
    const textarea = document.getElementsByTagName("textarea");
    const bulbs = textarea[0].value
    console.log(bulbs);
    for(let i=0;i<bulbs;i++){
        const bulb = document.createElement("img");
        const check = document.createElement("input");
        check.type="checkbox";
        console.log(check);
        
        bulb.src = "Light_Bulb_PNG_Clip_Art-2102.png";
        bulb.setAttribute("height","150px");
        bulb.setAttribute("width","75px");
        container.appendChild(check);
        container.appendChild(bulb);
    }
}

function quantity(){
    container.innerHTML = "<textarea name='' id='textarea' placeholder='Enter number of bulbs'></textarea>";
    const submit = document.createElement("button");
    submit.innerHTML = "Submit";
    container.appendChild(submit);
    submit.addEventListener("click",displayBulb);
}
button.addEventListener("click",quantity);