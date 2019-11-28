import React from "react"

export default function Boxfiles({ title, p1, p2, p3, date }) {
  return (
    <div>
      <div>
        <h5 className="box-text-title">{title}</h5>
        <h6 className="text-blue" align="right">
          {date}
        </h6>
      </div>
      <ul>
        <li>{p1}</li>
        <li>{p2}</li>
        <li>{p3}</li>
      </ul>
    </div>
  )
}
