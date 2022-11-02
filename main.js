// let inputFile=document.getElementsByTagName("input")
// console.log(inputFile)
function showFile(input) {
  let file = input.files[0];
  console.log(file)

  // alert(`File name: ${file.name}`); // e.g my.png
  // alert(`Last modified: ${file.lastModified}`); // e.g 1552830408824
}