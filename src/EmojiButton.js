import React from 'react';

function EmojiButton({ emoji, label }) {
// function EmojiButton(props) {
  // console.log(props)
  
  // Destructuring props
  // const { emoji, label } = props;
  // const emoji = props.emoji;
  // const label = props.label;

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