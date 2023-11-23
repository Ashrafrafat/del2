
import { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle'
import MenuItem from '../../../Shared/Menuitem/Menuitem';

const PopularItems = () => {
    const [menu,setMenu]=useState([]);
    useEffect( () => {
        fetch ('menu.json')
        .then(res =>res.json())
        .then(data=>{
            const popularItemss=data.filter(item=>item.category);
            setMenu(popularItemss)})
    },[] )
 return (
  <section>
            <SectionTitle
            heading={"All Our Products"}
            subHeading={"Exclusive for you"}>
                
            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-4">
                {
                           menu.map(item => <MenuItem
                           key={item._id}
                           item={item}
                           ></MenuItem>)
                }
            </div>
        

  </section>
    );
};
export default PopularItems;