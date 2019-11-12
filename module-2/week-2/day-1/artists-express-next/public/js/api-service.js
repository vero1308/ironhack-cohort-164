const service = axios.create({
    baseURL: "http://localhost:9090"
});

console.log("service =>");
console.log(service);

export default service;