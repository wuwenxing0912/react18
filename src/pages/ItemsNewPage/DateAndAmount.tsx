import { useState } from 'react'

type Props = {
  className?: string
}

export const DateAndAmount: React.FC<Props> = (props) => {
  const [inputValue, setInputValue] = useState('')
  const { className } = props
  return (
    <div className={className}>
      <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
      DateAndAmount<br />
      DateAndAmount<br />
      DateAndAmount<br />
      DateAndAmount<br />
      DateAndAmount<br />
      DateAndAmount<br />
      DateAndAmount<br />
      DateAndAmount<br />
      DateAndAmount<br />
      DateAndAmount<br />
      DateAndAmount<br />
      DateAndAmount<br />
      DateAndAmount<br />
      DateAndAmount<br />
      DateAndAmount<br />
    </div>
  )
}
