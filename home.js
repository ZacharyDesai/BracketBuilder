import wixWindow from 'wix-window';

const blank = "wix:image://v1/d6156e_eba70008c6644419841efd207bf478eb~mv2.png/_.png#originWidth=230&originHeight=219";
const roundSeeds1 = [17, 24, 22, 20, 19, 21, 23, 18];
const roundSeeds1Other = [18, 23, 21, 19, 20, 22, 24, 17];
const roundSeeds2 = [25, 26, 27, 28];
const roundSeeds2Other = [26, 25, 28, 27];
const roundSeeds3 = [29, 30];
const roundSeeds3Other = [30, 29];
const finalSeeds = [5, 6];
const finalSeedsOther = [6, 5];

let teams = [];
let teamsMap = {};
let teamSelections = {};
let schools = [];
let firstFourTeams = {};
let regionATeams = {};
let regionBTeams = {};
let regionCTeams = {};
let regionDTeams = {};

$w.onReady(function () {
	$w("#dataset").getItems(0, 357).then( (result) => {
		const teamData = result.items;
		for (let team of teamData) {
			if (team.seed !== undefined) {
				teams.push(team);
				teamsMap[team.school] = team;
				schools.push(team.school);
				teamSelections[team.school] = [];
			}			
		}
		loadTeams();
		$w("#clearbutton").enable();
		$w("#autofillbutton").enable();
	});

	$w("#clearbutton").onClick(function() {
		$w("#clearbutton").disable();
		$w("#autofillbutton").disable();
		clear();
		$w("#clearbutton").enable();
		$w("#autofillbutton").enable();
	});

	$w("#autofillbutton").onClick(function() {
		$w("#clearbutton").disable();
		$w("#autofillbutton").disable();
		autofill();
	});

	$w("#firstfourseed1").onClick(function() {
		let team1 = teamsMap[$w(`#firstfourschool1`).label];
		let team2 = teamsMap[$w(`#firstfourschool2`).label];
		openLightbox(team1, team2, "firstfour1");
	});
	$w("#firstfourlogo1").onClick(function() {
		let team1 = teamsMap[$w(`#firstfourschool1`).label];
		let team2 = teamsMap[$w(`#firstfourschool2`).label];
		openLightbox(team1, team2, "firstfour1");
	});
	$w("#firstfourschool1").onClick(function() {
		let team1 = teamsMap[$w(`#firstfourschool1`).label];
		let team2 = teamsMap[$w(`#firstfourschool2`).label];
		openLightbox(team1, team2, "firstfour1");
	});
	$w("#firstfourseed2").onClick(function() {
		let team1 = teamsMap[$w(`#firstfourschool1`).label];
		let team2 = teamsMap[$w(`#firstfourschool2`).label];
		openLightbox(team1, team2, "firstfour1");
	});
	$w("#firstfourlogo2").onClick(function() {
		let team1 = teamsMap[$w(`#firstfourschool1`).label];
		let team2 = teamsMap[$w(`#firstfourschool2`).label];
		openLightbox(team1, team2, "firstfour1");
	});
	$w("#firstfourschool2").onClick(function() {
		let team1 = teamsMap[$w(`#firstfourschool1`).label];
		let team2 = teamsMap[$w(`#firstfourschool2`).label];
		openLightbox(team1, team2, "firstfour1");
	});

	$w("#firstfourseed3").onClick(function() {
		let team1 = teamsMap[$w(`#firstfourschool3`).label];
		let team2 = teamsMap[$w(`#firstfourschool4`).label];
		openLightbox(team1, team2, "firstfour2");
	});
	$w("#firstfourlogo3").onClick(function() {
		let team1 = teamsMap[$w(`#firstfourschool3`).label];
		let team2 = teamsMap[$w(`#firstfourschool4`).label];
		openLightbox(team1, team2, "firstfour2");
	});
	$w("#firstfourschool3").onClick(function() {
		let team1 = teamsMap[$w(`#firstfourschool3`).label];
		let team2 = teamsMap[$w(`#firstfourschool4`).label];
		openLightbox(team1, team2, "firstfour2");
	});
	$w("#firstfourseed4").onClick(function() {
		let team1 = teamsMap[$w(`#firstfourschool3`).label];
		let team2 = teamsMap[$w(`#firstfourschool4`).label];
		openLightbox(team1, team2, "firstfour2");
	});
	$w("#firstfourlogo4").onClick(function() {
		let team1 = teamsMap[$w(`#firstfourschool3`).label];
		let team2 = teamsMap[$w(`#firstfourschool4`).label];
		openLightbox(team1, team2, "firstfour2");
	});
	$w("#firstfourschool4").onClick(function() {
		let team1 = teamsMap[$w(`#firstfourschool3`).label];
		let team2 = teamsMap[$w(`#firstfourschool4`).label];
		openLightbox(team1, team2, "firstfour2");
	});

	$w("#firstfourseed5").onClick(function() {
		let team1 = teamsMap[$w(`#firstfourschool5`).label];
		let team2 = teamsMap[$w(`#firstfourschool6`).label];
		openLightbox(team1, team2, "firstfour3");
	});
	$w("#firstfourlogo5").onClick(function() {
		let team1 = teamsMap[$w(`#firstfourschool5`).label];
		let team2 = teamsMap[$w(`#firstfourschool6`).label];
		openLightbox(team1, team2, "firstfour3");
	});
	$w("#firstfourschool5").onClick(function() {
		let team1 = teamsMap[$w(`#firstfourschool5`).label];
		let team2 = teamsMap[$w(`#firstfourschool6`).label];
		openLightbox(team1, team2, "firstfour3");
	});
	$w("#firstfourseed6").onClick(function() {
		let team1 = teamsMap[$w(`#firstfourschool5`).label];
		let team2 = teamsMap[$w(`#firstfourschool6`).label];
		openLightbox(team1, team2, "firstfour3");
	});
	$w("#firstfourlogo6").onClick(function() {
		let team1 = teamsMap[$w(`#firstfourschool5`).label];
		let team2 = teamsMap[$w(`#firstfourschool6`).label];
		openLightbox(team1, team2, "firstfour3");
	});
	$w("#firstfourschool6").onClick(function() {
		let team1 = teamsMap[$w(`#firstfourschool5`).label];
		let team2 = teamsMap[$w(`#firstfourschool6`).label];
		openLightbox(team1, team2, "firstfour3");
	});

	$w("#firstfourseed7").onClick(function() {
		let team1 = teamsMap[$w(`#firstfourschool7`).label];
		let team2 = teamsMap[$w(`#firstfourschool8`).label];
		openLightbox(team1, team2, "firstfour4");
	});
	$w("#firstfourlogo7").onClick(function() {
		let team1 = teamsMap[$w(`#firstfourschool7`).label];
		let team2 = teamsMap[$w(`#firstfourschool8`).label];
		openLightbox(team1, team2, "firstfour4");
	});
	$w("#firstfourschool7").onClick(function() {
		let team1 = teamsMap[$w(`#firstfourschool7`).label];
		let team2 = teamsMap[$w(`#firstfourschool8`).label];
		openLightbox(team1, team2, "firstfour4");
	});
	$w("#firstfourseed8").onClick(function() {
		let team1 = teamsMap[$w(`#firstfourschool7`).label];
		let team2 = teamsMap[$w(`#firstfourschool8`).label];
		openLightbox(team1, team2, "firstfour4");
	});
	$w("#firstfourlogo8").onClick(function() {
		let team1 = teamsMap[$w(`#firstfourschool7`).label];
		let team2 = teamsMap[$w(`#firstfourschool8`).label];
		openLightbox(team1, team2, "firstfour4");
	});
	$w("#firstfourschool8").onClick(function() {
		let team1 = teamsMap[$w(`#firstfourschool7`).label];
		let team2 = teamsMap[$w(`#firstfourschool8`).label];
		openLightbox(team1, team2, "firstfour4");
	});

	$w("#finalfourseed1").onClick(function() {
		let team1 = teamsMap[$w(`#finalfourschool1`).label];
		let team2 = teamsMap[$w(`#finalfourschool2`).label];
		openLightbox(team1, team2, "finalfour1");
	});
	$w("#finalfourlogo1").onClick(function() {
		let team1 = teamsMap[$w(`#finalfourschool1`).label];
		let team2 = teamsMap[$w(`#finalfourschool2`).label];
		openLightbox(team1, team2, "finalfour1");
	});
	$w("#finalfourschool1").onClick(function() {
		let team1 = teamsMap[$w(`#finalfourschool1`).label];
		let team2 = teamsMap[$w(`#finalfourschool2`).label];
		openLightbox(team1, team2, "finalfour1");
	});
	$w("#finalfourseed2").onClick(function() {
		let team1 = teamsMap[$w(`#finalfourschool1`).label];
		let team2 = teamsMap[$w(`#finalfourschool2`).label];
		openLightbox(team1, team2, "finalfour1");
	});
	$w("#finalfourlogo2").onClick(function() {
		let team1 = teamsMap[$w(`#finalfourschool1`).label];
		let team2 = teamsMap[$w(`#finalfourschool2`).label];
		openLightbox(team1, team2, "finalfour1");
	});
	$w("#finalfourschool2").onClick(function() {
		let team1 = teamsMap[$w(`#finalfourschool1`).label];
		let team2 = teamsMap[$w(`#finalfourschool2`).label];
		openLightbox(team1, team2, "finalfour1");
	});

	$w("#finalfourseed3").onClick(function() {
		let team1 = teamsMap[$w(`#finalfourschool3`).label];
		let team2 = teamsMap[$w(`#finalfourschool4`).label];
		openLightbox(team1, team2, "finalfour2");
	});
	$w("#finalfourlogo3").onClick(function() {
		let team1 = teamsMap[$w(`#finalfourschool3`).label];
		let team2 = teamsMap[$w(`#finalfourschool4`).label];
		openLightbox(team1, team2, "finalfour2");
	});
	$w("#finalfourschool3").onClick(function() {
		let team1 = teamsMap[$w(`#finalfourschool3`).label];
		let team2 = teamsMap[$w(`#finalfourschool4`).label];
		openLightbox(team1, team2, "finalfour2");
	});
	$w("#finalfourseed4").onClick(function() {
		let team1 = teamsMap[$w(`#finalfourschool3`).label];
		let team2 = teamsMap[$w(`#finalfourschool4`).label];
		openLightbox(team1, team2, "finalfour2");
	});
	$w("#finalfourlogo4").onClick(function() {
		let team1 = teamsMap[$w(`#finalfourschool3`).label];
		let team2 = teamsMap[$w(`#finalfourschool4`).label];
		openLightbox(team1, team2, "finalfour2");
	});
	$w("#finalfourschool4").onClick(function() {
		let team1 = teamsMap[$w(`#finalfourschool3`).label];
		let team2 = teamsMap[$w(`#finalfourschool4`).label];
		openLightbox(team1, team2, "finalfour2");
	});

	$w("#finalfourseed5").onClick(function() {
		let team1 = teamsMap[$w(`#finalfourschool5`).label];
		let team2 = teamsMap[$w(`#finalfourschool6`).label];
		openLightbox(team1, team2, "finalfour3");
	});
	$w("#finalfourlogo5").onClick(function() {
		let team1 = teamsMap[$w(`#finalfourschool5`).label];
		let team2 = teamsMap[$w(`#finalfourschool6`).label];
		openLightbox(team1, team2, "finalfour3");
	});
	$w("#finalfourschool5").onClick(function() {
		let team1 = teamsMap[$w(`#finalfourschool5`).label];
		let team2 = teamsMap[$w(`#finalfourschool6`).label];
		openLightbox(team1, team2, "finalfour3");
	});
	$w("#finalfourseed6").onClick(function() {
		let team1 = teamsMap[$w(`#finalfourschool5`).label];
		let team2 = teamsMap[$w(`#finalfourschool6`).label];
		openLightbox(team1, team2, "finalfour3");
	});
	$w("#finalfourlogo6").onClick(function() {
		let team1 = teamsMap[$w(`#finalfourschool5`).label];
		let team2 = teamsMap[$w(`#finalfourschool6`).label];
		openLightbox(team1, team2, "finalfour3");
	});
	$w("#finalfourschool6").onClick(function() {
		let team1 = teamsMap[$w(`#finalfourschool5`).label];
		let team2 = teamsMap[$w(`#finalfourschool6`).label];
		openLightbox(team1, team2, "finalfour3");
	});

	$w("#regionaseed1").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool1`).label];
		let team2 = teamsMap[$w(`#regionaschool16`).label];
		openLightbox(team1, team2, "regiona1");
	});
	$w("#regionalogo1").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool1`).label];
		let team2 = teamsMap[$w(`#regionaschool16`).label];
		openLightbox(team1, team2, "regiona1");
	});
	$w("#regionaschool1").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool1`).label];
		let team2 = teamsMap[$w(`#regionaschool16`).label];
		openLightbox(team1, team2, "regiona1");
	});
	$w("#regionaseed16").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool1`).label];
		let team2 = teamsMap[$w(`#regionaschool16`).label];
		openLightbox(team1, team2, "regiona1");
	});
	$w("#regionalogo16").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool1`).label];
		let team2 = teamsMap[$w(`#regionaschool16`).label];
		openLightbox(team1, team2, "regiona1");
	});
	$w("#regionaschool16").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool1`).label];
		let team2 = teamsMap[$w(`#regionaschool16`).label];
		openLightbox(team1, team2, "regiona1");
	});

	$w("#regionaseed2").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool2`).label];
		let team2 = teamsMap[$w(`#regionaschool15`).label];
		openLightbox(team1, team2, "regiona2");
	});
	$w("#regionalogo2").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool2`).label];
		let team2 = teamsMap[$w(`#regionaschool15`).label];
		openLightbox(team1, team2, "regiona2");
	});
	$w("#regionaschool2").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool2`).label];
		let team2 = teamsMap[$w(`#regionaschool15`).label];
		openLightbox(team1, team2, "regiona2");
	});
	$w("#regionaseed15").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool2`).label];
		let team2 = teamsMap[$w(`#regionaschool15`).label];
		openLightbox(team1, team2, "regiona2");
	});
	$w("#regionalogo15").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool2`).label];
		let team2 = teamsMap[$w(`#regionaschool15`).label];
		openLightbox(team1, team2, "regiona2");
	});
	$w("#regionaschool15").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool2`).label];
		let team2 = teamsMap[$w(`#regionaschool15`).label];
		openLightbox(team1, team2, "regiona2");
	});

	$w("#regionaseed3").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool3`).label];
		let team2 = teamsMap[$w(`#regionaschool14`).label];
		openLightbox(team1, team2, "regiona3");
	});
	$w("#regionalogo3").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool3`).label];
		let team2 = teamsMap[$w(`#regionaschool14`).label];
		openLightbox(team1, team2, "regiona3");
	});
	$w("#regionaschool3").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool3`).label];
		let team2 = teamsMap[$w(`#regionaschool14`).label];
		openLightbox(team1, team2, "regiona3");
	});
	$w("#regionaseed14").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool3`).label];
		let team2 = teamsMap[$w(`#regionaschool14`).label];
		openLightbox(team1, team2, "regiona3");
	});
	$w("#regionalogo14").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool3`).label];
		let team2 = teamsMap[$w(`#regionaschool14`).label];
		openLightbox(team1, team2, "regiona3");
	});
	$w("#regionaschool14").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool3`).label];
		let team2 = teamsMap[$w(`#regionaschool14`).label];
		openLightbox(team1, team2, "regiona3");
	});

	$w("#regionaseed4").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool4`).label];
		let team2 = teamsMap[$w(`#regionaschool13`).label];
		openLightbox(team1, team2, "regiona4");
	});
	$w("#regionalogo4").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool4`).label];
		let team2 = teamsMap[$w(`#regionaschool13`).label];
		openLightbox(team1, team2, "regiona4");
	});
	$w("#regionaschool4").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool4`).label];
		let team2 = teamsMap[$w(`#regionaschool13`).label];
		openLightbox(team1, team2, "regiona4");
	});
	$w("#regionaseed13").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool4`).label];
		let team2 = teamsMap[$w(`#regionaschool13`).label];
		openLightbox(team1, team2, "regiona4");
	});
	$w("#regionalogo13").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool4`).label];
		let team2 = teamsMap[$w(`#regionaschool13`).label];
		openLightbox(team1, team2, "regiona4");
	});
	$w("#regionaschool13").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool4`).label];
		let team2 = teamsMap[$w(`#regionaschool13`).label];
		openLightbox(team1, team2, "regiona4");
	});

	$w("#regionaseed5").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool5`).label];
		let team2 = teamsMap[$w(`#regionaschool12`).label];
		openLightbox(team1, team2, "regiona5");
	});
	$w("#regionalogo5").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool5`).label];
		let team2 = teamsMap[$w(`#regionaschool12`).label];
		openLightbox(team1, team2, "regiona5");
	});
	$w("#regionaschool5").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool5`).label];
		let team2 = teamsMap[$w(`#regionaschool12`).label];
		openLightbox(team1, team2, "regiona5");
	});
	$w("#regionaseed12").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool5`).label];
		let team2 = teamsMap[$w(`#regionaschool12`).label];
		openLightbox(team1, team2, "regiona5");
	});
	$w("#regionalogo12").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool5`).label];
		let team2 = teamsMap[$w(`#regionaschool12`).label];
		openLightbox(team1, team2, "regiona5");
	});
	$w("#regionaschool12").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool5`).label];
		let team2 = teamsMap[$w(`#regionaschool12`).label];
		openLightbox(team1, team2, "regiona5");
	});

	$w("#regionaseed6").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool6`).label];
		let team2 = teamsMap[$w(`#regionaschool11`).label];
		openLightbox(team1, team2, "regiona6");
	});
	$w("#regionalogo6").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool6`).label];
		let team2 = teamsMap[$w(`#regionaschool11`).label];
		openLightbox(team1, team2, "regiona6");
	});
	$w("#regionaschool6").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool6`).label];
		let team2 = teamsMap[$w(`#regionaschool11`).label];
		openLightbox(team1, team2, "regiona6");
	});
	$w("#regionaseed11").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool6`).label];
		let team2 = teamsMap[$w(`#regionaschool11`).label];
		openLightbox(team1, team2, "regiona6");
	});
	$w("#regionalogo11").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool6`).label];
		let team2 = teamsMap[$w(`#regionaschool11`).label];
		openLightbox(team1, team2, "regiona6");
	});
	$w("#regionaschool11").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool6`).label];
		let team2 = teamsMap[$w(`#regionaschool11`).label];
		openLightbox(team1, team2, "regiona6");
	});

	$w("#regionaseed7").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool7`).label];
		let team2 = teamsMap[$w(`#regionaschool10`).label];
		openLightbox(team1, team2, "regiona7");
	});
	$w("#regionalogo7").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool7`).label];
		let team2 = teamsMap[$w(`#regionaschool10`).label];
		openLightbox(team1, team2, "regiona7");
	});
	$w("#regionaschool7").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool7`).label];
		let team2 = teamsMap[$w(`#regionaschool10`).label];
		openLightbox(team1, team2, "regiona7");
	});
	$w("#regionaseed10").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool7`).label];
		let team2 = teamsMap[$w(`#regionaschool10`).label];
		openLightbox(team1, team2, "regiona7");
	});
	$w("#regionalogo10").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool7`).label];
		let team2 = teamsMap[$w(`#regionaschool10`).label];
		openLightbox(team1, team2, "regiona7");
	});
	$w("#regionaschool10").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool7`).label];
		let team2 = teamsMap[$w(`#regionaschool10`).label];
		openLightbox(team1, team2, "regiona7");
	});

	$w("#regionaseed8").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool8`).label];
		let team2 = teamsMap[$w(`#regionaschool9`).label];
		openLightbox(team1, team2, "regiona8");
	});
	$w("#regionalogo8").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool8`).label];
		let team2 = teamsMap[$w(`#regionaschool9`).label];
		openLightbox(team1, team2, "regiona8");
	});
	$w("#regionaschool8").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool8`).label];
		let team2 = teamsMap[$w(`#regionaschool9`).label];
		openLightbox(team1, team2, "regiona8");
	});
	$w("#regionaseed9").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool8`).label];
		let team2 = teamsMap[$w(`#regionaschool9`).label];
		openLightbox(team1, team2, "regiona8");
	});
	$w("#regionalogo9").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool8`).label];
		let team2 = teamsMap[$w(`#regionaschool9`).label];
		openLightbox(team1, team2, "regiona8");
	});
	$w("#regionaschool9").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool8`).label];
		let team2 = teamsMap[$w(`#regionaschool9`).label];
		openLightbox(team1, team2, "regiona8");
	});

	$w("#regionaseed17").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool17`).label];
		let team2 = teamsMap[$w(`#regionaschool18`).label];
		openLightbox(team1, team2, "regiona9");
	});
	$w("#regionalogo17").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool17`).label];
		let team2 = teamsMap[$w(`#regionaschool18`).label];
		openLightbox(team1, team2, "regiona9");
	});
	$w("#regionaschool17").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool17`).label];
		let team2 = teamsMap[$w(`#regionaschool18`).label];
		openLightbox(team1, team2, "regiona9");
	});
	$w("#regionaseed18").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool17`).label];
		let team2 = teamsMap[$w(`#regionaschool18`).label];
		openLightbox(team1, team2, "regiona9");
	});
	$w("#regionalogo18").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool17`).label];
		let team2 = teamsMap[$w(`#regionaschool18`).label];
		openLightbox(team1, team2, "regiona9");
	});
	$w("#regionaschool18").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool17`).label];
		let team2 = teamsMap[$w(`#regionaschool18`).label];
		openLightbox(team1, team2, "regiona9");
	});

	$w("#regionaseed19").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool19`).label];
		let team2 = teamsMap[$w(`#regionaschool20`).label];
		openLightbox(team1, team2, "regiona10");
	});
	$w("#regionalogo19").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool19`).label];
		let team2 = teamsMap[$w(`#regionaschool20`).label];
		openLightbox(team1, team2, "regiona10");
	});
	$w("#regionaschool19").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool19`).label];
		let team2 = teamsMap[$w(`#regionaschool20`).label];
		openLightbox(team1, team2, "regiona10");
	});
	$w("#regionaseed20").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool19`).label];
		let team2 = teamsMap[$w(`#regionaschool20`).label];
		openLightbox(team1, team2, "regiona10");
	});
	$w("#regionalogo20").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool19`).label];
		let team2 = teamsMap[$w(`#regionaschool20`).label];
		openLightbox(team1, team2, "regiona10");
	});
	$w("#regionaschool20").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool19`).label];
		let team2 = teamsMap[$w(`#regionaschool20`).label];
		openLightbox(team1, team2, "regiona10");
	});

	$w("#regionaseed21").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool21`).label];
		let team2 = teamsMap[$w(`#regionaschool22`).label];
		openLightbox(team1, team2, "regiona11");
	});
	$w("#regionalogo21").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool21`).label];
		let team2 = teamsMap[$w(`#regionaschool22`).label];
		openLightbox(team1, team2, "regiona11");
	});
	$w("#regionaschool21").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool21`).label];
		let team2 = teamsMap[$w(`#regionaschool22`).label];
		openLightbox(team1, team2, "regiona11");
	});
	$w("#regionaseed22").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool21`).label];
		let team2 = teamsMap[$w(`#regionaschool22`).label];
		openLightbox(team1, team2, "regiona11");
	});
	$w("#regionalogo22").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool21`).label];
		let team2 = teamsMap[$w(`#regionaschool22`).label];
		openLightbox(team1, team2, "regiona11");
	});
	$w("#regionaschool22").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool21`).label];
		let team2 = teamsMap[$w(`#regionaschool22`).label];
		openLightbox(team1, team2, "regiona11");
	});

	$w("#regionaseed23").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool23`).label];
		let team2 = teamsMap[$w(`#regionaschool24`).label];
		openLightbox(team1, team2, "regiona12");
	});
	$w("#regionalogo23").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool23`).label];
		let team2 = teamsMap[$w(`#regionaschool24`).label];
		openLightbox(team1, team2, "regiona12");
	});
	$w("#regionaschool23").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool23`).label];
		let team2 = teamsMap[$w(`#regionaschool24`).label];
		openLightbox(team1, team2, "regiona12");
	});
	$w("#regionaseed24").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool23`).label];
		let team2 = teamsMap[$w(`#regionaschool24`).label];
		openLightbox(team1, team2, "regiona12");
	});
	$w("#regionalogo24").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool23`).label];
		let team2 = teamsMap[$w(`#regionaschool24`).label];
		openLightbox(team1, team2, "regiona12");
	});
	$w("#regionaschool24").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool23`).label];
		let team2 = teamsMap[$w(`#regionaschool24`).label];
		openLightbox(team1, team2, "regiona12");
	});

	$w("#regionaseed25").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool25`).label];
		let team2 = teamsMap[$w(`#regionaschool26`).label];
		openLightbox(team1, team2, "regiona13");
	});
	$w("#regionalogo25").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool25`).label];
		let team2 = teamsMap[$w(`#regionaschool26`).label];
		openLightbox(team1, team2, "regiona13");
	});
	$w("#regionaschool25").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool25`).label];
		let team2 = teamsMap[$w(`#regionaschool26`).label];
		openLightbox(team1, team2, "regiona13");
	});
	$w("#regionaseed26").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool25`).label];
		let team2 = teamsMap[$w(`#regionaschool26`).label];
		openLightbox(team1, team2, "regiona13");
	});
	$w("#regionalogo26").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool25`).label];
		let team2 = teamsMap[$w(`#regionaschool26`).label];
		openLightbox(team1, team2, "regiona13");
	});
	$w("#regionaschool26").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool25`).label];
		let team2 = teamsMap[$w(`#regionaschool26`).label];
		openLightbox(team1, team2, "regiona13");
	});

	$w("#regionaseed27").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool27`).label];
		let team2 = teamsMap[$w(`#regionaschool28`).label];
		openLightbox(team1, team2, "regiona14");
	});
	$w("#regionalogo27").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool27`).label];
		let team2 = teamsMap[$w(`#regionaschool28`).label];
		openLightbox(team1, team2, "regiona14");
	});
	$w("#regionaschool27").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool27`).label];
		let team2 = teamsMap[$w(`#regionaschool28`).label];
		openLightbox(team1, team2, "regiona14");
	});
	$w("#regionaseed28").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool27`).label];
		let team2 = teamsMap[$w(`#regionaschool28`).label];
		openLightbox(team1, team2, "regiona14");
	});
	$w("#regionalogo28").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool27`).label];
		let team2 = teamsMap[$w(`#regionaschool28`).label];
		openLightbox(team1, team2, "regiona14");
	});
	$w("#regionaschool28").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool27`).label];
		let team2 = teamsMap[$w(`#regionaschool28`).label];
		openLightbox(team1, team2, "regiona14");
	});

	$w("#regionaseed29").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool29`).label];
		let team2 = teamsMap[$w(`#regionaschool30`).label];
		openLightbox(team1, team2, "regiona15");
	});
	$w("#regionalogo29").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool29`).label];
		let team2 = teamsMap[$w(`#regionaschool30`).label];
		openLightbox(team1, team2, "regiona15");
	});
	$w("#regionaschool29").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool29`).label];
		let team2 = teamsMap[$w(`#regionaschool30`).label];
		openLightbox(team1, team2, "regiona15");
	});
	$w("#regionaseed30").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool29`).label];
		let team2 = teamsMap[$w(`#regionaschool30`).label];
		openLightbox(team1, team2, "regiona15");
	});
	$w("#regionalogo30").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool29`).label];
		let team2 = teamsMap[$w(`#regionaschool30`).label];
		openLightbox(team1, team2, "regiona15");
	});
	$w("#regionaschool30").onClick(function() {
		let team1 = teamsMap[$w(`#regionaschool29`).label];
		let team2 = teamsMap[$w(`#regionaschool30`).label];
		openLightbox(team1, team2, "regiona15");
	});

	$w("#regionbseed1").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool1`).label];
		let team2 = teamsMap[$w(`#regionbschool16`).label];
		openLightbox(team1, team2, "regionb1");
	});
	$w("#regionblogo1").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool1`).label];
		let team2 = teamsMap[$w(`#regionbschool16`).label];
		openLightbox(team1, team2, "regionb1");
	});
	$w("#regionbschool1").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool1`).label];
		let team2 = teamsMap[$w(`#regionbschool16`).label];
		openLightbox(team1, team2, "regionb1");
	});
	$w("#regionbseed16").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool1`).label];
		let team2 = teamsMap[$w(`#regionbschool16`).label];
		openLightbox(team1, team2, "regionb1");
	});
	$w("#regionblogo16").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool1`).label];
		let team2 = teamsMap[$w(`#regionbschool16`).label];
		openLightbox(team1, team2, "regionb1");
	});
	$w("#regionbschool16").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool1`).label];
		let team2 = teamsMap[$w(`#regionbschool16`).label];
		openLightbox(team1, team2, "regionb1");
	});

	$w("#regionbseed2").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool2`).label];
		let team2 = teamsMap[$w(`#regionbschool15`).label];
		openLightbox(team1, team2, "regionb2");
	});
	$w("#regionblogo2").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool2`).label];
		let team2 = teamsMap[$w(`#regionbschool15`).label];
		openLightbox(team1, team2, "regionb2");
	});
	$w("#regionbschool2").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool2`).label];
		let team2 = teamsMap[$w(`#regionbschool15`).label];
		openLightbox(team1, team2, "regionb2");
	});
	$w("#regionbseed15").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool2`).label];
		let team2 = teamsMap[$w(`#regionbschool15`).label];
		openLightbox(team1, team2, "regionb2");
	});
	$w("#regionblogo15").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool2`).label];
		let team2 = teamsMap[$w(`#regionbschool15`).label];
		openLightbox(team1, team2, "regionb2");
	});
	$w("#regionbschool15").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool2`).label];
		let team2 = teamsMap[$w(`#regionbschool15`).label];
		openLightbox(team1, team2, "regionb2");
	});

	$w("#regionbseed3").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool3`).label];
		let team2 = teamsMap[$w(`#regionbschool14`).label];
		openLightbox(team1, team2, "regionb3");
	});
	$w("#regionblogo3").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool3`).label];
		let team2 = teamsMap[$w(`#regionbschool14`).label];
		openLightbox(team1, team2, "regionb3");
	});
	$w("#regionbschool3").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool3`).label];
		let team2 = teamsMap[$w(`#regionbschool14`).label];
		openLightbox(team1, team2, "regionb3");
	});
	$w("#regionbseed14").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool3`).label];
		let team2 = teamsMap[$w(`#regionbschool14`).label];
		openLightbox(team1, team2, "regionb3");
	});
	$w("#regionblogo14").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool3`).label];
		let team2 = teamsMap[$w(`#regionbschool14`).label];
		openLightbox(team1, team2, "regionb3");
	});
	$w("#regionbschool14").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool3`).label];
		let team2 = teamsMap[$w(`#regionbschool14`).label];
		openLightbox(team1, team2, "regionb3");
	});

	$w("#regionbseed4").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool4`).label];
		let team2 = teamsMap[$w(`#regionbschool13`).label];
		openLightbox(team1, team2, "regionb4");
	});
	$w("#regionblogo4").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool4`).label];
		let team2 = teamsMap[$w(`#regionbschool13`).label];
		openLightbox(team1, team2, "regionb4");
	});
	$w("#regionbschool4").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool4`).label];
		let team2 = teamsMap[$w(`#regionbschool13`).label];
		openLightbox(team1, team2, "regionb4");
	});
	$w("#regionbseed13").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool4`).label];
		let team2 = teamsMap[$w(`#regionbschool13`).label];
		openLightbox(team1, team2, "regionb4");
	});
	$w("#regionblogo13").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool4`).label];
		let team2 = teamsMap[$w(`#regionbschool13`).label];
		openLightbox(team1, team2, "regionb4");
	});
	$w("#regionbschool13").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool4`).label];
		let team2 = teamsMap[$w(`#regionbschool13`).label];
		openLightbox(team1, team2, "regionb4");
	});

	$w("#regionbseed5").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool5`).label];
		let team2 = teamsMap[$w(`#regionbschool12`).label];
		openLightbox(team1, team2, "regionb5");
	});
	$w("#regionblogo5").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool5`).label];
		let team2 = teamsMap[$w(`#regionbschool12`).label];
		openLightbox(team1, team2, "regionb5");
	});
	$w("#regionbschool5").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool5`).label];
		let team2 = teamsMap[$w(`#regionbschool12`).label];
		openLightbox(team1, team2, "regionb5");
	});
	$w("#regionbseed12").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool5`).label];
		let team2 = teamsMap[$w(`#regionbschool12`).label];
		openLightbox(team1, team2, "regionb5");
	});
	$w("#regionblogo12").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool5`).label];
		let team2 = teamsMap[$w(`#regionbschool12`).label];
		openLightbox(team1, team2, "regionb5");
	});
	$w("#regionbschool12").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool5`).label];
		let team2 = teamsMap[$w(`#regionbschool12`).label];
		openLightbox(team1, team2, "regionb5");
	});

	$w("#regionbseed6").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool6`).label];
		let team2 = teamsMap[$w(`#regionbschool11`).label];
		openLightbox(team1, team2, "regionb6");
	});
	$w("#regionblogo6").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool6`).label];
		let team2 = teamsMap[$w(`#regionbschool11`).label];
		openLightbox(team1, team2, "regionb6");
	});
	$w("#regionbschool6").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool6`).label];
		let team2 = teamsMap[$w(`#regionbschool11`).label];
		openLightbox(team1, team2, "regionb6");
	});
	$w("#regionbseed11").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool6`).label];
		let team2 = teamsMap[$w(`#regionbschool11`).label];
		openLightbox(team1, team2, "regionb6");
	});
	$w("#regionblogo11").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool6`).label];
		let team2 = teamsMap[$w(`#regionbschool11`).label];
		openLightbox(team1, team2, "regionb6");
	});
	$w("#regionbschool11").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool6`).label];
		let team2 = teamsMap[$w(`#regionbschool11`).label];
		openLightbox(team1, team2, "regionb6");
	});

	$w("#regionbseed7").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool7`).label];
		let team2 = teamsMap[$w(`#regionbschool10`).label];
		openLightbox(team1, team2, "regionb7");
	});
	$w("#regionblogo7").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool7`).label];
		let team2 = teamsMap[$w(`#regionbschool10`).label];
		openLightbox(team1, team2, "regionb7");
	});
	$w("#regionbschool7").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool7`).label];
		let team2 = teamsMap[$w(`#regionbschool10`).label];
		openLightbox(team1, team2, "regionb7");
	});
	$w("#regionbseed10").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool7`).label];
		let team2 = teamsMap[$w(`#regionbschool10`).label];
		openLightbox(team1, team2, "regionb7");
	});
	$w("#regionblogo10").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool7`).label];
		let team2 = teamsMap[$w(`#regionbschool10`).label];
		openLightbox(team1, team2, "regionb7");
	});
	$w("#regionbschool10").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool7`).label];
		let team2 = teamsMap[$w(`#regionbschool10`).label];
		openLightbox(team1, team2, "regionb7");
	});

	$w("#regionbseed8").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool8`).label];
		let team2 = teamsMap[$w(`#regionbschool9`).label];
		openLightbox(team1, team2, "regionb8");
	});
	$w("#regionblogo8").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool8`).label];
		let team2 = teamsMap[$w(`#regionbschool9`).label];
		openLightbox(team1, team2, "regionb8");
	});
	$w("#regionbschool8").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool8`).label];
		let team2 = teamsMap[$w(`#regionbschool9`).label];
		openLightbox(team1, team2, "regionb8");
	});
	$w("#regionbseed9").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool8`).label];
		let team2 = teamsMap[$w(`#regionbschool9`).label];
		openLightbox(team1, team2, "regionb8");
	});
	$w("#regionblogo9").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool8`).label];
		let team2 = teamsMap[$w(`#regionbschool9`).label];
		openLightbox(team1, team2, "regionb8");
	});
	$w("#regionbschool9").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool8`).label];
		let team2 = teamsMap[$w(`#regionbschool9`).label];
		openLightbox(team1, team2, "regionb8");
	});

	$w("#regionbseed17").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool17`).label];
		let team2 = teamsMap[$w(`#regionbschool18`).label];
		openLightbox(team1, team2, "regionb9");
	});
	$w("#regionblogo17").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool17`).label];
		let team2 = teamsMap[$w(`#regionbschool18`).label];
		openLightbox(team1, team2, "regionb9");
	});
	$w("#regionbschool17").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool17`).label];
		let team2 = teamsMap[$w(`#regionbschool18`).label];
		openLightbox(team1, team2, "regionb9");
	});
	$w("#regionbseed18").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool17`).label];
		let team2 = teamsMap[$w(`#regionbschool18`).label];
		openLightbox(team1, team2, "regionb9");
	});
	$w("#regionblogo18").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool17`).label];
		let team2 = teamsMap[$w(`#regionbschool18`).label];
		openLightbox(team1, team2, "regionb9");
	});
	$w("#regionbschool18").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool17`).label];
		let team2 = teamsMap[$w(`#regionbschool18`).label];
		openLightbox(team1, team2, "regionb9");
	});

	$w("#regionbseed19").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool19`).label];
		let team2 = teamsMap[$w(`#regionbschool20`).label];
		openLightbox(team1, team2, "regionb10");
	});
	$w("#regionblogo19").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool19`).label];
		let team2 = teamsMap[$w(`#regionbschool20`).label];
		openLightbox(team1, team2, "regionb10");
	});
	$w("#regionbschool19").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool19`).label];
		let team2 = teamsMap[$w(`#regionbschool20`).label];
		openLightbox(team1, team2, "regionb10");
	});
	$w("#regionbseed20").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool19`).label];
		let team2 = teamsMap[$w(`#regionbschool20`).label];
		openLightbox(team1, team2, "regionb10");
	});
	$w("#regionblogo20").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool19`).label];
		let team2 = teamsMap[$w(`#regionbschool20`).label];
		openLightbox(team1, team2, "regionb10");
	});
	$w("#regionbschool20").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool19`).label];
		let team2 = teamsMap[$w(`#regionbschool20`).label];
		openLightbox(team1, team2, "regionb10");
	});

	$w("#regionbseed21").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool21`).label];
		let team2 = teamsMap[$w(`#regionbschool22`).label];
		openLightbox(team1, team2, "regionb11");
	});
	$w("#regionblogo21").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool21`).label];
		let team2 = teamsMap[$w(`#regionbschool22`).label];
		openLightbox(team1, team2, "regionb11");
	});
	$w("#regionbschool21").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool21`).label];
		let team2 = teamsMap[$w(`#regionbschool22`).label];
		openLightbox(team1, team2, "regionb11");
	});
	$w("#regionbseed22").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool21`).label];
		let team2 = teamsMap[$w(`#regionbschool22`).label];
		openLightbox(team1, team2, "regionb11");
	});
	$w("#regionblogo22").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool21`).label];
		let team2 = teamsMap[$w(`#regionbschool22`).label];
		openLightbox(team1, team2, "regionb11");
	});
	$w("#regionbschool22").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool21`).label];
		let team2 = teamsMap[$w(`#regionbschool22`).label];
		openLightbox(team1, team2, "regionb11");
	});

	$w("#regionbseed23").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool23`).label];
		let team2 = teamsMap[$w(`#regionbschool24`).label];
		openLightbox(team1, team2, "regionb12");
	});
	$w("#regionblogo23").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool23`).label];
		let team2 = teamsMap[$w(`#regionbschool24`).label];
		openLightbox(team1, team2, "regionb12");
	});
	$w("#regionbschool23").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool23`).label];
		let team2 = teamsMap[$w(`#regionbschool24`).label];
		openLightbox(team1, team2, "regionb12");
	});
	$w("#regionbseed24").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool23`).label];
		let team2 = teamsMap[$w(`#regionbschool24`).label];
		openLightbox(team1, team2, "regionb12");
	});
	$w("#regionblogo24").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool23`).label];
		let team2 = teamsMap[$w(`#regionbschool24`).label];
		openLightbox(team1, team2, "regionb12");
	});
	$w("#regionbschool24").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool23`).label];
		let team2 = teamsMap[$w(`#regionbschool24`).label];
		openLightbox(team1, team2, "regionb12");
	});

	$w("#regionbseed25").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool25`).label];
		let team2 = teamsMap[$w(`#regionbschool26`).label];
		openLightbox(team1, team2, "regionb13");
	});
	$w("#regionblogo25").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool25`).label];
		let team2 = teamsMap[$w(`#regionbschool26`).label];
		openLightbox(team1, team2, "regionb13");
	});
	$w("#regionbschool25").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool25`).label];
		let team2 = teamsMap[$w(`#regionbschool26`).label];
		openLightbox(team1, team2, "regionb13");
	});
	$w("#regionbseed26").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool25`).label];
		let team2 = teamsMap[$w(`#regionbschool26`).label];
		openLightbox(team1, team2, "regionb13");
	});
	$w("#regionblogo26").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool25`).label];
		let team2 = teamsMap[$w(`#regionbschool26`).label];
		openLightbox(team1, team2, "regionb13");
	});
	$w("#regionbschool26").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool25`).label];
		let team2 = teamsMap[$w(`#regionbschool26`).label];
		openLightbox(team1, team2, "regionb13");
	});

	$w("#regionbseed27").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool27`).label];
		let team2 = teamsMap[$w(`#regionbschool28`).label];
		openLightbox(team1, team2, "regionb14");
	});
	$w("#regionblogo27").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool27`).label];
		let team2 = teamsMap[$w(`#regionbschool28`).label];
		openLightbox(team1, team2, "regionb14");
	});
	$w("#regionbschool27").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool27`).label];
		let team2 = teamsMap[$w(`#regionbschool28`).label];
		openLightbox(team1, team2, "regionb14");
	});
	$w("#regionbseed28").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool27`).label];
		let team2 = teamsMap[$w(`#regionbschool28`).label];
		openLightbox(team1, team2, "regionb14");
	});
	$w("#regionblogo28").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool27`).label];
		let team2 = teamsMap[$w(`#regionbschool28`).label];
		openLightbox(team1, team2, "regionb14");
	});
	$w("#regionbschool28").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool27`).label];
		let team2 = teamsMap[$w(`#regionbschool28`).label];
		openLightbox(team1, team2, "regionb14");
	});

	$w("#regionbseed29").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool29`).label];
		let team2 = teamsMap[$w(`#regionbschool30`).label];
		openLightbox(team1, team2, "regionb15");
	});
	$w("#regionblogo29").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool29`).label];
		let team2 = teamsMap[$w(`#regionbschool30`).label];
		openLightbox(team1, team2, "regionb15");
	});
	$w("#regionbschool29").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool29`).label];
		let team2 = teamsMap[$w(`#regionbschool30`).label];
		openLightbox(team1, team2, "regionb15");
	});
	$w("#regionbseed30").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool29`).label];
		let team2 = teamsMap[$w(`#regionbschool30`).label];
		openLightbox(team1, team2, "regionb15");
	});
	$w("#regionblogo30").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool29`).label];
		let team2 = teamsMap[$w(`#regionbschool30`).label];
		openLightbox(team1, team2, "regionb15");
	});
	$w("#regionbschool30").onClick(function() {
		let team1 = teamsMap[$w(`#regionbschool29`).label];
		let team2 = teamsMap[$w(`#regionbschool30`).label];
		openLightbox(team1, team2, "regionb15");
	});

	$w("#regioncseed1").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool1`).label];
		let team2 = teamsMap[$w(`#regioncschool16`).label];
		openLightbox(team1, team2, "regionc1");
	});
	$w("#regionclogo1").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool1`).label];
		let team2 = teamsMap[$w(`#regioncschool16`).label];
		openLightbox(team1, team2, "regionc1");
	});
	$w("#regioncschool1").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool1`).label];
		let team2 = teamsMap[$w(`#regioncschool16`).label];
		openLightbox(team1, team2, "regionc1");
	});
	$w("#regioncseed16").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool1`).label];
		let team2 = teamsMap[$w(`#regioncschool16`).label];
		openLightbox(team1, team2, "regionc1");
	});
	$w("#regionclogo16").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool1`).label];
		let team2 = teamsMap[$w(`#regioncschool16`).label];
		openLightbox(team1, team2, "regionc1");
	});
	$w("#regioncschool16").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool1`).label];
		let team2 = teamsMap[$w(`#regioncschool16`).label];
		openLightbox(team1, team2, "regionc1");
	});

	$w("#regioncseed2").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool2`).label];
		let team2 = teamsMap[$w(`#regioncschool15`).label];
		openLightbox(team1, team2, "regionc2");
	});
	$w("#regionclogo2").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool2`).label];
		let team2 = teamsMap[$w(`#regioncschool15`).label];
		openLightbox(team1, team2, "regionc2");
	});
	$w("#regioncschool2").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool2`).label];
		let team2 = teamsMap[$w(`#regioncschool15`).label];
		openLightbox(team1, team2, "regionc2");
	});
	$w("#regioncseed15").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool2`).label];
		let team2 = teamsMap[$w(`#regioncschool15`).label];
		openLightbox(team1, team2, "regionc2");
	});
	$w("#regionclogo15").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool2`).label];
		let team2 = teamsMap[$w(`#regioncschool15`).label];
		openLightbox(team1, team2, "regionc2");
	});
	$w("#regioncschool15").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool2`).label];
		let team2 = teamsMap[$w(`#regioncschool15`).label];
		openLightbox(team1, team2, "regionc2");
	});

	$w("#regioncseed3").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool3`).label];
		let team2 = teamsMap[$w(`#regioncschool14`).label];
		openLightbox(team1, team2, "regionc3");
	});
	$w("#regionclogo3").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool3`).label];
		let team2 = teamsMap[$w(`#regioncschool14`).label];
		openLightbox(team1, team2, "regionc3");
	});
	$w("#regioncschool3").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool3`).label];
		let team2 = teamsMap[$w(`#regioncschool14`).label];
		openLightbox(team1, team2, "regionc3");
	});
	$w("#regioncseed14").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool3`).label];
		let team2 = teamsMap[$w(`#regioncschool14`).label];
		openLightbox(team1, team2, "regionc3");
	});
	$w("#regionclogo14").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool3`).label];
		let team2 = teamsMap[$w(`#regioncschool14`).label];
		openLightbox(team1, team2, "regionc3");
	});
	$w("#regioncschool14").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool3`).label];
		let team2 = teamsMap[$w(`#regioncschool14`).label];
		openLightbox(team1, team2, "regionc3");
	});

	$w("#regioncseed4").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool4`).label];
		let team2 = teamsMap[$w(`#regioncschool13`).label];
		openLightbox(team1, team2, "regionc4");
	});
	$w("#regionclogo4").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool4`).label];
		let team2 = teamsMap[$w(`#regioncschool13`).label];
		openLightbox(team1, team2, "regionc4");
	});
	$w("#regioncschool4").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool4`).label];
		let team2 = teamsMap[$w(`#regioncschool13`).label];
		openLightbox(team1, team2, "regionc4");
	});
	$w("#regioncseed13").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool4`).label];
		let team2 = teamsMap[$w(`#regioncschool13`).label];
		openLightbox(team1, team2, "regionc4");
	});
	$w("#regionclogo13").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool4`).label];
		let team2 = teamsMap[$w(`#regioncschool13`).label];
		openLightbox(team1, team2, "regionc4");
	});
	$w("#regioncschool13").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool4`).label];
		let team2 = teamsMap[$w(`#regioncschool13`).label];
		openLightbox(team1, team2, "regionc4");
	});

	$w("#regioncseed5").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool5`).label];
		let team2 = teamsMap[$w(`#regioncschool12`).label];
		openLightbox(team1, team2, "regionc5");
	});
	$w("#regionclogo5").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool5`).label];
		let team2 = teamsMap[$w(`#regioncschool12`).label];
		openLightbox(team1, team2, "regionc5");
	});
	$w("#regioncschool5").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool5`).label];
		let team2 = teamsMap[$w(`#regioncschool12`).label];
		openLightbox(team1, team2, "regionc5");
	});
	$w("#regioncseed12").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool5`).label];
		let team2 = teamsMap[$w(`#regioncschool12`).label];
		openLightbox(team1, team2, "regionc5");
	});
	$w("#regionclogo12").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool5`).label];
		let team2 = teamsMap[$w(`#regioncschool12`).label];
		openLightbox(team1, team2, "regionc5");
	});
	$w("#regioncschool12").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool5`).label];
		let team2 = teamsMap[$w(`#regioncschool12`).label];
		openLightbox(team1, team2, "regionc5");
	});

	$w("#regioncseed6").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool6`).label];
		let team2 = teamsMap[$w(`#regioncschool11`).label];
		openLightbox(team1, team2, "regionc6");
	});
	$w("#regionclogo6").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool6`).label];
		let team2 = teamsMap[$w(`#regioncschool11`).label];
		openLightbox(team1, team2, "regionc6");
	});
	$w("#regioncschool6").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool6`).label];
		let team2 = teamsMap[$w(`#regioncschool11`).label];
		openLightbox(team1, team2, "regionc6");
	});
	$w("#regioncseed11").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool6`).label];
		let team2 = teamsMap[$w(`#regioncschool11`).label];
		openLightbox(team1, team2, "regionc6");
	});
	$w("#regionclogo11").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool6`).label];
		let team2 = teamsMap[$w(`#regioncschool11`).label];
		openLightbox(team1, team2, "regionc6");
	});
	$w("#regioncschool11").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool6`).label];
		let team2 = teamsMap[$w(`#regioncschool11`).label];
		openLightbox(team1, team2, "regionc6");
	});

	$w("#regioncseed7").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool7`).label];
		let team2 = teamsMap[$w(`#regioncschool10`).label];
		openLightbox(team1, team2, "regionc7");
	});
	$w("#regionclogo7").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool7`).label];
		let team2 = teamsMap[$w(`#regioncschool10`).label];
		openLightbox(team1, team2, "regionc7");
	});
	$w("#regioncschool7").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool7`).label];
		let team2 = teamsMap[$w(`#regioncschool10`).label];
		openLightbox(team1, team2, "regionc7");
	});
	$w("#regioncseed10").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool7`).label];
		let team2 = teamsMap[$w(`#regioncschool10`).label];
		openLightbox(team1, team2, "regionc7");
	});
	$w("#regionclogo10").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool7`).label];
		let team2 = teamsMap[$w(`#regioncschool10`).label];
		openLightbox(team1, team2, "regionc7");
	});
	$w("#regioncschool10").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool7`).label];
		let team2 = teamsMap[$w(`#regioncschool10`).label];
		openLightbox(team1, team2, "regionc7");
	});

	$w("#regioncseed8").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool8`).label];
		let team2 = teamsMap[$w(`#regioncschool9`).label];
		openLightbox(team1, team2, "regionc8");
	});
	$w("#regionclogo8").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool8`).label];
		let team2 = teamsMap[$w(`#regioncschool9`).label];
		openLightbox(team1, team2, "regionc8");
	});
	$w("#regioncschool8").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool8`).label];
		let team2 = teamsMap[$w(`#regioncschool9`).label];
		openLightbox(team1, team2, "regionc8");
	});
	$w("#regioncseed9").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool8`).label];
		let team2 = teamsMap[$w(`#regioncschool9`).label];
		openLightbox(team1, team2, "regionc8");
	});
	$w("#regionclogo9").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool8`).label];
		let team2 = teamsMap[$w(`#regioncschool9`).label];
		openLightbox(team1, team2, "regionc8");
	});
	$w("#regioncschool9").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool8`).label];
		let team2 = teamsMap[$w(`#regioncschool9`).label];
		openLightbox(team1, team2, "regionc8");
	});

	$w("#regioncseed17").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool17`).label];
		let team2 = teamsMap[$w(`#regioncschool18`).label];
		openLightbox(team1, team2, "regionc9");
	});
	$w("#regionclogo17").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool17`).label];
		let team2 = teamsMap[$w(`#regioncschool18`).label];
		openLightbox(team1, team2, "regionc9");
	});
	$w("#regioncschool17").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool17`).label];
		let team2 = teamsMap[$w(`#regioncschool18`).label];
		openLightbox(team1, team2, "regionc9");
	});
	$w("#regioncseed18").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool17`).label];
		let team2 = teamsMap[$w(`#regioncschool18`).label];
		openLightbox(team1, team2, "regionc9");
	});
	$w("#regionclogo18").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool17`).label];
		let team2 = teamsMap[$w(`#regioncschool18`).label];
		openLightbox(team1, team2, "regionc9");
	});
	$w("#regioncschool18").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool17`).label];
		let team2 = teamsMap[$w(`#regioncschool18`).label];
		openLightbox(team1, team2, "regionc9");
	});

	$w("#regioncseed19").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool19`).label];
		let team2 = teamsMap[$w(`#regioncschool20`).label];
		openLightbox(team1, team2, "regionc10");
	});
	$w("#regionclogo19").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool19`).label];
		let team2 = teamsMap[$w(`#regioncschool20`).label];
		openLightbox(team1, team2, "regionc10");
	});
	$w("#regioncschool19").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool19`).label];
		let team2 = teamsMap[$w(`#regioncschool20`).label];
		openLightbox(team1, team2, "regionc10");
	});
	$w("#regioncseed20").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool19`).label];
		let team2 = teamsMap[$w(`#regioncschool20`).label];
		openLightbox(team1, team2, "regionc10");
	});
	$w("#regionclogo20").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool19`).label];
		let team2 = teamsMap[$w(`#regioncschool20`).label];
		openLightbox(team1, team2, "regionc10");
	});
	$w("#regioncschool20").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool19`).label];
		let team2 = teamsMap[$w(`#regioncschool20`).label];
		openLightbox(team1, team2, "regionc10");
	});

	$w("#regioncseed21").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool21`).label];
		let team2 = teamsMap[$w(`#regioncschool22`).label];
		openLightbox(team1, team2, "regionc11");
	});
	$w("#regionclogo21").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool21`).label];
		let team2 = teamsMap[$w(`#regioncschool22`).label];
		openLightbox(team1, team2, "regionc11");
	});
	$w("#regioncschool21").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool21`).label];
		let team2 = teamsMap[$w(`#regioncschool22`).label];
		openLightbox(team1, team2, "regionc11");
	});
	$w("#regioncseed22").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool21`).label];
		let team2 = teamsMap[$w(`#regioncschool22`).label];
		openLightbox(team1, team2, "regionc11");
	});
	$w("#regionclogo22").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool21`).label];
		let team2 = teamsMap[$w(`#regioncschool22`).label];
		openLightbox(team1, team2, "regionc11");
	});
	$w("#regioncschool22").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool21`).label];
		let team2 = teamsMap[$w(`#regioncschool22`).label];
		openLightbox(team1, team2, "regionc11");
	});

	$w("#regioncseed23").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool23`).label];
		let team2 = teamsMap[$w(`#regioncschool24`).label];
		openLightbox(team1, team2, "regionc12");
	});
	$w("#regionclogo23").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool23`).label];
		let team2 = teamsMap[$w(`#regioncschool24`).label];
		openLightbox(team1, team2, "regionc12");
	});
	$w("#regioncschool23").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool23`).label];
		let team2 = teamsMap[$w(`#regioncschool24`).label];
		openLightbox(team1, team2, "regionc12");
	});
	$w("#regioncseed24").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool23`).label];
		let team2 = teamsMap[$w(`#regioncschool24`).label];
		openLightbox(team1, team2, "regionc12");
	});
	$w("#regionclogo24").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool23`).label];
		let team2 = teamsMap[$w(`#regioncschool24`).label];
		openLightbox(team1, team2, "regionc12");
	});
	$w("#regioncschool24").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool23`).label];
		let team2 = teamsMap[$w(`#regioncschool24`).label];
		openLightbox(team1, team2, "regionc12");
	});

	$w("#regioncseed25").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool25`).label];
		let team2 = teamsMap[$w(`#regioncschool26`).label];
		openLightbox(team1, team2, "regionc13");
	});
	$w("#regionclogo25").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool25`).label];
		let team2 = teamsMap[$w(`#regioncschool26`).label];
		openLightbox(team1, team2, "regionc13");
	});
	$w("#regioncschool25").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool25`).label];
		let team2 = teamsMap[$w(`#regioncschool26`).label];
		openLightbox(team1, team2, "regionc13");
	});
	$w("#regioncseed26").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool25`).label];
		let team2 = teamsMap[$w(`#regioncschool26`).label];
		openLightbox(team1, team2, "regionc13");
	});
	$w("#regionclogo26").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool25`).label];
		let team2 = teamsMap[$w(`#regioncschool26`).label];
		openLightbox(team1, team2, "regionc13");
	});
	$w("#regioncschool26").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool25`).label];
		let team2 = teamsMap[$w(`#regioncschool26`).label];
		openLightbox(team1, team2, "regionc13");
	});

	$w("#regioncseed27").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool27`).label];
		let team2 = teamsMap[$w(`#regioncschool28`).label];
		openLightbox(team1, team2, "regionc14");
	});
	$w("#regionclogo27").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool27`).label];
		let team2 = teamsMap[$w(`#regioncschool28`).label];
		openLightbox(team1, team2, "regionc14");
	});
	$w("#regioncschool27").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool27`).label];
		let team2 = teamsMap[$w(`#regioncschool28`).label];
		openLightbox(team1, team2, "regionc14");
	});
	$w("#regioncseed28").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool27`).label];
		let team2 = teamsMap[$w(`#regioncschool28`).label];
		openLightbox(team1, team2, "regionc14");
	});
	$w("#regionclogo28").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool27`).label];
		let team2 = teamsMap[$w(`#regioncschool28`).label];
		openLightbox(team1, team2, "regionc14");
	});
	$w("#regioncschool28").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool27`).label];
		let team2 = teamsMap[$w(`#regioncschool28`).label];
		openLightbox(team1, team2, "regionc14");
	});

	$w("#regioncseed29").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool29`).label];
		let team2 = teamsMap[$w(`#regioncschool30`).label];
		openLightbox(team1, team2, "regionc15");
	});
	$w("#regionclogo29").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool29`).label];
		let team2 = teamsMap[$w(`#regioncschool30`).label];
		openLightbox(team1, team2, "regionc15");
	});
	$w("#regioncschool29").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool29`).label];
		let team2 = teamsMap[$w(`#regioncschool30`).label];
		openLightbox(team1, team2, "regionc15");
	});
	$w("#regioncseed30").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool29`).label];
		let team2 = teamsMap[$w(`#regioncschool30`).label];
		openLightbox(team1, team2, "regionc15");
	});
	$w("#regionclogo30").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool29`).label];
		let team2 = teamsMap[$w(`#regioncschool30`).label];
		openLightbox(team1, team2, "regionc15");
	});
	$w("#regioncschool30").onClick(function() {
		let team1 = teamsMap[$w(`#regioncschool29`).label];
		let team2 = teamsMap[$w(`#regioncschool30`).label];
		openLightbox(team1, team2, "regionc15");
	});

	$w("#regiondseed1").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool1`).label];
		let team2 = teamsMap[$w(`#regiondschool16`).label];
		openLightbox(team1, team2, "regiond1");
	});
	$w("#regiondlogo1").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool1`).label];
		let team2 = teamsMap[$w(`#regiondschool16`).label];
		openLightbox(team1, team2, "regiond1");
	});
	$w("#regiondschool1").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool1`).label];
		let team2 = teamsMap[$w(`#regiondschool16`).label];
		openLightbox(team1, team2, "regiond1");
	});
	$w("#regiondseed16").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool1`).label];
		let team2 = teamsMap[$w(`#regiondschool16`).label];
		openLightbox(team1, team2, "regiond1");
	});
	$w("#regiondlogo16").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool1`).label];
		let team2 = teamsMap[$w(`#regiondschool16`).label];
		openLightbox(team1, team2, "regiond1");
	});
	$w("#regiondschool16").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool1`).label];
		let team2 = teamsMap[$w(`#regiondschool16`).label];
		openLightbox(team1, team2, "regiond1");
	});

	$w("#regiondseed2").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool2`).label];
		let team2 = teamsMap[$w(`#regiondschool15`).label];
		openLightbox(team1, team2, "regiond2");
	});
	$w("#regiondlogo2").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool2`).label];
		let team2 = teamsMap[$w(`#regiondschool15`).label];
		openLightbox(team1, team2, "regiond2");
	});
	$w("#regiondschool2").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool2`).label];
		let team2 = teamsMap[$w(`#regiondschool15`).label];
		openLightbox(team1, team2, "regiond2");
	});
	$w("#regiondseed15").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool2`).label];
		let team2 = teamsMap[$w(`#regiondschool15`).label];
		openLightbox(team1, team2, "regiond2");
	});
	$w("#regiondlogo15").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool2`).label];
		let team2 = teamsMap[$w(`#regiondschool15`).label];
		openLightbox(team1, team2, "regiond2");
	});
	$w("#regiondschool15").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool2`).label];
		let team2 = teamsMap[$w(`#regiondschool15`).label];
		openLightbox(team1, team2, "regiond2");
	});

	$w("#regiondseed3").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool3`).label];
		let team2 = teamsMap[$w(`#regiondschool14`).label];
		openLightbox(team1, team2, "regiond3");
	});
	$w("#regiondlogo3").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool3`).label];
		let team2 = teamsMap[$w(`#regiondschool14`).label];
		openLightbox(team1, team2, "regiond3");
	});
	$w("#regiondschool3").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool3`).label];
		let team2 = teamsMap[$w(`#regiondschool14`).label];
		openLightbox(team1, team2, "regiond3");
	});
	$w("#regiondseed14").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool3`).label];
		let team2 = teamsMap[$w(`#regiondschool14`).label];
		openLightbox(team1, team2, "regiond3");
	});
	$w("#regiondlogo14").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool3`).label];
		let team2 = teamsMap[$w(`#regiondschool14`).label];
		openLightbox(team1, team2, "regiond3");
	});
	$w("#regiondschool14").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool3`).label];
		let team2 = teamsMap[$w(`#regiondschool14`).label];
		openLightbox(team1, team2, "regiond3");
	});

	$w("#regiondseed4").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool4`).label];
		let team2 = teamsMap[$w(`#regiondschool13`).label];
		openLightbox(team1, team2, "regiond4");
	});
	$w("#regiondlogo4").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool4`).label];
		let team2 = teamsMap[$w(`#regiondschool13`).label];
		openLightbox(team1, team2, "regiond4");
	});
	$w("#regiondschool4").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool4`).label];
		let team2 = teamsMap[$w(`#regiondschool13`).label];
		openLightbox(team1, team2, "regiond4");
	});
	$w("#regiondseed13").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool4`).label];
		let team2 = teamsMap[$w(`#regiondschool13`).label];
		openLightbox(team1, team2, "regiond4");
	});
	$w("#regiondlogo13").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool4`).label];
		let team2 = teamsMap[$w(`#regiondschool13`).label];
		openLightbox(team1, team2, "regiond4");
	});
	$w("#regiondschool13").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool4`).label];
		let team2 = teamsMap[$w(`#regiondschool13`).label];
		openLightbox(team1, team2, "regiond4");
	});

	$w("#regiondseed5").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool5`).label];
		let team2 = teamsMap[$w(`#regiondschool12`).label];
		openLightbox(team1, team2, "regiond5");
	});
	$w("#regiondlogo5").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool5`).label];
		let team2 = teamsMap[$w(`#regiondschool12`).label];
		openLightbox(team1, team2, "regiond5");
	});
	$w("#regiondschool5").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool5`).label];
		let team2 = teamsMap[$w(`#regiondschool12`).label];
		openLightbox(team1, team2, "regiond5");
	});
	$w("#regiondseed12").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool5`).label];
		let team2 = teamsMap[$w(`#regiondschool12`).label];
		openLightbox(team1, team2, "regiond5");
	});
	$w("#regiondlogo12").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool5`).label];
		let team2 = teamsMap[$w(`#regiondschool12`).label];
		openLightbox(team1, team2, "regiond5");
	});
	$w("#regiondschool12").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool5`).label];
		let team2 = teamsMap[$w(`#regiondschool12`).label];
		openLightbox(team1, team2, "regiond5");
	});

	$w("#regiondseed6").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool6`).label];
		let team2 = teamsMap[$w(`#regiondschool11`).label];
		openLightbox(team1, team2, "regiond6");
	});
	$w("#regiondlogo6").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool6`).label];
		let team2 = teamsMap[$w(`#regiondschool11`).label];
		openLightbox(team1, team2, "regiond6");
	});
	$w("#regiondschool6").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool6`).label];
		let team2 = teamsMap[$w(`#regiondschool11`).label];
		openLightbox(team1, team2, "regiond6");
	});
	$w("#regiondseed11").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool6`).label];
		let team2 = teamsMap[$w(`#regiondschool11`).label];
		openLightbox(team1, team2, "regiond6");
	});
	$w("#regiondlogo11").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool6`).label];
		let team2 = teamsMap[$w(`#regiondschool11`).label];
		openLightbox(team1, team2, "regiond6");
	});
	$w("#regiondschool11").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool6`).label];
		let team2 = teamsMap[$w(`#regiondschool11`).label];
		openLightbox(team1, team2, "regiond6");
	});

	$w("#regiondseed7").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool7`).label];
		let team2 = teamsMap[$w(`#regiondschool10`).label];
		openLightbox(team1, team2, "regiond7");
	});
	$w("#regiondlogo7").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool7`).label];
		let team2 = teamsMap[$w(`#regiondschool10`).label];
		openLightbox(team1, team2, "regiond7");
	});
	$w("#regiondschool7").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool7`).label];
		let team2 = teamsMap[$w(`#regiondschool10`).label];
		openLightbox(team1, team2, "regiond7");
	});
	$w("#regiondseed10").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool7`).label];
		let team2 = teamsMap[$w(`#regiondschool10`).label];
		openLightbox(team1, team2, "regiond7");
	});
	$w("#regiondlogo10").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool7`).label];
		let team2 = teamsMap[$w(`#regiondschool10`).label];
		openLightbox(team1, team2, "regiond7");
	});
	$w("#regiondschool10").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool7`).label];
		let team2 = teamsMap[$w(`#regiondschool10`).label];
		openLightbox(team1, team2, "regiond7");
	});

	$w("#regiondseed8").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool8`).label];
		let team2 = teamsMap[$w(`#regiondschool9`).label];
		openLightbox(team1, team2, "regiond8");
	});
	$w("#regiondlogo8").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool8`).label];
		let team2 = teamsMap[$w(`#regiondschool9`).label];
		openLightbox(team1, team2, "regiond8");
	});
	$w("#regiondschool8").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool8`).label];
		let team2 = teamsMap[$w(`#regiondschool9`).label];
		openLightbox(team1, team2, "regiond8");
	});
	$w("#regiondseed9").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool8`).label];
		let team2 = teamsMap[$w(`#regiondschool9`).label];
		openLightbox(team1, team2, "regiond8");
	});
	$w("#regiondlogo9").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool8`).label];
		let team2 = teamsMap[$w(`#regiondschool9`).label];
		openLightbox(team1, team2, "regiond8");
	});
	$w("#regiondschool9").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool8`).label];
		let team2 = teamsMap[$w(`#regiondschool9`).label];
		openLightbox(team1, team2, "regiond8");
	});

	$w("#regiondseed17").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool17`).label];
		let team2 = teamsMap[$w(`#regiondschool18`).label];
		openLightbox(team1, team2, "regiond9");
	});
	$w("#regiondlogo17").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool17`).label];
		let team2 = teamsMap[$w(`#regiondschool18`).label];
		openLightbox(team1, team2, "regiond9");
	});
	$w("#regiondschool17").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool17`).label];
		let team2 = teamsMap[$w(`#regiondschool18`).label];
		openLightbox(team1, team2, "regiond9");
	});
	$w("#regiondseed18").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool17`).label];
		let team2 = teamsMap[$w(`#regiondschool18`).label];
		openLightbox(team1, team2, "regiond9");
	});
	$w("#regiondlogo18").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool17`).label];
		let team2 = teamsMap[$w(`#regiondschool18`).label];
		openLightbox(team1, team2, "regiond9");
	});
	$w("#regiondschool18").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool17`).label];
		let team2 = teamsMap[$w(`#regiondschool18`).label];
		openLightbox(team1, team2, "regiond9");
	});

	$w("#regiondseed19").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool19`).label];
		let team2 = teamsMap[$w(`#regiondschool20`).label];
		openLightbox(team1, team2, "regiond10");
	});
	$w("#regiondlogo19").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool19`).label];
		let team2 = teamsMap[$w(`#regiondschool20`).label];
		openLightbox(team1, team2, "regiond10");
	});
	$w("#regiondschool19").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool19`).label];
		let team2 = teamsMap[$w(`#regiondschool20`).label];
		openLightbox(team1, team2, "regiond10");
	});
	$w("#regiondseed20").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool19`).label];
		let team2 = teamsMap[$w(`#regiondschool20`).label];
		openLightbox(team1, team2, "regiond10");
	});
	$w("#regiondlogo20").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool19`).label];
		let team2 = teamsMap[$w(`#regiondschool20`).label];
		openLightbox(team1, team2, "regiond10");
	});
	$w("#regiondschool20").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool19`).label];
		let team2 = teamsMap[$w(`#regiondschool20`).label];
		openLightbox(team1, team2, "regiond10");
	});

	$w("#regiondseed21").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool21`).label];
		let team2 = teamsMap[$w(`#regiondschool22`).label];
		openLightbox(team1, team2, "regiond11");
	});
	$w("#regiondlogo21").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool21`).label];
		let team2 = teamsMap[$w(`#regiondschool22`).label];
		openLightbox(team1, team2, "regiond11");
	});
	$w("#regiondschool21").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool21`).label];
		let team2 = teamsMap[$w(`#regiondschool22`).label];
		openLightbox(team1, team2, "regiond11");
	});
	$w("#regiondseed22").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool21`).label];
		let team2 = teamsMap[$w(`#regiondschool22`).label];
		openLightbox(team1, team2, "regiond11");
	});
	$w("#regiondlogo22").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool21`).label];
		let team2 = teamsMap[$w(`#regiondschool22`).label];
		openLightbox(team1, team2, "regiond11");
	});
	$w("#regiondschool22").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool21`).label];
		let team2 = teamsMap[$w(`#regiondschool22`).label];
		openLightbox(team1, team2, "regiond11");
	});

	$w("#regiondseed23").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool23`).label];
		let team2 = teamsMap[$w(`#regiondschool24`).label];
		openLightbox(team1, team2, "regiond12");
	});
	$w("#regiondlogo23").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool23`).label];
		let team2 = teamsMap[$w(`#regiondschool24`).label];
		openLightbox(team1, team2, "regiond12");
	});
	$w("#regiondschool23").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool23`).label];
		let team2 = teamsMap[$w(`#regiondschool24`).label];
		openLightbox(team1, team2, "regiond12");
	});
	$w("#regiondseed24").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool23`).label];
		let team2 = teamsMap[$w(`#regiondschool24`).label];
		openLightbox(team1, team2, "regiond12");
	});
	$w("#regiondlogo24").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool23`).label];
		let team2 = teamsMap[$w(`#regiondschool24`).label];
		openLightbox(team1, team2, "regiond12");
	});
	$w("#regiondschool24").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool23`).label];
		let team2 = teamsMap[$w(`#regiondschool24`).label];
		openLightbox(team1, team2, "regiond12");
	});

	$w("#regiondseed25").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool25`).label];
		let team2 = teamsMap[$w(`#regiondschool26`).label];
		openLightbox(team1, team2, "regiond13");
	});
	$w("#regiondlogo25").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool25`).label];
		let team2 = teamsMap[$w(`#regiondschool26`).label];
		openLightbox(team1, team2, "regiond13");
	});
	$w("#regiondschool25").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool25`).label];
		let team2 = teamsMap[$w(`#regiondschool26`).label];
		openLightbox(team1, team2, "regiond13");
	});
	$w("#regiondseed26").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool25`).label];
		let team2 = teamsMap[$w(`#regiondschool26`).label];
		openLightbox(team1, team2, "regiond13");
	});
	$w("#regiondlogo26").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool25`).label];
		let team2 = teamsMap[$w(`#regiondschool26`).label];
		openLightbox(team1, team2, "regiond13");
	});
	$w("#regiondschool26").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool25`).label];
		let team2 = teamsMap[$w(`#regiondschool26`).label];
		openLightbox(team1, team2, "regiond13");
	});

	$w("#regiondseed27").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool27`).label];
		let team2 = teamsMap[$w(`#regiondschool28`).label];
		openLightbox(team1, team2, "regiond14");
	});
	$w("#regiondlogo27").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool27`).label];
		let team2 = teamsMap[$w(`#regiondschool28`).label];
		openLightbox(team1, team2, "regiond14");
	});
	$w("#regiondschool27").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool27`).label];
		let team2 = teamsMap[$w(`#regiondschool28`).label];
		openLightbox(team1, team2, "regiond14");
	});
	$w("#regiondseed28").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool27`).label];
		let team2 = teamsMap[$w(`#regiondschool28`).label];
		openLightbox(team1, team2, "regiond14");
	});
	$w("#regiondlogo28").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool27`).label];
		let team2 = teamsMap[$w(`#regiondschool28`).label];
		openLightbox(team1, team2, "regiond14");
	});
	$w("#regiondschool28").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool27`).label];
		let team2 = teamsMap[$w(`#regiondschool28`).label];
		openLightbox(team1, team2, "regiond14");
	});

	$w("#regiondseed29").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool29`).label];
		let team2 = teamsMap[$w(`#regiondschool30`).label];
		openLightbox(team1, team2, "regiond15");
	});
	$w("#regiondlogo29").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool29`).label];
		let team2 = teamsMap[$w(`#regiondschool30`).label];
		openLightbox(team1, team2, "regiond15");
	});
	$w("#regiondschool29").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool29`).label];
		let team2 = teamsMap[$w(`#regiondschool30`).label];
		openLightbox(team1, team2, "regiond15");
	});
	$w("#regiondseed30").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool29`).label];
		let team2 = teamsMap[$w(`#regiondschool30`).label];
		openLightbox(team1, team2, "regiond15");
	});
	$w("#regiondlogo30").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool29`).label];
		let team2 = teamsMap[$w(`#regiondschool30`).label];
		openLightbox(team1, team2, "regiond15");
	});
	$w("#regiondschool30").onClick(function() {
		let team1 = teamsMap[$w(`#regiondschool29`).label];
		let team2 = teamsMap[$w(`#regiondschool30`).label];
		openLightbox(team1, team2, "regiond15");
	});
});

