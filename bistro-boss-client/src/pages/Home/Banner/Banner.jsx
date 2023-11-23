
import img1 from '../../../../src/images/55.gif';
import img2 from '../../../../src/images/2.jpg';
import img3 from '../../../../src/images/3.jpg';
import img4 from '../../../../src/images/4.jpg';
const Banner = () => {
    return (
        <div>
 <div className="carousel w-full h-96">
  <div id="item1" className="carousel-item w-full">
    <img src={img1} className="w-full" />
  </div>
  <div id="item2" className="carousel-item w-full">
    <img src={img2} className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src={img3} className="w-full" />
  </div>
  <div id="item4" className="carousel-item w-full">
    <img src={img4} className="w-full" />
  </div> 
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
  
        </div>

    );
};
export default Banner;