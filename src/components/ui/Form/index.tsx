import React from 'react'
import './index.scss'

interface FormProps {
  handleSubmit: (e: React.FormEvent) => Promise<void>
  inputs: {
    type: string
    name: string
    handleFunction: React.Dispatch<React.SetStateAction<string>>
    value: string
  }[]
  submitButtonInnerValue: string
}

const Form: React.FC<FormProps> = ({
  handleSubmit,
  inputs,
  submitButtonInnerValue,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      {inputs.map((input) => (
        <div key={input.name}>
          <label>{input.name}</label>
          <input
            type={input.type}
            value={input.value}
            onChange={(e) => input.handleFunction(e.target.value)}
            required
          />
        </div>
      ))}

      <button type="submit">{submitButtonInnerValue}</button>
    </form>
  )
}

export default Form
