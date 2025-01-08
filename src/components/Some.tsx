import React from 'react'

export const Some: React.FunctionComponent = (props: any) => {
  return <div>
    <button>switch</button>
    {props.name}
  </div>
}