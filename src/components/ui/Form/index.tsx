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
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {input.name}
          </label>
          <input
            type={input.type}
            value={input.value}
            className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
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
