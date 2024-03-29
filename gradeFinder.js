// Find grade based on score

score=prompt("Enter score:")
grade=findGrade(score)
console.log("Grade is " + grade);
function findGrade (score) {
let grade=0

if (score >=90) {
    grade="A"
}else if (score >80 && score<90){
     grade="B"
}else if (score >=70 && score<80) {
     grade="C"
}else if (score >=60 && score<90) {
     grade="D"
}else{
      grade="F"
}      
return grade
}
      
      
