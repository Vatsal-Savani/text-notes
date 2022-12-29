
shownotes();
let addbtn = document.getElementById('addbtn');


addbtn.addEventListener('click',function(e){
    let addtxt = document.getElementById('addtxt');
    let addtitle = document.getElementById('addtitle');
    let notes = localStorage.getItem('notes');

    if(notes == null){
        notesobj = [];
    }
    else{
        notesobj = JSON.parse(notes);
    }
let myobj = {
    title : addtitle.value,
    text : addtxt.value
}

    notesobj.push(myobj);
    localStorage.setItem('notes',JSON.stringify(notesobj));
    addtxt.value="";
    addtitle.value="";

    console.log(notesobj);

    shownotes();

});

function shownotes(){
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesobj = [];
    }
    else{
        notesobj = JSON.parse(notes);
    }

    let html = "";

    notesobj.forEach(function(element ,index) {

        html += `<div class="notecard card my-2 mx-2" style="width : 18rem;">
        <div class="card-body"> 
        
         <h5 class="card-title">${element.title}</h5>
            <p class = "card-text">${element.text}</p>
            <button id="${index}" onclick="deletenotes(this.id)" class="btn btn-primary">delete note</button>
        </div>
    </div>`;
    });

    let noteselm = document.getElementById('notes');
    if(notesobj.length != 0){
        noteselm.innerHTML = html;
    }

    else{
        noteselm.innerHTML='nothing';
    }
}

function deletenotes(index){
    let notes = localStorage.getItem('notes');

    if(notes == null){
        notesobj = [];
    }
    else{
        notesobj = JSON.parse(notes); 
    }

    notesobj.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(notesobj));
    shownotes();

}

let search = document.getElementById('searchtxt');
search.addEventListener('input',function(){

    let inputval = search.value.toLowerCase();

    let notecards = document.getElementsByClassName('notecard');

    Array.from(notecards).forEach(function(element){
        let cardtxt = element.getElementsByTagName('p')[0].innerText;

    if(cardtxt.includes(inputval)){
        element.style.display = 'block';
    }
    else{
        element.style.display = 'none';
    }

    })
})