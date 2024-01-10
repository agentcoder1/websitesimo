function validation() {
  var fullname = document.getElementById("exampleInputname1");
  var profession = document.getElementById("exampleInputprofession1");
  var city = document.getElementById("exampleInputcity1");
  var state = document.getElementById("exampleInputstate1");
  var zipcode = document.getElementById("exampleInputzipcode1");
  var contactno = document.getElementById("exampleInputnumber1");
  var emailid = document.getElementById("exampleInputemail1");
  var prejobposition = document.getElementById("exampleInputposition1");
  var jobcity = document.getElementById("exampleInputcity2");
  var jobstate = document.getElementById("exampleInputstate2");
  var jobstartdate = document.getElementById("exampleInputstartdate1");
  var jobenddate = document.getElementById("exampleInputenddate1");
  var schoolname = document.getElementById("exampleInputschoolname");
  var schoollocation = document.getElementById("exampleInputschoollocation");
  var degree = document.getElementById("exampleInputdegree");
  var field = document.getElementById("exampleInputfield");
  var schoolstartdate = document.getElementById("exampleInputstartdate2");
  var schoolenddate = document.getElementById("exampleInputenddate2");
  var skills = document.getElementById("exampleInputskills");
  var hirequestion = document.getElementById("hirequestion");

  if (
    fullname.value.trim() == "" ||
    profession.value.trim() == "" ||
    city.value.trim() == "" ||
    state.value.trim() == "" ||
    zipcode.value.trim() == "" ||
    contactno.value.trim() == "" ||
    emailid.value.trim() == "" ||
    prejobposition.value.trim() == "" ||
    jobcity.value.trim() == "" ||
    jobstate.value.trim() == "" ||
    jobstartdate.value.trim() == "" ||
    jobenddate.value.trim() == "" ||
    schoolname.value.trim() == "" ||
    schoollocation.value.trim() == "" ||
    degree.value.trim() == "" ||
    field.value.trim() == "" ||
    schoolstartdate.value.trim() == "" ||
    schoolenddate.value.trim() == "" ||
    skills.value.trim() == "" ||
    hirequestion.value.trim() == ""
  ) {
    alert("No blank value allowed");
    return false;
  } else return true;
}
