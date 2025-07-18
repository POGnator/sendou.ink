import type { TournamentData } from "../Tournament.server";

/** Zones Weekly 38 with every round of swiss finished, last round's matches not generated */
export const ZONES_WEEKLY_38 = (): TournamentData => ({
	data: {
		stage: [
			{
				id: 1457,
				name: "Main Bracket",
				number: 1,
				settings: {
					swiss: {
						groupCount: 1,
						roundCount: 4,
					},
				},
				tournament_id: 891,
				type: "swiss",
				createdAt: 1734685232,
			},
		],
		group: [
			{
				id: 4443,
				number: 1,
				stage_id: 1457,
			},
		],
		round: [
			{
				id: 13715,
				group_id: 4443,
				number: 1,
				stage_id: 1457,
				maps: {
					count: 5,
					type: "BEST_OF",
					pickBan: "COUNTERPICK",
				},
			},
			{
				id: 13716,
				group_id: 4443,
				number: 2,
				stage_id: 1457,
				maps: {
					count: 5,
					type: "BEST_OF",
					pickBan: "COUNTERPICK",
				},
			},
			{
				id: 13717,
				group_id: 4443,
				number: 3,
				stage_id: 1457,
				maps: {
					count: 5,
					type: "BEST_OF",
					pickBan: "COUNTERPICK",
				},
			},
			{
				id: 13718,
				group_id: 4443,
				number: 4,
				stage_id: 1457,
				maps: {
					count: 5,
					type: "BEST_OF",
					pickBan: "COUNTERPICK",
				},
			},
		],
		match: [
			{
				id: 38584,
				group_id: 4443,
				number: 1,
				opponent1: {
					id: 18248,
					score: 3,
					result: "win",
				},
				opponent2: {
					id: 18266,
					score: 0,
					result: "loss",
				},
				round_id: 13715,
				stage_id: 1457,
				status: 4,
				lastGameFinishedAt: 1734687487,
				createdAt: 1734685232,
			},
			{
				id: 38585,
				group_id: 4443,
				number: 2,
				opponent1: {
					id: 18037,
					score: 3,
					result: "win",
				},
				opponent2: {
					id: 18212,
					score: 0,
					result: "loss",
				},
				round_id: 13715,
				stage_id: 1457,
				status: 4,
				lastGameFinishedAt: 1734686471,
				createdAt: 1734685232,
			},
			{
				id: 38586,
				group_id: 4443,
				number: 3,
				opponent1: {
					id: 18255,
					score: 3,
					result: "win",
				},
				opponent2: {
					id: 18019,
					score: 0,
					result: "loss",
				},
				round_id: 13715,
				stage_id: 1457,
				status: 4,
				lastGameFinishedAt: 1734686359,
				createdAt: 1734685232,
			},
			{
				id: 38587,
				group_id: 4443,
				number: 4,
				opponent1: {
					id: 18210,
				},
				opponent2: null,
				round_id: 13715,
				stage_id: 1457,
				status: 2,
				lastGameFinishedAt: null,
				createdAt: 1734685232,
			},
			{
				id: 38588,
				group_id: 4443,
				number: 1,
				opponent1: {
					id: 18248,
					score: 3,
					result: "win",
				},
				opponent2: {
					id: 18210,
					score: 0,
					result: "loss",
				},
				round_id: 13716,
				stage_id: 1457,
				status: 4,
				lastGameFinishedAt: 1734688988,
				createdAt: 1734687519,
			},
			{
				id: 38589,
				group_id: 4443,
				number: 2,
				opponent1: {
					id: 18037,
					score: 3,
					result: "win",
				},
				opponent2: {
					id: 18255,
					score: 2,
					result: "loss",
				},
				round_id: 13716,
				stage_id: 1457,
				status: 4,
				lastGameFinishedAt: 1734689658,
				createdAt: 1734687519,
			},
			{
				id: 38590,
				group_id: 4443,
				number: 3,
				opponent1: {
					id: 18266,
					score: 3,
					result: "win",
				},
				opponent2: {
					id: 18212,
					score: 0,
					result: "loss",
				},
				round_id: 13716,
				stage_id: 1457,
				status: 4,
				lastGameFinishedAt: 1734688872,
				createdAt: 1734687519,
			},
			{
				id: 38591,
				group_id: 4443,
				number: 4,
				opponent1: {
					id: 18019,
				},
				opponent2: null,
				round_id: 13716,
				stage_id: 1457,
				status: 2,
				lastGameFinishedAt: null,
				createdAt: 1734687519,
			},
			{
				id: 38592,
				group_id: 4443,
				number: 1,
				opponent1: {
					id: 18248,
					score: 0,
					result: "loss",
				},
				opponent2: {
					id: 18037,
					score: 3,
					result: "win",
				},
				round_id: 13717,
				stage_id: 1457,
				status: 4,
				lastGameFinishedAt: 1734691279,
				createdAt: 1734689680,
			},
			{
				id: 38593,
				group_id: 4443,
				number: 2,
				opponent1: {
					id: 18019,
					score: 0,
					result: "loss",
				},
				opponent2: {
					id: 18266,
					score: 3,
					result: "win",
				},
				round_id: 13717,
				stage_id: 1457,
				status: 4,
				lastGameFinishedAt: 1734690877,
				createdAt: 1734689680,
			},
			{
				id: 38594,
				group_id: 4443,
				number: 3,
				opponent1: {
					id: 18210,
					score: 0,
					result: "loss",
				},
				opponent2: {
					id: 18255,
					score: 3,
					result: "win",
				},
				round_id: 13717,
				stage_id: 1457,
				status: 4,
				lastGameFinishedAt: 1734690966,
				createdAt: 1734689680,
			},
			{
				id: 38595,
				group_id: 4443,
				number: 4,
				opponent1: {
					id: 18212,
				},
				opponent2: null,
				round_id: 13717,
				stage_id: 1457,
				status: 2,
				lastGameFinishedAt: null,
				createdAt: 1734689680,
			},
		],
	},
	ctx: {
		id: 891,
		eventId: 2698,
		discordUrl: "https://discord.gg/A6NW3VCHRh",
		tags: "REGION,SZ",
		settings: {
			bracketProgression: [
				{
					type: "swiss",
					name: "Main Bracket",
					settings: {
						roundCount: 4,
					},
					requiresCheckIn: false,
				},
			],
			thirdPlaceMatch: false,
			isRanked: false,
			deadlines: "DEFAULT",
			isInvitational: false,
			enableNoScreenToggle: true,
			enableSubs: true,
			autonomousSubs: false,
			regClosesAt: 1734684300,
			requireInGameNames: false,
			minMembersPerTeam: 4,
			swiss: {
				groupCount: 1,
				roundCount: 4,
			},
		},
		castTwitchAccounts: null,
		castedMatchesInfo: null,
		mapPickingStyle: "TO",
		rules:
			"For the complete and up to date rules see #rules and #announcements in the discord.\n\n**Tournament Proceedings**\nContact your opponent through tournament match page. If issues occur, a TO may direct you to a captain’s chat in the discord.\n\n**Map Counterpicks**\nThe loser of each match chooses the next map in the round. A team may not choose a map that has already been played in the set.\n\n**Disconnections**\nEach team can replay once per set when a disconnection occurs on their side if both of the following apply: \n- the disconnection occurs before 2:30 on the match timer.\n- the objective counter of the team without the disconnect is above 40.\nIf a disconnection occurs before 30 seconds into the match then a free replay is given. Please avoid replaying when these conditions aren’t met (i.e. gentlemen’s replay) so to keep the tournament running on time.\n\n**Other Rules**\n- Use of the private battle quit feature for malicious purposes will result in disqualification.\n- Penalties may be issued to teams that are not in the match lobby within 10 minutes of round start.\n\n**Player Restrictions**\nEach team is allowed up to 6 players. Players of the following group are not allowed to participate without specific exemption from Puma\n- Non-OCE players\n- Oceanink banned players\n\n-- Tournament Organisers reserve the right to make last minute changes to the rules —",
		parentTournamentId: null,
		name: "Zones Weekly 38",
		description:
			"A short and sweet, weekly zones only tournament for the OCE and SEA region. Format is 4 rounds of Bo5 Swiss with counterpicks.\n\nJoin the discord for more info.",
		startTime: 1734685200,
		isFinalized: 0,
		organization: null,
		logoUrl: "tournament-logo-hfX5gzVyrt5QCV8fiQA4n-1716906622859.webp",
		logoValidatedAt: 1716949983,
		author: {
			id: 13370,
			username: "Puma",
			discordId: "308483655515373570",
			discordAvatar: "a5fff2b4706d99364e646cab28c8085b",
			customUrl: "puma",
			chatNameColor: null,
		},
		staff: [
			{
				id: 1183,
				username: "goobler",
				discordId: "395757059922198548",
				discordAvatar: "2a569302e9545c6a07f8f8aa337d139d",
				customUrl: "penis",
				chatNameColor: null,
				role: "ORGANIZER",
			},
			{
				id: 3147,
				username: "Cookie",
				discordId: "267963609924108288",
				discordAvatar: "85090cfe2e0da693355bcec9740c1eaa",
				customUrl: "cookie",
				chatNameColor: null,
				role: "ORGANIZER",
			},
			{
				id: 5212,
				username: "Mars",
				discordId: "507102073427460098",
				discordAvatar: "bd634c91f7d0475f3671956fa9a2110a",
				customUrl: null,
				chatNameColor: null,
				role: "ORGANIZER",
			},
			{
				id: 23120,
				username: "micah",
				discordId: "111682034056835072",
				discordAvatar: "f1191c94b1da5396a06b620408017c1f",
				customUrl: "weizihao",
				chatNameColor: null,
				role: "ORGANIZER",
			},
		],
		subCounts: [
			{
				visibility: "ALL",
				count: 4,
			},
		],
		bracketProgressionOverrides: [],
		teams: [
			{
				id: 18248,
				name: "Bamboo Pirates",
				seed: 1,
				prefersNotToHost: 0,
				noScreen: 0,
				droppedOut: 0,
				inviteCode: null,
				createdAt: 1734656039,
				activeRosterUserIds: [5662, 2899, 6114, 30176],
				startingBracketIdx: null,
				pickupAvatarUrl: null,
				members: [
					{
						userId: 5662,
						username: "Plus",
						discordId: "461787942478675978",
						discordAvatar: "b6ab568d3f51973e934892ee8b9f743e",
						customUrl: "plussy",
						country: "AU",
						twitch: "plus218",
						isOwner: 1,
						createdAt: 1734656039,
						inGameName: "Plussy#1291",
					},
					{
						userId: 2899,
						username: "CHIMERA",
						discordId: "326295468931940353",
						discordAvatar: "a6aed066cec53c079e3585d0c7007be9",
						customUrl: "chimera_",
						country: "AU",
						twitch: "mikamikax_",
						isOwner: 0,
						createdAt: 1734656044,
						inGameName: "CHIMERA#1263",
					},
					{
						userId: 6114,
						username: "Zalph",
						discordId: "359945819433992193",
						discordAvatar: "8f4fbd64d8949d418f023682e4161afb",
						customUrl: "zalph",
						country: "SO",
						twitch: null,
						isOwner: 0,
						createdAt: 1734656047,
						inGameName: "CountMeOut#1985",
					},
					{
						userId: 33963,
						username: "Tiger",
						discordId: "653478041993084938",
						discordAvatar: "d67221267888ac818ae4197077d236b7",
						customUrl: null,
						country: "ST",
						twitch: "tigersplat",
						isOwner: 0,
						createdAt: 1734664082,
						inGameName: "BIDOOFGMAX#8251",
					},
					{
						userId: 30176,
						username: "Jorjay",
						discordId: "820142030654275644",
						discordAvatar: "fb1e6be299a9c37f30c2ab76e55151f6",
						customUrl: "2021_spl",
						country: "AU",
						twitch: null,
						isOwner: 0,
						createdAt: 1734674285,
						inGameName: "Bugha 33#1316",
					},
				],
				checkIns: [
					{
						bracketIdx: null,
						checkedInAt: 1734681705,
						isCheckOut: 0,
					},
				],
				mapPool: [],
				team: {
					id: 4259,
					customUrl: "bamboo-pirates",
					logoUrl: "qv1Zyp4EE72lPghCRheqt-1733399357944.webp",
					deletedAt: 1741481029,
				},
				avgSeedingSkillOrdinal: 19.23368373822438,
			},
			{
				id: 18037,
				name: "the usual suspects",
				seed: 2,
				prefersNotToHost: 0,
				noScreen: 0,
				droppedOut: 0,
				inviteCode: null,
				createdAt: 1734423187,
				activeRosterUserIds: null,
				startingBracketIdx: null,
				pickupAvatarUrl: "pickup-logo-rZYQMu8ELjiFkeiAVGJUt-1734424882431.webp",
				members: [
					{
						userId: 17855,
						username: "konj",
						discordId: "916459853738819624",
						discordAvatar: "8d5559ef3e67b5ec4dd1fdcf79f6092c",
						customUrl: "kojuke",
						country: "NZ",
						twitch: null,
						isOwner: 1,
						createdAt: 1734423187,
						inGameName: "☆ SD-J ☆#2947",
					},
					{
						userId: 21689,
						username: "Para",
						discordId: "233896056327372802",
						discordAvatar: "98f8fc7277ac6664f3db8f5bea0f2785",
						customUrl: "voidedparadigm",
						country: "AU",
						twitch: "voidedparadigm",
						isOwner: 0,
						createdAt: 1734424893,
						inGameName: "parasyka#2169",
					},
					{
						userId: 3147,
						username: "Cookie",
						discordId: "267963609924108288",
						discordAvatar: "85090cfe2e0da693355bcec9740c1eaa",
						customUrl: "cookie",
						country: "AU",
						twitch: "cookie_spl",
						isOwner: 0,
						createdAt: 1734426984,
						inGameName: "cookie♪#1006",
					},
					{
						userId: 2072,
						username: "suıseı",
						discordId: "297233823937069068",
						discordAvatar: "19dfa11a14bbf85f52f167d318c4a9df",
						customUrl: "qu",
						country: "BF",
						twitch: null,
						isOwner: 0,
						createdAt: 1734426986,
						inGameName: null,
					},
				],
				checkIns: [
					{
						bracketIdx: null,
						checkedInAt: 1734682339,
						isCheckOut: 0,
					},
				],
				mapPool: [],
				team: null,
				avgSeedingSkillOrdinal: 17.028587732217623,
			},
			{
				id: 18255,
				name: "ayam goreng",
				seed: 3,
				prefersNotToHost: 0,
				noScreen: 0,
				droppedOut: 0,
				inviteCode: null,
				createdAt: 1734660846,
				activeRosterUserIds: null,
				startingBracketIdx: null,
				pickupAvatarUrl: null,
				members: [
					{
						userId: 11484,
						username: "Telethia",
						discordId: "100913388141441024",
						discordAvatar: "5c761e51aea48ffef7d40248f76fa2dc",
						customUrl: "telethia",
						country: "AU",
						twitch: null,
						isOwner: 1,
						createdAt: 1734660846,
						inGameName: "Telethia#6611",
					},
					{
						userId: 13370,
						username: "Puma",
						discordId: "308483655515373570",
						discordAvatar: "a5fff2b4706d99364e646cab28c8085b",
						customUrl: "puma",
						country: "AU",
						twitch: null,
						isOwner: 0,
						createdAt: 1734660856,
						inGameName: "Puma#2209",
					},
					{
						userId: 45,
						username: "ShockWavee",
						discordId: "332893262966685696",
						discordAvatar: "ecc26794744c45604c4dc0c12829a178",
						customUrl: "shockwavee",
						country: "AU",
						twitch: "shockwavee03",
						isOwner: 0,
						createdAt: 1734660882,
						inGameName: "ShockWavee#3003",
					},
					{
						userId: 1843,
						username: "hp",
						discordId: "600255055836217364",
						discordAvatar: "531392eaa7f7706c67a67b0e9c3c8fe1",
						customUrl: null,
						country: "AU",
						twitch: null,
						isOwner: 0,
						createdAt: 1734663143,
						inGameName: null,
					},
				],
				checkIns: [
					{
						bracketIdx: null,
						checkedInAt: 1734683478,
						isCheckOut: 0,
					},
				],
				mapPool: [],
				team: null,
				avgSeedingSkillOrdinal: 23.38512079140615,
			},
			{
				id: 18266,
				name: "Fruitea!",
				seed: 5,
				prefersNotToHost: 0,
				noScreen: 1,
				droppedOut: 0,
				inviteCode: null,
				createdAt: 1734683349,
				activeRosterUserIds: [37632, 13590, 10757, 33047],
				startingBracketIdx: null,
				pickupAvatarUrl: null,
				members: [
					{
						userId: 37632,
						username: "mitsi",
						discordId: "690098887913898051",
						discordAvatar: "92904ce37ba00b98173388d26a668075",
						customUrl: "mitsi",
						country: "PS",
						twitch: null,
						isOwner: 1,
						createdAt: 1734683349,
						inGameName: "mitsi#2589",
					},
					{
						userId: 13590,
						username: "Canary",
						discordId: "229149474436415488",
						discordAvatar: "b5370ece354a643266d3eb2fb798c250",
						customUrl: "canary",
						country: "AU",
						twitch: "sanityzed",
						isOwner: 0,
						createdAt: 1734683352,
						inGameName: "☆ SD-N ☆#2936",
					},
					{
						userId: 10757,
						username: "Wilds ♪",
						discordId: "335966886393151488",
						discordAvatar: "a8fcb6c37957349865532149153ef306",
						customUrl: "wilds",
						country: "AU",
						twitch: "whilds",
						isOwner: 0,
						createdAt: 1734683356,
						inGameName: "Wilds ♪#6274",
					},
					{
						userId: 33047,
						username: "layden haw",
						discordId: "260167849916497920",
						discordAvatar: "aa1f9e79977626dabc7b0f6a1ce33934",
						customUrl: null,
						country: "AU",
						twitch: null,
						isOwner: 0,
						createdAt: 1734683966,
						inGameName: "2F Law#1355",
					},
					{
						userId: 41024,
						username: "Silly",
						discordId: "807118113266204682",
						discordAvatar: "40ecf7715f974c9c77fab988b7925f02",
						customUrl: "silly_b3",
						country: "AU",
						twitch: "silly_b3",
						isOwner: 0,
						createdAt: 1734685180,
						inGameName: "His Silly#2385",
					},
				],
				checkIns: [
					{
						bracketIdx: null,
						checkedInAt: 1734684005,
						isCheckOut: 0,
					},
				],
				mapPool: [],
				team: {
					id: 3327,
					customUrl: "fruitea",
					logoUrl: "-u2c96lIxBLHuiSaafPgx-1721110885919.webp",
					deletedAt: null,
				},
				avgSeedingSkillOrdinal: 13.208083181946204,
			},
			{
				id: 18212,
				name: "The Huh Inkqisition",
				seed: 6,
				prefersNotToHost: 0,
				noScreen: 1,
				droppedOut: 0,
				inviteCode: null,
				createdAt: 1734608907,
				activeRosterUserIds: [11780, 46006, 43518, 33483],
				startingBracketIdx: null,
				pickupAvatarUrl: "pickup-logo-FOfFcEbo2OJxIJIJxNJqu-1734608907317.webp",
				members: [
					{
						userId: 43518,
						username: "Veemo.ai",
						discordId: "1207579465580937226",
						discordAvatar: "26fed7e18436f4acf2a3d69be8c7ef6e",
						customUrl: null,
						country: "AU",
						twitch: "veemo_ai",
						isOwner: 1,
						createdAt: 1734608907,
						inGameName: "H! Veems#3106",
					},
					{
						userId: 29665,
						username: "SounKade",
						discordId: "456319133886185493",
						discordAvatar: "84fe04756965b996b60bbd259e1e949f",
						customUrl: null,
						country: "AU",
						twitch: "sounkade",
						isOwner: 0,
						createdAt: 1734608923,
						inGameName: "H!PwPwPew#2889",
					},
					{
						userId: 46006,
						username: "Ozzysquid",
						discordId: "568696527892250644",
						discordAvatar: "6cf81e68116d09422cf1c0b92bffac35",
						customUrl: null,
						country: "AU",
						twitch: "ozzysqid",
						isOwner: 0,
						createdAt: 1734608925,
						inGameName: "H!Ozzysqid#2558",
					},
					{
						userId: 33483,
						username: "Koifu",
						discordId: "835478379670405171",
						discordAvatar: "8d8549f96de026e6c892fc6ae0533ba2",
						customUrl: "koifu",
						country: "AU",
						twitch: "koifu_spl",
						isOwner: 0,
						createdAt: 1734608931,
						inGameName: "DrkXWolf17#3326",
					},
					{
						userId: 11780,
						username: "𝘚𝘭𝘢𝘯𝘵𝘦𝘥",
						discordId: "383285856024264728",
						discordAvatar: "1e5da05391f497a80ff8f250e8a48d78",
						customUrl: null,
						country: "PH",
						twitch: null,
						isOwner: 0,
						createdAt: 1734659216,
						inGameName: "Slanted#1646",
					},
					{
						userId: 37901,
						username: "Scuffy",
						discordId: "782140779765170177",
						discordAvatar: "a_4068013243c9541df51f3505f4865491",
						customUrl: null,
						country: null,
						twitch: "shade_is_special",
						isOwner: 0,
						createdAt: 1734684084,
						inGameName: null,
					},
				],
				checkIns: [
					{
						bracketIdx: null,
						checkedInAt: 1734683891,
						isCheckOut: 0,
					},
				],
				mapPool: [],
				team: null,
				avgSeedingSkillOrdinal: -1.2336066064166205,
			},
			{
				id: 18019,
				name: "Monkey Barrel",
				seed: 7,
				prefersNotToHost: 0,
				noScreen: 1,
				droppedOut: 0,
				inviteCode: null,
				createdAt: 1734397954,
				activeRosterUserIds: [46467, 46813, 33491, 43662],
				startingBracketIdx: null,
				pickupAvatarUrl: "pickup-logo-y79k_HOVmjv4KfhTjuSqh-1734398099266.webp",
				members: [
					{
						userId: 45879,
						username: "Albonchap",
						discordId: "366392868065247234",
						discordAvatar: "2cbf7ae01b702297a2521a171e0e3b78",
						customUrl: "albonchap",
						country: "AU",
						twitch: null,
						isOwner: 1,
						createdAt: 1734397954,
						inGameName: "Albonchap#9998",
					},
					{
						userId: 43662,
						username: "FoolLime",
						discordId: "605972217007702036",
						discordAvatar: "7bf218fd71fce58c9ba1467ed88e7b4b",
						customUrl: null,
						country: "AU",
						twitch: null,
						isOwner: 0,
						createdAt: 1734397970,
						inGameName: "FoolLime#1864",
					},
					{
						userId: 33491,
						username: "Moth",
						discordId: "799230134069755904",
						discordAvatar: "cbc9cae07dd9f12cc406b74b926e09d7",
						customUrl: null,
						country: "AU",
						twitch: null,
						isOwner: 0,
						createdAt: 1734397973,
						inGameName: "snowy#2709",
					},
					{
						userId: 46467,
						username: "Veryneggy",
						discordId: "293329775920152579",
						discordAvatar: "e63a83d27a950d02f665d676133c15b3",
						customUrl: "verygoodnegg",
						country: "AU",
						twitch: null,
						isOwner: 0,
						createdAt: 1734398287,
						inGameName: "Veryneggy#1494",
					},
					{
						userId: 46813,
						username: "Mikil",
						discordId: "644853671498088468",
						discordAvatar: "ebe43708538e1b6e9c5678f0e341abce",
						customUrl: null,
						country: "AU",
						twitch: null,
						isOwner: 0,
						createdAt: 1734398628,
						inGameName: "Mikil#2961",
					},
				],
				checkIns: [
					{
						bracketIdx: null,
						checkedInAt: 1734682872,
						isCheckOut: 0,
					},
				],
				mapPool: [],
				team: {
					id: 4327,
					customUrl: "monkey-barrel",
					logoUrl: "-5sDkwde5xLxRfbu4Ww1C-1738819882151.webp",
					deletedAt: null,
				},
				avgSeedingSkillOrdinal: -3.4737419768092437,
			},
			{
				id: 18210,
				name: "Ras+1",
				seed: 8,
				prefersNotToHost: 0,
				noScreen: 0,
				droppedOut: 0,
				inviteCode: null,
				createdAt: 1734598652,
				activeRosterUserIds: null,
				startingBracketIdx: null,
				pickupAvatarUrl: "pickup-logo-IGXFtjFMa_dxQqAe2dqIR-1734598652684.webp",
				members: [
					{
						userId: 26992,
						username: "Dit-toe",
						discordId: "584595353370755083",
						discordAvatar: "5e922d377f75683321f08004cfc5f6a6",
						customUrl: "dit-toad",
						country: "AU",
						twitch: null,
						isOwner: 1,
						createdAt: 1734598652,
						inGameName: "ЯR Dit-toe#3315",
					},
					{
						userId: 33611,
						username: "Samkat",
						discordId: "656420619251875870",
						discordAvatar: "c6fc6c98ffea28d513c52e8de52f6157",
						customUrl: null,
						country: "AU",
						twitch: null,
						isOwner: 0,
						createdAt: 1734598655,
						inGameName: "ЯR Samkat #3138",
					},
					{
						userId: 31148,
						username: "smart.png",
						discordId: "858608618186342420",
						discordAvatar: "abec0f2d5dee5754ef02b71aee25bb73",
						customUrl: "cakeatstake",
						country: "AU",
						twitch: null,
						isOwner: 0,
						createdAt: 1734598656,
						inGameName: "ЯR smart!!#1424",
					},
					{
						userId: 33578,
						username: "Mat",
						discordId: "988370975542353960",
						discordAvatar: "29784a769af34943558199a7f3e012cb",
						customUrl: null,
						country: "AU",
						twitch: null,
						isOwner: 0,
						createdAt: 1734612388,
						inGameName: "Mat#1561",
					},
				],
				checkIns: [
					{
						bracketIdx: null,
						checkedInAt: 1734684254,
						isCheckOut: 0,
					},
				],
				mapPool: [],
				team: null,
				avgSeedingSkillOrdinal: -6.382139240461566,
			},
		],
		tieBreakerMapPool: [],
		toSetMapPool: [
			{
				mode: "SZ",
				stageId: 0,
			},
			{
				mode: "SZ",
				stageId: 1,
			},
			{
				mode: "SZ",
				stageId: 2,
			},
			{
				mode: "SZ",
				stageId: 3,
			},
			{
				mode: "SZ",
				stageId: 4,
			},
			{
				mode: "SZ",
				stageId: 5,
			},
			{
				mode: "SZ",
				stageId: 6,
			},
			{
				mode: "SZ",
				stageId: 7,
			},
			{
				mode: "SZ",
				stageId: 8,
			},
			{
				mode: "SZ",
				stageId: 9,
			},
			{
				mode: "SZ",
				stageId: 10,
			},
			{
				mode: "SZ",
				stageId: 11,
			},
			{
				mode: "SZ",
				stageId: 12,
			},
			{
				mode: "SZ",
				stageId: 13,
			},
			{
				mode: "SZ",
				stageId: 14,
			},
			{
				mode: "SZ",
				stageId: 15,
			},
			{
				mode: "SZ",
				stageId: 16,
			},
			{
				mode: "SZ",
				stageId: 17,
			},
			{
				mode: "SZ",
				stageId: 18,
			},
			{
				mode: "SZ",
				stageId: 19,
			},
			{
				mode: "SZ",
				stageId: 20,
			},
			{
				mode: "SZ",
				stageId: 21,
			},
			{
				mode: "SZ",
				stageId: 22,
			},
			{
				mode: "SZ",
				stageId: 23,
			},
		],
		participatedUsers: [
			45, 1843, 2072, 2899, 3147, 5662, 6114, 10757, 11484, 11780, 13370, 13590,
			17855, 21689, 26992, 30176, 31148, 33047, 33491, 33578, 33611, 37632,
			37901, 43518, 43662, 45879, 46006, 46467, 46813,
		],
		logoSrc:
			"https://sendou.nyc3.cdn.digitaloceanspaces.com/tournament-logo-hfX5gzVyrt5QCV8fiQA4n-1716906622859.webp",
	},
});
