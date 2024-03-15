import { useState, useEffect } from "react";
import axios from "axios";

const CustomReactQuery = (urlPath) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // use semicolon for safety purpose for it not run previous code with this IIFE run it separately
    (async () => {
      try {
        setLoading(true);
        // and always setError to false when api succesfully run
        setError(false);
        const response = await axios.get(urlPath);
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        // always handle error through state
        setError(true);
        setLoading(false);
      }
    })();
  }, []);

  return [products, error, loading];
};

export default CustomReactQuery;
