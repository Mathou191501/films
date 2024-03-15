function generateTable() {
    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
  
    // creating all cells
    for (let i = 0; i < 2; i++) {
      // creates a table row
      const row = document.createElement("tr");
  
      for (let j = 0; j < 2; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        const cell = document.createElement("td");
        const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.body.appendChild(tbl);
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");
  }
  // Appel de la fonction pour générer la table
generateTable();
document.addEventListener("DOMContentLoaded", function () {
    // Attendez que le DOM soit entièrement chargé

    // Sélectionnez tous les boutons dans le tableau et ajoutez un gestionnaire d'événements à chacun
    var buttons = document.querySelectorAll("button");
    
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            afficherMessage(this.id);
        });
    });

    function afficherMessage(element) {
        console.log('Vous avez cliqué sur le bouton ' + element);
        // Vous pouvez personnaliser ce message ou ajouter d'autres actions ici.
    }
});
