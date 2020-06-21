/** site.js 
 * You should add your JavaScript code to this file.  
 * See the assignment description in Guide for what
 * your code needs to accomplish.
 */


document.body.onload = fetchStandards;
/*
function addElement () {

    standards.forEach(element => {
        var standardDiv = document.createElement("div");
        standardDiv.className = "stdItem";
 
        Object.keys(element).forEach(key => {
            var newDiv = document.createElement('div')
            newDiv.className = key
            newDiv.innerHTML = element[key]
            if (key == 'description' || key == 'subconcept' || key == 'practices'){
                newDiv.classList.add("hideable");
            }
            standardDiv.appendChild(newDiv);
        })

        var currentDiv = document.getElementById("stdDiv");
        currentDiv.appendChild(standardDiv);

        var button = document.createElement("button");
        button.className = "collapsible";
        button.onclick = function() { ToggleShow(button); };

        standardDiv.appendChild(button);        
    });

    getButtons();
}

function ToggleShow(button) {

    var parent = button.parentElement;
    var divs = parent.querySelectorAll('.hideable');

    divs.forEach(function(item) {
        item.classList.toggle('show');
    })
}

function getButtons() {
    
    var buttons = document.querySelectorAll('.collapsible');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
        });        
    });
}
*/

function fetchStandards(){
  var standardsJson;

  fetch('standards.json')
    .then(response => response.json())
    .then(data => {
      data.forEach(element => {
        var standardDiv = document.createElement("div");
        standardDiv.className = "stdItem";
        var previousDiv;
        
        Object.keys(element).forEach(key => {
          var newDiv = document.createElement('div')
          newDiv.className = key
          newDiv.innerHTML = element[key]
          if (key == 'description' || key == 'concept' || 
              key == 'subconcept' || key == 'practices'){
            newDiv.classList.add("hideable");
          }
          
          if (key == 'subconcept'){
            previousDiv.appendChild(newDiv);            
          }
          else {
            standardDiv.appendChild(newDiv);            
          }
          previousDiv = newDiv;
          <!--standardDiv.appendChild(newDiv);            
        })

        var currentDiv = document.getElementById("stdDiv");
        currentDiv.appendChild(standardDiv);

        var button = document.createElement("button");
        button.className = "collapsible";
        button.onclick = function() { ToggleShow(button); };

        standardDiv.appendChild(button);        
    });
    getButtons();
  })  
}

function ToggleShow(button) {
  
    var parent = button.parentElement;
    var divs = parent.querySelectorAll('.hideable');

    divs.forEach(function(item) {
        item.classList.toggle('show');
    })
}

function getButtons() {
    
    var buttons = document.querySelectorAll('.collapsible');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
        });   
      console.log('found a button');
    });
}

