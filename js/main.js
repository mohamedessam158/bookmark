var siteNameInput = document.getElementById("bookmarkName");
var webSiteURLInput = document.getElementById("bookmarkURL");

var siteList = [];

if( localStorage.getItem("sites") != null){

    siteList = JSON.parse(localStorage.getItem("sites"))

    displayData()
}

function addsite() {
  var site = {
    siteName: siteNameInput.value,
    siteURL: webSiteURLInput.value,
  };
  siteList.push(site)
  
  displayData();

  console.log(siteList);
  clear();
  localStorage.setItem("sites",JSON.stringify(siteList))
}

function clear() {
  siteNameInput.value = "";
  webSiteURLInput.value = "";
}

function displayData() {
  var cartona = "";
  for (i = 0; i < siteList.length; i++) {
    cartona += `
        <tr>
        <td>
        ${i+1}
        </td>
        <td>
        ${siteList[i].siteName}
        </td>
        <td><a target="blank" href ="${siteList[i].siteURL}"><button class="btn btn-success btn-lg" ><i class="fa-regular fa-eye"></i> Visit</button></a></td>
        </td>
        <td>
        <button onclick="deleteItem(${i})" class="btn btn-danger btn-lg" ><i class="fa-solid fa-trash"></i> Delete</button>
        </td>
        </tr>
        `;
  }
  document.getElementById("tableContent").innerHTML = cartona;
}




function deleteItem(i){

    siteList.splice(i,1);

    localStorage.setItem("sites",JSON.stringify(siteList))

    displayData();

}