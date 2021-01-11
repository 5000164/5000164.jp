import React from "react"

export const nl2br = (text) =>
  text
    .trim()
    .split("\n")
    .map((t, index) => (
      <React.Fragment key={index}>
        {t}
        <br />
      </React.Fragment>
    ))
