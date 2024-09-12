import { Card } from 'react-bootstrap'
import './MiniCard.css'

const MiniCard = ({icon,title,subtitle}) => {
  return (

    
        <Card className=' m-2 py-4 px-3 shadow'>
          <div className='fs-2 w-25 my-2 icon'>{icon}</div>
          <div className='fs-4 w-100 my-2 text-secondary fw-semibold'>{title}</div>
          <div className='mb-lg-5 text-body-tertiary w-100'>{subtitle}</div>
        </Card>

    
  )
}

export default MiniCard
