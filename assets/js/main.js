console.log('Start of JS file');
let orc = {
    race:"orc",
    currentHP: 15,
    maxHP: 30,
    imgFile: '/assets/images/orc.jpg'
}
console.log('working!');
document.getElementById("orc3").innerHTML = orc.race;
$("#enemyPicture3").click(function() {
    console.log('function entered');
    document.getElementById("enemyPicture3").src = orc.imgFile;
})
