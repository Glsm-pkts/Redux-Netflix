import axios from "axios";

export default axios.create({
    baseURL:"https://api.themoviedb.org/3",
    //YAPACAĞIMIZ BÜTÜN İSTEKLERE EKLENİLECEK HEADERLER
    headers: {
        accept: 'application/json',

        //YETKİLENDİRME
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
      params: {
        language: "tr-TR",
      }
});