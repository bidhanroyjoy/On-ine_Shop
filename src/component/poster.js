import './poster.css';

function Poster() {
  let url = require(`../image/amazon-homepage.jpg`).default
  return (
    <div className="Poster">
     <div className="Poster-img"><img src={url} /></div>
    </div>
  );
}

export default Poster;