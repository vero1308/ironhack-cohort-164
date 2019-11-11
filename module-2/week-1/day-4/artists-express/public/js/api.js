

const service = axios.create({
    baseURL: "http://localhost:9090"
});

console.log("service", service)
export default service;