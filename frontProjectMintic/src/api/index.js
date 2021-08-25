import { URL, HTTP_STATUSES } from "./constants";

var tokenCajero;
export const api = {
  async loginAdmin(email, password) {
    try {
      //LO DE POSTMAN
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const res = await fetch(`${URL}admin/login`, {
        method: "POST",
        // AQUI LO PASO
        headers: myHeaders,
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        redirect: "follow",
      });
      const response = await res.json();
      if (res.status === HTTP_STATUSES.VALID) {
        var tokenAdmin;
        return response, (tokenAdmin = response.token);
      } else {
        return response;
      }
    } catch (error) {
      console.log("Error en el login desde archivo index API", error);
    }
  },

  async loginCajero(email, password) {
    try {
      //LO DE POSTMAN
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const res = await fetch(`${URL}cajero/login`, {
        method: "POST",
        // AQUI LO PASO
        headers: myHeaders,
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        redirect: "follow",
      });
      const response = await res.json();

      if (res.status === HTTP_STATUSES.VALID) {
        return response, localStorage.setItem(res.token);
      } else {
        return response;
      }
    } catch (error) {
      console.log("Error en el login desde archivo index API", error);
    }
  },

  async getProducts() {
    
    try {
      var myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMTg1ZmRhNWY3YmIzYzNiM2Q3NTAxMSIsImlhdCI6MTYyOTczOTM4MX0.Wt0PkvILsf4TZN_7OwbDfQy3Qfu7Ps2Whd7cLvokQ2E"
      );;
    
      const res = await fetch(`${URL}cajero/showProducts`, {
        method: "GET",
        headers: myHeaders,
        redirect: 'follow'
      });
      const response = await res.json()
      
      if (res.status === HTTP_STATUSES.VALID) {
        return (response)
        
      } else {
        return response;
      }
    } catch (error) {
      console.log("Error en el login desde archivo index API", error);
    }
  },

  async updateProducts(name, quantity){
    try {
      var myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMTg1ZmRhNWY3YmIzYzNiM2Q3NTAxMSIsImlhdCI6MTYyOTczOTM4MX0.Wt0PkvILsf4TZN_7OwbDfQy3Qfu7Ps2Whd7cLvokQ2E"
      );;
    
      const res = await fetch(`${URL}cajero/update/`, {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({
          name: name,
          quantity: quantity,
        }),
        redirect: 'follow'
      });
      const response = await res.json()
      
      if (res.status === HTTP_STATUSES.VALID) {
        return (response)
        
      } else {
        return response;
      }
    } catch (error) {
      console.log("Error en el login desde archivo index API", error);
    }
  }
};
