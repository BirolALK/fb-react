import './Main.css'
import Card from '../card/Card'
import data from '../../assests/data'

const Main = () => {
  return (
    <div className="container_main">
      {data.map((a) => <Card{...a}/>)}
    </div>
    
  )
}

export default Main;