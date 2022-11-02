// let inputFile=document.getElementsByTagName("input")
// console.log(inputFile)
// function showFile(input) {
//   let file = input.files[0];
//   console.log(file)
//   console.log(`${file.name}`)
//   console.log(`${file.lastModified}`)
//   console.log(`${file.lastModifiedDate}`)
//   // alert(`File name: ${file.name}`); // e.g my.png
//   // alert(`Last modified: ${file.lastModified}`); // e.g 1552830408824
// }
function readFile(input) {
  let file = input.files[0];
  let reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = function(event) {
    let url=event.target.result
    let imgDiv=document.getElementById("photoSeat")
    imgDiv.style.backgroundImage=`url(${url})`
  };

}