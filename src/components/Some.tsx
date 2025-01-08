import React from 'react'

export const Some: React.FunctionComponent = (props: any) => {
  console.log(props)
  return <div>
    <button>switch</button>
    {props.name}
  </div>
}