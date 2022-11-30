import React from 'react';

function EmojiButton(props) {
  // console.log(props)
  
  // Destructuring props
  const { emoji, label } = props;

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