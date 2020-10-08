import wixWindow from 'wix-window';

$w.onReady(function () {
	const data = wixWindow.lightbox.getContext();
	if (data.team1 !== undefined && data.team2 !== undefined) {
		let team1Chance = calculateChance(data.team1, data.team2);
		let team2Chance = 100 - team1Chance;
		$w("#chance1").label = `${team1Chance}%`;
		$w("#chance2").label = `${team2Chance}%`;
	}
	if (data.team1 !== undefined) {
		$w("#seed1").label = `#${data.team1.seed.substring(0, data.team1.seed.length - 1)}`;
		$w("#logo1").src = `${data.team1.logo}`;
		$w("#tempo1").label = `${data.team1.tempoRank}`;
		$w("#3pt1").label = `${data.team1.threept}`;
		$w("#ft1").label = `${data.team1.ft}`;
		$w("#net1").label = `${data.team1.netRank}`;
		$w("#kp1").label = `${data.team1.kenPomOverallRank}`;
		$w("#ff1").label = `${data.team1.fourFactorsOverallRank}`;
		$w("#kpoff1").label = `${data.team1.kenPomOffenseRank}`;
		$w("#ffoff1").label = `${data.team1.fourFactorsOffenseRank}`;
		$w("#efgoff1").label = `${data.team1.offenseEfg}`;
		$w("#tovoff1").label = `${data.team1.offenseTov}`;
		$w("#orboff1").label = `${data.team1.offenseOrb}`;
		$w("#ftfgaoff1").label = `${data.team1.offenseFtFga}`;
		$w("#kpdef1").label = `${data.team1.kenPomDefenseRank}`;
		$w("#ffdef1").label = `${data.team1.fourFactorsDefenseRank}`;
		$w("#efgdef1").label = `${data.team1.defenseEfg}`;
		$w("#tovdef1").label = `${data.team1.defenseTov}`;
		$w("#orbdef1").label = `${data.team1.defenseOrb}`;
		$w("#ftfgadef1").label = `${data.team1.defenseFtFga}`;
	}
	if (data.team2 !== undefined) {
		$w("#seed2").label = `#${data.team2.seed.substring(0, data.team2.seed.length - 1)}`;
		$w("#logo2").src = `${data.team2.logo}`;
		$w("#tempo2").label = `${data.team2.tempoRank}`;
		$w("#3pt2").label = `${data.team2.threept}`;
		$w("#ft2").label = `${data.team2.ft}`;
		$w("#net2").label = `${data.team2.netRank}`;
		$w("#kp2").label = `${data.team2.kenPomOverallRank}`;
		$w("#ff2").label = `${data.team2.fourFactorsOverallRank}`;
		$w("#kpoff2").label = `${data.team2.kenPomOffenseRank}`;
		$w("#kffoff2").label = `${data.team2.fourFactorsOffenseRank}`;
		$w("#efgoff2").label = `${data.team2.offenseEfg}`;
		$w("#tovoff2").label = `${data.team2.offenseTov}`;
		$w("#orboff2").label = `${data.team2.offenseOrb}`;
		$w("#ftfgaoff2").label = `${data.team2.offenseFtFga}`;
		$w("#kpdef2").label = `${data.team2.kenPomDefenseRank}`;
		$w("#ffdef2").label = `${data.team2.fourFactorsDefenseRank}`;
		$w("#efgdef2").label = `${data.team2.defenseEfg}`;
		$w("#tovdef2").label = `${data.team2.defenseTov}`;
		$w("#orbdef2").label = `${data.team2.defenseOrb}`;
		$w("#ftfgadef2").label = `${data.team2.defenseFtFga}`;
	}
});

function calculateChance(team1, team2) {
	let diffNet = team1.netRank - team2.netRank;
	let diffKp = team1.kenPomOverallRank - team2.kenPomOverallRank;
	let diffFf = team1.fourFactorsOverallRank - team2.fourFactorsOverallRank;
	let diff = (diffNet + diffKp + diffFf) / 8;
	let team1Chance;
	if (diff < 0) {
		diff = 50 + Math.abs(diff);
		team1Chance = Math.min(diff, 99);
	}
	else if (diff > 0) {
		diff = 50 - diff;
		team1Chance = Math.max(diff, 1);
	}
	else {
		team1Chance = 50;
	}
	team1Chance = Math.round(team1Chance);
	return team1Chance;
}
