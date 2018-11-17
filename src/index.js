import {getUsers, deleteUser} from './api/userApi';
import './index.css';
// Populate table of users via API call.
getUsers().then(result => {
    let usersBody = "";
  
    result.forEach(user => {
      usersBody+= `<tr>
        <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        </tr>`
    });
  
    global.document.getElementById('users').innerHTML = usersBody;
});

const deleteLinks = global.document.getElementsByClassName('deleteUser');
// get a reference of all the delete links 

// Must use array.from to creat a real array from DOM collection
// getElementByClassName only returns an "array like" object
Array.from(deleteLinks, link => {
    link.onclick = function(event){
        const element = event.target;
        event.preventDefault();
        // so the click doesnt produce any change to the url
        deleteUser(element.attributes["data-id"].value);
        const row = element.parentNode.parentNode;
        row.parentNode.removeChild(row);
        //remove the row we clicked from the DOM 
    };
});

/*
import numeral from 'numeral';
//handy library for formatting numbers
const courseValue = numeral(1000).format('$0,0.00');
//debugger;
console.log(`I would pay ${courseValue} for this awesome course!`); // eslint-disable-line no-console
//using ES6 template-string feature of back ticks
//this tell javascript to parse any variable placeholders that define inside
*/
