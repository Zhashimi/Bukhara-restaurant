import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import menuData from "../data/data.json";
import Wrapper from "../assets/wrappers/SlideShow";
const SlideShow = () => {
  const menu = menuData.menuItems;
  const [currentMenuItem, setCurrentMenu] = useState(0);

  const prevSlide = () => {
    setCurrentMenu((oldMenu) => {
      const result = (oldMenu - 1 + menu.length) % menu.length;
      return result;
    });
  };
  const nextSlide = () => {
    setCurrentMenu((oldMenu) => {
      const result = (oldMenu + 1) % menu.length;
      return result;
    });
  };

  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => {
      clearInterval(sliderId);
    };
  }, [currentMenuItem]);

  return (
    <Wrapper>
      {menu.map((menuItem, menuIndex) => {
        const { id, image, name } = menuItem;
        return (
          <article
            className="slide"
            style={{
              transform: `translateX(${100 * (menuIndex - currentMenuItem)}%)`,
              opacity: menuIndex === currentMenuItem ? 1 : 0,
              visibility: menuIndex === currentMenuItem ? "visible" : "hidden",
            }}
            key={id}
          >
            <img src={image} alt={name} className="slider-image" />
            <h3 className="title">{name}</h3>
          </article>
        );
      })}
      <button type="button" className="prev" onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button type="button" className="next" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </Wrapper>
  );
};
export default SlideShow;
