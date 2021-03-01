document.getElementById("button").addEventListener("click", function() {
  start();
})

async function start() {
  let numOfJokesUrl = "http://api.icndb.com/jokes/random/1/";
  if (document.getElementById("r2").checked) {
    console.log("222");
    numOfJokesUrl = "http://api.icndb.com/jokes/random/2/";
  } else if (document.getElementById("r3").checked) {
    numOfJokesUrl = "http://api.icndb.com/jokes/random/3/";
    console.log("333");
  }

  try {
    if (document.getElementById("first").value == '' && document.getElementById("last").value == '') {
      const response = await fetch("http://api.icndb.com/jokes/random");
      const data = await response.json();
      console.log(data.value);
      document.getElementById("jokes").innerHTML = `
      ${data.value.joke}
      `
    } else {
      const first = document.getElementById("first").value;
      const last = document.getElementById("last").value;
      const response = await fetch(`http://api.icndb.com/jokes/random?firstName=${first}&lastName=${last}`);
      const data = await response.json();
      console.log(data.value);
      document.getElementById("jokes").innerHTML = `
      ${data.value.joke}
      `
    }
  } catch (e) {
    console.log(e);
    console.log('there was a problem fetching the jokes');
  }
}






