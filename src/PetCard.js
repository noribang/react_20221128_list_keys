import React from 'react';
import EmojiButton from './EmojiButton';

// function PetCard(props) {
//     console.log(props.favSnacks)

//     // const snackList = props.favSnacks.map(snack => 
//     //     <li key={snack}>{snack}</li>
//     // )

//   return (
//     <div className="card">
//       <h2>{props.name}</h2>
//       <img src={props.image} alt={props.name} />
//       <h3>Favorite Snacks</h3>
//       <ul>
//         {/* {snackList} */}
//         {props.favSnacks.map(snack => <li key={snack}>{snack}</li>)}
//       </ul>
//     </div>
//   )
// }

// render a <li> for each element in the favSnacks array
// remember to use a unique key prop

// function PetCard(props) {
function PetCard({ 
    name, 
    image="https://emborapets.com/wp-content/uploads/2020/08/Why-Does-My-Springer-Spaniel-Smell-So-Bad_.jpg", 
    favSnacks 
  }) {  
  // console.log(props.favSnacks)

  const snackList = favSnacks.map((snack) => 
    // console.log(snack)
    <li key={snack}>{snack}</li>
  )
  // const snackList = props.favSnacks.map((snack) => 
  //   // console.log(snack)
  //   <li key={snack}>{snack}</li>
  // )

  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} />
      {/* <EmojiButton emoji="&#128021;" label="Adopt"/> */}
      <EmojiButton emoji="&#128018;" label="Save"/>
      <h3>Favorite Snacks</h3>
      <ul>
      {/* render snacks here */}
      {snackList}
      </ul>
    </div>
  )

  // return (
  //   <div className="card">
  //     <h2>{props.name}</h2>
  //     <img src={props.image} alt={props.name} />
  //     {/* <EmojiButton emoji="&#128021;" label="Adopt"/> */}
  //     <EmojiButton emoji="&#128018;" label="Save"/>
  //     <h3>Favorite Snacks</h3>
  //     <ul>
  //     {/* render snacks here */}
  //     {snackList}
  //     </ul>
  //   </div>
  // )
}


export default PetCard