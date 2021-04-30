

function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;

  while (switching) {

    switching = false;
    rows = table.rows;

    for (i = 1; i < rows.length - 1; i++) {
    
      shouldSwitch = false;

      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
   
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
   
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {

      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function myFunction() {
  document.getElementById("myTable").deleteRow(0);
}

function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
function deleteRows() {
  isTable = document.getElementById("myTable");
  nBoxes = document.getElementsByName("delBox");
  for (i = nBoxes.length - 1; i >= 0; i--) {
    if (nBoxes[i].checked == true) {
      isTable.deleteRow(i + 1);
    }
  }
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
function openForm1() {
document.getElementById("Form").style.display = "block";
}

function closeForm1() {
document.getElementById("Form").style.display = "none";
}


	
var selectedRow = null

function Submit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}
function validate() {

  isValid = true;
 
  var name = document.getElementById("basicinfo").value;  
  var name = document.getElementById("company").value;  
 

  if (basicinfo == "") {
  alert (" fields required");
    return false;
  }
    if (company == "") {
  alert  ("secondname fields required");
    return false;
    }
   
  return isValid;
  
  }	
  function readFormData() {
    var formData = {};
    formData["basicinfo"] = document.getElementById("basicinfo").value;
    formData["company"] = document.getElementById("company").value;
    
    console.log(formData,'nivy')
    return formData;
}

function insertNewRecord(data) {
  var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.basicinfo;
  cell1 = newRow.insertCell(1);
  cell1.innerHTML = data.company;
  cell2 = newRow.insertCell(2);
cell2.innerHTML = `  <td><input type="checkbox" name="delBox" /></td>

`;  
cell3 = newRow.insertCell(3);
cell3.innerHTML = `   <td><button type="button"  class="openbutton btn1  " onclick="opForm()"><i class="fa fa-eye" aria-hidden="true"></i></button></td>
`;  
cell3 = newRow.insertCell(4);
cell3.innerHTML = `   <a class="button" onClick="onEdit(this)">Edit</a>
`;  
 
}

function resetForm() {
  document.getElementById("basicinfo").value = "";
  document.getElementById("company").value = "";

  selectedRow = null;
}

function onEdit(td) {

  selectedRow = td.parentElement.parentElement;
  const button = document.getElementById('submit');
  
  if(selectedRow.rowIndex){
    button.value = 'Update'
  }
  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  document.getElementById("basicinfo").value = selectedRow.cells[0].innerHTML;
  document.getElementById("company").value = selectedRow.cells[1].innerHTML;

}
// function Change() {
// 			var txt = parseInt(document.getElementById("txt").value)
// 			alert(txt);
// 			var tr = document.getElementById("myTable").getElementsByTagName("tr")
// 			tr[txt].getElementsByTagName("td")[0].innerHTML = "change me"
// 		}


function updateRecord(formData) {
	const button = document.getElementById('submit');
    if(selectedRow.rowIndex){
    	button.value = 'Submit'
    }
    selectedRow.cells[0].innerHTML = formData.basicinfo;
    selectedRow.cells[1].innerHTML = formData.company;
 

}





 