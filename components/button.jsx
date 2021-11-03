
import stylesButton from './button.module.css'
 

export default function Button({text}) {
  return <button type="submit" className={stylesButton.button} >{text}</button>;
}