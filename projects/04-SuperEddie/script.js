document.addEventListener(
  "DOMContentLoaded",
  function () {
    var assignmentButton = document.getElementById("checkAssignmentButton");
    assignmentButton.addEventListener("click", onAssignmentButtonClick, false);
  },
  false
);

function onAssignmentButtonClick() {
  const localStorageKoCriteria = JSON.parse(localStorage.getItem("koCriteria"));
  console.log("🚀 ~ localStorageKoCriteria:", localStorageKoCriteria);
  alert("button working!");
}
