import './bigselection.css';


function BigSelection() {
  return (
    <div className="bigselection">
        <div className="bigselection-title">
        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            Big Selection Stores
        </div>
        <div className="bigselection-item">
            <div className="bigselection-container-item">
            <img className="image_size" src="./images/61617_806188_31919_thumbnail.jpg" alt="" />
            </div>
            <div className="bigselection-container-item">
            <img className="image_size" src="./images/shopno-logo.jpg" alt="" />
            </div>
            <div className="bigselection-container-item">
            <img className="image_size" src="./images/icon_unimart.jpg" alt="" />
            </div>
            <div className="bigselection-container-item">
            <img className="image_size" src="./images/download.jpg" alt="" />
            </div>
            <div className="bigselection-container-item">
            <img className="image_size" src="./images/download.png" alt="" />
            </div>
            <div className="bigselection-container-item">
            <img className="image_size" src="./images/unnamed.png" alt="" />
            </div>
            {/* <div className="bigselection-container-item">
            <img className="image_size" src="./images/All-Mart-Web-Logo.png" alt="" />
            </div>
            <div className="bigselection-container-item">
            <img className="image_size" src="./images/app-shopping-logo-260nw-343499501.jpg" alt="" />
            </div> */}
        </div>
    </div>
  );
}

export default BigSelection;
