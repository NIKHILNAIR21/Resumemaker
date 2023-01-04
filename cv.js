window.addEventListener("load", () => {
  // fetching data
  const params = new URL(document.location).searchParams;
  // personal info
  const name = params.get("myname");
  const designation = params.get("designation");
  const description = params.get("description");
  const phone = params.get("phoneNumber");
  const email = params.get("email");
  const personallocation = params.get("personallocation");
  const linkedin = params.get("linkedin");
  const skype = params.get("skype");

  //changing personal info
  document.querySelector(".name").innerHTML = name;
  document.querySelector(".role").innerHTML = designation;
  document.querySelector(".description").innerHTML = description;
  document.querySelector(".phone").innerHTML = phone;
  document.querySelector(".email").innerHTML = email;
  document.querySelector("#location").innerHTML = personallocation;
  document.querySelector(".linkedin").innerHTML = linkedin;
  document.querySelector(".skype").innerHTML = skype;

  // work experience
  // first
  const jobrole = params.get("jobRole");
  const company = params.get("company");
  const startdate = params.get("startDate");
  const enddate = params.get("endDate");
  const joblocation = params.get("worklocation");
  const jobexperience = params.get("jobexperience");
  // second
  const jobrole2 = params.get("jobRole2");
  const company2 = params.get("company2");
  const startdate2 = params.get("startDate2");
  const enddate2 = params.get("endDate2");
  const joblocation2 = params.get("worklocation2");
  const jobexperience2 = params.get("jobexperience2");

  //changing work experience
  // first
  document.querySelector(".job-role").innerHTML = jobrole;
  document.querySelector(".company").innerHTML = company;
  document.querySelector(".start-date").innerHTML = startdate;
  document.querySelector(".end-date").innerHTML = enddate;
  document.querySelector(".joblocation").innerHTML = joblocation;
  document.querySelector(".job-description").innerHTML = jobexperience;
  //second
  document.querySelector(".job-role2").innerHTML = jobrole2;
  document.querySelector(".company2").innerHTML = company2;
  document.querySelector(".start-date2").innerHTML = startdate2;
  document.querySelector(".end-date2").innerHTML = enddate2;
  document.querySelector(".joblocation2").innerHTML = joblocation2;
  document.querySelector(".job-description2").innerHTML = jobexperience2;

  // Education
  const degree = params.get("degreeName");
  const college = params.get("collegeName");
  const eduStartDate = params.get("eduStartDate");
  const eduEndDate = params.get("eduEndDate");

  // changing Education
  document.querySelector(".degree").innerHTML = degree;
  document.querySelector(".college-university").innerHTML = college;
  document.querySelector(".edu-start-date").innerHTML = eduStartDate;
  document.querySelector(".edu-end-date").innerHTML = eduEndDate;

  // Language
  const lang1 = params.get("lang1");
  const lang2 = params.get("lang2");
  const lang3 = params.get("lang3");

  // changing language
  document.querySelector(".lang-option1").innerHTML = lang1;
  document.querySelector(".lang-option2").innerHTML = lang2;
  document.querySelector(".lang-option3").innerHTML = lang3;

  // skills
  const skill1 = params.get("skill1");
  const skill2 = params.get("skill2");
  const skill3 = params.get("skill3");
  const skill4 = params.get("skill4");
  const skill5 = params.get("skill5");
  const skill6 = params.get("skill6");
  const skill7 = params.get("skill7");
  const skill8 = params.get("skill8");

  // changing skill
  document.querySelector("#skill1").innerHTML = skill1;
  document.querySelector("#skill2").innerHTML = skill2;
  document.querySelector("#skill3").innerHTML = skill3;
  document.querySelector("#skill4").innerHTML = skill4;
  document.querySelector("#skill5").innerHTML = skill5;
  document.querySelector("#skill6").innerHTML = skill6;
  document.querySelector("#skill7").innerHTML = skill7;
  document.querySelector("#skill8").innerHTML = skill8;

  // org
  // org-name
  const org1 = params.get("orgName1");
  const org2 = params.get("orgName2");
  const org3 = params.get("orgName3");

  // org-start-date
  const OrgstartDate1 = params.get("orgStartDate1");
  const OrgstartDate2 = params.get("orgStartDate2");
  const OrgstartDate3 = params.get("orgStartDate3");

  // org-end-date
  const OrgEndDate1 = params.get("orgEndDate1");
  const OrgEndDate2 = params.get("orgEndDate2");
  const OrgEndDate3 = params.get("orgEndDate3");

  // changing org-name
  document.querySelector(".org-name1").innerHTML = org1;
  document.querySelector(".org-name2").innerHTML = org2;
  document.querySelector(".org-name3").innerHTML = org3;

  // changing start date
  document.querySelector(".org-start-date1").innerHTML = OrgstartDate1;
  document.querySelector(".org-start-date2").innerHTML = OrgstartDate2;
  document.querySelector(".org-start-date3").innerHTML = OrgstartDate3;

  // changing end date
  document.querySelector(".org-end-date1").innerHTML = OrgEndDate1;
  document.querySelector(".org-end-date2").innerHTML = OrgEndDate2;
  document.querySelector(".org-end-date3").innerHTML = OrgEndDate3;

  // honours and awards
  // honours
  const honourname1 = params.get("honour1");
  const honourname2 = params.get("honour2");
  const honourname3 = params.get("honour3");
  // award
  const awardname1 = params.get("award1");
  const awardname2 = params.get("award2");
  const awardname3 = params.get("award3");

  // changing honours
  document.querySelector(".award-name1").innerHTML = honourname1;
  document.querySelector(".award-name2").innerHTML = honourname2;
  document.querySelector(".award-name3").innerHTML = honourname3;

  //changing awards
  document.querySelector(".award-by1").innerHTML = awardname1;
  document.querySelector(".award-by2").innerHTML = awardname2;
  document.querySelector(".award-by3").innerHTML = awardname3;

  // conf-course
  // conf
  const conf1 = params.get("conf1");
  const conf2 = params.get("conf2");
  const conf3 = params.get("conf3");

  // course
  const course1 = params.get("course1");
  const course2 = params.get("course2");
  const course3 = params.get("course3");

  // changing conf
  document.querySelector(".conf-course-name1").innerHTML = conf1;
  document.querySelector(".conf-course-name2").innerHTML = conf2;
  document.querySelector(".conf-course-name3").innerHTML = conf3;

  // changing course
  document.querySelector(".conf-course-by1").innerHTML = course1;
  document.querySelector(".conf-course-by2").innerHTML = course2;
  document.querySelector(".conf-course-by3").innerHTML = course3;
});
