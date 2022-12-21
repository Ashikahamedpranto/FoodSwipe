import React from 'react'
import './Combinefeatures.css'
import { userData } from './dummyData'
import WL from './widgetLg/WidgetLg'
import FeaturedInfo from './featuredInfo/FeaturedInfo'
import Chart from './chart/Chart'
import Sidebar from './sidebar/Sidebar'
const Combinefeatures = () => {
  
  return (
    
    <div className='combcontainer'>
      <Sidebar/>
      <div className="combhome">
       <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/> 
      <div className="combhomeWidgets">
     
        <WL/>
      </div>
    </div>
</div>

  )
}

export default Combinefeatures