function openLightbox(team1Obj, team2Obj, lightbox) {
	const data = {
		team1: team1Obj,
		team2: team2Obj
	};
	wixWindow.openLightbox("Matchup", data);
}

function loadTeams() {
	for (let team of teams) {
		let seed = team.seed;
		let seedNumber = seed.substring(0, seed.length - 1);
		let region = seed.charAt(seed.length - 1);
		switch (region) {
			case 'A':
				if (regionATeams.hasOwnProperty(seedNumber)) {
					let otherTeam = regionATeams[seedNumber];
					let arr = {team, otherTeam};
					firstFourTeams[seed] = arr;
					regionATeams[seedNumber] = null;
				}
				else {
					regionATeams[seedNumber] = team;
				}
				break;
			case 'B':
				if (regionBTeams.hasOwnProperty(seedNumber)) {
					let otherTeam = regionBTeams[seedNumber];
					let arr = {team, otherTeam};
					firstFourTeams[seed] = arr;
					regionBTeams[seedNumber] = null;
				}
				else {
					regionBTeams[seedNumber] = team;
				}
				break;
			case 'C':
				if (regionCTeams.hasOwnProperty(seedNumber)) {
					let otherTeam = regionCTeams[seedNumber];
					let arr = {team, otherTeam};
					firstFourTeams[seed] = arr;
					regionCTeams[seedNumber] = null;
				}
				else {
					regionCTeams[seedNumber] = team;
				}
				break;
			case 'D':
				if (regionDTeams.hasOwnProperty(seedNumber)) {
					let otherTeam = regionDTeams[seedNumber];
					let arr = {team, otherTeam};
					firstFourTeams[seed] = arr;
					regionDTeams[seedNumber] = null;
				}
				else {
					regionDTeams[seedNumber] = team;
				}
				break;
		}
	}
	placeTeams();
}

