// 🏆 Snack 1
// Ottieni il titolo di un post con una Promise.
// Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}

const getPostTitle = (id) => {
  return new Promise((resolve, reject) => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then(response => response.json())
      .then((data) => {
        resolve(data.title);
      })
      .catch(reject);
      });
  }
  getPostTitle(1)
    .then((title) => {
      console.log("il titolo è", title);
    })
    .catch((error) => {
      console.error('Errore:', error);
    });






// 🏆 Snack 2
// Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject.

const lanciaDado = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      const isStuck = Math.random() < 0.2; 
      if (isStuck) {
        reject(new Error("Il dado si è incastrato!"));
      } else {
        resolve(randomNumber);
      }
    }, 3000);
  });
}
lanciaDado()
  .then((number) => {
    console.log("Il numero del dado è:", number);
  })
  .catch((error) => {
    console.error("Errore:", error.message);
  });
