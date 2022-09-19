document.querySelector('#dark-mode-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark')
  const isDarkMode = document.body.classList.contains('dark')
  localStorage.setItem('darkmode', isDarkMode)
  //change mobile status bar color
  document
    .querySelector('meta[name="theme-color"')
    .setAttribute('content', isDarkMode ? '#1a1a2e' : '#fff')
})

const init = () => {
  const darkmode = localStorage.getItem('darkmode')
  document.body.classList.add(darkmode ? 'dark' : 'white')
  document
    .querySelector('meta[name="theme-color"')
    .setAttribute('content', darkmode ? '#1a1a2e' : '#fff')
}

init()
