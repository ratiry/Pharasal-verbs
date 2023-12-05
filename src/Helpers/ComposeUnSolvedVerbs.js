
function isInArray(value, array) {
  return array.indexOf(value) > -1;
}
let composeUnSolvedVerbs=(verbs,verbsData,unSolvedVerbs)=>{
  let newVerbs=[]
  for(let i=0;i<verbs.length;i++){
    for(let j=0;j<verbsData.length;j++){
      if(verbs[i]==verbsData[j].name  & !isInArray(verbs[i],unSolvedVerbs)){
        newVerbs.push(verbsData[j])
      }
    }
  }
  return newVerbs;
}
export default composeUnSolvedVerbs;