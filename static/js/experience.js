class experience {
  constructor(role, date, place, description) {
    this.role = role;
    this.date = date;
    this.place = place;
    this.description = description;
  }
}

let qamanual_1 = new experience(
  (role = "QA Manual Ssr"),
  (date = "January 2016 - February 2019"),
  (place = "Momentous Tech. Corp. / Intive"),
  (description =
    "My first job was at Momentous Technologies Corp. as a Trainee/Jr and continued at Intive as a Ssr. I've created daily-smoke, exploratory and functionalities suites of test cases for mobile and web applications and reported bugs in Jira and Azure platforms.")
);

// console.log(qamanual_1);

let mobile = document.getElementsByClassName('card');
let web = document.getElementsByClassName('experience-item');
for (let index = 0; index < mobile.length; index++) {
    const mobileelement = mobile[index];
    // console.log(mobileelement.innerHTML);

    const webelelement = web[index];
    // console.log(webelelement.innerHTML);
}


// <div class="card">
//               <div class="card-header" id="headingOne">
//                 <button
//                   class="btn btn-link experience-role"
//                   data-toggle="collapse"
//                   data-target="#collapseOne"
//                   aria-expanded="true"
//                   aria-controls="collapseOne"
//                 >
//                   QA Manual Ssr
//                 </button>
//                 <span class="experience-place"
//                   >place</span>
//                 <span class="experience-date">date</span>
//               </div>
//               <div
//                 id="collapseOne"
//                 class="collapse"
//                 aria-labelledby="headingOne"
//                 data-parent="#accordion"
//               >
//                 <div class="card-body">
//                   {/* description */}
//                 </div>
//               </div>
//             </div>
