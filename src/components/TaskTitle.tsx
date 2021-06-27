import React, { ReactElement, useState } from 'react'

interface Props {
  name?: string
}
const Title = ({ name: propName }: Props): ReactElement => {
  const [name, setName] = useState<string>(propName || '')

  return (
    <p>
      <input
        type="text"
        name="title"
        placeholder="Enter Task Name..."
        onChange={(e) => {
          setName(e.target.value.trim())
        }}
        value={name}
      />
    </p>
  )
}
export default Title
