import { useEffect } from "react";
import axios from "axios";

const Data = (id, setData, setLoading) => {
  const SERVER = "https://p12-server.onrender.com";

  const fetchData = async () => {
    const data = {};
    await axios.get(`${SERVER}/user/${id}`).then((response) => {
      data.user = response.data;
    });
    await axios.get(`${SERVER}/user/${id}/activity`).then((response) => {
      data.activity = response.data;
    });
    await axios
      .get(`${SERVER}/user/${id}/average-sessions`)
      .then((response) => {
        data.sessions = response.data;
      });
    await axios.get(`${SERVER}/user/${id}/performance`).then((response) => {
      data.performance = response.data;
    });

    return Promise.resolve(data);
  };

  useEffect(() => {
    fetchData()
      .then((response) => {
        setData(response);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
    return () => {
      setLoading(true);
      setData(null);
    };
  }, [id]);

  return;
};

export default Data;
