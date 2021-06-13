import './header.css';

function Header() {
  return (
    <div className="header">
      <div className="header-search-logo"><i class="fa fa-shopping-cart" aria-hidden="true"></i> SmartCart</div>
     <div className="header-search">
        
        <div className="header-search-input">
            <input type="text" className="header-search-input-container" />
            <div className="header-search-button" ><i class="fa fa-search" aria-hidden="true"></i></div></div>
        <div className="header-search-flag"></div>
     </div>
     <div className="header-options-container">
      <div className="header-options">
          <div className="header-option">All</div>
          <div className="header-option">Weekly Ad</div>
          <div className="header-option">Sell On Smartcart</div>
          <div className="header-option">Investor</div>
          <div className="header-option">Factory Direct</div>
          <div className="header-option">Farmers Direct</div>
          <div className="header-option">Export</div>
          <div className="header-option">Travel/Ticket</div>
      </div>
      <div className="header-options-right">
        <div className="red-bg">TREASURE HUNT</div>
        <div className="header-option">Shop super deals</div>
      </div>
     </div>
     
    </div>
  );
}

export default Header;
