const contactNow = document.querySelector('#button-contact')

let showInTheConsole = function(){
    let emailInupt = document.getElementById("email").value
    console.log(emailInupt)
}

contactNow.addEventListener("click", showInTheConsole);




const createParagraph = function(text) {
    let paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
}

const phoneInput = document.querySelector('#phone');

const showParagraphToConsole = function() {
    let text = phoneInput.value;
    let createParagraphTag = createParagraph(text);
    console.log(createParagraphTag);
};
phoneInput.addEventListener("input", showParagraphToConsole);







