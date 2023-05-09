import axios from "axios";

async function AdviceResponse() {
  const response = await axios.get("https://api.adviceslip.com/advice");

  //   console.log(response);
  return response.data.slip;
}

export default AdviceResponse;
