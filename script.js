const textos = [
	`A dona aranha subiu pela parede, veio a chuva forte e a derrubou, dois elefantes incomodam incomodam muito mais, por isso dona moça, faz favor de entrar na roda, diga um verso bem bonito, diga adeus e vá-se embora. Capelinha de melão é de São João, é de cravo, é de rosa, de majericão, se você quer sorrir e brincar, Patati Patatá, Sambalelê tá doente, tá com a cabeça quebrada, todo domingo havia banda no coreto do jardim e lá de longe a gente ouvia a tuba do Serafim, daí eu sacudi sacudi sacudi, mas a formiguinha não parava de subir.`,

	`Quando o relógio bate a uma, todas as caveiras saem da tumba, o sapo não lava o pé, não lava porque não quer. Marcha soldado cabeça de papel, se não marchar direito, vai preso pro quartel, aproveite minha gente que uma noite não é nada, se não dormir agora, dormirá de madrugada. Atirei o pau no gato, mas o gato não morreu, polegares, polegares onde estão, aqui estão, mas era feita com muito esmero na rua dos bobos, número zero.`,
	
	`Bate o sino pequenino, sino de Belém, estava a velha no seu lugar, veio a mosca lhe fazer mal, a mosca na velha e a velha a fiar. Rato, meu querido rato, eu não sou assim de fino trato pra selar esse contrato, se eu fosse um peixinho e soubesse nadar, eu vou, eu vou, pra casa agora eu vou. Pombinha branca o que está fazendo? Borboletinha tá na cozinha, fazendo chocolate para a madrinha.  Roda, roda, roda, caranguejo peixe é.`, 
	
	`Sapo cururu na beira do rio, quando o sapo canta ô maninha é porque tem frio, uma lava a outra, lava uma mão, lava a outra, lava uma. O cravo brigou com a rosa debaixo de uma sacada, chove, mas como chove, chuva chuvisco chuvarada, por que é que chove tanto assim? Já passou a chuva e o sol já vai surgindo, e a dona aranha de novo vai subindo. As flores já não crescem mais, até o alecrim murchou, e o pequeno bote dos indiozinhos quase, quase virou`,
	
	`Pirulito que bate bate, pirulito que já bateu, foi meu amor que me disse assim que a flor do campo é o alecrim, poti poti, perna de pau, olho de vidro e nariz de pica-pau. Como pode um peixe vivo viver fora da água fria? Guerreiros com guerreiros fazem zigue-zigue-zá, São João está dormindo não acorda não, é mentira da barata, ela tem é casca dura, criolalá não sou eu que caio lá`, 
	
	`Ciranda cirandinha, vamos todos cirandar, vamos dar a meia volta, volta e meia vamos dar, corre cutia na casa da tia, corre cipó na casa da vó, pegar carona nessa cauda de cometa. Um dois, feijão com arroz, papagaio louro do bico dourado fui morar numa casinha enfeitada de florzinha, o anel que tu me deste era vidro e se quebrou, cinco patinhos foram passear, se essa rua fosse minha eu mandava ladrilhar com pedrinhas de brilhante para o meu amor passar.`,
	
	`Não atire o pau no gato porque isso não se faz, dorme neném que a cuca vem pegar, cai cai balão cai cai balão aqui na minha mão, a galinha magricela bota ovo e bota banca de mais bela do Brasil, essa é a história da serpente que desceu do morro para procurar um pedaço do seu rabo. A galinha pintadinha e o galo carijó pega essa criança que tem medo de careta, tchau preguiça, tchau sujeira, adeus cheirinho de suor. Popeye foi à feira, não tinha o que comprar, senhoras e senhores dêem uma rodadinha e vá pro olho da rua.`,
	
	`A barata diz que tem sete saias de filó, é mentira da barata ela tem é uma só, cachorrinho tá latindo lá no fundo do quintal, dó ré mi fá, fafá, dó ré dó ré ré ré, eu sou pobre pobre pobre de marré, marré marré. A pulga e o percevejo fizeram a combinação, fizeram serenata embaixo do meu colchão, brilha brilha estrelinha, quero ver você brilhar, tá na hora de dormir, não espere a mamãe mandar.`,
	
	`A janelinha fecha quando está chovendo, a janelinha abre se o sol tá aparecendo, coelhinho da páscoa o que trazes pra mim? Meu pintinho amarelinho cabe aqui na minha mão, era uma casa muito engraçada, não tinha teto, não tinha nada, lencinho branco caiu no chão, moça bonita do meu coração, lá vem o pato pata aqui, pata acolá, meu pé, meu querido pé que me aguenta o dia inteiro, minhoca minhoca me dá uma beijoca. Fui ao mercado, comprar batata roxa, veio a formiguinha e subiu na minha coxa`,
	
	`Meu lanchinho, meu lanchinho, vou comer, vou comer, pra ficar fortinho, pra ficar fortinho e crescer, iam navegando pelo rio abaixo quando um jacará se aproximou. Comer comer é o melhor para poder crescer. Torce e retorce procuro mas não vejo, não sei se era a pulga ou se era o percevejo. Seu Lobato tinha um sítio ia ia ô, havia uma barata na careca do vovô, assim que ela me viu, bateu asas e voou, a cobra não tem pé, a cobra não tem mão, como é que a cobra sobe no pezinho de limão?`,
	
	`Eu conheço um jacaré que gosta de comer, esconda seus olhinhos se não o jacaré come seus olhinhos e o dedão do pé. O sapo o sapo na beira da lagoa não tem, não tem rabinho e nem orelha, quem quer casar com a dona baratinha que tem fita no cabelo e dinheiro na caixinha. Piuí abacaxi, olha o chão pra não cair, ele mora lá na lagoa, não lava o pé porque não quer, batatinha quando nasce esparrama pelo chão, lá em cima do piano tem um copo de veneno, quem bebeu morreu, o azar foi seu. `, 
	
	`Hoje é domingo, pede cachimbo, uma vez tindolelê outra vez tindolalá, um homem bateu em minha porta e eu abri, viva Mariana, viva Mariana, superfantástico no balão mágico o mundo fica bem mais divertido, a roda do ônibus roda roda pela cidade, comi uma cenoura com casca e tudo, tão grande ela era, fiquei barrigudo, criança não trabalha, criança dá trabalho. O cravo ficou doente, a rosa foi visitar, pluct plact zum, não vai a lugar nenhum.`
];

const form = document.querySelector(".kids_form");
const paragrafos = document.querySelector("#quantia");
const kidsIpsum = document.querySelector(".kids_text");


form.addEventListener("submit", function(event) {
	event.preventDefault();
	const valor = parseInt(paragrafos.value);
	let controle = 0;
	const textoFinal = [ ]
	let indices = [ ]
	
	
	while(controle < valor) {
		const sort = Math.round(Math.random()*(textos.length-1));
		if (indices.length == 0) {
			indices.push(sort);
			textoFinal.push(textos[sort]);
			controle++
		} else { if (indices.includes (sort)) {
			controle = controle
			} 	else { 
			indices.push(sort);
			textoFinal.push(textos[sort]);
			controle++
			}
		}

	}
	
	kidsIpsum.innerHTML= textoFinal.join("<br> <br>");
});