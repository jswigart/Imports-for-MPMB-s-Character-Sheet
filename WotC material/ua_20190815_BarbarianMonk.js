var iFileName = "ua_20190815_BarbarianMonk.js";
RequiredSheetVersion(12.999);
// This file adds the content from the Unearthed Arcana: Barbarian Path of the Wild Soul and Monk: Way of the Astral Self Paths article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:WA"] = {
	name : "Unearthed Arcana: WildAstral",
	abbreviation : "UA:WA",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2019/dnd/downloads/UA-WildAstral.pdf",
	date : "2019/08/15"
};

// A three subclasses for the Barbarian
AddSubClass("barbarian", "wild soul", {
	regExpSearch : /^(?=.*wild)(?=.*soul).*$/i,
	subname : "Path of the Wild Soul",
	source : ["UA:WA", 1],
	fullname : "Wild Soul",
	features : {
		"subclassfeature3" : {
			name : "Lingering Magic",
			source : ["UA:WA", 1],
			minlevel : 3,
			description : "\n   " + "I can cast detect magic without using a spell slot or components." + "\n   " + "I can use this feature a number of (Con) mod(min 1) times" + "\n   " + "I regain all expended uses on a long rest",
			action : ["action", ""]
		},
		"subclassfeature3b" : {
			name : "Wild Surge",
			source : ["UA:WA", 1],
			minlevel : 3,
			description : "\n   " + "When I enter rage, roll 1d8 on Wild Surge table to determine effect." + "\n   " + "1) Each creature within 30ft takes 1d10 necrotic. I gain the total as temporary hp." + "\n   " + "2) Teleport up to 20ft to an unoccupied space I can see. Until rage ends, I can activate this effect each turn using a bonus action." + "\n   " + "3) 1d4 spirits conjured in unoccupied spaces within 30ft and fly in random direction. At end of turn they explode and each creature in 5 foot radius makes (Dex) save for takes 2d8 force damage." + "\n   " + "4) Arcane shield. +2 AC and when hit by a creature within 10ft, they take force damage equal to(Con) mod." + "\n   " + "5) Plant life grows around me to create difficult terrain within 10ft." + "\n   " + "6) Each creature within 30ft makes (Wis) save or gets disadvantage on attack rolls against me until start of next turn." + "\n   " + "7) Until rage ends, weapon deals psychic instead of(bludgeoning, slashing, or piercing) and gains light and thrown properties(20/60). If dropped or thrown, weapon reappears in hand at end of turn." + "\n   " + "8) Beam of light lances from chest. 5ft wide, 60ft long, each creature makes a (Con) save or take 2d8 radiant damage and be blinded until start of my next turn.",
			action : ["action", " (on Rage)"]
		},
		"subclassfeature6" : {
			name : "Magical Reserves",
			source : ["UA:WA", 1],
			minlevel : 6,
			description : "\n   " + "Roll 1d4. A touched creature can regain a spell slot of a level equal to number rolled." + "\n   " + "If the creature cannot recover a spell slot of that level, they instead gain temporary hitpoints equal to 5 times the number rolled." + "\n   " + "I also take 5 times the number rolled in force damage.",
			action : ["action", ""]
		},
		"subclassfeature10" : {
			name : "Arcane Rebuke",
			source : ["UA:WA", 1],
			minlevel : 10,
			description : "\n   " + "While raging, when a creature forces me to make a saving throw, I can use my reaction to deal 3d6 force damage",
			action : ["reaction", ""]
		},
		"subclassfeature14" : {
			name : "Chaotic Fury",
			source : ["UA:WA", 1],
			minlevel : 14,
			description : "\n   " + "While raging, I can re-roll on the Wild Surge table to replace current effect with new one",
			action : ["bonus action", "(in Rage)"]
		}
	}
});
AddSubClass("monk", "astral self", {
	regExpSearch : /^(?=.*astral)(?=.*self).*$/i,
	subname : "Way of the Astral Self",
	source : ["UA:WA", 2],
	fullname : "Astral Self",
	features : {
		"subclassfeature3" : {
			name : "Arms of the Astral Self",
			source : ["UA:WA", 2],
			minlevel : 3,
			description : "\n   " + "[2 ki points] I can summon Astral Arms for 10min for the following benefits." + "\n   " + " - I can use my wisdom modifier when making strength checks and strength saving throws." + "\n   " + " - The arms are monk weapons with a 10ft reach. I can use (Wis) modified instead of (Str) or (Dex) for attack and damage rolls."  + "\n   " + " - I get an extra attack when I attack with my astral arms(as a bonus action)",
			action : ["bonus action", ""]
		},
		"subclassfeature6" : {
			name : "Visage of the Astral Self",
			source : ["UA:WA", 2],
			minlevel : 6,
			description : "\n   " + "[1 ki point] I can summon the visage of my Astral self for 10min for the following benefits." + "\n   " + "- I have advantage on (Wis) Insight, and (Cha) Intimidation checks" + "\n   " + "- I can see normally in darkness, both magical and non magical, for 120ft.",
			action : ["bonus action", ""]
		},
		"subclassfeature10" : {
			name : "Awakening of the Astral Self",
			source : ["UA:WA", 2],
			minlevel : 10,
			description : "\n   " + "If I have both my arms and visage summoned, I gain the following benefits." + "\n   " + "- I can deflect 1d10 + (Wis) mod + monk level when taking acid, cold, fire, lightning, or force damage." + "\n   " + "- Once a turn, my astral arms can deal extra damage equal to my martial arts die." + "\n   " + "I can speak through my visage directly to a single creature" + "\n   " + "I can speak through my visage with an amplified voice(600ft)"
		},
		"subclassfeature17" : {
			name : "Complete Astral Self",
			source : ["UA:WA", 2],
			minlevel : 17,
			description : "\n   " + "[10 ki points] I can summon my complete Astral Form(arms, visage, body) for 10min, for the following benefits." + "\n   " + "- I gain +2 AC while not incapacitated." + "\n   " + "- I can attack 3 times when I use the extra attack feature to attack twice. The third attack is with astral arms" + "\n   " + "- When a creature within 10 feet is reduced to 0 hp, I can use reaction to regain ki points equal to (Wid) modifier(min 1).",
			action : ["bonus action", ""]
		}
	}
});
