import './construction&Real.css';

function ConstructionReal() {
  let url = require(`../image/imagecover.jpg`).default
  return (
    <div className="ConstructionReal">
        <div className="ConstructionReal-title-container">
            <div className="ConstructionReal-title">CONSTRUCTION & REAL ESTATE</div>
            <div className="ConstructionReal-div">
              
            </div>
           
        </div>
        <div className="ConstructionReal-img"><img src={url} /></div>
    </div>
  );
}

export default ConstructionReal;