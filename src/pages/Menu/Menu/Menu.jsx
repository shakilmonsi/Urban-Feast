import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuItmes from "../../../assets/menu/banner3.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import offeredImg from "../../../assets/menu/pizza-bg.jpg";

import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ManuCatagory from "../../../pages/Menu/Menu/ManuCatagory/ManuCatagory";
import UseMenu from "../../../hoks/UseMenu";

const Menu = () => {
  const [menu] = UseMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title> Menu </title>
      </Helmet>
      <Cover img={menuItmes} title="Our Menu"></Cover>
      {/* main cover  */}
      <SectionTitle
        subHeading="Don't Miss"
        heading="Today's Offer"
      ></SectionTitle>

      {/* dessert items part  */}
      <ManuCatagory items={dessert}></ManuCatagory>

      {/* Pizza part  */}
      <ManuCatagory items={pizza} title="pizza" img={pizzaImg}></ManuCatagory>
      {/* soup part  */}
      <ManuCatagory items={soup} title="Soup" img={soupImg}></ManuCatagory>

      {/* salad part  */}
      <ManuCatagory items={salad} title="salad" img={saladImg}></ManuCatagory>

      {/* Pizza part  */}
      <ManuCatagory
        items={offered}
        title="Offered"
        img={offeredImg}
      ></ManuCatagory>
    </div>
  );
};

export default Menu;
