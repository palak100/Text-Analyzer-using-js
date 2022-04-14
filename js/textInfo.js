let textareaEl = document.querySelector("#text")
let text = null;

let data = 
{
    words :  0,
    uppercase :  0,
    lowercase :  0,
    digits :  0,
    vowels  : 0,
    consonents :  0,
    sentences  : 0,
    spaces : 0
}

const setText = ()=>{
    text = textareaEl.value;
    const findlength = (item) => (item === null ? 0:item.length); 

    if(text != null)
    {
        data.words = findlength(text.match(/[a-zA-Z]+/gi));
        data.consonents = findlength(text.match(/[BCDFGHJKLMNPQRSTVWXYZ]/gi));
        data.digits = findlength(text.match(/\d/g));
        data.lowercase = findlength(text.match(/[a-z]/g));
        data.sentences = findlength(text.match(/\056/gi));
        data.uppercase = findlength(text.match(/[A-Z]/g));
        data.vowels = findlength(text.match(/[aeiou]/gi));
        data.spaces = findlength(text.match(/[" "]/gi))
    }
    localStorage.setItem("data",JSON.stringify(data))
    window.location = "info.html"
}

const getdata = () =>{
    return JSON.parse(localStorage.getItem("data"))
}

const showdata = () =>{
    let data = getdata()
    let htmlcontent = ""
    for(item in data)
    {
        htmlcontent += `
        <div class="box">
        <h2>${data[item]}</h2>
        <p>${item}</p>
        </div>
        `
    }
    document.querySelector(".info-wrapper").innerHTML = htmlcontent
    
}