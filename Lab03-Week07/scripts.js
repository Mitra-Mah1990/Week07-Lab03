function validateForm() {
    const form = document.forms["registrationForm"];
  
  if (username === "") {
    console.log("Username cannot be empty.");
    console.log("Form submission failed.");
    return false;
  } else if (!/^[a-zA-Z0-9]+$/.test(username.value)) {
    console.log("Username must contain only letters and numbers.");
    console.log("Form submission failed.");
    return false;
  }

    if (email === "") {
        console.log("Email cannot be empty.");
        console.log("Form submission failed.");
        return false;
      } else if (!/@/.test(email.value)) {
        console.log("Email must contain an '@' character.");
        console.log("Form submission failed.");
        return false;
      }


       if (password === "") {
        console.log("Password cannot be empty.");
        console.log("Form submission failed.");
        return false;
      } else if (password.length < 8) {
        console.log("Password must be at least 8 characters long.");
        console.log("Form submission failed.");
        return false;
      }

  console.log("Form submitted successfully.");
  return true;
}

const products = [
    "Table",
    "TV",
    "Pen",
    "Book",
    "Mouse",
    "Monitor",
    "Chair",
    "Desk",
    "Phone",
    "Keyboard"
  ];
const searchInput = document.getElementById("search-input");
const productList = document.getElementById("product-items");

for (let product of products) {
    const li = document.createElement("li");
    li.textContent = product;
    productList.appendChild(li);
  }

function searchProducts(query) {
    return products.filter(product => {
      return product.toLowerCase().includes(query.toLowerCase());
    });
  }
  searchInput.addEventListener("input", () => {
    productList.innerHTML = "";

const query = searchInput.value.trim();
const filteredProducts = searchProducts(query);

 for (let product of filteredProducts) {
      const li = document.createElement("li");
      li.textContent = product;
      productList.appendChild(li);
    }
  });
  
  
  
  
    