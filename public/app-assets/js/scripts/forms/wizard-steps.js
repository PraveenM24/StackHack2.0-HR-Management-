$(".icons-tab-steps").steps({
  headerTag: "h6",
  bodyTag: "fieldset",
  transitionEffect: "fade",
  titleTemplate: '<span class="step">#index#</span> #title#',
  labels: {
    finish: 'Upload'
  },
  onFinished: function(event, currentIndex) {
    var fname = document.getElementById('firstName11').value
    var lname = document.getElementById('lastName11').value
    var name = fname +' '+ lname
    var age = document.getElementById('dob11').value
    var id = document.getElementById('empid11').value
    var email = document.getElementById('emailAddress11').value
    var tech = document.getElementById('Job Title').value
    var team = document.getElementById('team Title').value

    var bs1 = document.getElementById('basicsalary11').value
    var bs2 = document.getElementById('basicsalary12').value
    var bs3 = document.getElementById('basicsalary13').value
    var bs4 = document.getElementById('basicsalary14').value
    var bs5 = document.getElementById('basicsalary15').value
    var b1 = parseInt(bs1)
    var b2 = parseInt(bs2)
    var b3 = parseInt(bs3)
    var b4 = parseInt(bs4)
    var b5 = parseInt(bs5)
    var salary = b1 + b2 + b3 + b4 + b5

    fetch('https://sigmatechapi.herokuapp.com/employees', {
        method: 'POST',
        body: JSON.stringify({
          empname: name,
          empid: id,
          email: email,
          tech: tech,
          team: team,
          age: age,
          experience: 0,
          salary: salary
        }),
        headers: {
          "Content-Type": "application/json; charset=UTF-8"
        }
      })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);
      })
      .catch(function(error) {
        console.log(error);
      });
    alert("Details Submitted!!");
  }
});
