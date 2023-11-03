console.log('Hello, World! Content script is running!')

window.addEventListener("load", (event) => {
  console.log('window loaded!')
  setInterval(() => {
    console.log('The interval in the loaded window just ran!')
  const domTest = document.querySelector('.kocriteria-container')
  
  domTest.style.background = 'red';
  }, 1000);
});
