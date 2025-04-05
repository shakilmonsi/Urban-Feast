import { useEffect, useState } from "react";

const UseMenu = () => {
  // fjksjfkasjkfjkasjkfjaskfj
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setLoading(false);
      });
  }, []);
  return [menu, loading];
};

export default UseMenu;