function placeTeams() {
	placeTeamsFirstFour();
	placeTeamsRegion('a');
	placeTeamsRegion('b');
	placeTeamsRegion('c');
	placeTeamsRegion('d');
	placeTeamsFinalFour();
}

function placeTeamsFirstFour() {
	let idx = 1;
	for (let seed of Object.keys(firstFourTeams)) {
		let seedNumber = seed.substring(0, seed.length - 1);
		let region = seed.charAt(seed.length - 1).toLowerCase();
		$w(`#region${region}pick${seedNumber}`).disable();
		let theseTeams = firstFourTeams[seed];
		let team1 = theseTeams.team;
		let team2 = theseTeams.otherTeam;
		let firstFourPick1 = $w(`#firstfourpick${idx}`);
		let firstFourPick2 = $w(`#firstfourpick${idx + 1}`);
		$w(`#firstfourseed${idx}`).label = `#${seedNumber}`;
		$w(`#firstfourlogo${idx}`).src = team1.logo;
		$w(`#firstfourschool${idx}`).label = team1.school;
		$w(`#firstfourpick${idx}`).onClick(function(){firstFourOnClick(firstFourPick1, firstFourPick2, region, seedNumber, team1, team2)});
		idx++;
		$w(`#firstfourseed${idx}`).label = `#${seedNumber}`;
		$w(`#firstfourlogo${idx}`).src = team2.logo;
		$w(`#firstfourschool${idx}`).label = team2.school;
		$w(`#firstfourpick${idx}`).onClick(function(){firstFourOnClick(firstFourPick2, firstFourPick1, region, seedNumber, team2, team1)});
		idx++;
	}
}

