const gameField = document.querySelector('.gameField')
const pointsCountElement = document.querySelector('.pointsCount')

let playerPoints = 0
let dotPosition = 8
 const gameArr = [
     1,2,3,
     4,5,6,
     7,8,9,
 ]

 function append(){
   gameField.innerHTML = ""
   gameArr.forEach(cell => {
     gameField.innerHTML += `
        <div class="grid">
            ${cell === dotPosition ? `<div class="dot"></div>` : ""}
       </div>`
  })

  const greenDot = document.querySelector('.dot')
  greenDot.onclick = () =>{
    addPoint()
  }
 }

 function dotMove(){
    dotPosition = Math.floor(Math.random() * 9) + 1;
    append();
    setTimeout(dotMove, Math.random() * 2000 + 1000)
 }

 function addPoint(){
   playerPoints += 1
  pointsCountElement.innerText = playerPoints
 }

dotMove()
append()