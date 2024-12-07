import { useState } from "react";
import axios from "axios";


export function useFlip() {
  const [isFlipped, setIsFlipped] = useState(true);
  const toggleFlip = () => {
    setIsFlipped((prevState) => !prevState);
  };

  return [isFlipped, toggleFlip];
}

export function useAxios(baseUrl) {
    const [data, setData] = useState([]);

    const addData = async (endpoint = "") => {
        try {
            const response = await axios.get(`${baseUrl}${endpoint}`);
            setData((data) => [...data, response.data]);
            } catch (error) {
            console.error("Error fetching data:", error);
            }
        };

    return [data, addData];
}