function placeTeamsRegion(region) {
	let regionTeams;
	switch (region) {
		case 'a':
			regionTeams = regionATeams;
			break;
		case 'b':
			regionTeams = regionBTeams;
			break;
		case 'c':
			regionTeams = regionCTeams;
			break;
		case 'd':
			regionTeams = regionDTeams;
			break;
	}
	for (let seedNumber = 1; seedNumber <= 8; seedNumber++) {
		let seed1 = seedNumber;
		let seed2 = 17 - seedNumber;
		let seed3 = roundSeeds1[seedNumber - 1];
		let seed3Other = roundSeeds1Other[seedNumber - 1];
		let team1 = regionTeams[seed1];
		let team2 = regionTeams[seed2];
		let pick1 = $w(`#region${region}pick${seed1}`);
		let pick2 = $w(`#region${region}pick${seed2}`);	
		$w(`#region${region}logo${seed1}`).src = team1.logo;
		$w(`#region${region}school${seed1}`).label = team1.school;
		$w(`#region${region}pick${seed1}`).onClick(function(){regionOnClick(pick1, pick2, region, seed3, seed3Other, seed1, seed2)});
		if (team2 !== null) {
			$w(`#region${region}logo${seed2}`).src = team2.logo;
			$w(`#region${region}school${seed2}`).label = team2.school;
		}
		$w(`#region${region}pick${seed2}`).onClick(function(){regionOnClick(pick2, pick1, region, seed3, seed3Other, seed2, seed1)});
	}
	for (let seedNumber = 17; seedNumber <= 24; seedNumber += 2) {
		let seed1 = seedNumber;
		let seed2 = seedNumber + 1;
		let seed3 = roundSeeds2[(seedNumber + 1) / 2 - 9];
		let seed3Other = roundSeeds2Other[(seedNumber + 1) / 2 - 9];
		let pick1 = $w(`#region${region}pick${seed1}`);
		let pick2 = $w(`#region${region}pick${seed2}`);
		$w(`#region${region}pick${seed1}`).onClick(function(){regionOnClick(pick1, pick2, region, seed3, seed3Other, seed1, seed2)});
		$w(`#region${region}pick${seed2}`).onClick(function(){regionOnClick(pick2, pick1, region, seed3, seed3Other, seed2, seed1)});
	}
	for (let seedNumber = 25; seedNumber <= 28; seedNumber += 2) {
		let seed1 = seedNumber;
		let seed2 = seedNumber + 1;
		let seed3 = roundSeeds3[(seedNumber + 1) / 2 - 13];
		let seed3Other = roundSeeds3Other[(seedNumber + 1) / 2 - 13];
		let pick1 = $w(`#region${region}pick${seed1}`);
		let pick2 = $w(`#region${region}pick${seed2}`);	
		$w(`#region${region}pick${seed1}`).onClick(function(){regionOnClick(pick1, pick2, region, seed3, seed3Other, seed1, seed2)});
		$w(`#region${region}pick${seed2}`).onClick(function(){regionOnClick(pick2, pick1, region, seed3, seed3Other, seed2, seed1)});
	}
	let regionNumber;
	let otherRegionNumber;
	switch (region) {
		case 'a':
			regionNumber = 1;
			otherRegionNumber = 2;
			break;
		case 'b':
			regionNumber = 3;
			otherRegionNumber = 4;
			break;
		case 'c':
			regionNumber = 4;
			otherRegionNumber = 3;
			break;
		case 'd':
			regionNumber = 2;
			otherRegionNumber = 1;
			break;
	}
	let seed1 = 29;
	let seed2 = 30;
	let pick1 = $w(`#region${region}pick${seed1}`);
	let pick2 = $w(`#region${region}pick${seed2}`);
	$w(`#region${region}pick${seed1}`).onClick(function(){regionFinalOnClick(pick1, pick2, region, regionNumber, otherRegionNumber, seed1)});
	$w(`#region${region}pick${seed2}`).onClick(function(){regionFinalOnClick(pick2, pick1, region, regionNumber, otherRegionNumber, seed2)});
}

