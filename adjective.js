let loading = true
let error = false

function getAdjective() {
  const url = 'https://random-word-form.herokuapp.com/random/adjective'
  fetch(url).then(res => {
    return res.json()
  }).then(res => {
  	document.getElementById("adjective").innerHTML = res;
     console.log(res) // <- here is your data aka response
  })
    .catch(err => {
      console.log(err);
      error = true
    })
    .finally(() => {
      loading = false
    })
}

let loading2 = true
let error2 = false

function getNoun() {
  const url2 = 'https://random-word-form.herokuapp.com/random/noun'
  fetch(url2).then(res2 => {
    return res2.json()
  }).then(res2 => {
  	document.getElementById("noun").innerHTML = res2;
     console.log(res2) // <- here is your data aka response
  })
    .catch(err2 => {
      console.log(err2);
      error2 = true
    })
    .finally(() => {
      loading2 = false
    })
}

let loading3 = true
let error3 = false

function getAdjective2() {
  const url3 = 'https://random-word-form.herokuapp.com/random/adjective'
  fetch(url3).then(res3 => {
    return res3.json()
  }).then(res3 => {
  	document.getElementById("adjective2").innerHTML = res3;
     console.log(res3) // <- here is your data aka response
  })
    .catch(err3 => {
      console.log(err3);
      error3 = true
    })
    .finally(() => {
      loading3 = false
    })
}

let loading4 = true
let error4 = false

function getNoun2() {
  const url4 = 'https://random-word-form.herokuapp.com/random/noun'
  fetch(url4).then(res4 => {
    return res4.json()
  }).then(res4 => {
  	document.getElementById("noun2").innerHTML = res4;
     console.log(res4) // <- here is your data aka response
  })
    .catch(err4 => {
      console.log(err4);
      error4 = true
    })
    .finally(() => {
      loading4 = false
    })
}
