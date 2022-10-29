// Solve the below problems:

// #1) Convert the below promise into async await
fetch("https://jsonplaceholder.typicode.com/users/")
  .then((response) => response.json())
  .then(console.log);

  let users = await fetch("https://jsonplaceholder.typicode.com/users/");
  users = await users.json();
  console.log(users);


// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
  const [users, posts, albums] = await Promise.all(
    urls.map(async (url) => {
      let resp = await fetch(url);
      resp = await resp.json();
      return resp;
    })
  );
  console.log("users", users);
  console.log("posta", posts);
  console.log("albums", albums);
};

// #3)Add a try catch block to the #2 solution in order to catch any errors. 
// Now, use the given array containing an invalid url, so you console.log  
// your error with 'oooooops'.
const urls2 = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholdeTYPO.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData2 = async function () {
  const [users, posts, albums] = await Promise.all(
    urls.map(async (url) => {
      try {
        let resp = await fetch(url);
        resp = await resp.json();
        return resp;
      } catch {
        console.log("OOOPS");
        return "error";
      }
    })
  );
  console.log("users", users);
  console.log("posta", posts);
  console.log("albums", albums);
};