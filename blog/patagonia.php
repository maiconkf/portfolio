<?php
	$dest = array('900040411', '-985388', '-897492');
	$random = $dest[array_rand($dest)];
?>

<!DOCTYPE html>
<html lang="pt-br">
	<head>
		<meta charset="UTF-8">
		<title>Maicon Furtado - Desenvolvedor Front-End</title>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="icon" href="../favicon.png" />
		<meta name="google-site-verification" content="0llhDOl134rwbg5-sxXw4bDB_4zINu4H29XrrvUgzxc" />
		<meta name="B-verify" content="3f162952c62bc0a8777e6e871b93036e677ca420" />
		<meta name="verification" content="b4eaaad363289d9e7c6a704fc4f9e20c" />
        <meta name="description" content="Roteiro completo de 12 dias de viagem para a Patagônia Chilena e Argentina, com link para planilha de gastos." />
        <meta name="keywords" content="maicon furtado, criação de sites, desenvolvimento web, front-end, freelancer, freela, pelotas, rs, brasil, patagonia, roteiro, argentina, chile" />
        <meta name="author" content="Maicon Knabach Furtado" />
        <meta name="robots" content="follow, all" />
        <meta property="og:title" content="Maicon Furtado | Front-End Developer" />
        <meta property="og:image" content="http://maiconfurtado.com.br/dist/img/blog/Mini-trekking-Perito-Moreno.JPG" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://maiconfurtado.com.br" />
        <meta property="og:description" content="Roteiro completo de 12 dias de viagem para a Patagônia Chilena e Argentina, com link para planilha de gastos." />
        <!--[if lt IE 9]> <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script> <![endif]-->

        <style>
            @-webkit-keyframes spCircRot {
                from { -webkit-transform: rotate(0deg); }
                to { -webkit-transform: rotate(359deg); }
            }

            @keyframes spCircRot {
                from { transform: rotate(0deg); }
                to { transform: rotate(359deg); }
            }

            #pre-loader {
                width: 100%;
                height: 100%;
                background-color: #fff;
                position: fixed;
                top: 0;
                z-index: 999;
            }

            .loading {
                border: 6px rgba(0,0,0,.12) solid;
                border-top: 6px #ef3e42 solid;
                border-radius: 50%;
                -webkit-animation: spCircRot .6s infinite linear;
                animation: spCircRot .6s infinite linear;
                width: 56px;
                height: 56px;
                margin: 0 auto;
                position: absolute;
                left: 0;
                right: 0;
                top: calc(50% - 28px);
            }
        </style>
	</head>
	<body>
		<section id="header" class="header--blog">
			<div id="particles-js"></div>
			<article id="post">
				<div class="container container--no-height clearfix">
					<header class="clearfix">
						<nav>
							<ul class="menu pull-right">
								<li class="menu--link"><a href="/">Início</a></li>
								<li class="menu--link"><a href="/files/CV-Maicon-Furtado.pdf" target="_blank">Currículo</a></li>
								<li class="menu--link"><a href="javascript:;" class="open-modal">Contato</a></li>
							</ul>
						</nav>
					</header>
				</div>
				<div class="container container--no-height container--blog">
					<h1 class="post__title"><strong>PATAGÔNIA - DEZEMBRO DE 2018</strong></h1>
					<div class="post">
						<div class="post__links">
							<p>Planilha de gastos: <a href="http://bit.ly/patagonia2018" target="_blank">http://bit.ly/patagonia2018</a></p>
							<p>Desconto de R$130 para a primeira hospedagem usando o Airbnb: <a href="https://www.airbnb.com.br/c/maiconf117?currency=BRL" target="_blank">https://www.airbnb.com.br/c/maiconf117?currency=BRL</a></p>
							<p>Reserve sua hospedagem no <a href="https://www.booking.com?aid=1673278" target="_blank">Booking</a></p>
							<p>Desconto para a primeira viagem de Uber: <a href="https://www.uber.com/invite/dn4urh35ue" target="_blank">dn4urh35ue</a></p>
							<p>Instagram: <a href="https://instagram.com/maiconkf" target="_blank">@maiconkf</a></p>
						</div>
						<div class="clearfix">
							<div class="col-8 pull-left">
								<h2 class="post__title--smaller">ROTEIRO:</h2>
								<p>DIA 1 - Chegada em Buenos Aires</p>
								<p>DIA 2 - Chegada em Puerto Natales</p>
								<p>DIA 3 - Full day em Torres del Paine</p>
								<p>DIA 4 - Trilha para a base das Torres</p>
								<p>DIA 5 - Chegada em El Calafate</p>
								<p>DIA 6 - Glaciar Perito Moreno</p>
								<p>DIA 7 - Chegada em El Chaltén e trilha Miradores Los Condores e Las Aguilas</p>
								<p>DIA 8 - Trilha para Laguna de Los Tres (Fitz Roy)</p>
								<p>DIA 9 - Descanso</p>
								<p>DIA 10 - Trilha para Chorrillo del Salto</p>
								<p>DIA 11 - Volta (El Chaltén > El Calafate > Córdoba)</p>
								<p>DIA 12 - Volta (Córdoba > Buenos Aires > Brasil)</p>
							</div>
							<div class="col-4 pull-right">
								<ins class="bookingaff booking-1" data-aid="1674346" data-target_aid="1674346" data-prod="dfl2" data-width="100%" data-height="auto" data-lang="xb" data-dest_id="<?= $random;  ?>" data-dest_type="city" data-df_num_properties="3">
							    	<!-- Anything inside will go away once widget is loaded. -->
							        <a href="//www.booking.com?aid=1674346">Booking.com</a>
								</ins>
							</div>
						</div>
						<div>
							<h2 class="post__title--smaller">DIA 1:</h2>
							<p>Saí de Pelotas-RS às 07h da manhã, do dia 12 de dezembro, com destino a Porto Alegre. De Porto Alegre, peguei um voo para Buenos Aires, onde cheguei por volta das 14h local. Ao chegar no aeroporto, fui direto procurar pelo Banco La Nacion, porém o câmbio estava muito ruim se comparado com o câmbio da <a href="https://www.facebook.com/cambiomais.brazucas/" target="_blank">Mais Brazucas</a>. No Banco, a cotação tava R$8,70 e na Mais Brazucas estava R$9,40. Uma grande diferença, não? Então eu aproveitei o Wi-fi do aeroporto e resolvi pedir um Uber até a Calle Florida. <b>Atenção:</b> O motorista do Uber não tinha dinheiro algum pra pagar a tal da autopista (?), então ele ficou rodando até achar alguém que soubesse como chegar no centro sem ter que passar pela pista onde cobram para trafegar. Então, por via das dúvidas, é bom trocar o valor mínimo no banco que tem dentro do aeroporto.</p>
							<p class="post__text--margin">Após trocar o dinheiro na Mais Brazucas, fui bater perna no centro em busca de um chip de celular pra poder chamar um Uber até meu hostel. Depois de andar (e me perder) muito, eu encontrei uma loja da Claro. O chip custou $50 pesos argentinos + $150 pesos argentinos em créditos pra usar por 10 dias. Me foi muito útil, menos em El Chaltén, onde lá não tem sinal nenhum de celular.</p>
							<div class="clearfix">
								<div class="col-6 pull-left">
									<img src="../dist/img/blog/Obelisco.jpg" alt="Obelisco" class="img-responsive pull-left" width="520" height="924">
								</div>
								<div class="col-6 pull-right">
									<img src="../dist/img/blog/Maicon-Obelisco.jpg" alt="Selfie no Obelisco" class="img-responsive pull-right" width="520" height="924">
								</div>
							</div>
							<p class="post__text--margin">Com o chip em mãos, comecei a minha saga em busca de um Uber. Em Buenos Aires, é muito burocrático pegar um Uber. Tu não pode pedir um Uber em qualquer rua. Tem que ser em ruas específicas e em local exato nessas ruas. Eu precisei caminhar quase 10 minutos até a rua certa para pedir um Uber. Achei que a minha saga teria acabado alí, mas não. Demora muito pra encontrar um motorista e está sempre na dinâmica. Quando eu finalmente encontrei um motorista, ele cancelou a corrida enquanto vinha até mim. Meia hora depois, consegui entrar em um carro.</p>
							<p class="post__text--margin">Do centro, fui para o <a href="https://www.booking.com/hotel/ar/puerto-limon-hostel.en.html?aid=1673278&no_rooms=1&group_adults=1" target="_blank">Puerto Limon Hostel</a>. O hostel é bem bonito e moderno, porém o Wi-fi não funcionou direito no quarto de número 6. Paguei R$23 numa promoção de Black Friday. Valeu super a pena! Cama confortável e localização ótima!</p>
							<p class="post__text--margin"><strong>Nota do hostel:</strong></p>
								<ins class="bookingaff booking-review" data-aid="1675281" data-target_aid="1675281" data-prod="rw" data-width="0" data-height="0" data-lang="xb" data-show_rw_badge="1" data-show_rw_text="1" data-show_rw_border="1" data-hid="1127283">
								    <!-- Anything inside will go away once widget is loaded. -->
								    <a href="//www.booking.com?aid=1675281">Booking.com</a>
								</ins>
							</p>
						</div>
						<div>
							<h2 class="post__title--smaller">DIA 2:</h2>
							<p>No dia seguinte, peguei um voo para El Calafate. Cheguei um pouco antes do meio-dia. Lá no aeroporto, eu peguei um transfer até a rodoviária. Custou $250 pesos. Almocei na frente da rodoviária e aguardei até as 16h30min pelo ônibus que vai até Puerto Natales.</p>
							<p class="post__text--margin">Como eu só ia chegar às 22h em Puerto Natales, resolvi trocar dinheiro só o necessário aqui no Brasil. Peguei uma cotação péssima, mas era a única opção. Troquei $40 mil pesos chilenos, onde $21 mil pesos era pra entrada do Parque Torres del Paine, $5 mil era para entrada na Cueva del Milodón (não recomendo) e $6 mil de transfer dentro do parque para o ínicio da trilha para a base das torres. O restante seria para compra de alimentação.</p>
						</div>
						<div>
							<h2 class="post__title--smaller">DIA 3:</h2>
							<p>Finalmente começa a viagem para valer! Como eu tinha pouco tempo disponível para a viagem, resolvi ficar 2 dias no Chile, onde, no primeiro dia, eu faria o <a href="https://www.denomades.com/pt/puerto-natales/full-day-torres-del-paine-id273" target="_blank">Full Day Torres del Paine da Denomades</a>. Super recomendo esse passeio para quem não tem tempo suficiente para fazer o Circuito W. Neste passeio, a gente conheceu a Cueva del Milodón, um animal já extinto e que viveu na Patagônia há milhares de anos atrás, e fomos nos principais pontos do parque. Como, por exemplo: Lago Pehoe, Laguna Amarga, Lago Grey, entre outros.</p>
							<div class="clearfix">
								<img src="../dist/img/blog/Full-Day-Torres-del-Paine-1.jpg" alt="Full Day 1" class="img-responsive" width="1050" height="567">
								<img src="../dist/img/blog/Full-Day-Torres-del-Paine-2.jpg" alt="Full Day 2" class="img-responsive post__img--margin" width="1050" height="567">
							</div>
							<p class="post__text--margin">Sobre a Cueva del Milodón: só é interessante pra quem é da área da geologia, caso contrário, é R$30 jogados fora. É só um buraco com nada dentro e no fim tem uma estátua do Milodón para poder tirar foto. Apenas isso.</p>
							<div class="clearfix">
								<img src="../dist/img/blog/Milodon.jpg" alt="Milodón" class="img-responsive" width="1050" height="1050">
							</div>
							<p class="post__text--margin">Ah, fiquei hospedado no hostel <a href="https://www.booking.com/hotel/cl/el-fiordo.en.html?aid=1673278&no_rooms=1&group_adults=1" target="_blank"> El Fiordo.</a> O hostel é super perto da rodoviária, de um mercadinho e de um supermercado! Ele só não tem tomadas do lado da cama, mas é um ótimo custo-benefício!</p>
							<p class="post__text--margin"><strong>Nota do hostel:</strong></p>
								<ins class="bookingaff booking-review" data-aid="1675281" data-target_aid="1675281" data-prod="rw" data-width="0" data-height="0" data-lang="xb" data-show_rw_badge="1" data-show_rw_text="1" data-show_rw_border="1" data-hid="2108730">
								    <!-- Anything inside will go away once widget is loaded. -->
								    <a href="//www.booking.com?aid=1675281">Booking.com</a>
								</ins>
							</p>
						</div>
						<div>
							<h2 class="post__title--smaller">DIA 4:</h2>
							<p>Este dia foi punk. Saí de Puerto Natales as 07h sem comer nada e cheguei em Torres del Paine as 09h15min. Levei na mochila vários alimentos, como: três achocolatados, três bananas, bolacha água e sal, bolacha recheada de chocolate, barra de cereal, barra de chocolate... Porém, eu acho que não foi o suficiente para me dar energia para completar o trekking!</p>
							<p class="post__text--margin">Na ida, o que era pra ser feito em 4h, foi feito em 5h30min. São subidas constantes, o que acabou com as forças nas minhas pernas na volta. Para voltar, eu tomei um achocolatado e comi uma barra de chocolate inteirinha, o que me deu forças por 1h30min. Eu caminhava super rápido, quase correndo... tudo isso para conseguir chegar a tempo de pegar o ônibus de volta para a cidade de Puerto Natales, às 19h. Porém, começou a me bater um sono danado, meus olhos tavam se fechando sozinhos e as minhas pernas não tinham mais forças para continuar. Sentei no chão duas vezes, coloquei o celular pra despertar em 10min e fechei os olhos. Na segunda vez que fiz isso, um casal inglês me viu e perguntou se eu estava bem. Falei que não, então eles me ajudaram me puxando pelo braço por alguns metros. Vendo que eu não tinha muita força para continuar, eles me deram muito açúcar, como: balas jujubas, chá com açúcar, chocolate Twix, além de água, nozes, bastão de trekking e ainda carregaram minha mochila que nem estava pesada. Foram realmente uns anjos em minha vida! Eu achava que ainda faltava muito para eu chegar ao meu destino, mas não... faltava só mais 01h30min.</p>
							<p class="post__text--margin">Eram 19h o horário em que eu cheguei ao hotel deles. Ainda faltavam mais uns 15min de caminhada até a entrada de onde começa a trilha, onde eu teria que pagar $3 mil num transfer que leva até a entrada do parque, onde ficam os ônibus. Ou seja, não dava mais tempo de eu pegar o meu ônibus às 19h. Eu já estava cogitando em pedir carona na beira da estrada. Porém, não foi preciso. O hotel <a href="https://www.booking.com/hotel/cl/las-torres-patagonia.en.html?aid=1673278&no_rooms=1&group_adults=1" target="_blank">Las Torres</a> chamou um transfer particular que custou os olhos da cara! Foi $23 mil pesos chilenos só para me levar até a entrada do parque para poder pegar o ônibus.</p>
							<p class="post__text--margin">Mas não posso reclamar muito, pois eu nunca fui tão bem tratado na minha vida quanto lá no hotel! Eles me deram chá, barra de cereal, maçã verde, 500ml de chocolate quente e, ainda, botaram meus agasalhos para secar e me deram em torno de $6 dólares para me ajudar a pagar o último ônibus de volta para Puerto Natales.</p>
							<div class="clearfix">
								<img src="../dist/img/blog/Base-Torres-del-Paine.jpg" alt="Base das Torres del Paine" class="img-responsive" width="1050" height="788">
							</div>
							<p class="post__text--caption"><em>Por fora sorrindo, por dentro morrendo</em></p>
						</div>
						<div>
							<h2 class="post__title--smaller">DIA 5:</h2>
							<p>De manhã cedo, saí de Puerto Natales e fui até El Calafate de ônibus. Caminhei por uns 15min até o centro da cidade e almocei no primeiro restaurante que vi aberto. Eu estava bem enjoado (eu fiquei com um pouco de náuseas na trilha de TDP), então não deu pra comer tudo. Saí de lá e fui direto para o hostel <a href="https://www.booking.com/hotel/ar/hosteria-sir-thomas.en.html?aid=1673278&no_rooms=1&group_adults=1" target="_blank">Bla Guesthouse</a>. O atendimento no hostel foi super bom, porém não gostei de duas coisas: 1 é que o beliche fazia barulho ao se mexer na cama e, 2, por não ter um horário limite para fazer o checkin. Na minha última noite no hostel, eu fiquei com o quarto só pra mim até a meia-noite. Depois disso, chegou um grupo de 7 pessoas no meu quarto, onde ficaram conversando e alguns ainda foram para o banho. Não foi muito legal essa noite.</p>
							<p class="post__text--margin">No fim de tarde do primeiro dia em El Calafate, eu fui até a farmácia comprar um remédio para enjôo. A mulher me vendeu um sublingual com gosto tão ruim que, ao chegar na quadra do hostel, o remédio terminou de dissolver na língua e eu vomitei na rua, do lado do hostel. Por sorte, não havia ninguém por perto. Entrei correndo no hostel e vomitei mais um pouco no banheiro. 🙃</p>

							<p class="post__text--margin"><strong>Nota do hostel:</strong></p>
								<ins class="bookingaff booking-review" data-aid="1675281" data-target_aid="1675281" data-prod="rw" data-width="0" data-height="0" data-lang="xb" data-show_rw_badge="1" data-show_rw_text="1" data-show_rw_border="1" data-hid="293409">
								    <!-- Anything inside will go away once widget is loaded. -->
								    <a href="//www.booking.com?aid=1675281">Booking.com</a>
								</ins>
							</p>
						</div>
						<div>
							<h2 class="post__title--smaller">DIA 6:</h2>
							<p>Dia de fazer o mini trekking no Glaciar Perito Moreno!</p>
							<p class="post__text--margin">Às 08h30min, a <a href="http://hieloyaventura.com" target="_blank">Hielo y Aventura</a> veio até meu hostel me buscar de ônibus. Haviam vários brasileiros no passeio.</p>
							<p class="post__text--margin">O meu passeio foi na seguinte ordem: transfer de barco até o glaciar, mini trekking, almoço e transfer para as passarelas. Um outro grupo começou na ordem invertida.</p>
							<p class="post__text--margin">O mini trekking dura em torno de 01h30min. Esse é o tempo de uma das experiências mais incríveis da minha vida! Antes de começar, é colocado <em>grampons</em> nos calçados e nos é ensinado a como caminhar sobre o gelo. No final do mini trekking, é servido whisky com o gelo do glaciar. Pra quem não bebe, é servido água e bombons.</p>
							<p class="post__text--margin">Após retirarmos os <em>grampons</em>, a gente vai almoçar (tem que levar comida) com uma das paisagens mais lindas:</p>
							<div class="clearfix post__day6">
								<div class="col-6 pull-left">
									<img src="../dist/img/blog/Grampons.jpg" alt="Grampons" class="img-responsive post__img--full pull-left" width="520" height="1050">
								</div>
								<div class="col-6 pull-right">
									<img src="../dist/img/blog/Almoco-Perito-Moreno.jpg" alt="Almoço no Perito Moreno" class="img-responsive post__img--full post__img--lunch pull-right" width="520" height="1870">
								</div>
							</div>
							<p class="post__text--margin">No final do passeio, a gente foi levado de catamarã até o outro lado do parque, onde ficam as passarelas. Lá foi permitido caminhar pelas passarelas por 45 minutos, tempo mais que suficiente para tirar boas fotos!</p>
							<div class="clearfix">
								<img src="../dist/img/blog/Perito-Moreno-Passarela.JPG" alt="Passarelas do Perito Moreno" class="img-responsive" width="1050" height="567">
								<img src="../dist/img/blog/Mini-trekking-Perito-Moreno.JPG" alt="Passarelas do Perito Moreno" class="img-responsive post__img--margin" width="1050" height="1229">
							</div>
							<p class="post__text--margin">OBS: É obrigatório o uso de luvas para andar sobre a geleira. Caso não tenha, eles emprestam. Mas é bom levar sua própria luva. Outra coisa que é bom lembrar, é de usar protetor solar. Eu esqueci no dia e fiquei todo queimado.</p>
						</div>
						<div>
							<h2 class="post__title--smaller">DIA 7:</h2>
							<p>No sétimo dia, eu peguei um ônibus que vai de El Calafate até El Chaltén. A viagem não demora muito. Dura cerca de 3h. Chegando em El Chaltén, os ônibus param no Centro de Visitantes, onde nos é passado algumas informações da cidade e das trilhas. Após uma breve apresentação do que se tem para fazer na cidade, nos são dados dois folhetos com o mapa da cidade e das trilhas. Nesses mapas contém também a duração para fazer cada trilha, além de informações sobre os tipos de animais que vivem na Patagônia e de telefones úteis.</p>
							<p class="post__text--margin">Após essa recepção, fui até o <a href="https://www.booking.com/hotel/ar/auka.en.html?aid=1673278&no_rooms=1&group_adults=1" target="_blank">Hostel Wenüy</a>, onde eu fiquei hospedado 04 noites. O hostel é próximo da rodoviária, porém é um pouco distante da trilha para o Fitz Roy e para o Chorrillo del Salto. Porém a cidade é tão pequenininha, que em 15 minutos se consegue chegar de ponta a ponta da cidade saindo do hostel. Sobre o hostel: ele tem um bom custo benefício, porém eu achei um pouco ruim os banheiros. As vezes as lixeiras estavam lotadas e o piso todo molhado. Também não possui sabonete líquido nos banheiros. Mas nada que tenha afetado minha estadia no local. O wi-fi do hostel é muito instável, assim como o wi-fi de qualquer estabelecimento da cidade. As vezes funciona normalmente e as vezes não consegue nem carregar os stories do Instagram. E, ah... a cidade não possui sinal nenhum de celular, então não tem como usar o pacote de dados nos momentos em que o wi-fi não está funcionando como deveria.</p>
							<p class="post__text--margin">Já era meio-dia quando eu terminei de fazer checkin e fui procurar restaurante pra almoçar. Acredita que tinha restaurante que nem estava aberto ainda? Entrei num achando que estava aberto, mas os funcionários recem estavam chegando. Pedi um prato que vinha com carne e a garçonete falou que ia demorar, pelo menos, 30 minutos para começar a fazer, então me sugeriu uma massa, pois seria mais rápido o preparo. E, realmente, foi bem rápido! Pedi um ravióli de cordeiro muito bom.</p>
							<p class="post__text--margin">Após o almoço, fui encontrar com 02 brasileiros para fazer a trilha dos Miradores Los Condores e Las Aguilas. As trilhas são bem tranquilas de serem feitas. Em 02 horas se consegue ir e voltar das trilhas. A trilha é bem bacana pra quem não tem muito tempo disponível. Ela serve como uma trilha coringa para dias nublados.</p>
							<div class="clearfix">
								<img src="../dist/img/blog/Trilha-Miradores-Los-Condores-e-Las-Aguilas.jpg" alt="Trilha dos Miradores Los Condores e Las Aguilas" class="img-responsive" width="1050" height="567">
							</div>
							<p class="post__text--margin"><strong>Nota do hostel:</strong></p>
								<ins class="bookingaff booking-review" data-aid="1675293" data-target_aid="1675293" data-prod="rw" data-width="0" data-height="0" data-show_rw_badge="1" data-show_rw_text="1" data-show_rw_border="1" data-hid="4153332">
								    <!-- Anything inside will go away once widget is loaded. -->
								    <a href="//www.booking.com?aid=1675293">Booking.com</a>
								</ins>
							</p>
						</div>
						<div>
							<h2 class="post__title--smaller">DIA 8:</h2>
							<p>Chegou o grande dia para conhecer o imponente Fitz Roy! Para fazer a trilha Laguna de Los Tres, tem duas opções: pagar $400 pesos num transfer que te leva até a Hosteria El Pilar ou sair caminhando pela cidade de El Chalten e fazer a trilha pelo caminho tradicional. Eu optei pela segunda opção por 02 motivos: achei bem salgado o preço do transfer e porque os dois brasileiros que eu conheci durante a viagem iriam pelo caminho tradicional. Achei mais seguro ir com eles.</p>
							<p class="post__text--margin">A diferença entre as duas opções de chegada até o Fitz Roy é que a segunda opção tem algumas subidas nos primeiro 2 ou 3km, mas depois fica bem tranquilo de chegar até o nono quilom. Do nono ao décimo é bem complicado. Nesse último trecho da trilha possui uma elevação de 400m em 01km. Leva em torno de 01h para subir até o topo, mas vale a pena cada esforço!</p>
							<p class="post__text--margin">No dia 6, eu falei que o mini-trekking foi uma das experiências mais incríveis da minha vida. Porém, o Fitz Roy foi o ápice da minha viagem! O lugar é incrível! Toquei na neve pela primeira vez na minha vida e ainda brinquei de esquibunda nela hahaha.</p>
							<div class="clearfix">
								<img src="../dist/img/blog/Neve-Fitz-Roy.JPG" alt="Neve em Fitz Roy" class="img-responsive" width="1050" height="761">
							</div>
							<p class="post__text--margin">A volta é um pouco tenso por conta da descida de 400m. É muito aconselhável alugar por $150 um par de bastão de trekking para ajudar a descer. A descida tem varias pedrinhas soltas pelo caminho... é fácil resbalar e cair de bunda no chão.</p>
							<div class="clearfix">
								<img src="../dist/img/blog/Fitz-Roy.JPG" alt="Fitz Roy" class="img-responsive" width="1050" height="567">
							</div>
						</div>
						<div>
							<h2 class="post__title--smaller">DIA 9:</h2>
							<p>Após 20km de trilha no dia anterior, resolvi tirar o dia para descansar. Fiquei uma boa parte do tempo no hostel, porém eu saí pra procurar presentes para comprar e parei pra tomar umas cervejas em um dos barzinhos da cidade. Também aproveitei pra comer bastante empanadas no Che Empanadas. Sério, empanadas é muito bom! Lembra um pouco o gosto de um calzone.</p>
						</div>
						<div>
							<h2 class="post__title--smaller">DIA 10:</h2>
							<p>No meu último dia na Patagônia, o tempo ficou meio nublado, com cara de que ia chover. Como eu estava muito satisfeito com o Fitz Roy, achei melhor não fazer a trilha para a Laguna Torre. Essa trilha tem duração de 06h. São 02km a menos que a do Fitz Roy. Sendo assim, resolvi fazer uma trilha mais leve e escolhi a trilha para o Chorrillo del Salto, com duração de 01h30min. A trilha é pouco procurada, então não tinha ninguém indo para ela no horário que eu fui, só via gente voltando. Chegando lá, haviam algumas famílias e uma excursão, no qual ficaram pouco tempo apreciando a cachoeira, o que ficou ótimo para eu poder tirar umas fotos sem ninguém aparecer nelas.</p>
							<div class="clearfix">
								<img src="../dist/img/blog/Chorrillo-del-Salto.JPG" alt="Chorrillo del Salto" class="img-responsive" width="1050" height="1050">
							</div>
						</div>
						<div>
							<h2 class="post__title--smaller">DIA 11 E 12:</h2>
							<p>Chegou a hora de voltar a realidade. Voltei de ônibus para El Calafate, onde lá eu peguei um vôo para Córdoba pra depois pegar um vôo na madrugada para Buenos Aires. Cheguei no Brasil às 08h30min cheio de boas histórias para contar.</p>
						</div>
						<ins class="bookingaff booking-banner booking-banner--desktop" data-aid="1675300" data-target_aid="1675300" data-prod="banner" data-width="728" data-height="90" data-lang="ualng">
						    <!-- Anything inside will go away once widget is loaded. -->
   					        <a href="//www.booking.com?aid=1675300">Booking.com</a>
						</ins>
						<ins class="bookingaff booking-banner booking-banner--tablet" data-aid="1675305" data-target_aid="1675305" data-prod="banner" data-width="468" data-height="60" data-lang="ualng">
						    <!-- Anything inside will go away once widget is loaded. -->
   					        <a href="//www.booking.com?aid=1675305">Booking.com</a>
						</ins>
						<ins class="bookingaff booking-banner booking-banner--mobile" data-aid="1675304" data-target_aid="1675304" data-prod="banner" data-width="250" data-height="250">
						    <!-- Anything inside will go away once widget is loaded. -->
   					        <a href="//www.booking.com?aid=1675304">Booking.com</a>
						</ins>
						<div class="post__links">
							<h2 class="post__title--smaller">LINKS ÚTEIS:</h2>
							<p>Planilha de gastos: <a href="http://bit.ly/patagonia2018" target="_blank">http://bit.ly/patagonia2018</a></p>
							<p>Desconto de R$130 para a primeira hospedagem usando o Airbnb: <a href="https://www.airbnb.com.br/c/maiconf117?currency=BRL" target="_blank">https://www.airbnb.com.br/c/maiconf117?currency=BRL</a></p>
							<p>Reserve sua hospedagem no <a href="https://www.booking.com?aid=1673278" target="_blank">Booking</a></p>
							<p>Desconto para a primeira viagem de Uber: <a href="https://www.uber.com/invite/dn4urh35ue" target="_blank">dn4urh35ue</a></p>
							<p>Instagram: <a href="https://instagram.com/maiconkf" target="_blank">@maiconkf</a></p>
						</div>
					</div>
				</div>
			</article>
		</section>
		<div id="modal">
			<div class="fade"></div>
			<div class="box">
				<a href="javascript:;" id="close" class="close-x pull-right">
					<svg fill="#898989" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
				</a>
				<div class="content">
					<p>Entre em contato:</p>
					<form method="post">
						<input type="text" name="name" id="name" class="input" placeholder="Nome" required>
						<input type="text" name="email" id="email" class="input" placeholder="E-mail" required>
						<textarea name="message" id="message" class="input" placeholder="Mensagem" rows="8" required></textarea>
						<input type="submit" value="ENVIAR" class="btn" name="send">
					</form>
				</div>
			</div>
		</div>
		<div id="pre-loader">
		    <div class="loading"></div>
		</div>
		<script async src="../dist/js/scripts.min.js"></script>
		<script>
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

			ga('create', 'UA-45158993-1', 'auto');
			ga('send', 'pageview');
		</script>
		<script type="text/javascript">
		    (function(d, sc, u) {
		      var s = d.createElement(sc), p = d.getElementsByTagName(sc)[0];
		      s.type = 'text/javascript';
		      s.async = true;
		      s.src = u + '?v=' + (+new Date());
		      p.parentNode.insertBefore(s,p);
		      })(document, 'script', '//aff.bstatic.com/static/affiliate_base/js/flexiproduct.js');
		</script>
	</body>
</html>

<link rel="stylesheet" href="../dist/css/styles.min.css">
<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Staatliches" rel="stylesheet">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/regular.css" integrity="sha384-avJt9MoJH2rB4PKRsJRHZv7yiFZn8LrnXuzvmZoD3fh1aL6aM6s0BBcnCvBe6XSD" crossorigin="anonymous">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/brands.css" integrity="sha384-7xAnn7Zm3QC1jFjVc1A6v/toepoG3JXboQYzbM0jrPzou9OFXm/fY6Z/XiIebl/k" crossorigin="anonymous">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/fontawesome.css" integrity="sha384-ozJwkrqb90Oa3ZNb+yKFW2lToAWYdTiF1vt8JiH5ptTGHTGcN7qdoR1F95e0kYyG" crossorigin="anonymous">