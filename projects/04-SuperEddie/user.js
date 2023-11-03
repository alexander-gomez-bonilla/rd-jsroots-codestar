window.addEventListener("load", (event) => {
  const intervalUser = setInterval(() => {
    const userCompetencesContainer =
      document.querySelector(".mx-name-textArea3");
    const userCompetences = textNodesUnder(userCompetencesContainer);

    const userExperienceContainer = document.querySelector(".listview-cv");
    const userExperience = textNodesUnder(userExperienceContainer);

    const userSpecialtiesContainer = document.querySelector(
      ".mx-templategrid-content-wrapper"
    );
    const userSpecialties = textNodesUnder(userSpecialtiesContainer);

    const userEducationContainer = document.querySelector(".mx-name-listView9");
    const userEducation = textNodesUnder(userEducationContainer);

    const userWorkExperienceContainer = document.querySelector(
      ".listview-timeline-employment-view"
    );
    const userWorkExperience = textNodesUnder(userWorkExperienceContainer);

    const userMethodologiesContainer = document.querySelector(
      ".listview-cv-noborder"
    );
    const userMethodologies = textNodesUnder(userMethodologiesContainer).filter(
      (item) => !item.includes("\n")
    );

    if (
      userCompetences.length > 0 &&
      userExperience.length > 0 &&
      userSpecialties.length > 0 &&
      userEducation.length > 0 &&
      userWorkExperience.length > 0 &&
      userMethodologies.length > 0
    ) {
      chrome.runtime.sendMessage({
        userDataLoaded: true,
        userCompetences: userCompetences,
        userExperience: userExperience,
        userSpecialties: userSpecialties,
        userEducation: userEducation,
        userWorkExperience: userWorkExperience,
        userMethodologies: userMethodologies,
      });
      clearInterval(intervalUser); // Stop the interval when condition is met
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