function placeTeamsFinalFour() {
	for (let seedNumber = 1; seedNumber <= 4; seedNumber += 2) {
		let seed1 = seedNumber;
		let seed2 = seedNumber + 1;
		let seed3 = finalSeeds[(seedNumber + 1) / 2 - 1];
		let seed3Other = finalSeedsOther[(seedNumber + 1) / 2 - 1];
		let pick1 = $w(`#finalfourpick${seed1}`);
		let pick2 = $w(`#finalfourpick${seed2}`);	
		$w(`#finalfourpick${seed1}`).onClick(function(){finalFourOnClick(pick1, pick2, seed3, seed3Other, seed1)});
		$w(`#finalfourpick${seed2}`).onClick(function(){finalFourOnClick(pick2, pick1, seed3, seed3Other, seed2)});
	}
	for (let seedNumber = 5; seedNumber <= 6; seedNumber += 2) {
		let seed1 = seedNumber;
		let seed2 = seedNumber + 1;
		let seed3 = 7;
		let pick1 = $w(`#finalfourpick${seed1}`);
		let pick2 = $w(`#finalfourpick${seed2}`);	
		$w(`#finalfourpick${seed1}`).onClick(function(){championshipOnClick(pick1, pick2, seed3, seed1)});
		$w(`#finalfourpick${seed2}`).onClick(function(){championshipOnClick(pick2, pick1, seed3, seed2)});
	}
}

