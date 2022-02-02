document.addEventListener('alpine:init',() => {
	app = {
		'menus':['values','team','portfolio','contact'],
		'valTechtitle':['securpriori','perfoKey','simplang','designGeni'],
		'valTechdescr':['securprioridescr','perfoKeyeDescr','simplangDescr','designGeniDesc'],
		'codeonlytitleT':['comprehensKey','codeuniversal','dowhatulov'],
		'codeonlydescrT':['comprehensKeyDesc','codeuniversaldescr','dowhatulovdescr'],
		'icons':['fas fa-code','fas fa-user-friends', 'far fa-envelope', 'fas fa-phone'],
		'Images':['./image/code1.jpg','./image/code.jpg','./image/code2.jpg'],
		'Fafa':[ 'fa fa-key','fas fa-rocket','fas fa-magic','fas fa-palette'],
		'backIcon':['#ffe161','#6592e6','#ff6666','#6dd870'],
		'valText':['#FFE161','#47B5ED','#FF9966','#2E8B57'],
		'lang':"en",
		'dict':{
			'en':{
				'lang':"English",
				'transf':"We transform ",
				'values':"Values",                            
				'team':"Team",                            
				'portfolio':"Portfolio",                            
				'contact':"Contact",
				'techvalue':"Our technical values",
				'securpriori':"Security is our priority",    
				'securprioridescr':"Behind every application we work on,there is a community of experts who handle security issues. We take the security of your data seriously", 
				'perfoKey':"Performance is the key",
				'perfoKeyeDescr':"Nobody likes a long loading time. We optimize each resource to save you time with super-fast applications",
				'simplang':"Simplicity is our language",
				'simplangDescr':"We solve complex problems by using a simple and powerful solution.Simple != Easy",
				'designGeni':"Awesome design is our pleasure",
				'designGeniDesc':"Why give an unattractive visual when you can do the exact opposite? We're cool, smart , flex and we love awesome design",
				'codeonlytitle':"Code only isn't enough",
				'comprehensKey':"Comprehension is the key",
				'comprehensKeyDesc':"On keyboard we write a couple of lines of </code>  but in reality we solve problems.The better understanding of problem affects the relevance of the solution.Comprehension is our focus",	
				'codeuniversal':"Code is universal, Users are different",
				'codeuniversaldescr':"We use the same programming languages, the same framework, libraries and tools but we solve for different customers with different target.we customize as needed",
				'dowhatulov':"Do what you love, love what you do",
				'dowhatulovdescr':"Every member in the team has passed more than 5 years studying and working on different projects just for fun. For us, programming is far of the way to earn money, programming is the part of our life, It's our happiness",
				'handwithudev':"Who we are without a community? We work hand in hand with UDEV TEAM.",
				'moreinfos':"More infos about UDEV Team",
				'titlequipe':"Our team",
				'titlecontact':"Contact Us",	
				'dev':"Developer",
				'APM':"Assistant Project Manager",
				'ArchDev':"Architect & Developper",
				'GMD':"Graphic and Motion Designer",
				'PM':"Project Manager",
				'cp':"Copyright",
				'formchamps':"We'll never share your email with anyone else.",
				'send':"Submit",
				'email':"Email Address:",
				'emailfrom':"Email",
				'name':"Name:",
				'message':"Message",
				'phone':"Phone",
				'droit':"All rights reserved.",
				'gtouch':"Get in touch",
				'string':[
		          "<span class='text-danger'>problems</span> into <span class='text-warning'>solutions.</span>", 
		          "<span class='text-danger'>issues</span> into <span class='text-warning'>opportunities.</span>",
		          "<span class='text-danger'>ideas</span> into <span class='text-warning'>reality.</span>"
		        ]
				},
				'fr':{
				'lang':"Français",
				'transf':"On change ",
				'values':"Valeurs",                            
				'team':"Equipe",                            
				'portfolio':"Portfolio",                            
				'contact':"Contact", 
				'techvalue':"Nos valeurs techniques",
				'securpriori':"La sécurité est notre priorité", 
				'securprioridescr':"Derrière chaque application sur laquelle nous travaillons, il y a une communauté d'experts qui gèrent les problèmes de sécurité. Nous prenons la sécurité de vos données au sérieux",
				'perfoKey':"La performance est la clé",
				'perfoKeyeDescr':"Personne n'aime un long temps de chargement. Nous optimisons chaque ressource pour vous faire gagner du temps avec des applications ultra-rapides",
				'simplang':"La simplicité est notre langage",
				'simplangDescr':"Nous résolvons des problèmes complexes en utilisant une solution simple et puissante.Simple != Facile",
				'designGeni':"Un design génial est notre plaisir",
				'designGeniDesc':"Pourquoi donner un visuel peu attractif quand on peut faire exactement le contraire ? Nous sommes cool, intelligents, flexibles et nous aimons le design génial",
				'codeonlytitle':"Code seul ne suffit pas",
				'comprehensKey':"La compréhension est la clé",
				'comprehensKeyDesc':"Au clavier, nous écrivons quelques lignes de code mais en réalité, nous résolvons des problèmes.Meilleure est la compréhension,meilleure est la relevance de la solution",	
				'codeuniversal':"Le code est universel, les utilisateurs sont différents",
				'codeuniversaldescr':"Nous utilisons les mêmes langages de programmation, le même cadre de travail(framework), les mêmes bibliothèques et outils pour servir différents clients avec différents besoins.Nous personnalisons au besoin",
				'dowhatulov':"Fais ce que tu aimes, aime ce que tu fais",
				'dowhatulovdescr':"Chaque membre de l'équipe a passé plus de 5 ans à étudier et à travailler sur différents projets juste pour le plaisir. Pour nous, la programmation est loin d'être un moyen de gagner de l'argent, la programmation fait partie de notre vie, c'est notre bonheur",
				'handwithudev':"Qui sommes-nous sans communauté ? Nous travaillons main dans la main avec UDEV TEAM.",
				'moreinfos':"infos sur UDEV Team",
				'titlequipe':"Notre équipe",
				'titlecontact':"Contact Nous",	
				'dev':"Développeur",
				'APM':"Assistant du chef de projet",
				'ArchDev':"Architecte & Développeur",
				'GMD':"Graphiste et Motion Designer",
				'PM':"Chef de Projet",
				'cp':"droits d'auteur",
				'formchamps':"Nous ne partagerons jamais votre e-mail avec quelqu'un d'autre.",
				'send':"Envoyer",
				'emailfrom':"Email",
				'email':"Adresse e-mail",
				'name':"Nom",
				'message':"Message",
				'phone':"Téléphone",
				'droit':"Tous droits réservés.",
				'gtouch':"Contactez-nous",
				'string':[
		          "<span class='text-danger'>des problèmes</span> en <span class='text-warning'>solutions.</span>", 
		          "<span class='text-danger'>des pannes</span> en <span class='text-warning'>opportunités.</span>",
		          "<span class='text-danger'> des idées</span> en <span class='text-warning'>réalité.</span>"
		        ]
				
			},
			'rn':{
				'lang':"Kirundi",
				'transf':"Turahindura ",
				'values':"Ibitugize",                            
				'team':"Twebwe",                            
				'portfolio':"Ibikorwa ",                            
				'contact':"Turondere",
				'techvalue':"Imyitwarariko yacu",
				'securpriori':"Ugukinga niwo mwitwarariko wacu",
				'securprioridescr':"Kuri application iyo ariyo yose dukorako, haba hari abahinga muvyo gukinga. Turafatana uburemere ibijanye no gukingira ivyo muyakoreramwo", 
				'perfoKey':"Ubukerebutsi nibwo buturanga",
				'perfoKeyeDescr':"Ntanumwe akunda ivyikwega. Mugucungura umwanya, turagabanya uburemere bw'akantu kose kagize application kugira yuguruke bukwi na bukwi.",
				'simplang':"Ukworosha nirwo rurimi rwacu",
				'simplangDescr':"Dukemura ibibazo vy'inganzamarumpu mugukora application zoroshe gukoresha kandi zikwije vyose.",
				'designGeni':"Dukunda ibintu bisa neza",
				'designGeniDesc':"Kuki twotanga ibitabereye ijisho kandi bishoboka ko kudokora igihushane cavyo? turi neza kandi dukunda ibibereye ijisho.",
				'codeonlytitle':"code ubwayo ntihagije",
				'comprehensKey':"Gutahura niryo shimikiro ryacu ",
				'comprehensKeyDesc':"kuri clavier twandika imirongo myinshi cane gose ya </code> ariko mubuzima bwa misi yose dukemura ibibazo. Gutegera neza ibitagenda neza bituma dutora inyishu nziza y'ikibazo.Twibanda cane mugutegera",	
				'codeuniversal':"code ni mpuzamakungu ariko abayandika bagatandukana",
				'codeuniversaldescr':"Dukoresha langages de programation zimwe ariko dukemura ibibazo bitandukanye kubakiriya bafise intego n'imigambi bitandukanye.Duhinyanyura ivyo dukora twisunze ibikenewe kuri umwumwe wese",
				'dowhatulov':"Dukora ivyo dukunda, Dukunda ivyo dukora",
				'dowhatulovdescr':"Kira munyamuryango wa HOGI yamaze imyaka irenga 5 yiga kandi yongera akora kumigambi itandukanye yishimisha. Kuri twebwe, kwandika code birengeye cane guca amafaranga, kwandika code bigize ubuzima bwacu bwa misi yose, n'umunezero wacu",
				'handwithudev':"Turi bande ata muryango? Dukorana ubudahengeshanya na UDEV Team.",
				'moreinfos':"Menya vyinshi kuri UDEV Team.",
				'titlequipe':"Twebwe",
				'titlecontact':"Turondere",
				'dev':"Umuhinyitsi",
				'APM':"Icariho c'umukuru w'ibikorwa",
				'ArchDev':"Umwubatsi & Umuhinyitsi",
				'GMD':"Uwushushanya",
				'PM':"Umuyobozi w'ibikorwa",
				'cp':"uburenganzira bw'uwabikoze",
				'formchamps':"Ntabwo tuzigera dusangira imeyi yawe nabandi bose.",
				'send':"kurungika", 
				'emailfrom':"Imeyili",
				'email':"Aderesi ya imeyili ",	        
				'name':"Izina",
				'message':"Ubutumwa bugufi.",   
				'phone':"itelefone",
				'droit':"Uburenganzira bwose buratwegukira.",
				'gtouch':"Twandikire",
				'string':[
		          "<span class='text-danger'>ibibazo</span> mu <span class='text-warning'>nyishu.</span>", 
		          "<span class='text-danger'>ingorane</span> mu <span class='text-warning'>mahirwe.</span>",
		          "<span class='text-danger'>ivyiyumviro</span> mu <span class='text-warning'>bigaragara.</span>"
		        ]	               
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
		},
		changeLanguage(new_lang){
			this.lang = new_lang
			if(window.typeit != null){
				window.typeit.pause()
				window.typeit.reset()
				window.typeit.delete()
			}
			window.typeit = new TypeIt(".typeit", {
				strings: this.dict[new_lang].string,
				speed: 120,
				waitUntilVisible: true,
				loop: true,
				breakLines:false
			})
			window.typeit.go()
		},

	};
	app.changeLanguage('en')
})