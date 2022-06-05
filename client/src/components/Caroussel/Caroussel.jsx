import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const Carrousel = () => {
  return (<div >
    <Carousel
      autoPlay={true}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      
    >
      <div>
        <img
          src={"https://cdn.kibrispdr.org/data/e-commerce-wallpaper-3.jpg"
          }
          width="50%;"
          border-radius="25px;"
          height="500px"
          object-fit="cover;"
        />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <img
          src={"https://149695847.v2.pressablecdn.com/wp-content/uploads/2013/03/prestashop.jpg"
            }
          width="50%;"
          height="500px"
          border-radius="25px;"
          object-fit="cover;"
        />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <img
          src={
"https://wallpaperaccess.com/full/2593105.jpg"          }
          width="50%;"
          border-radius="25px;"
          height="500px"
          object-fit="cover;"
        />
        {/* <p className="legend">Legend 3</p> */}
      </div>
    </Carousel>
    </div>
  );
};

export default Carrousel;
