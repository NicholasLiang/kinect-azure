function init() {
  window.addEventListener('DOMContentLoaded', () => {
    doAThing()

    document.querySelector('#nav-open-button').addEventListener('click', () => {
        document.querySelector('#menu').classList.add("active");
    })

    document.querySelector('#nav-close-button').addEventListener('click', () => {
        document.querySelector('#menu').classList.remove("active");
    })

    // loadDemo(demoLinks[0].href);

    demoLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector('#menu').classList.remove("active");
      });
    });
  })
}

function doAThing() {
  const versions = window.electron.process.versions
  replaceText('.electron-version', `Electron v${versions.electron}`)
  replaceText('.chrome-version', `Chromium v${versions.chrome}`)
  replaceText('.node-version', `Node v${versions.node}`)

  const ipcHandlerBtn = document.getElementById('ipcHandler')
  ipcHandlerBtn?.addEventListener('click', () => {
    window.electron.ipcRenderer.send('ping')
  })

}

function replaceText(selector, text) {
  const element = document.querySelector(selector)
  if (element) {
    element.innerText = text
  }
}

init()




