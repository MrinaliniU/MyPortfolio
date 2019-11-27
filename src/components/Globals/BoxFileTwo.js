import React from "react"

export default function BoxfileTwo({ title, p1, p2, date }) {
  return (
    <div>
      <div>
        <h5>{title}</h5>
        <h6 align="right">{date}</h6>
      </div>
      <ul>
        <li>{p1}</li>
        <li>{p2}</li>
      </ul>
    </div>
  )
}
