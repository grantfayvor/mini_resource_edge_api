const config = {
  dev: {
    server: {
      protocol: "http",
      address: "127.0.0.1",
      port: 9000
    },
    database: {
      protocol: "mongodb",
      name: "resource_edge",
      host: "127.0.0.1",
      port: "27017",
      username: "",
      password: ""
    }
  },
  production: {
    server: {
      protocol: "http",
      address: "127.0.0.1",
      port: 9000
    },
    database: {
      protocol: "mongodb+srv",
      name: "resourceedge?retryWrites=true",
      host: "lawyerpp-cluster-5faak.mongodb.net",
      port: "",
      username: "emma",
      password: "BZKjA95TDFjuW12L"
    }
  }
};

module.exports = config;