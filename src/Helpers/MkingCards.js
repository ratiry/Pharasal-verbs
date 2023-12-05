
let makingCards=(collection)=>{
  let cards=[]
  for(let i=0;i<collection.length;i++){
    for(let j=0;j<collection[i].description.length;j++){
      cards.push({name:collection[i].name,description:collection[i].description[j]})
    }
  }
  return cards;
}
export default makingCards;