function clear() {
	clearFirstFour();
	clearRegion('a');
	clearRegion('b');
	clearRegion('c');
	clearRegion('d');
	clearRegionFix();
	clearFinalFour();
	for (let school of schools) {
		teamSelections[school] = [];
	}
}

function clearFirstFour() {
	for (let i = 1; i <= 8; i++) {
		$w(`#firstfourpick${i}`).enable();
	}
}

function clearRegion(region) {
	for (let i = 1; i <= 16; i++) {
		$w(`#region${region}pick${i}`).enable();
	}
	for (let i = 17; i <= 30; i++) {
		$w(`#region${region}seed${i}`).label = "";
		$w(`#region${region}logo${i}`).src = blank;
		$w(`#region${region}school${i}`).label = "";
		$w(`#region${region}pick${i}`).disable();
	}
}

function clearRegionFix() {
	for (let seed of Object.keys(firstFourTeams)) {
		let seedNumber = seed.substring(0, seed.length - 1);
		let region = seed.charAt(seed.length - 1).toLowerCase();
		$w(`#region${region}logo${seedNumber}`).src = blank;
		$w(`#region${region}school${seedNumber}`).label = "";
		$w(`#region${region}pick${seedNumber}`).disable();
	}
}

function clearFinalFour() {
	for (let i = 1; i <= 6; i++) {
		$w(`#finalfourseed${i}`).label = "";
		$w(`#finalfourlogo${i}`).src = blank;
		$w(`#finalfourschool${i}`).label = "";
		$w(`#finalfourpick${i}`).disable();
	}
	$w(`#finalfourseed7`).label = "";
	$w(`#finalfourlogo7`).src = blank;
	$w(`#finalfourschool7`).label = "";
}

