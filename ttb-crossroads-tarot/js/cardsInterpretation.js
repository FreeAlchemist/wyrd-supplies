var interpretation = {
	hearts : {
		'1' : {			
			suit : '♥',
			name : '1',
			station : {
				skill:'Shotgun',
				fate:'and you will hear the whispers beyond.',
				birth:'Convict',
				text:'While many serve their time and then find more traditional work, some convicts are sentenced to labor camps. When this happens, their children often go with them into their new life.'},
			west : {
				fate:'At last you give yourself up to the pyres',
				text:'-3/0/0/+3'},
			north : {
				fate:'but the people in the windows will greet you with terror.',
				text:'3,2,1,1,1,1'},
			east : {
				fate:'you will make dust of the ram\'s horns',
				text:'-3/0/0/+3'},
			south : {
				fate:'When the accounting passes you by',
				text:'3,2,1,1,1,1'},
		},
		'2' : {
			suit : '♥',
			name : '2',
			station : {
				skill:'Pneumatic',
				fate:'and you will forget yourself.',
				birth:'Indentured Servant',
				text:'It is an unfortunate parent who must decide between debtor’s prison and indentured servitude. Working off a deep debt, however, keeps them close to their family and out of irons.'},
			west : {
				fate:'Again, you turn the wheel and move the stone',
				text:'-3/0/+1/+2'},
			north : {
				fate:'for the gloom will deny that it knows you.',
				text:'3,2,1,1,1,1'},
			east : {
				fate:'you will be bold when it is needed most',
				text:'-3/0/+1/+2'},
			south : {
				fate:'If you ignore the rope in the trees',
				text:'3,2,1,1,1,1'},
		},
		'3' : {
			suit : '♥',
			name : '3',
			station : {
				skill:'Labor',
				fate:'and you will kiss the crown.',
				birth:'Laborer',
				text:'Common laborers work long hours and are often joined by their immediate family. It is a hard life filled with drudgery and aching muscles, and many families find dignity in the work… but some don’t.'},
			west : {
				fate:'Hence, the dried lands are watered with the blood of sinners',
				text:'-2/-1/+1/+2'},
			north : {
				fate:'but fear the shadow cast by no man.',
				text:'3,2,1,1,1,1'},
			east : {
				fate:'your journey will never begin',
				text:'-2/-1/+1/+2'},
			south : {
				fate:'When the seventh gifts despair',
				text:'3,2,1,1,1,1'},
		},
		'4' : {
			suit : '♥',
			name : '4',
			station : {
				skill:'Stealth',
				fate:'and you cleave the sky in vain.',
				birth:'Servant',
				text:'Your family served a much wealthier family as maids and field labor. Your youth was spent working, playing with the other servant children, and likely being terrorized by the children of your parent’s master.'},
			west : {
				fate:'Then, the ravens bless your children',
				text:'-2/-1/+1/+2'},
			north : {
				fate:'and the sullen stars align for you.',
				text:'3,2,2,1,1'},
			east : {
				fate:'you will wait when you should act',
				text:'-2/-1/+1/+2'},
			south : {
				fate:'After the quiet of a thousand nights falls upon your ears',
				text:'3,2,2,1,1'},
		},
		'5' : {
			suit : '♥',
			name : '5',
			station : {
				skill:'Barter',
				fate:'and you will leave a twig to hold the sand.',
				birth:'Shopkeep',
				text:'Ownership of a shop (of any kind) kept your family fed. Your parents were likely respected in the local community, and your upbringing comfortable.'},
			west : {
				fate:'At last, you will sacrifice her on the altars of desperation',
				text:'-2/0/0/+2'},
			north : {
				fate:'but welcome the song of frozen winter.',
				text:'3,2,2,1,1'},
			east : {
				fate:'an idea will betray you',
				text:'-2/0/0/+2'},
			south : {
				fate:'As upon your back you carry the brightest star into the shadows',
				text:'3,2,2,1,1'},
		},
		'6' : {
			suit : '♥',
			name : '6',
			station : {
				skill:'Crafting: Blacksmithing',
				fate:'and she will turn from you, forever.',
				birth:'Blacksmith',
				text:'Iron working is a valuable but grueling profession. Your youth was spent helping a parent on the forge, either in a large city, town, or even on a large ranch.'},
			west : {
				fate:'You will hold the myth of life in your hands',
				text:'-2/0/0/+2'},
			north : {
				fate:'as the gathering mocks your gift.',
				text:'3,2,2,1,1'},
			east : {
				fate:'you will be the uninvited',
				text:'-2/0/0/+2'},
			south : {
				fate:'Once you rise from the ashes',
				text:'3,2,2,1,1'},
		},
		'7' : {
			suit : '♥',
			name : '7',
			station : {
				skill:'Academic: Literacy',
				fate:'and the arches will crumble.',
				birth:'Reporter',
				text:'One (or both) of your parents were journalists, investigating powerful individuals, or strange events. From time to time, this might have put them (and your family) in harm’s way.'},
			west : {
				fate:'He tightens the strings and tugs at the rivets',
				text:'-2/0/+1/+1'},
			north : {
				fate:'for the coldest court will bow to their king.',
				text:'3,2,2,2'},
			east : {
				fate:'you will find the answer you cannot speak',
				text:'-2/0/+1/+1'},
			south : {
				fate:'When your shadow is cast upon the wall',
				text:'3,2,2,2'},
		},
		'8' : {
			suit : '♥',
			name : '8',
			station : {
				skill:'Track',
				fate:'and he will be paid his price.',
				birth:'Trapper',
				text:'Your parents tracked animals for their pelts, and laid traps out in the wilderness. This rugged lifestyle taught you a lot about the wilderness.'},
			west : {
				fate:'The games you play are more deadly than she wishes',
				text:'-2/0/+1/+1'},
			north : {
				fate:'and the moon shines upon the forest but not your path.',
				text:'3,2,2,2'},
			east : {
				fate:'the melody will be lost within the gutters',
				text:'-2/0/+1/+1'},
			south : {
				fate:'After the echoes of your laughter die',
				text:'3,2,2,2'},
		},
		'9' : {
			suit : '♥',
			name : '9',
			station : {
				skill:'Academic: Bureaucracy',
				fate:'and you take the last step.',
				birth:'Barrister',
				text:'The laws are the cornerstone of civilization, and the barristers are those who argue the law. Whether in a court room or a board room, one of your parents worked with the law.'},
			west : {
				fate:'The other place beckons with the voice of oblivion',
				text:'-1/-1/0/+2'},
			north : {
				fate:'and beware the red letter.',
				text:'3,2,2,2'},
			east : {
				fate:'your shame will be as beaten as the hooves',
				text:'-1/-1/0/+2'},
			south : {
				fate:'If you beware oblivion’s hand',
				text:'3,2,2,2'},
		},
		'10' : {
			suit : '♥',
			name : '10',
			station : {
				skill:'Pugilism',
				fate:'and it dreams of you.',
				birth:'Enforcer',
				text:'Whether serving as constable for a town or city, or as a lawman for a government body, enforcers make sure that the masses obey the rules. This often leads to a very strict parenting style.'},
			west : {
				fate:'Watch them as they fall one by one to the ground',
				text:'-1/-1/0/+2'},
			north : {
				fate:'but the fear of tomorrow will be drowned in the sorrow of yesterday.',
				text:'3,3,1,1'},
			east : {
				fate:'the cauldron-spawn will crawl to your birth',
				text:'-1/-1/0/+2'},
			south : {
				fate:'When you run when you should walk',
				text:'3,3,1,1'},
		},
		'11' : {
			suit : '♥',
			name : '11',
			station : {
				skill:'Leadership',
				fate:'and she is part gore and part kin.',
				birth:'Administrator',
				text:'One or both of your parents worked for affluent and powerful interests that required a firm hand to oversee operations on sites far removed from their seat of power.'},
			west : {
				fate:'The shards you pass through leave a bloody trail',
				text:'-2/-1/0/+3'},
			north : {
				fate:'and not but ashes upon your tongue.',
				text:'3,3,1,1'},
			east : {
				fate:'you will be the grape that sours the wine',
				text:'-2/-1/0/+3'},
			south : {
				fate:'As you walk backwards through the knife',
				text:'3,3,1,1'},
		},
		'12' : {
			suit : '♥',
			name : '12',
			station : {
				skill:'Teach',
				fate:'and the motion stutters and shudders.',
				birth:'Academic',
				text:'Your parents were part of the intellectual elite. This could include university professors, research scientists, or renowned scholars on a specific topic.'},
			west : {
				fate:'Time is an illusion of the fading light and the feast counts twice',
				text:'-2/-1/0/+3'},
			north : {
				fate:'for you will know that a long life is a hundred curses.',
				text:'3,3,1,1'},
			east : {
				fate:'you will return with the balm for all ills',
				text:'-2/-1/0/+3'},
			south : {
				fate:'If you choose to see no evil in the chiming of the hour',
				text:'3,3,1,1'},
		},
		'13' : {
			suit : '♥',
			name : '13',
			station : {
				skill:'Pistols',
				fate:'and he will watch you drink the venom.',
				birth:'Ortega',
				text:'You belong to the extended family of Neverborn Hunters, known as the Ortegas. You spent your childhood learning to spot the signs of their influence and how to work closely with the rest of your family on a hunt.'},
			west : {
				fate:'The circle will bind as well as the grave',
				text:'-1/-1/-1/+3'},
			north : {
				fate:'and she knows.',
				text:'3,3,2'},
			east : {
				fate:'you will invite him in',
				text:'-1/-1/-1/+3'},
			south : {
				fate:'When you sup upon your pride and dance with cadavers',
				text:'3,3,2'},
		}
	},
	clubs : {
		'1' : {
			suit : '♣',
			name : '1',
			station : {
				skill:'Explosives',
				fate:'and you cannot remove the red.',
				birth:'Miner',
				text:'Powerful mining operations love to employ families, as the children are able to get into tight spots that are impossible for more mature laborers. If you are lucky, you might have even survived childhood with only a few scars.'},
			west : {
				fate:'The grave spirit will call to you on a spring song',
				text:'-3/0/0/+3'},
			north : {
				fate:'but your misfortune will not be your own.',
				text:'3,2,1,1,1,1'},
			east : {
				fate:'the wondering hour will settle on your hearth',
				text:'-3/0/0/+3'},
			south : {
				fate:'When the gears turn upon the story best forgotten',
				text:'3,2,1,1,1,1'},
		},
		'2' : {
			suit : '♣',
			name : '2',
			station : {
				skill:'Crafting: Homesteading',
				fate:'and it will herald the sinister revolution.',
				birth:'Carpenter',
				text:'Like a blacksmith, a skilled carpenter is imperative to the workings of any civilization. Furniture and buildings are often best crafted by a dedicated professional (and his apprentice).'},
			west : {
				fate:'The end will find him in the garden',
				text:'-3/0/+1/+2'},
			north : {
				fate:'as the witless man fears the child.',
				text:'3,2,1,1,1,1'},
			east : {
				fate:'she will sit alone amongst your misery',
				text:'-3/0/+1/+2'},
			south : {
				fate:'Once your silver thread spends like golden promises',
				text:'3,2,1,1,1,1'},
		},
		'3' : {
			suit : '♣',
			name : '3',
			station : {
				skill:'Enchanting',
				fate:'and she will mourn you all of her days.',
				birth:'Magewright',
				text:'Not every magical Talent finds the powers of the universe at their fingers. Instead, one of your parents was a minor magical Talent, put to work in one of the Guild’s enchanting factories hammering out trinkets.'},
			west : {
				fate:'Pale faced the innocent will drown in bile',
				text:'-2/-1/+1/+2'},
			north : {
				fate:'for the hunter shall lay down to sleep upon the lilies.',
				text:'3,2,1,1,1,1'},
			east : {
				fate:'you will refuse the call',
				text:'-2/-1/+1/+2'},
			south : {
				fate:'If you refuse the hero’s call',
				text:'3,2,1,1,1,1'},
		},
		'4' : {
			suit : '♣',
			name : '4',
			station : {
				skill:'Academic: Mathematics',
				fate:'and the torch will sputter into darkness.',
				birth:'Accountant',
				text:'Your family earned its living in the financial area, either working for a bank, or serving as an analyst for a wealthy patron.'},
			west : {
				fate:'It is, and it grows',
				text:'-2/-1/+1/+2'},
			north : {
				fate:'and the forgotten shall be recalled.',
				text:'3,2,2,1,1'},
			east : {
				fate:'an exception will corrupt the rule',
				text:'-2/-1/+1/+2'},
			south : {
				fate:'After the branch snaps beneath your sorrow',
				text:'3,2,2,1,1'},
		},
		'5' : {
			suit : '♣',
			name : '5',
			station : {
				skill:'Crafting: Printing',
				fate:'and he will call the Bastille into the break.',
				birth:'Bookbinder',
				text:'Most often found in urban centers, the Bookbinder can often be found with ink stained fingers and a tired look in his eyes. The family his work supports, however, often live comfortable lives.'},
			west : {
				fate:'Step through the looking glass and into the fable',
				text:'-2/0/0/+2'},
			north : {
				fate:'but his smile shall never fade.',
				text:'3,2,2,1,1'},
			east : {
				fate:'your dance will draw the sleeping eye',
				text:'-2/0/0/+2'},
			south : {
				fate:'When you wake from the dream of ancestors',
				text:'3,2,2,1,1'},
		},
		'6' : {
			suit : '♣',
			name : '6',
			station : {
				skill:'Melee',
				fate:'and you will thrice damn him.',
				birth:'Muscle',
				text:'Powerful business concerns, as well as criminal organizations, require people with brutal qualities to impose their will. The home lives of these savage people are probably best left undocumented.'},
			west : {
				fate:'The dogs in the vineyard bellow for you to hunt',
				text:'-2/0/0/+2'},
			north : {
				fate:'as the jester dances where he will.',
				text:'3,2,2,1,1'},
			east : {
				fate:'the mud flows like a river into the sky',
				text:'-2/0/0/+2'},
			south : {
				fate:'As your hands of flesh touch feet of steel',
				text:'3,2,2,1,1'},
		},
		'7' : {
			suit : '♣',
			name : '7',
			station : {
				skill:'Notice',
				fate:'and it cackles from the locket.',
				birth:'Caretaker',
				text:'You had a calm childhood spent tending to the gardens and homes of the affluent with one of your parents, who may have been a gardener or butler.'},
			west : {
				fate:'And it is only the penitent who shall tread the path',
				text:'-2/0/+1/+1'},
			north : {
				fate:'for your secrets are not yours alone.',
				text:'3,2,2,2'},
			east : {
				fate:'he will know you not by your rage, but by your temperance',
				text:'-2/0/+1/+1'},
			south : {
				fate:'When you’ve traded away your beloved',
				text:'3,2,2,2'},
		},
		'8' : {
			suit : '♣',
			name : '8',
			station : {
				skill:'Crafting: Alchemistry',
				fate:'and she bears the fruit of your absolution.',
				birth:'Alchemist',
				text:'While many herbal remedies can be gathered without much special preparation, your family contained at least one Talented alchemist who made a comfortable living creating more complex medicines.'},
			west : {
				fate:'The empty mind will know the lie from the judgment',
				text:'-2/0/+1/+1'},
			north : {
				fate:'and the page turned is empty of promises.',
				text:'3,2,2,2'},
			east : {
				fate:'she must lurk within your joyless paradise',
				text:'-2/0/+1/+1'},
			south : {
				fate:'Once your strangers travel in three',
				text:'3,2,2,2'},
		},
		'9' : {
			suit : '♣',
			name : '9',
			station : {
				skill:'Acrobatics',
				fate:'and the leaf will sink as the stone floats.',
				birth:'Performer',
				text:'Whether on stage in a major urban center, or on the road with a troupe, your family made its living singing, dancing, acting, and performing entertaining feats.'},
			west : {
				fate:'The reflection in the water shows the truth',
				text:'-1/-1/0/+2'},
			north : {
				fate:'but heed the cripple who speaks for the coin.',
				text:'3,2,2,2'},
			east : {
				fate:'the gloom will know you as a brother',
				text:'-1/-1/0/+2'},
			south : {
				fate:'When you open the dead man’s eyes',
				text:'3,2,2,2'},
		},
		'10' : {
			suit : '♣',
			name : '10',
			station : {
				skill:'Intimidate',
				fate:'and he is to you as the hermit is to the forest.',
				birth:'Madame',
				text:'Every urban center is home to a brothel or ten. Your guardian was in charge of one of these houses, and you spent your youth surrounded by the wealthy and their concubines.'},
			west : {
				fate:'The end’s a miracle that you dare to dream',
				text:'-1/-1/0/+2'},
			north : {
				fate:'as the dead rise by your fist.',
				text:'3,3,1,1'},
			east : {
				fate:'your eyes will be open unto the Abyss',
				text:'-1/-1/0/+2'},
			south : {
				fate:'After you have seen the forever',
				text:'3,3,1,1'},
		},
		'11' : {
			suit : '♣',
			name : '11',
			station : {
				skill:'Academic: Engineering',
				fate:'and you will drive the chariot of winter.',
				birth:'Engineer',
				text:'Society needs those who can design massive work houses, as well as clockwork devices. An engineer is often well off, and can afford to have educated children.'},
			west : {
				fate:'Search for the lion of the valley',
				text:'-2/-1/0/+3'},
			north : {
				fate:'for you will be reborn in soot and flame.',
				text:'3,3,1,1'},
			east : {
				fate:'you will fall from grace',
				text:'-2/-1/0/+3'},
			south : {
				fate:'Once you cross the bloody threshold',
				text:'3,3,1,1'},
		},
		'12' : {
			suit : '♣',
			name : '12',
			station : {
				skill:'Crafting: Artefacting',
				fate:'and it is the Emperor who will bring the gift.',
				birth:'Mad Scientist',
				text:'To say that one of your parents was eccentric is an understatement bordering on criminal mischaracterization. You spent your childhood looking at odd machinery and listening to esoteric rants on a variety of “educational topics.”'},
			west : {
				fate:'Lunatics fear where you will stalk',
				text:'-2/-1/0/+3'},
			north : {
				fate:'but you know this has all happened before.',
				text:'3,3,1,1'},
			east : {
				fate:'he will trust your falsehoods',
				text:'-2/-1/0/+3'},
			south : {
				fate:'If justice finds you guilty of the only crime',
				text:'3,3,1,1'},
		},
		'13' : {
			suit : '♣',
			name : '13',
			station : {
				skill:'Sorcery',
				fate:'and she will kiss the hanged man’s lips.',
				birth:'Arcanist',
				text:'Those who are capable of performing feats of magic must often keep their skills a secret, however your family had enough influence and power to practice their arts in only “legal secrecy.”'},
			west : {
				fate:'Worlds of marble turn flesh again',
				text:'-1/-1/-1/+3'},
			north : {
				fate:'and the lost will drag you into the depths.',
				text:'3,3,2'},
			east : {
				fate:'she strikes with daggers battered from your shield',
				text:'-1/-1/-1/+3'},
			south : {
				fate:'As you walk the lonely road',
				text:'3,3,2'},
		}
	},
	spades : {
		'1' : {
			suit : '♠',
			name : '1',
			station : {
				skill:'Toughness',
				fate:'and you will call upon the crow.',
				birth:'Undead',
				text:'Just because your parents were dead doesn’t mean they didn’t love you. Your childhood was odd, to say the least, as you worked hard to keep your family’s secret.'},
			west : {
				fate:'Denying the battle will win the war',
				text:'-3/0/0/+3'},
			north : {
				fate:'for you must dredge the waters till the just give up the dead.',
				text:'3,2,1,1,1,1'},
			east : {
				fate:'you will not be deceived by the ghosts of the tower',
				text:'-3/0/0/+3'},
			south : {
				fate:'Once the first has been the last and the last has been the first',
				text:'3,2,1,1,1,1'},
		},
		'2' : {
			suit : '♠',
			name : '2',
			station : {
				skill:'Evade',
				fate:'and the end will come to all.',
				birth:'Orphan',
				text:'With no family to speak of, you spent your childhood in the children’s work houses of a major city or dodging the truancy officials on the streets.'},
			west : {
				fate:'The mask donned for peace will blind you to bloodshed',
				text:'-3/0/+1/+2'},
			north : {
				fate:'and the wolf will howl at the door.',
				text:'3,2,1,1,1,1'},
			east : {
				fate:'the sleeper dreams not of tomorrow, but of you',
				text:'-3/0/+1/+2'},
			south : {
				fate:'When you accept your fates on the river',
				text:'3,2,1,1,1,1'},
		},
		'3' : {
			suit : '♠',
			name : '3',
			station : {
				skill:'Prestidigitation',
				fate:'and you will be maimed.',
				birth:'Dabbler',
				text:'Your family secretly dabbled in the magical arts, trading dusty tomes with dangerous people. The search for esoteric power, however, was often its own reward.'},
			west : {
				fate:'The song will end beyond the thrice knocked wall',
				text:'-2/-1/+1/+2'},
			north : {
				fate:'but your loss will be what you would discard.',
				text:'3,2,1,1,1,1'},
			east : {
				fate:'you will be reborn of flesh and redemption',
				text:'-2/-1/+1/+2'},
			south : {
				fate:'If you open the gates of wonder in the wall of lies',
				text:'3,2,1,1,1,1'},
		},
		'4' : {
			suit : '♠',
			name : '4',
			station : {
				skill:'Farm',
				fate:'and the mage’s knee bends before your river.',
				birth:'Farmer',
				text:'A small farm was the backdrop to your youth. You lived your life by the seasons and worked the land with your family.'},
			west : {
				fate:'The chime of your blunder will ring through the village',
				text:'-2/-1/+1/+2'},
			north : {
				fate:'as you begin, so shall you end.',
				text:'3,2,2,1,1'},
			east : {
				fate:'you will refuse to open the tome',
				text:'-2/-1/+1/+2'},
			south : {
				fate:'As you are unmourned by the father',
				text:'3,2,2,1,1'},
		},
		'5' : {
			suit : '♠',
			name : '5',
			station : {
				skill:'Necromancy',
				fate:'and the noose will snap like thunder.',
				birth:'Graverobber',
				text:'It’s amazing how much treasure rich people will just bury. Stealing from the dead is an easy means of garnering wealth, and kept your entire family fed and clothed.'},
			west : {
				fate:'Only in death will the pilgrim be free',
				text:'-2/0/0/+2'},
			north : {
				fate:'for your borrowing is also your lending.',
				text:'3,2,2,1,1'},
			east : {
				fate:'you will not heed the mentor',
				text:'-2/0/0/+2'},
			south : {
				fate:'After what is dead has died',
				text:'3,2,2,1,1'},
		},
		'6' : {
			suit : '♠',
			name : '6',
			station : {
				skill:'Stitching',
				fate:'and with a whisper you will sunder the walls.',
				birth:'Mortuary Staff',
				text:'Running a mortuary is often a family affair. Children are raised to take over the family business, a macabre but necessary trade for any city or town.'},
			west : {
				fate:'The sands of waters will make you clean',
				text:'-2/0/0/+2'},
			north : {
				fate:'and time waits for no man but you.',
				text:'3,2,2,1,1'},
			east : {
				fate:'an open door will let him into the red chapel',
				text:'-2/0/0/+2'},
			south : {
				fate:'Once your stains have been bound within',
				text:'3,2,2,1,1'},
		},
		'7' : {
			suit : '♠',
			name : '7',
			station : {
				skill:'Heavy Melee',
				fate:'and the penny paid is thrice earned.',
				birth:'Outlaw',
				text:'Roaming the wilderness between towns, your family made a living robbing travelers and evading the law.'},
			west : {
				fate:'Poison will be the cure',
				text:'-2/0/+1/+1'},
			north : {
				fate:'but love was left behind.',
				text:'3,2,2,2'},
			east : {
				fate:'your relic will rust and gleam',
				text:'-2/0/+1/+1'},
			south : {
				fate:'If you open the box best left closed',
				text:'3,2,2,2'},
		},
		'8' : {
			suit : '♠',
			name : '8',
			station : {
				skill:'Long Arms',
				fate:'and you will burn the oldest page.',
				birth:'Mercenary',
				text:'One (or both) of your parents was a sell-sword, providing military services to those who could afford it. You may have spent time staying with family while they were away, or you may have traveled with them.'},
			west : {
				fate:'The blind woman must lead the seeker',
				text:'-2/0/+1/+1'},
			north : {
				fate:'as the cloud drifts upon your rest.',
				text:'3,2,2,2'},
			east : {
				fate:'the sting of a single wasp will light the agony',
				text:'-2/0/+1/+1'},
			south : {
				fate:'When at last you look upon your beating heart',
				text:'3,2,2,2'},
		},
		'9' : {
			suit : '♠',
			name : '9',
			station : {
				skill:'Husbandry',
				fate:'and the crime that you hide will destroy you.',
				birth:'Veterinary',
				text:'A skilled veterinarian provides a good life for his family, as well as a trade education. You spent many summers helping birth calves or calming injured “patients” with soothing words.'},
			west : {
				fate:'The blood stained cheeks will weave the grasses',
				text:'-1/-1/0/+2'},
			north : {
				fate:'for not all treasures glimmer in the light.',
				text:'3,2,2,2'},
			east : {
				fate:'she will sicken to the blessed touch',
				text:'-1/-1/0/+2'},
			south : {
				fate:'As the hunter watches you swallow the maggots',
				text:'3,2,2,2'},
		},
		'10' : {
			suit : '♠',
			name : '10',
			station : {
				skill:'Centering',
				fate:'and you are a breeze unto the leaves.',
				birth:'Assassin',
				text:'A parent was often gone for long periods of time, sending money home to support the family. One day, you learned why.'},
			west : {
				fate:'Frozen hearths crawl along the stone',
				text:'-1/-1/0/+2'},
			north : {
				fate:'and the reaper walks the path alongside you.',
				text:'3,3,1,1'},
			east : {
				fate:'an anvil of the horde will ring with war',
				text:'-1/-1/0/+2'},
			south : {
				fate:'If you allow the hands to pull you down',
				text:'3,3,1,1'},
		},
		'11' : {
			suit : '♠',
			name : '11',
			station : {
				skill:'Academic: Art',
				fate:'and you will let your blood run cold.',
				birth:'Artist',
				text:'You likely spent your youth helping to mix paint, tighten canvas, or prepare stone for chiseling. Your family contained at least one practicing artist and you learned to appreciate, or at least understand, the world of an artist.'},
			west : {
				fate:'The leaves will whisper your name and shout your exodus',
				text:'-2/-1/0/+3'},
			north : {
				fate:'but as destiny grows weary of your follies.',
				text:'3,3,1,1'},
			east : {
				fate:'your chime of warning will be drowned in voices',
				text:'-2/-1/0/+3'},
			south : {
				fate:'After you bleed the coal from the bones',
				text:'3,3,1,1'},
		},
		'12' : {
			suit : '♠',
			name : '12',
			station : {
				skill:'Doctor',
				fate:'and you seek the sound of your last breath.',
				birth:'Medical',
				text:'One of your parents was a medical professional who tended to the needs of the sick and injured. Your family was likely well respected in your community.'},
			west : {
				fate:'All of the screams will lead you home',
				text:'-2/-1/0/+3'},
			north : {
				fate:'as wonders surround your waking echoes.',
				text:'3,3,1,1'},
			east : {
				fate:'the August will leave melancholy in everything after',
				text:'-2/-1/0/+3'},
			south : {
				fate:'As you strain to see through the high noon veil',
				text:'3,3,1,1'},
		},
		'13' : {
			suit : '♠',
			name : '13',
			station : {
				skill:'Harness Soulstone',
				fate:'and you stumble upon the line of life and death.',
				birth:'Resurrectionists',
				text:'Your parent or guardian was a Resurrectionist, one of the few necromancers able to ply their trade Earthside. Your childhood was spent hiding in sewers and fleeing summary execution.'},
			west : {
				fate:'The mute man must cry out for the wolf',
				text:'-1/-1/-1/+3'},
			north : {
				fate:'for the stars illuminate your path.',
				text:'3,3,2'},
			east : {
				fate:'you will shatter the stone',
				text:'-1/-1/-1/+3'},
			south : {
				fate:'When your death rattles at the door',
				text:'3,3,2'},
		}
	},
	diamonds : {
		'1' : {
			suit : '♦',
			name : '1',
			station : {
				skill:'Forgery',
				fate:'and obliteration’s touch will be gentle.',
				birth:'Hustler',
				text:'A short, or long, grift can easily make use of an entire family of trained hustlers. It is not uncommon for families of confident tricksters to play their trades both on the road and in large cities.'},
			west : {
				fate:'Spirits run sour in your veins',
				text:'-3/0/0/+3'},
			north : {
				fate:'and you will be repaid thrice for the sins you have sold.',
				text:'3,2,1,1,1,1'},
			east : {
				fate:'you will lead the children through the valley',
				text:'-3/0/0/+3'},
			south : {
				fate:'As the crimson writhes upon the belly of the fallen',
				text:'3,2,1,1,1,1'},
		},
		'2' : {
			suit : '♦',
			name : '2',
			station : {
				skill:'Bewitch',
				fate:'and your iron wishes to bleed.',
				birth:'Harlot',
				text:'The world’s oldest professions are said to be whore and parenthood. Technically, the two aren’t mutually exclusive, and some mothers or fathers turn to prostitution to keep their children fed.'},
			west : {
				fate:'She drinks only blood',
				text:'-3/0/+1/+2'},
			north : {
				fate:'but there are dragons here.',
				text:'3,2,1,1,1,1'},
			east : {
				fate:'he will shade your tired eyes, and wet your thirsty lips',
				text:'-3/0/+1/+2'},
			south : {
				fate:'If the autumn bridge shakes in your bellows',
				text:'3,2,1,1,1,1'},
		},
		'3' : {
			suit : '♦',
			name : '3',
			station : {
				skill:'Music',
				fate:'and yours is only yours.',
				birth:'Busker',
				text:'A close cousin to more traditional entertainers, buskers often work in groups (which included your family), entertaining people on crowded streets for tips.'},
			west : {
				fate:'Love knows not the heart but the bosom',
				text:'-2/-1/+1/+2'},
			north : {
				fate:'as the living wither from your grasp.',
				text:'3,2,1,1,1,1'},
			east : {
				fate:'she is unknown to your divine',
				text:'-2/-1/+1/+2'},
			south : {
				fate:'When your power begets your heresy',
				text:'3,2,1,1,1,1'},
		},
		'4' : {
			suit : '♦',
			name : '4',
			station : {
				skill:'Wilderness',
				fate:'and you will splinter the white door.',
				birth:'Settler',
				text:'Your family migrated out into the wilderness and forged a homestead for themselves. Direct and often stern, your parents were nevertheless independent and proud people who worked hard to instill those traits in you.'},
			west : {
				fate:'Escape is impossible, freedom is inevitable',
				text:'-2/-1/+1/+2'},
			north : {
				fate:'for new enemies are made from old allies.',
				text:'3,2,2,1,1'},
			east : {
				fate:'the dusk of a new sun will light your steps into the cave',
				text:'-2/-1/+1/+2'},
			south : {
				fate:'Once the nemesis has become the mother',
				text:'3,2,2,1,1'},
		},
		'5' : {
			suit : '♦',
			name : '5',
			station : {
				skill:'Pick Pocket',
				fate:'and you will fall.',
				birth:'Thief',
				text:'It is an uncommonly good thief who is never caught, but one of your parents managed just that. Perhaps the theft was untraceable (such as banking paperwork) or maybe they just left no trace.'},
			west : {
				fate:'The red woman will light the path',
				text:'-2/0/0/+2'},
			north : {
				fate:'and you will pan the gutter’s glitter.',
				text:'3,2,2,1,1'},
			east : {
				fate:'the peer of a thousand faces will weep',
				text:'-2/0/0/+2'},
			south : {
				fate:'As the watcher awaits your cry of vengeance',
				text:'3,2,2,1,1'},
		},
		'6' : {
			suit : '♦',
			name : '6',
			station : {
				skill:'Gambling',
				fate:'and the ordeal will be your own.',
				birth:'Sailor',
				text:'You travelled the seas, ferrying goods and passengers across the oceans with your parents. Whether they captained their own vessel, or were a respected member of the crew, your parents provided an exciting childhood with many new ports of call.'},
			west : {
				fate:'The reflection in the water shows the truth',
				text:'-2/0/0/+2'},
			north : {
				fate:'but the balance will teeter but not tumble.',
				text:'3,2,2,1,1'},
			east : {
				fate:'you will be asked three times, and deny each',
				text:'-2/0/0/+2'},
			south : {
				fate:'When you are a stranger to yourself',
				text:'3,2,2,1,1'},
		},
		'7' : {
			suit : '♦',
			name : '7',
			station : {
				skill:'Appraise',
				fate:'and you will unshackle the prisoner.',
				birth:'Hawker',
				text:'While general stores carry merchandise tailored to everyday life, a hawker provides immediate convenience and inexpensive (if shady) goods. These traveling peddlers might be perfectly fair merchants, but many work with street urchins to turn an even greater profit.'},
			west : {
				fate:'An abyss opens beneath your cradle',
				text:'-2/0/+1/+1'},
			north : {
				fate:'as your steed takes you into the jousts of war.',
				text:'3,2,2,2'},
			east : {
				fate:'you will take up the sword of your father',
				text:'-2/0/+1/+1'},
			south : {
				fate:'After the reaper has come for innocence',
				text:'3,2,2,2'},
		},
		'8' : {
			suit : '♦',
			name : '8',
			station : {
				skill:'Flexible',
				fate:'and the willful earns his due.',
				birth:'Coachman',
				text:'A skilled coachman is part of the house staff of any proper society family. You spent your childhood learning to drive a team of horses, as well as maintain a carriage.'},
			west : {
				fate:'They sing for laughter, tears, and tomorrow',
				text:'-2/0/+1/+1'},
			north : {
				fate:'for the silence brings inspiration at the door.',
				text:'3,2,2,2'},
			east : {
				fate:'you will refuse deserved love',
				text:'-2/0/+1/+1'},
			south : {
				fate:'Once your vendetta is nigh upon the mountains',
				text:'3,2,2,2'},
		},
		'9' : {
			suit : '♦',
			name : '9',
			station : {
				skill:'Lockpicking',
				fate:'and you will deal with the devil.',
				birth:'Burglar',
				text:'Entire families that specialize in robbing a place blind and then disappearing are not uncommon in urban environments. You began life as part of one such group.'},
			west : {
				fate:'The deaf man must hear the owl’s warning',
				text:'-1/-1/0/+2'},
			north : {
				fate:'and you will find the other lands on the day she dies.',
				text:'3,2,2,2'},
			east : {
				fate:'he chooses not you, but the downfall',
				text:'-1/-1/0/+2'},
			south : {
				fate:'When you choose between the quill or the blade',
				text:'3,2,2,2'},
		},
		'10' : {
			suit : '♦',
			name : '10',
			station : {
				skill:'Deceive',
				fate:'and you will murder the deserving.',
				birth:'Infiltrator',
				text:'A family of spies can wreak havoc on an industrial concern or a government. The Ten Thunders makes great use of infiltrators, and a family group is often the last to be suspected when the mayhem starts.'},
			west : {
				fate:'The water falls like envy, the river runs like rage',
				text:'-1/-1/0/+2'},
			north : {
				fate:'but leave your mark in many woes.',
				text:'3,3,1,1'},
			east : {
				fate:'an empty grave will fill with melody',
				text:'-1/-1/0/+2'},
			south : {
				fate:'After you don the crimson silks',
				text:'3,3,1,1'},
		},
		'11' : {
			suit : '♦',
			name : '11',
			station : {
				skill:'Convince',
				fate:'and it shoulders aside the guardian.',
				birth:'Sharp',
				text:'Whether on the road, or as a denizen of a single saloon, one of your parents made their living at the card tables, either as a dealer or as a player.'},
			west : {
				fate:'The grave did not hold her',
				text:'-2/-1/0/+3'},
			north : {
				fate:'but leave your mark in many woes.',
				text:'3,3,1,1'},
			east : {
				fate:'your ruination will hound your desperate exodus',
				text:'-2/-1/0/+3'},
			south : {
				fate:'If you know the dimming of the lanterns',
				text:'3,3,1,1'},
		},
		'12' : {
			suit : '♦',
			name : '12',
			station : {
				skill:'Leadership',
				fate:'and the eyes in the darkness change you.',
				birth:'Politician',
				text:'One of your parents was a powerful political figure, such as a senator, industrialist, or even proper royalty.'},
			west : {
				fate:'The halo slips around your throat like the noose',
				text:'-2/-1/0/+3'},
			north : {
				fate:'but leave your mark in many woes.',
				text:'3,3,1,1'},
			east : {
				fate:'the last man will speak the lies of your glory',
				text:'-2/-1/0/+3'},
			south : {
				fate:'As the bell tolls for judgment',
				text:'3,3,1,1'},
		},
		'13' : {
			suit : '♦',
			name : '13',
			station : {
				skill:'Martial Arts',
				fate:'and the Empress will know the traitor.',
				birth:'Ten Thunders',
				text:'Raised as part of a secretive clan of infiltrators, your family practiced martial techniques from the Three Kingdoms, as well as a variety of other traditions.'},
			west : {
				fate:'The sisters will show the way',
				text:'-1/-1/-1/+3'},
			north : {
				fate:'but you are safe beneath the ice.',
				text:'3,3,2'},
			east : {
				fate:'she will fear your iron, but not your thread',
				text:'-1/-1/-1/+3'},
			south : {
				fate:'When hope drowns in but three tears',
				text:'3,3,2'},
		}
	},
	jockers : {
		'14' : {
			suit : 'jockers R',
			name : '14',
			station : {
				skill:'Counter-Spelling',
				fate:'and you will die.',
				birth:'Neverborn Stolen',
				text:'It is unlikely that you knew anything was odd about your childhood spent romping with your Teddy through the nightmares of other children, until one day you were told your purpose, and released into the city of Malifaux to serve some dark means.'},
			west : {
				fate:'Then, in the middle of none, there was one',
				text:'-1/0/0/+1'},
			north : {
				fate:'and upon wings of fear you will approach the tower.',
				text:'4,2,1'},
			east : {
				fate:'your deeds will be undone before the thirteenth step',
				text:'-1/0/0/+1'},
			south : {
				fate:'Once you witness your golden sunset',
				text:'4,2,1'},
		},
		'0' : {
			suit : 'jockers B',
			name : '0',
			station : {
				skill:'Carouse',
				fate:'and you will be unmade.',
				birth:'Bayou Born',
				text:'You weren’t necessarily born on the Bayou, so much as stolen as a baby and raised by Gremlins. Maybe you escaped to civilization, or left when you came of age, but now you come to Malifaux not through the Breach, but from the swamp.'},
			west : {
				fate:'You will carry the seed of a thousand-fold damnations',
				text:'-3/+1/+1/+1'},
			north : {
				fate:'and your blood will run black.',
				text:'2,2,2,2,2,2'},
			east : {
				fate:'your every breath will be as your last',
				text:'-3/+1/+1/+1'},
			south : {
				fate:'Once your soul has been stained by silence',
				text:'2,2,2,2,2,2'},
		},
	}
}
