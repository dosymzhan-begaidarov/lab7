let oldHeader = document.getElementById("oldHeader");
oldHeader.remove();
let newDiv = document.createElement("div");
document.body.appendChild(newDiv);
let newHeader = document.createElement("h1");
newHeader.textContent = "Lab7 Assignment";
newDiv.appendChild(newHeader);

newHeader.style.color = "blue";
let line = document.createElement("hr");
newDiv.appendChild(line);

let smallHeader = document.createElement("h2");
smallHeader.textContent = "Task";
newDiv.appendChild(smallHeader);
smallHeader.style.color = "red";

let paragraph = document.createElement("p");
paragraph.innerHTML = "In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:";
newDiv.appendChild(paragraph);

let list = document.createElement("ul");
newDiv.appendChild(list);
list.innerHTML = "<li>find elements in the DOM <b>(5 points)</b>;</li><li> create/add/remove elements (<b>5 points</b>);</li><li> change content of the elements <b>(5 points)</b>; </li><li> change styles of the elements <b>(5 points)</b>; </li><li> change attributes of the elements <b>(5 points)</b>; </li><li> change classes of the elements <b>(5 points)</b>. </li>"
let lis = list.getElementsByTagName('li');
for (i = 0; i < lis.length; i++) {
    if (i % 2 == 0) {
        lis[i].style.color = "green";
    } else {
        lis[i].style.color = "purple";
    }
}
newHeader.style.color = "blue";
let line2 = document.createElement("hr");
newDiv.appendChild(line2);

smallHeader2 = document.createElement("h2");
smallHeader2.textContent = "Submission";
newDiv.appendChild(smallHeader2);
smallHeader2.style.color = "red";

let paragraph2 = document.createElement("p");
paragraph2.innerHTML = "To submit your work, follow these instructions:";
newDiv.appendChild(paragraph2);

let list2 = document.createElement("ul");
newDiv.appendChild(list2);
list2.innerHTML = '<li>Create a new repository on Github, named <b>lab7 (1 point)</b>.</li><li> Clone this repository to your local machine and work inside it.</li><li> Create a new HTML file, called <b>index.html</b>, which has only one < h1> tag with "Hello, World!" message <b>(1 point)</b>.</li><li> Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above <b>(1 point)</b>.</li><li> Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section). </li><li> Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file <b>(5 points)</b>.</li><li>After you finish your work, submit it to the Github <b>(2 points)</b>.</>';

let lis2 = list2.getElementsByTagName('li');
for (i = 0; i < lis2.length; i++) {
    if (i % 2 == 0) {
        lis2[i].style.color = "green";
    } else {
        lis2[i].style.color = "purple";
    }
}