async function autofill() {
	await autofillFirstFour();
	await autofillRegion('a');
	await autofillRegion('b');
	await autofillRegion('c');
	await autofillRegion('d');
	await autofillFinalFour();
	$w("#clearbutton").enable();
	$w("#autofillbutton").enable();
}

async function autofillFirstFour() {
	for (let i = 1; i <= 8; i += 2) {
		if ($w(`#firstfourpick${i}`).enabled && $w(`#firstfourpick${i + 1}`).enabled) {
			let team1 = teamsMap[$w(`#firstfourschool${i}`).label];
			let team2 = teamsMap[$w(`#firstfourschool${i + 1}`).label];
			let winner = simGame(team1, team2);
			let firstFourPick1 = $w(`#firstfourpick${i}`);
			let firstFourPick2 = $w(`#firstfourpick${i + 1}`);
			let seed = team1.seed;
			let seedNumber = seed.substring(0, seed.length - 1);
			let region = seed.charAt(seed.length - 1).toLowerCase();
			if (winner) {
				firstFourOnClick(firstFourPick1, firstFourPick2, region, seedNumber, team1, team2);
			}
			else {
				firstFourOnClick(firstFourPick2, firstFourPick1, region, seedNumber, team2, team1);
			}
		}
	}
}

async function autofillRegion(region) {
	for (let i = 1; i <= 8; i ++) {
		if ($w(`#region${region}pick${i}`).enabled && $w(`#region${region}pick${17 - i}`).enabled) {
			let team1 = teamsMap[$w(`#region${region}school${i}`).label];
			let team2 = teamsMap[$w(`#region${region}school${17 - i}`).label];
			let winner = simGame(team1, team2);
			let seed1 = i;
			let seed2 = 17 - i;
			let seed3 = roundSeeds1[i - 1];
			let seed3Other = roundSeeds1Other[i - 1];
			let pick1 = $w(`#region${region}pick${seed1}`);
			let pick2 = $w(`#region${region}pick${seed2}`);
			if (winner) {
				regionOnClick(pick1, pick2, region, seed3, seed3Other, seed1, seed2);
			}
			else {
				regionOnClick(pick2, pick1, region, seed3, seed3Other, seed2, seed1);
			}
		}
	}
	for (let i = 17; i <= 24; i += 2) {
		if ($w(`#region${region}pick${i}`).enabled && $w(`#region${region}pick${i + 1}`).enabled) {
			let team1 = teamsMap[$w(`#region${region}school${i}`).label];
			let team2 = teamsMap[$w(`#region${region}school${i + 1}`).label];
			let winner = simGame(team1, team2);
			let seed1 = i;
			let seed2 = i + 1;
			let seed3 = roundSeeds2[(i + 1) / 2 - 9];
			let seed3Other = roundSeeds2Other[(i + 1) / 2 - 9];
			let pick1 = $w(`#region${region}pick${seed1}`);
			let pick2 = $w(`#region${region}pick${seed2}`);
			if (winner) {
				regionOnClick(pick1, pick2, region, seed3, seed3Other, seed1, seed2);
			}
			else {
				regionOnClick(pick2, pick1, region, seed3, seed3Other, seed2, seed1);
			}
		}
	}
	for (let i = 25; i <= 28; i += 2) {
		if ($w(`#region${region}pick${i}`).enabled && $w(`#region${region}pick${i + 1}`).enabled) {
			let team1 = teamsMap[$w(`#region${region}school${i}`).label];
			let team2 = teamsMap[$w(`#region${region}school${i + 1}`).label];
			let winner = simGame(team1, team2);
			let seed1 = i;
			let seed2 = i + 1;
			let seed3 = roundSeeds3[(i + 1) / 2 - 13];
			let seed3Other = roundSeeds3Other[(i + 1) / 2 - 13];
			let pick1 = $w(`#region${region}pick${seed1}`);
			let pick2 = $w(`#region${region}pick${seed2}`);
			if (winner) {
				regionOnClick(pick1, pick2, region, seed3, seed3Other, seed1, seed2);
			}
			else {
				regionOnClick(pick2, pick1, region, seed3, seed3Other, seed2, seed1);
			}
		}
	}
	if ($w(`#region${region}pick29`).enabled && $w(`#region${region}pick30`).enabled) {
		let team1 = teamsMap[$w(`#region${region}school29`).label];
		let team2 = teamsMap[$w(`#region${region}school30`).label];
		let winner = simGame(team1, team2);
		let regionNumber;
		let otherRegionNumber;
		switch (region) {
			case 'a':
				regionNumber = 1;
				otherRegionNumber = 2;
				break;
			case 'b':
				regionNumber = 3;
				otherRegionNumber = 4;
				break;
			case 'c':
				regionNumber = 4;
				otherRegionNumber = 3;
				break;
			case 'd':
				regionNumber = 2;
				otherRegionNumber = 1;
				break;
		}
		let seed1 = 29;
		let seed2 = 30;
		let pick1 = $w(`#region${region}pick${seed1}`);
		let pick2 = $w(`#region${region}pick${seed2}`);
		if (winner) {
			regionFinalOnClick(pick1, pick2, region, regionNumber, otherRegionNumber, seed1);
		}
		else {
			regionFinalOnClick(pick2, pick1, region, regionNumber, otherRegionNumber, seed2);
		}
	}
}

