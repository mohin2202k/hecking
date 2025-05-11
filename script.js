function init() {
  return new Promise((resolve) => {
    time = Math.floor(Math.random() * 7 + 1)
    setTimeout(() => {
      resolve("Initializing hecking")
    }, 0)
  })
}
function readFile() {
  return new Promise((resolve) => {
    time = Math.floor(Math.random() * 7 + 1)
    setTimeout(() => {
      resolve("Reading your Files")
    }, time * 1000)
  })
}
function detectPass() {
  return new Promise((resolve) => {
    time = Math.floor(Math.random() * 7 + 1)
    setTimeout(() => {
      resolve("Password files Detected")
    }, time * 1000)
  })
}
function uploadPass() {
  return new Promise((resolve) => {
    time = Math.floor(Math.random() * 7 + 1)
    setTimeout(() => {
      resolve("Sending all passwords and personal files to server")
    }, time * 1000)
  })
}
function clean() {
  return new Promise((resolve) => {
    time = Math.floor(Math.random() * 7 + 1)
    setTimeout(() => {
      resolve("Cleaning up")
    }, time * 1000)
  })
}

async function heck() {

  let initMsg = await init();
  let initdiv = document.createElement("div")
  initdiv.innerHTML = `<p style="display: inline;">${initMsg}</p> <span class="dots">
          <span>.</span>
          <span>.</span>
          <span>.</span>
      </span> `
  document.body.append(initdiv)


  let readFileMsg = await readFile();
  let readFilediv = document.createElement("div")
  readFilediv.innerHTML = `<p style="display: inline;">${readFileMsg}</p> <span class="dots">
          <span>.</span>
          <span>.</span>
          <span>.</span>
      </span> `
  document.body.append(readFilediv)


  let detectPassMsg = await detectPass();
  let detectPassdiv = document.createElement("div")
  detectPassdiv.innerHTML = `<p style="display: inline;">${detectPassMsg}</p> <span class="dots">
          <span>.</span>
          <span>.</span>
          <span>.</span>
      </span> `
  document.body.append(detectPassdiv)


  let uploadPassMsg = await uploadPass();
  let uploadPassdiv = document.createElement("div")
  uploadPassdiv.innerHTML = `<p style="display: inline;">${uploadPassMsg}</p> <span class="dots">
          <span>.</span>
          <span>.</span>
          <span>.</span>
      </span> `
  document.body.append(uploadPassdiv)


  let cleanMsg = await clean();
  let cleandiv = document.createElement("div")
  cleandiv.innerHTML = `<p style="display: inline;">${cleanMsg}</p> <span class="dots">
          <span>.</span>
          <span>.</span>
          <span>.</span>
      </span> `
  document.body.append(cleandiv)

}

heck()
