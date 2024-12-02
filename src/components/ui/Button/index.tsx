import './index.scss'

interface ButtonProps {
  text: string
  variant: 'primary' | 'secondary' | 'link'
  onClick: () => void
}

const Button: React.FC<ButtonProps> = ({ text, variant, onClick }) => {
  return (
    <button className={`button ${variant}`} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
