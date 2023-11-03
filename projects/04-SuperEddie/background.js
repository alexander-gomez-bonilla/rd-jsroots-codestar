chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.userDataLoaded) {
    console.log("🚀 ~ USER ~  userCompetences:", message.userCompetences);
    console.log("🚀 ~ USER ~  userExperience:", message.userExperience);
    console.log("🚀 ~ USER ~  userSpecialties:", message.userSpecialties);
    console.log("🚀 ~ USER ~  userEducation:", message.userEducation);
    console.log("🚀 ~ USER ~  userWorkExperience:", message.userWorkExperience);
    console.log("🚀 ~ USER ~  userMethodologies:", message.userMethodologies);
  }
});
