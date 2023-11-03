window.addEventListener("load", (event) => {
  const intervalAssignmentContent = setInterval(() => {
    const koCriteriaContainer = document.querySelector(".kocriteria-container");
    const formblockContainer = document.querySelector(".mx-name-container28 ");

    const clientNameContainer = document.querySelector(".mx-name-text13");
    const clientLocationContainer = document.querySelector(".mx-name-text31");

    const koCriteria = textNodesUnder(koCriteriaContainer);
    const activities = textNodesUnder(formblockContainer);
    const clientName = textNodesUnder(clientNameContainer);
    const clientLocation = textNodesUnder(clientLocationContainer);
    if (
      koCriteria.length > 1 &&
      activities.length > 1 &&
      clientName.length > 0 &&
      clientLocation.length > 0
    ) {
      console.log("🚀 ~ ASSIGNMENT ~  koCriteria:", koCriteria);
      console.log("🚀 ~ ASSIGNMENT ~  activities:", activities);
      console.log("🚀 ~ ASSIGNMENT ~  clientName:", clientName);
      console.log("🚀 ~ ASSIGNMENT ~  clientLocation:", clientLocation);
      clearInterval(intervalAssignmentContent); // Stop the interval when condition is met
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
