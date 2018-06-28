<!DOCTYPE html>
<html lang="pt-br">
	<head>
		<meta charset="UTF-8">
		<title>Maicon Furtado - Front-End Developer</title>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="icon" href="favicon.png" />
		<meta name="google-site-verification" content="0llhDOl134rwbg5-sxXw4bDB_4zINu4H29XrrvUgzxc" />
        <meta name="description" content="Senior Front-End Developer Engineer from Pelotas-RS, Brazil." />
        <meta name="keywords" content="maicon furtado, website development, front-end, freelancer, freela, pelotas, rs, brazil" />
        <meta name="author" content="Maicon Knabach Furtado" />
        <meta name="robots" content="follow, all" />
        <meta property="og:title" content="Maicon Furtado | Front-End Developer" />
        <meta property="og:image" content="http://www.maiconfurtado.com.br/dist/img/share.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://maiconfurtado.com.br" />
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
		<section id="header">
			<div id="particles-js"></div>
			<div class="container clearfix">
				<header class="clearfix">
					<nav>
						<ul class="lang menu pull-left">
							<li><a href="/en" class="active">En</a></li>
							<li><a href="/">Pt</a></li>
						</ul>
						<ul class="menu pull-right">
							<li class="menu--link"><a href="/files/CV-Maicon-Furtado-en.pdf" target="_blank">CV</a></li>
							<li class="menu--link"><a href="javascript:;" class="open-modal">Contact</a></li>
						</ul>
					</nav>
				</header>
				<section class="clearfix main-content center-block">
					<main class="flex">
						<picture class="col col-5 col-6-sm pull-left">
							<img src="../dist/img/Maicon-Furtado.jpg" srcset="../dist/img/Maicon-Furtado@2x.jpg 2x, ../dist/img/Maicon-Furtado@2x.jpg 3x" alt="Maicon Furtado - Desenvolvedor Front-End" class="maicon img-responsive center-block" width="300" height="300">
						</picture>
						<div class="col col-7 col-6-sm">
							<div>
								<h1 class="title"><strong>Maicon Furtado</strong></h1>
								<h2>Front-End Developer since 2012.</h2>
							</div>
							<div class="bottom">
								<p>Do you need a website or a freelance? Get in touch:</p>
								<a href="https://github.com/maiconkf/" target="_blank"><i class="fab fa-github"></i></a>
								<a href="https://www.linkedin.com/in/maiconkf" target="_blank"><i class="fab fa-linkedin-in"></i></a>
								<a href="https://www.facebook.com/maiconkf" target="_blank"><i class="fab fa-facebook-f"></i></a>
								<a href="https://www.instagram.com/maiconkf/" target="_blank"><i class="fab fa-instagram"></i></a>
								<a href="skype:maiconkf?add" title="maiconkf"><i class="fab fa-skype"></i></a>
								<a href="javascript:;" class="open-modal"><i class="far fa-envelope"></i></a>
							</div>
						</div>
					</main>
				</section>
				<footer class="copyright">
					<p>Pelotas-RS, Brazil</p>
				</footer>
			</div>
		</section>
		<div id="modal">
			<div class="fade"></div>
			<div class="box">
				<a href="javascript:;" id="close" class="close-x pull-right">
					<svg fill="#898989" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
				</a>
				<div class="content">
					<p>Get in touch:</p>
					<form method="post">
						<input type="text" name="name" id="name" class="input" placeholder="Name" required>
						<input type="text" name="email" id="email" class="input" placeholder="E-mail" required>
						<textarea name="message" id="message" class="input" placeholder="Message" rows="8" required></textarea>
						<input type="submit" value="SUBMIT" class="btn" name="send">
					</form>
				</div>
			</div>
		</div>
		<div id="pre-loader">
		    <div class="loading"></div>
		</div>
		<script async src="../dist/js/scripts.min.js"></script>
        <script>
            var _gaq=[['_setAccount','UA-45158993-1'],['_trackPageview']];
            (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src='//www.google-analytics.com/ga.js';
            s.parentNode.insertBefore(g,s)}(document,'script'));
        </script>
	</body>
</html>

<link rel="stylesheet" href="../dist/css/styles.min.css">
<link href="https://fonts.googleapis.com/css?family=Open+Sans:400|600|700" rel="stylesheet">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/regular.css" integrity="sha384-avJt9MoJH2rB4PKRsJRHZv7yiFZn8LrnXuzvmZoD3fh1aL6aM6s0BBcnCvBe6XSD" crossorigin="anonymous">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/brands.css" integrity="sha384-7xAnn7Zm3QC1jFjVc1A6v/toepoG3JXboQYzbM0jrPzou9OFXm/fY6Z/XiIebl/k" crossorigin="anonymous">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/fontawesome.css" integrity="sha384-ozJwkrqb90Oa3ZNb+yKFW2lToAWYdTiF1vt8JiH5ptTGHTGcN7qdoR1F95e0kYyG" crossorigin="anonymous">