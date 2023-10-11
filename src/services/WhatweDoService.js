export const MainService = {
  getCaseStudies: () => {
    return new Promise((resolve, reject) => {
      fetch(
        "https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws/"
      )
        .then((res) => res.json())
        .then((data) => {
          // Handle data
          resolve(data);
        })
        .catch((error) => {
          // Handle errors
          reject(error);
        });
    });
  },
};
