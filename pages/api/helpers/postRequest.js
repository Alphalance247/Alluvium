import axios from "axios";

export async function postRequest(url, data, config) {
  try {
    const response = await axios.post(url, data, config);
    return response;
  } catch (error) {
    // If the request was made and the server responded with a status code
    // that falls out of the range of 2xx
    if (error.response) {
      throw new Error(
        error.response.data?.message ||
          `Request failed with status ${error.response.status}`
      );
    }
    // If the request was made but no response was received
    else if (error.request) {
      console.error("Error Request:", error.request);
      throw new Error(
        "No response from server. Please check your connection and try again."
      );
    }
    // Something happened in setting up the request that triggered an Error
    else {
      console.error("Error Message:", error.message);
      throw new Error(error.message);
    }
  }
}
