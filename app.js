document.addEventListener('alpine:init',() => {
	app = {
		'menus':['values','team','portfolio','contact'],
		'valTechtitle':['securpriori','perfoKey','simplang','designGeni'],
		'valTechdescr':['securprioridescr','perfoKeyeDescr','simplangDescr','designGeniDesc'],
		'codeonlytitleT':['comprehensKey','codeuniversal','dowhatulov'],
		'codeonlydescrT':['comprehensKeyDesc','codeuniversaldescr','dowhatulovdescr'],
		'icons':['fas fa-code','fas fa-user-friends', 'far fa-envelope', 'fas fa-phone'],
		'Images':['./image/code.jpg','./image/code1.jpg','./image/code2.jpg'],
		'Fafa':[ 'fa fa-key','fas fa-rocket','fas fa-box-open','fas fa-palette'],
		'backIcon':['#fcec58','#468bcd','#ff5555','#7dd147'],
		'lang':"en",
		'dict':{
			'en':{
				'lang':"English",
				'values':"Values",                            
				'team':"Team",                            
				'portfolio':"Portfolio",                            
				'contact':"Contact",
				'techvalue':"Our technical values",
				'securpriori':"Security is our priority",    
				'securprioridescr':"Behind every application we work on,there is a community of experts who handle security issues. We take the security of your data seriously.", 
				'perfoKey':"Performance is the key",
				'perfoKeyeDescr':"Nobody likes a long loading time. We optimize each resource to save you time with super-fast applications",
				'simplang':"Simplicity is our language",
				'simplangDescr':"We solve complex problems by using a simple and powerful solution.Simple != Easy",
				'designGeni':"Awesome design is our pleasure",
				'designGeniDesc':"Why give an unattractive visual when you can do the exact opposite? We're cool, smart , flex and we love awesome design",
				'codeonlytitle':"code only isn't enough",
				'comprehensKey':"Comprehension is the key",
				'comprehensKeyDesc':"On keyboard we write couple lines of </code>  but in reality we solve problems.The better understanding of problem affects the relevance of the solution.Comprehension is our focus.",	
				'codeuniversal':"Code is universal, Users are different",
				'codeuniversaldescr':"We use the same programming languages, the same framework, libraries and tools but we solve for different customers with different target.we customize as needed.",
				'dowhatulov':"Do what you love, love what you do",
				'dowhatulovdescr':"Every member in the team has passed more than 5 years studying and working on different projects just for fun. For us, programming is far of the way to earn money, programming is the part of our life, It's our happiness.",
				'handwithudev':"Who we are without   community? We work hand in hand with UDEV TEAM.Do what you love, love what you do",
				'moreinfos':"More infos about UDEV Team",
				'titlequipe':"Our team",
				'titlecontact':"Contact-Us"	
				},
				'fr':{
				'lang':"Français",
				'values':"Valeurs",                            
				'team':"Equipe",                            
				'portfolio':"Portfolio",                            
				'contact':"Contact", 
				'techvalue':"Nos valeurs techniques",
				'securpriori':"La sécurité est notre priorité", 
				'securprioridescr':"Nous résolvons des problèmes complexes en utilisant une solution simple et puissante.",
				'perfoKey':"La performance est la clé",
				'perfoKeyeDescr':"Personne n'aime un long temps de chargement. Nous optimisons chaque ressource pour vous faire gagner du temps avec des applications ultra-rapides",
				'simplang':"La simplicité est notre langage",
				'simplangDescr':"Pourquoi donner un visuel peu attractif quand on peut faire exactement le contraire ? Nous sommes cool, intelligents, flexibles et nous aimons le design génial.Simple != Facile",
				'designGeni':"Un design génial est notre plaisir",
				'designGeniDesc':"Pourquoi donner un visuel peu attractif quand on peut faire exactement le contraire ? Nous sommes cool, intelligents, flexibles et nous aimons le design génial",
				'codeonlytitle':"le code seul ne suffit pas",
				'comprehensKey':"La compréhension est la clé",
				'comprehensKeyDesc':"Au clavier, nous écrivons quelques lignes de mais en réalité, nous résolvons des problèmes. Une meilleure compréhension du problème affecte la pertinence de la solution. La compréhension est notre objectif.",	
				'codeuniversal':"Le code est universel, les utilisateurs sont différents",
				'codeuniversaldescr':"Nous utilisons les mêmes langages de programmation, le même framework, les mêmes bibliothèques et outils mais nous résolvons pour différents clients avec des cibles différentes. nous personnalisons au besoin.",
				'dowhatulov':"Fais ce que tu aimes, aime ce que tu fais",
				'dowhatulovdescr':"Chaque membre de l'équipe a passé plus de 5 ans à étudier et à travailler sur différents projets juste pour le plaisir. Pour nous, la programmation est loin d'être le moyen de gagner de l'argent, la programmation fait partie de notre vie, c'est notre bonheur.",
				'handwithudev':"Qui sommes-nous sans communauté ? Nous travaillons main dans la main avec UDEV TEAM.",
				'moreinfos':"infos sur UDEV Team",
				'titlequipe':"Notre equipe",
				'titlecontact':"Contact-Nous"	

			},
			'rn':{
				'lang':"Kirundi",
				'values':"Ibitugize",                            
				'team':"Umuryango wacu",                            
				'portfolio':"Ibikorwa ",                            
				'contact':"Turondere",
				'techvalue':"Imyitwarariko yacu",
				'securpriori':"Gukinga niwo mwitwarariko wacu",
				'securprioridescr':"Kuri application iyo ariyo yose dukorako, haba hari abahinga muvyo gukinga. Turafatana uburemere ibijanye no gukingira ivyo muyakoreramwo", 
				'perfoKey':"Kworosha nirwo rurimi rwacu",
				'perfoKeyeDescr':"Ntanumwe akunda ivyikwega. Mugucungura umwanya, turagabanya uburemere bw'akantu kose kagize application kugira yuguruke bukwi na bukwi.",
				'simplang':"Kworosha nirwo rurimi rwacu",
				'simplangDescr':"Dukemura ibibazo vy'inganzamarumpu mugukora application zoroshe gukoresha kandi zikwije vyose.",
				'designGeni':"Dukunda ibintu bisa neza",
				'designGeniDesc':"Kuki twotonga ibitabereye ijisho kandi bishoboka ko kudokora igihushane cavyo? turi neza kandi dukunda ibibereye ijisho.",
				'codeonlytitle':"Code ubwayo ntihagije",
				'comprehensKey':"Gutahura niryo shimikiro ryacu ",
				'comprehensKeyDesc':"kuri clavier twandika imirongo myinshi cane gose ya </code> ariko mubuzima bwa misi yose dukemura ibibazo. Gutegera neza ibitagenda neza bituma dutora inyishu nziza y'ikibazo.Twibanda cane mugutegera.",	
				'codeuniversal':"kuri clavier twandika imirongo myinshi cane gose ya </code> ariko mubuzima bwa misi yose dukemura ibibazo. Gutegera neza ibitagenda neza bituma dutora inyishu nziza y'ikibazo.Twibanda cane mugutegera.",
				'codeuniversaldescr':"Dukoresha langages de programation zimwe ariko dukemura ibibazo bitandukanye kubakiriya bafise intego n'imigambi bitandukanye.Duhinyanyura ivyo dukora twisunze ibikenewe kuri umwumwe wese.",
				'dowhatulov':"Dukora ivyo dukunda, Dukunda ivyo dukora",
				'dowhatulovdescr':"Kira munyamuryango wa HOGI yamaze imyaka ireka 5 yiga kandi yongera akora kumigambi itandukanye kubwo kwishimisha. Kuri twebwe, kwandika code birengeye cane inzira yo guca amafaranga, gu programma bigize ubuzima bwacu bwa misi yose, n'umunezero wacu.",
				'handwithudev':"Turi bande ata muryango? Dukorana ubudahengeshanya na UDEV Team.",
				'moreinfos':"Menya vyinshi kuri UDEV Team.",
				'titlequipe':"Umuryango wacu",
				'titlecontact':"Turondere"	                              
			}
	
		},
		'getFlags':function(lang){
			if(lang == "en"){
				return './image/ENGLISH.jpg'
			}
			if(lang == "fr"){
				return './image/FRENCH.jpg'
			} 
				return './image/KIRUNDI.jpg'
		}
	}
})