/*const myPromise = new Promise((resolve, reject) => {
  window.setTimeout(() => {
    resolve(console, log("Resolvida"));
  }, 2000);
});

await myPromise
.then((result) => result + "passando pelo then!")
.then((result) => result + "e agora acabou")
.catch((err) => console,log(err.message));
console.log(myPromise);
*/
/*
async function resolvePromise() {
  const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve(console.log("Resolvida"));
    }, 2000);
  });

  const resolved = await myPromise
    .then((result) => result + "passando pelo then!")
    .then((result) => result + "e agora acabou")
    .catch((err) => console.log(err.message));

  return resolved;
}

resolvePromise();
*/
fetch(url, options)
    .then(response => response.json())
    .then(json => console.log(json) )
    //retorna uma promisse