async function autofillFinalFour() {
	for (let i = 1; i <= 4; i += 2) {
		if ($w(`#finalfourpick${i}`).enabled && $w(`#finalfourpick${i + 1}`).enabled) {
			let team1 = teamsMap[$w(`#finalfourschool${i}`).label];
			let team2 = teamsMap[$w(`#finalfourschool${i + 1}`).label];
			let winner = simGame(team1, team2);
			let seed1 = i;
			let seed2 = i + 1;
			let seed3 = finalSeeds[(i + 1) / 2 - 1];
			let seed3Other = finalSeedsOther[(i + 1) / 2 - 1];
			let pick1 = $w(`#finalfourpick${seed1}`);
			let pick2 = $w(`#finalfourpick${seed2}`);	
			if (winner) {
				finalFourOnClick(pick1, pick2, seed3, seed3Other, seed1);
			}
			else {
				finalFourOnClick(pick2, pick1, seed3, seed3Other, seed2);
			}
		}
	}
	for (let i = 5; i <= 6; i += 2) {
		if ($w(`#finalfourpick${i}`).enabled && $w(`#finalfourpick${i + 1}`).enabled) {
			let team1 = teamsMap[$w(`#finalfourschool${i}`).label];
			let team2 = teamsMap[$w(`#finalfourschool${i + 1}`).label];
			let winner = simGame(team1, team2);
			let seed1 = i;
			let seed2 = i + 1;
			let seed3 = 7;
			let pick1 = $w(`#finalfourpick${seed1}`);
			let pick2 = $w(`#finalfourpick${seed2}`);
			if (winner) {
				championshipOnClick(pick1, pick2, seed3, seed1);
			}
			else {
				championshipOnClick(pick2, pick1, seed3, seed2);
			}
		}
	}
}

function simGame(team1, team2) {
	let diffNet = team1.net - team2.net;
	let diffKp = team1.kp - team2.kp;
	let diffFf = team1.f - team2.f;
	let diff = (diffNet + diffKp + diffFf) / 4;
	let team1Chance;
	if (diff < 0) {
		diff = 50 + Math.abs(diff);
		team1Chance = Math.min(diff, 100) / 100;
	}
	else if (diff > 0) {
		diff = 50 - diff;
		team1Chance = Math.max(diff, 0) / 100;
	}
	else {
		team1Chance = 50;
	}
	let random = Math.random();
	return random < team1Chance;
}

export function firstFourOnClick(pick, otherPick, region, seedNumber, team, otherTeam) {
	pick.disable();
	const otherTeamSchool = otherTeam.school;
	let otherTeamSelections = teamSelections[otherTeamSchool];
	for (let selection of otherTeamSelections) {
		if (selection[0] === "finalfour") {
			$w(`#finalfourseed${selection[1]}`).label = "";
			$w(`#finalfourlogo${selection[1]}`).src = blank;
			$w(`#finalfourschool${selection[1]}`).label = "";
			if (selection[1] < 7) {
				$w(`#finalfourpick${selection[1]}`).disable();
			}
		}
		else {
			if (selection[1] > 16) {
				$w(`#region${selection[0]}seed${selection[1]}`).label = "";
				$w(`#region${selection[0]}pick${selection[1]}`).disable();
			}
			$w(`#region${selection[0]}logo${selection[1]}`).src = blank;
			$w(`#region${selection[0]}school${selection[1]}`).label = "";
		}
	}
	teamSelections[otherTeamSchool] = [];
	$w(`#region${region}logo${seedNumber}`).src = team.logo;
	$w(`#region${region}school${seedNumber}`).label = team.school;
	$w(`#region${region}pick${seedNumber}`).enable();
	teamSelections[team.school].push([region, seedNumber]);
	otherPick.enable();
}

export function regionOnClick(pick, otherPick, region, seed3, seed3Other, seed, otherTeamSeed) {
	pick.disable();
	const otherTeamSchool = $w(`#region${region}school${otherTeamSeed}`).label;
	if (otherTeamSchool !== "") {
		let otherTeamSelections = teamSelections[otherTeamSchool];
		let newSelections = [];
		for (let selection of otherTeamSelections) {
			if (selection[0] === "finalfour") {
				$w(`#finalfourseed${selection[1]}`).label = "";
				$w(`#finalfourlogo${selection[1]}`).src = blank;
				$w(`#finalfourschool${selection[1]}`).label = "";
				if (selection[1] < 7) {
					$w(`#finalfourpick${selection[1]}`).disable();
				}
			}
			else if (selection[1] > Math.max(seed, otherTeamSeed)) {
				$w(`#region${selection[0]}seed${selection[1]}`).label = "";
				$w(`#region${selection[0]}logo${selection[1]}`).src = blank;
				$w(`#region${selection[0]}school${selection[1]}`).label = "";
				if (selection[1] > seed3) {
					$w(`#region${selection[0]}pick${selection[1]}`).disable();
				}
			}
			else {
				newSelections.push(selection);
			}
		}
		teamSelections[otherTeamSchool] = newSelections;
	}
	$w(`#region${region}seed${seed3}`).label = $w(`#region${region}seed${seed}`).label;
	$w(`#region${region}logo${seed3}`).src = $w(`#region${region}logo${seed}`).src;
	$w(`#region${region}school${seed3}`).label = $w(`#region${region}school${seed}`).label;
	$w(`#region${region}pick${seed3}`).enable();
	const teamSchool = $w(`#region${region}school${seed}`).label;
	teamSelections[teamSchool].push([region, seed3]);
	if ($w(`#region${region}school${otherTeamSeed}`).label !== "") {
		otherPick.enable();
	}
}

export function regionFinalOnClick(pick, otherPick, region, regionNumber, otherRegionNumber, seed) {
	pick.disable();
	const otherTeamSeed = seed % 2 === 0 ? seed - 1 : seed + 1;
	const otherTeamSchool = $w(`#region${region}school${otherTeamSeed}`).label;
	if (otherTeamSchool !== "") {
		let otherTeamSelections = teamSelections[otherTeamSchool];
		let newSelections = [];
		for (let selection of otherTeamSelections) {
			if (selection[0] === "finalfour") {
				$w(`#finalfourseed${selection[1]}`).label = "";
				$w(`#finalfourlogo${selection[1]}`).src = blank;
				$w(`#finalfourschool${selection[1]}`).label = "";
				if (selection[1] < 7) {
					$w(`#finalfourpick${selection[1]}`).disable();
				}
			}
			else {
				newSelections.push(selection);
			}
		}
		teamSelections[otherTeamSchool] = newSelections;
	}
	$w(`#finalfourseed${regionNumber}`).label = $w(`#region${region}seed${seed}`).label;
	$w(`#finalfourlogo${regionNumber}`).src = $w(`#region${region}logo${seed}`).src;
	$w(`#finalfourschool${regionNumber}`).label = $w(`#region${region}school${seed}`).label;
	$w(`#finalfourpick${regionNumber}`).enable();
	const teamSchool = $w(`#region${region}school${seed}`).label;
	teamSelections[teamSchool].push(["finalfour", regionNumber]);
	if ($w(`#region${region}school${otherTeamSeed}`).label !== "") {
		otherPick.enable();
	}
}

export function finalFourOnClick(pick, otherPick, seed3, seed3Other, seed) {
	pick.disable();
	const otherTeamSeed = seed % 2 === 0 ? seed - 1 : seed + 1;
	const otherTeamSchool = $w(`#finalfourschool${otherTeamSeed}`).label;
	if (otherTeamSchool !== "") {
		let otherTeamSelections = teamSelections[otherTeamSchool];
		let newSelections = [];
		for (let selection of otherTeamSelections) {
			if (selection[0] === "finalfour" && selection[1] > Math.max(seed, otherTeamSeed)) {
				$w(`#finalfourseed${selection[1]}`).label = "";
				$w(`#finalfourlogo${selection[1]}`).src = blank;
				$w(`#finalfourschool${selection[1]}`).label = "";
				if (selection[1] < 7) {
					$w(`#finalfourpick${selection[1]}`).disable();
				}
			}
			else {
				newSelections.push(selection);
			}
		}
		teamSelections[otherTeamSchool] = newSelections;
	}
	$w(`#finalfourseed${seed3}`).label = $w(`#finalfourseed${seed}`).label;
	$w(`#finalfourlogo${seed3}`).src = $w(`#finalfourlogo${seed}`).src;
	$w(`#finalfourschool${seed3}`).label = $w(`#finalfourschool${seed}`).label;
	$w(`#finalfourpick${seed3}`).enable();
	const teamSchool = $w(`#finalfourschool${seed}`).label;
	teamSelections[teamSchool].push(["finalfour", seed3]);
	if ($w(`#finalfourschool${otherTeamSeed}`).label !== "") {
		otherPick.enable();
	}
}

export function championshipOnClick(pick, otherPick, seed3, seed) {
	pick.disable();
	const otherTeamSeed = seed % 2 === 0 ? seed - 1 : seed + 1;
	const otherTeamSchool = $w(`#finalfourschool${otherTeamSeed}`).label;
	if (otherTeamSchool !== "") {
		let otherTeamSelections = teamSelections[otherTeamSchool];
		let newSelections = [];
		for (let selection of otherTeamSelections) {
			if (selection[0] === "finalfour" && selection[1] > Math.max(seed, otherTeamSeed)) {
				$w(`#finalfourseed${selection[1]}`).label = "";
				$w(`#finalfourlogo${selection[1]}`).src = blank;
				$w(`#finalfourschool${selection[1]}`).label = "";
				if (selection[1] < 7) {
					$w(`#finalfourpick${selection[1]}`).disable();
				}
			}
			else {
				newSelections.push(selection);
			}
		}
		teamSelections[otherTeamSchool] = newSelections;
	}
	$w(`#finalfourseed${seed3}`).label = $w(`#finalfourseed${seed}`).label;
	$w(`#finalfourlogo${seed3}`).src = $w(`#finalfourlogo${seed}`).src;
	$w(`#finalfourschool${seed3}`).label = $w(`#finalfourschool${seed}`).label;
	const teamSchool = $w(`#finalfourschool${seed}`).label;
	teamSelections[teamSchool].push(["finalfour", seed3]);
	if ($w(`#finalfourschool${otherTeamSeed}`).label !== "") {
		otherPick.enable();
	}
}
