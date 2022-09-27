let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");


//build a submit event listener to prevent default behavior of our app
//also create function named formValidation

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("button clicked");

    formValidation();
});

let formValidation = () => {
//prevent users from submitting blank fields
if(input.value === "") {
    msg.innerHTML = "Post cannot be blank";
    console.log("failure");
} else {
    console.log("success");
    msg.innerHTML = "";
    acceptData(); //if field is not empty, run acceptData
}
};





//accept data from input fields
//whatever data we get we input from input fields, we store in an object
//create an object named data
//create a function named acceptData

let data = {};
let acceptData = () => {
    data["text"] = input.value;
    console.log(data);

    createPost();
};


//to post input data on rs, we need to create a div and append to posts div

//we need a parent div, input itself and options div with edit and delete icons
let createPost = () => {
    posts.innerHTML += `
    <div>
    <p>${data.text}</p>
    <span class="options">
    <i onClick="editPost(this)" class="fas fa-edit"></i>
    <i onClick="deletePost(this)" class="fas fa-trash-alt">
    </i>
    </span>
    </div>
    `;
    input.value = "";
}


//deleting a post 
let deletePost = (e) => {
    //the this keyword will refer to the element that fired the event, this refers to the delete button

    //parent of the delete button is the span with class name options. parent of span is the div. therefore we have to write parentElement

    e.parentElement.parentElement.remove();
};


//how to edit a post
let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    //parentElement is span with class options, previousES is the p element with the data text object 
    e.parentElement.parentElement.remove(); //have to remove that div from the rhs
}