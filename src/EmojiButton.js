import React from 'react';

function EmojiButton({ emoji, label="Adopt" }) {
  console.log(emoji)
// function EmojiButton(props) {
  // console.log(props)
  
  // Destructuring props
  // const { emoji, label } = props;
  // const emoji = props.emoji;
  // const label = props.label;

  // console.log(emoji)
  // console.log(label)

  return (
    <button>
      <span role="img">{emoji}</span>
      {label}
    </button>
  )

  // return (
  //   <button>
  //     <span role="img">{props.emoji}</span>
  //     {props.label}
  //   </button>
  // )
}

export default EmojiButton