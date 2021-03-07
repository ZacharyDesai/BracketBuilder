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
		$w("#info1").src = `${data.team1.lineup}`;
	}
	if (data.team2 !== undefined) {
		$w("#seed2").label = `#${data.team2.seed.substring(0, data.team2.seed.length - 1)}`;
		$w("#logo2").src = `${data.team2.logo}`;
		$w("#info2").src = `${data.team2.lineup}`;
	}
});

function calculateChance(team1, team2) {
	let diffNet = team1.net - team2.net;
	let diffKp = team1.kp - team2.kp;
	let diffFf = team1.f - team2.f;
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
