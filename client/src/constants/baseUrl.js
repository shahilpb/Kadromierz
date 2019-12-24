import axios from "axios";

const config = {
  baseURL: "http://13.234.81.103:8787/v1" 
};
export const METHOD = {
  POST: "post",
  GET: "get",
  PUT: "put",
  DELETE: "delete",
  PATCH: "patch"
};

export const aws_comfig = {
  bucketName: "xanduvaassets",
  region: "ap-south-1",
  accessKeyId: "AKIAWRMVUKBVZ3RAUCO5",
  secretAccessKey: "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"
};

export default (
  endpoint,
  params = {},
  onSuccess,
  onFailure,
  method = METHOD.POST,
  DyanamicConfig = {}
) => {
  //console.log("endpoint", endpoint, method);
  let request = {};
  switch (method) {
    case METHOD.POST:
      request = axios.post(
        endpoint,
        { device_id: 1, device_type: "A", ...params },
        { ...config, ...DyanamicConfig }
      );
      break;
    case METHOD.GET:
      request = axios.get(endpoint, { ...config, ...DyanamicConfig });
      break;
    case METHOD.DELETE:
      request = axios.delete(endpoint, { ...config, ...DyanamicConfig });
      break;
    case METHOD.PUT:
      request = axios.put(
        endpoint,
        { device_id: 1, device_type: "A", ...params },
        { ...config, ...DyanamicConfig }
      );
      break;
    case METHOD.PATCH:
      request = axios.patch(
        endpoint,
        { device_id: 1, device_type: "A", ...params },
        { ...config, ...DyanamicConfig }
      );
      break;
      default:
      break;

  }
  request
    .then(response => {
      var error = response.error;
      if (response) {
        if (response.data.success === 1) {
          if (response.status === 200) {
            try {
              onSuccess(
                response.data.data ? response.data.data : response.data
              );
              //onSuccess(response)
            } catch (err) {
              onFailure("Something went wrong");
            }
          } else if (response.status === 401) {
            onFailure("Session expired");
          } else {
            onFailure(
              error && typeof error === "string"
                ? error
                : "Something went wrong"
            );
          }
        } else {
          let error = response.data.error;
          error = Array.isArray(error) ? error[0] : error;
          onFailure(error ? error : "Something went wrong");
        }
      } else {
        onFailure("Something went wrong");
      }
    })
    .catch(error => {
      if (error && error.response) {
        switch (error.response.status) {
          case 401:
            onFailure("Session expired");
            break;
          default:
            onFailure(
              error && typeof error === "string"
                ? error
                : "Something went wrong"
            );
            break;
        }
      } else onFailure("Something went wrong");
    });
};
