import React, { ReactNode, useState } from 'react'

interface TextExpanderProps {
    children:string
    collapseNumber?:number;
    buttonText: string;
    buttonColor: string;
    defaultExpand?:boolean
}
const TextExpander = ({children, collapseNumber = 20, buttonText="showMore", buttonColor = 'red', defaultExpand = false} : TextExpanderProps) => {
    const [expanded, setExpanded] = useState(defaultExpand);

  return (
    <p>{expanded ? children : children?.split(" ").slice(0, collapseNumber).join(' ') + "..."} <button onClick={() => setExpanded((prev) => !prev)} style={{color: buttonColor}}>{expanded ? 'show less' : buttonText}</button></p>
  )
}

export default TextExpander