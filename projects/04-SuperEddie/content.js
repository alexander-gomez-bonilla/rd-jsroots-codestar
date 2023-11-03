console.log("Hello, World! Content script is running!");

window.addEventListener("load", (event) => {
  console.log("window loaded!");
  const intervalId = setInterval(() => {
    const koCriteriaContainer = document.querySelector(".kocriteria-container");
    const formblockContainer = document.querySelector(".mx-name-container28 ");
    const koCriteria = textNodesUnder(koCriteriaContainer);
    const activities = textNodesUnder(formblockContainer);
    if (koCriteria.length > 1 && activities.length > 1) {
      console.log("🚀 ~ intervalId ~ koCriteria:", koCriteria);
      console.log("🚀 ~ intervalId ~ activities:", activities);
      localStorage.setItem("koCriteria", JSON.stringify(koCriteria));
      localStorage.setItem("activities", JSON.stringify(activities));
      clearInterval(intervalId); // Stop the interval when condition is met
    }
  }, 1000);
});

function textNodesUnder(el) {
  var n,
    a = [],
    walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
  while ((n = walk.nextNode())) a.push(n.wholeText);
  return a;
}
