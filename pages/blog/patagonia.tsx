/* eslint-disable @next/next/no-img-element */
import { Box, Container, Grid, Typography } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { colors, fonts } from "../../utils/theme";
import { Eyebrow } from "../../components/Section";
import SpotlightCard from "../../components/SpotlightCard";

const itinerary = [
  "DIA 1 - Chegada em Buenos Aires",
  "DIA 2 - Chegada em Puerto Natales",
  "DIA 3 - Full day em Torres del Paine",
  "DIA 4 - Trilha para a base das Torres",
  "DIA 5 - Chegada em El Calafate",
  "DIA 6 - Glaciar Perito Moreno",
  "DIA 7 - Chegada em El Chaltén e trilha Miradores Los Condores e Las Aguilas",
  "DIA 8 - Trilha para Laguna de Los Tres (Fitz Roy)",
  "DIA 9 - Descanso",
  "DIA 10 - Trilha para Chorrillo del Salto",
  "DIA 11 - Volta (El Chaltén > El Calafate > Córdoba)",
  "DIA 12 - Volta (Córdoba > Buenos Aires > Brasil)",
];

const usefulLinks = [
  {
    label: "Planilha de gastos",
    href: "http://bit.ly/patagonia2018",
    text: "http://bit.ly/patagonia2018",
  },
  {
    label: "Desconto de R$130 para a primeira hospedagem usando o Airbnb",
    href: "https://www.airbnb.com.br/c/maiconf117?currency=BRL",
    text: "airbnb.com.br/c/maiconf117",
  },
  {
    label: "Reserve sua hospedagem no",
    href: "https://www.booking.com?aid=1673278",
    text: "Booking",
  },
  {
    label: "Desconto para a primeira viagem de Uber",
    href: "https://www.uber.com/invite/dn4urh35ue",
    text: "dn4urh35ue",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/maiconkf",
    text: "@maiconkf",
  },
];

const BlogHeader: React.FC = () => (
  <Box
    component="header"
    sx={{
      position: "sticky",
      top: 0,
      zIndex: 40,
      backdropFilter: "blur(16px) saturate(160%)",
      WebkitBackdropFilter: "blur(16px) saturate(160%)",
      backgroundColor: "rgba(7, 7, 13, 0.78)",
      borderBottom: `1px solid ${colors.border}`,
    }}
  >
    <Container
      maxWidth="md"
      sx={{
        height: 68,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Link href="/" passHref>
        <Typography
          component="a"
          sx={{
            fontFamily: fonts.display,
            fontWeight: 800,
            fontSize: "1.375rem",
            letterSpacing: "-0.04em",
            color: colors.text,
            textDecoration: "none",
          }}
        >
          maicon
          <Box component="span" sx={{ color: colors.violet }}>
            .
          </Box>
        </Typography>
      </Link>
      <Link href="/" passHref>
        <Typography
          component="a"
          sx={{
            fontSize: "0.9375rem",
            fontWeight: 500,
            color: colors.muted,
            textDecoration: "none",
            "&:hover": { color: colors.text },
          }}
        >
          ← Início
        </Typography>
      </Link>
    </Container>
  </Box>
);

const UsefulLinksBox: React.FC<{ title?: string }> = ({ title }) => (
  <SpotlightCard sx={{ p: { xs: 3, md: 4 }, my: 4 }}>
    {title && (
      <Typography
        component="h2"
        sx={{
          fontFamily: fonts.display,
          fontWeight: 700,
          fontSize: "1.25rem",
          color: colors.violet,
          mb: 2,
        }}
      >
        {title}
      </Typography>
    )}
    <Box sx={{ display: "grid", gap: 1.25 }}>
      {usefulLinks.map((item) => (
        <Typography
          key={item.href}
          sx={{ fontSize: "1rem", color: colors.muted, lineHeight: 1.6 }}
        >
          {item.label}:{" "}
          <Box
            component="a"
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: colors.blue,
              fontWeight: 600,
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            {item.text}
          </Box>
        </Typography>
      ))}
    </Box>
  </SpotlightCard>
);

const DayTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Typography
    component="h2"
    sx={{
      mt: 6,
      mb: 2,
      fontFamily: fonts.display,
      fontWeight: 800,
      fontSize: { xs: "1.5rem", md: "1.875rem" },
      letterSpacing: "-0.02em",
      color: colors.text,
      display: "inline-flex",
      alignItems: "center",
      gap: 1.5,
      "&::before": {
        content: '""',
        width: 12,
        height: 12,
        borderRadius: "50%",
        background: colors.gradient,
      },
    }}
  >
    {children}
  </Typography>
);

const Paragraph: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Typography
    sx={{
      mb: 2.5,
      color: colors.muted,
      fontSize: { xs: "1.0625rem", md: "1.125rem" },
      lineHeight: 1.8,
      "& a": {
        color: colors.blue,
        fontWeight: 500,
        textDecoration: "none",
        "&:hover": { textDecoration: "underline" },
      },
      "& b, & strong": {
        color: colors.text,
        fontWeight: 600,
      },
    }}
  >
    {children}
  </Typography>
);

const BlogImage: React.FC<{
  src: string;
  alt: string;
  caption?: string;
}> = ({ src, alt, caption }) => (
  <Box component="figure" sx={{ m: 0, my: 3.5 }}>
    <Box
      sx={{
        borderRadius: "20px",
        overflow: "hidden",
        border: `1px solid ${colors.border}`,
        backgroundColor: colors.surface,
        "& img": {
          width: "100%",
          height: "auto",
          display: "block",
        },
      }}
    >
      <img src={src} alt={alt} loading="lazy" />
    </Box>
    {caption && (
      <Typography
        component="figcaption"
        sx={{
          mt: 1.25,
          textAlign: "center",
          fontSize: "0.9375rem",
          fontStyle: "italic",
          color: colors.subtle,
        }}
      >
        {caption}
      </Typography>
    )}
  </Box>
);

export default function PatagoniaPost() {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100vh",
        color: colors.text,
      }}
    >
      <Head>
        <title>Patagônia - Dezembro de 2018 | Maicon Furtado</title>
        <meta
          name="description"
          content="Roteiro completo de 12 dias de viagem para a Patagônia Chilena e Argentina, com link para planilha de gastos."
        />
        <meta
          property="og:title"
          content="Patagônia - Dezembro de 2018 | Maicon Furtado"
        />
        <meta
          property="og:description"
          content="Roteiro completo de 12 dias de viagem para a Patagônia Chilena e Argentina, com link para planilha de gastos."
        />
        <meta
          property="og:image"
          content="https://www.maiconfurtado.com.br/img/blog/Mini-trekking-Perito-Moreno.JPG"
        />
      </Head>

      <BlogHeader />

      <Container component="article" maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
        <Eyebrow>Blog · Viagem</Eyebrow>
        <Typography
          variant="h1"
          sx={{
            mt: 2,
            fontFamily: fonts.display,
            fontWeight: 800,
            fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
            letterSpacing: "-0.04em",
            lineHeight: 1.08,
          }}
        >
          Patagônia — Dezembro de 2018
        </Typography>
        <Typography
          sx={{
            mt: 2,
            fontSize: { xs: "1.125rem", md: "1.25rem" },
            color: colors.muted,
            lineHeight: 1.6,
          }}
        >
          Roteiro completo de 12 dias de viagem pela Patagônia Chilena e
          Argentina, com dicas práticas, trilhas e planilha de gastos.
        </Typography>

        <UsefulLinksBox />

        {/* Roteiro */}
        <SpotlightCard sx={{ p: { xs: 3, md: 4 }, my: 4 }}>
          <Typography
            component="h2"
            sx={{
              fontFamily: fonts.display,
              fontWeight: 700,
              fontSize: "1.375rem",
              color: colors.text,
              mb: 2.5,
            }}
          >
            ROTEIRO
          </Typography>
          <Box sx={{ display: "grid", gap: 1 }}>
            {itinerary.map((day) => (
              <Typography
                key={day}
                sx={{
                  fontSize: "1rem",
                  color: colors.muted,
                  py: 0.5,
                  borderBottom: `1px solid ${colors.border}`,
                  "&:last-child": { borderBottom: "none" },
                }}
              >
                {day}
              </Typography>
            ))}
          </Box>
        </SpotlightCard>

        {/* DIA 1 */}
        <DayTitle>DIA 1</DayTitle>
        <Paragraph>
          Saí de Pelotas-RS às 07h da manhã, do dia 12 de dezembro, com destino
          a Porto Alegre. De Porto Alegre, peguei um voo para Buenos Aires, onde
          cheguei por volta das 14h local. Ao chegar no aeroporto, fui direto
          procurar pelo Banco La Nacion, porém o câmbio estava muito ruim se
          comparado com o câmbio da{" "}
          <a
            href="https://www.facebook.com/cambiomais.brazucas/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mais Brazucas
          </a>
          . No Banco, a cotação tava R$8,70 e na Mais Brazucas estava R$9,40.
          Uma grande diferença, não? Então eu aproveitei o Wi-fi do aeroporto e
          resolvi pedir um Uber até a Calle Florida. <b>Atenção:</b> O motorista
          do Uber não tinha dinheiro algum pra pagar a tal da autopista (?),
          então ele ficou rodando até achar alguém que soubesse como chegar no
          centro sem ter que passar pela pista onde cobram para trafegar. Então,
          por via das dúvidas, é bom trocar o valor mínimo no banco que tem
          dentro do aeroporto.
        </Paragraph>
        <Paragraph>
          Após trocar o dinheiro na Mais Brazucas, fui bater perna no centro em
          busca de um chip de celular pra poder chamar um Uber até meu hostel.
          Depois de andar (e me perder) muito, eu encontrei uma loja da Claro. O
          chip custou $50 pesos argentinos + $150 pesos argentinos em créditos
          pra usar por 10 dias. Me foi muito útil, menos em El Chaltén, onde lá
          não tem sinal nenhum de celular.
        </Paragraph>

        <Grid container spacing={2} sx={{ my: 1 }}>
          <Grid item xs={12} sm={6}>
            <BlogImage src="/img/blog/Obelisco.jpg" alt="Obelisco" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BlogImage
              src="/img/blog/Maicon-Obelisco.jpg"
              alt="Selfie no Obelisco"
            />
          </Grid>
        </Grid>

        <Paragraph>
          Com o chip em mãos, comecei a minha saga em busca de um Uber. Em
          Buenos Aires, é muito burocrático pegar um Uber. Tu não pode pedir um
          Uber em qualquer rua. Tem que ser em ruas específicas e em local exato
          nessas ruas. Eu precisei caminhar quase 10 minutos até a rua certa
          para pedir um Uber. Achei que a minha saga teria acabado alí, mas não.
          Demora muito pra encontrar um motorista e está sempre na dinâmica.
          Quando eu finalmente encontrei um motorista, ele cancelou a corrida
          enquanto vinha até mim. Meia hora depois, consegui entrar em um carro.
        </Paragraph>
        <Paragraph>
          Do centro, fui para o{" "}
          <a
            href="https://www.booking.com/hotel/ar/puerto-limon-hostel.en.html?aid=1673278&no_rooms=1&group_adults=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Puerto Limon Hostel
          </a>
          . O hostel é bem bonito e moderno, porém o Wi-fi não funcionou direito
          no quarto de número 6. Paguei R$23 numa promoção de Black Friday.
          Valeu super a pena! Cama confortável e localização ótima!
        </Paragraph>

        {/* DIA 2 */}
        <DayTitle>DIA 2</DayTitle>
        <Paragraph>
          No dia seguinte, peguei um voo para El Calafate. Cheguei um pouco
          antes do meio-dia. Lá no aeroporto, eu peguei um transfer até a
          rodoviária. Custou $250 pesos. Almocei na frente da rodoviária e
          aguardei até as 16h30min pelo ônibus que vai até Puerto Natales.
        </Paragraph>
        <Paragraph>
          Como eu só ia chegar às 22h em Puerto Natales, resolvi trocar dinheiro
          só o necessário aqui no Brasil. Peguei uma cotação péssima, mas era a
          única opção. Troquei $40 mil pesos chilenos, onde $21 mil pesos era
          pra entrada do Parque Torres del Paine, $5 mil era para entrada na
          Cueva del Milodón (não recomendo) e $6 mil de transfer dentro do
          parque para o ínicio da trilha para a base das torres. O restante
          seria para compra de alimentação.
        </Paragraph>

        {/* DIA 3 */}
        <DayTitle>DIA 3</DayTitle>
        <Paragraph>
          Finalmente começa a viagem para valer! Como eu tinha pouco tempo
          disponível para a viagem, resolvi ficar 2 dias no Chile, onde, no
          primeiro dia, eu faria o{" "}
          <a
            href="https://www.denomades.com/pt/puerto-natales/full-day-torres-del-paine-id273"
            target="_blank"
            rel="noopener noreferrer"
          >
            Full Day Torres del Paine da Denomades
          </a>
          . Super recomendo esse passeio para quem não tem tempo suficiente para
          fazer o Circuito W. Neste passeio, a gente conheceu a Cueva del
          Milodón, um animal já extinto e que viveu na Patagônia há milhares de
          anos atrás, e fomos nos principais pontos do parque. Como, por
          exemplo: Lago Pehoe, Laguna Amarga, Lago Grey, entre outros.
        </Paragraph>

        <BlogImage
          src="/img/blog/Full-Day-Torres-del-Paine-1.jpg"
          alt="Full Day Torres del Paine 1"
        />
        <BlogImage
          src="/img/blog/Full-Day-Torres-del-Paine-2.jpg"
          alt="Full Day Torres del Paine 2"
        />

        <Paragraph>
          Sobre a Cueva del Milodón: só é interessante pra quem é da área da
          geologia, caso contrário, é R$30 jogados fora. É só um buraco com nada
          dentro e no fim tem uma estátua do Milodón para poder tirar foto.
          Apenas isso.
        </Paragraph>

        <BlogImage src="/img/blog/Milodon.jpg" alt="Milodón" />

        <Paragraph>
          Ah, fiquei hospedado no hostel{" "}
          <a
            href="https://www.booking.com/hotel/cl/el-fiordo.en.html?aid=1673278&no_rooms=1&group_adults=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            El Fiordo
          </a>
          . O hostel é super perto da rodoviária, de um mercadinho e de um
          supermercado! Ele só não tem tomadas do lado da cama, mas é um ótimo
          custo-benefício!
        </Paragraph>

        {/* DIA 4 */}
        <DayTitle>DIA 4</DayTitle>
        <Paragraph>
          Este dia foi punk. Saí de Puerto Natales as 07h sem comer nada e
          cheguei em Torres del Paine as 09h15min. Levei na mochila vários
          alimentos, como: três achocolatados, três bananas, bolacha água e sal,
          bolacha recheada de chocolate, barra de cereal, barra de chocolate...
          Porém, eu acho que não foi o suficiente para me dar energia para
          completar o trekking!
        </Paragraph>
        <Paragraph>
          Na ida, o que era pra ser feito em 4h, foi feito em 5h30min. São
          subidas constantes, o que acabou com as forças nas minhas pernas na
          volta. Para voltar, eu tomei um achocolatado e comi uma barra de
          chocolate inteirinha, o que me deu forças por 1h30min. Eu caminhava
          super rápido, quase correndo... tudo isso para conseguir chegar a
          tempo de pegar o ônibus de volta para a cidade de Puerto Natales, às
          19h. Porém, começou a me bater um sono danado, meus olhos tavam se
          fechando sozinhos e as minhas pernas não tinham mais forças para
          continuar. Sentei no chão duas vezes, coloquei o celular pra despertar
          em 10min e fechei os olhos. Na segunda vez que fiz isso, um casal
          inglês me viu e perguntou se eu estava bem. Falei que não, então eles
          me ajudaram me puxando pelo braço por alguns metros. Vendo que eu não
          tinha muita força para continuar, eles me deram muito açúcar, como:
          balas jujubas, chá com açúcar, chocolate Twix, além de água, nozes,
          bastão de trekking e ainda carregaram minha mochila que nem estava
          pesada. Foram realmente uns anjos em minha vida! Eu achava que ainda
          faltava muito para eu chegar ao meu destino, mas não... faltava só
          mais 01h30min.
        </Paragraph>
        <Paragraph>
          Eram 19h o horário em que eu cheguei ao hotel deles. Ainda faltavam
          mais uns 15min de caminhada até a entrada de onde começa a trilha,
          onde eu teria que pagar $3 mil num transfer que leva até a entrada do
          parque, onde ficam os ônibus. Ou seja, não dava mais tempo de eu pegar
          o meu ônibus às 19h. Eu já estava cogitando em pedir carona na beira
          da estrada. Porém, não foi preciso. O hotel{" "}
          <a
            href="https://www.booking.com/hotel/cl/las-torres-patagonia.en.html?aid=1673278&no_rooms=1&group_adults=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Las Torres
          </a>{" "}
          chamou um transfer particular que custou os olhos da cara! Foi $23 mil
          pesos chilenos só para me levar até a entrada do parque para poder
          pegar o ônibus.
        </Paragraph>
        <Paragraph>
          Mas não posso reclamar muito, pois eu nunca fui tão bem tratado na
          minha vida quanto lá no hotel! Eles me deram chá, barra de cereal,
          maçã verde, 500ml de chocolate quente e, ainda, botaram meus agasalhos
          para secar e me deram em torno de $6 dólares para me ajudar a pagar o
          último ônibus de volta para Puerto Natales.
        </Paragraph>

        <BlogImage
          src="/img/blog/Base-Torres-del-Paine.jpg"
          alt="Base das Torres del Paine"
          caption="Por fora sorrindo, por dentro morrendo"
        />

        {/* DIA 5 */}
        <DayTitle>DIA 5</DayTitle>
        <Paragraph>
          De manhã cedo, saí de Puerto Natales e fui até El Calafate de ônibus.
          Caminhei por uns 15min até o centro da cidade e almocei no primeiro
          restaurante que vi aberto. Eu estava bem enjoado (eu fiquei com um
          pouco de náuseas na trilha de TDP), então não deu pra comer tudo. Saí
          de lá e fui direto para o hostel{" "}
          <a
            href="https://www.booking.com/hotel/ar/hosteria-sir-thomas.en.html?aid=1673278&no_rooms=1&group_adults=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bla Guesthouse
          </a>
          . O atendimento no hostel foi super bom, porém não gostei de duas
          coisas: 1 é que o beliche fazia barulho ao se mexer na cama e, 2, por
          não ter um horário limite para fazer o checkin. Na minha última noite
          no hostel, eu fiquei com o quarto só pra mim até a meia-noite. Depois
          disso, chegou um grupo de 7 pessoas no meu quarto, onde ficaram
          conversando e alguns ainda foram para o banho. Não foi muito legal
          essa noite.
        </Paragraph>
        <Paragraph>
          No fim de tarde do primeiro dia em El Calafate, eu fui até a farmácia
          comprar um remédio para enjôo. A mulher me vendeu um sublingual com
          gosto tão ruim que, ao chegar na quadra do hostel, o remédio terminou
          de dissolver na língua e eu vomitei na rua, do lado do hostel. Por
          sorte, não havia ninguém por perto. Entrei correndo no hostel e
          vomitei mais um pouco no banheiro. 🙃
        </Paragraph>

        {/* DIA 6 */}
        <DayTitle>DIA 6</DayTitle>
        <Paragraph>
          Dia de fazer o mini trekking no Glaciar Perito Moreno!
        </Paragraph>
        <Paragraph>
          Às 08h30min, a{" "}
          <a
            href="http://hieloyaventura.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hielo y Aventura
          </a>{" "}
          veio até meu hostel me buscar de ônibus. Haviam vários brasileiros no
          passeio.
        </Paragraph>
        <Paragraph>
          O meu passeio foi na seguinte ordem: transfer de barco até o glaciar,
          mini trekking, almoço e transfer para as passarelas. Um outro grupo
          começou na ordem invertida.
        </Paragraph>
        <Paragraph>
          O mini trekking dura em torno de 01h30min. Esse é o tempo de uma das
          experiências mais incríveis da minha vida! Antes de começar, é
          colocado <em>grampons</em> nos calçados e nos é ensinado a como
          caminhar sobre o gelo. No final do mini trekking, é servido whisky com
          o gelo do glaciar. Pra quem não bebe, é servido água e bombons.
        </Paragraph>
        <Paragraph>
          Após retirarmos os <em>grampons</em>, a gente vai almoçar (tem que
          levar comida) com uma das paisagens mais lindas:
        </Paragraph>

        <Grid container spacing={2} sx={{ my: 1 }}>
          <Grid item xs={12} sm={6}>
            <BlogImage src="/img/blog/Grampons.jpg" alt="Grampons" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BlogImage
              src="/img/blog/Almoco-Perito-Moreno.jpg"
              alt="Almoço no Perito Moreno"
            />
          </Grid>
        </Grid>

        <Paragraph>
          No final do passeio, a gente foi levado de catamarã até o outro lado
          do parque, onde ficam as passarelas. Lá foi permitido caminhar pelas
          passarelas por 45 minutos, tempo mais que suficiente para tirar boas
          fotos!
        </Paragraph>

        <BlogImage
          src="/img/blog/Perito-Moreno-Passarela.JPG"
          alt="Passarelas do Perito Moreno"
        />
        <BlogImage
          src="/img/blog/Mini-trekking-Perito-Moreno.JPG"
          alt="Mini trekking no Perito Moreno"
        />

        <Paragraph>
          OBS: É obrigatório o uso de luvas para andar sobre a geleira. Caso não
          tenha, eles emprestam. Mas é bom levar sua própria luva. Outra coisa
          que é bom lembrar, é de usar protetor solar. Eu esqueci no dia e
          fiquei todo queimado.
        </Paragraph>

        {/* DIA 7 */}
        <DayTitle>DIA 7</DayTitle>
        <Paragraph>
          No sétimo dia, eu peguei um ônibus que vai de El Calafate até El
          Chaltén. A viagem não demora muito. Dura cerca de 3h. Chegando em El
          Chaltén, os ônibus param no Centro de Visitantes, onde nos é passado
          algumas informações da cidade e das trilhas. Após uma breve
          apresentação do que se tem para fazer na cidade, nos são dados dois
          folhetos com o mapa da cidade e das trilhas. Nesses mapas contém
          também a duração para fazer cada trilha, além de informações sobre os
          tipos de animais que vivem na Patagônia e de telefones úteis.
        </Paragraph>
        <Paragraph>
          Após essa recepção, fui até o{" "}
          <a
            href="https://www.booking.com/hotel/ar/auka.en.html?aid=1673278&no_rooms=1&group_adults=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hostel Wenüy
          </a>
          , onde eu fiquei hospedado 04 noites. O hostel é próximo da
          rodoviária, porém é um pouco distante da trilha para o Fitz Roy e para
          o Chorrillo del Salto. Porém a cidade é tão pequenininha, que em 15
          minutos se consegue chegar de ponta a ponta da cidade saindo do
          hostel. Sobre o hostel: ele tem um bom custo benefício, porém eu achei
          um pouco ruim os banheiros. As vezes as lixeiras estavam lotadas e o
          piso todo molhado. Também não possui sabonete líquido nos banheiros.
          Mas nada que tenha afetado minha estadia no local. O wi-fi do hostel é
          muito instável, assim como o wi-fi de qualquer estabelecimento da
          cidade. As vezes funciona normalmente e as vezes não consegue nem
          carregar os stories do Instagram. E, ah... a cidade não possui sinal
          nenhum de celular, então não tem como usar o pacote de dados nos
          momentos em que o wi-fi não está funcionando como deveria.
        </Paragraph>
        <Paragraph>
          Já era meio-dia quando eu terminei de fazer checkin e fui procurar
          restaurante pra almoçar. Acredita que tinha restaurante que nem estava
          aberto ainda? Entrei num achando que estava aberto, mas os
          funcionários recem estavam chegando. Pedi um prato que vinha com carne
          e a garçonete falou que ia demorar, pelo menos, 30 minutos para
          começar a fazer, então me sugeriu uma massa, pois seria mais rápido o
          preparo. E, realmente, foi bem rápido! Pedi um ravióli de cordeiro
          muito bom.
        </Paragraph>
        <Paragraph>
          Após o almoço, fui encontrar com 02 brasileiros para fazer a trilha
          dos Miradores Los Condores e Las Aguilas. As trilhas são bem
          tranquilas de serem feitas. Em 02 horas se consegue ir e voltar das
          trilhas. A trilha é bem bacana pra quem não tem muito tempo
          disponível. Ela serve como uma trilha coringa para dias nublados.
        </Paragraph>

        <BlogImage
          src="/img/blog/Trilha-Miradores-Los-Condores-e-Las-Aguilas.jpg"
          alt="Trilha dos Miradores Los Condores e Las Aguilas"
        />

        {/* DIA 8 */}
        <DayTitle>DIA 8</DayTitle>
        <Paragraph>
          Chegou o grande dia para conhecer o imponente Fitz Roy! Para fazer a
          trilha Laguna de Los Tres, tem duas opções: pagar $400 pesos num
          transfer que te leva até a Hosteria El Pilar ou sair caminhando pela
          cidade de El Chalten e fazer a trilha pelo caminho tradicional. Eu
          optei pela segunda opção por 02 motivos: achei bem salgado o preço do
          transfer e porque os dois brasileiros que eu conheci durante a viagem
          iriam pelo caminho tradicional. Achei mais seguro ir com eles.
        </Paragraph>
        <Paragraph>
          A diferença entre as duas opções de chegada até o Fitz Roy é que a
          segunda opção tem algumas subidas nos primeiro 2 ou 3km, mas depois
          fica bem tranquilo de chegar até o nono quilom. Do nono ao décimo é
          bem complicado. Nesse último trecho da trilha possui uma elevação de
          400m em 01km. Leva em torno de 01h para subir até o topo, mas vale a
          pena cada esforço!
        </Paragraph>
        <Paragraph>
          No dia 6, eu falei que o mini-trekking foi uma das experiências mais
          incríveis da minha vida. Porém, o Fitz Roy foi o ápice da minha
          viagem! O lugar é incrível! Toquei na neve pela primeira vez na minha
          vida e ainda brinquei de esquibunda nela hahaha.
        </Paragraph>

        <BlogImage src="/img/blog/Neve-Fitz-Roy.JPG" alt="Neve em Fitz Roy" />

        <Paragraph>
          A volta é um pouco tenso por conta da descida de 400m. É muito
          aconselhável alugar por $150 um par de bastão de trekking para ajudar
          a descer. A descida tem varias pedrinhas soltas pelo caminho... é
          fácil resbalar e cair de bunda no chão.
        </Paragraph>

        <BlogImage src="/img/blog/Fitz-Roy.JPG" alt="Fitz Roy" />

        {/* DIA 9 */}
        <DayTitle>DIA 9</DayTitle>
        <Paragraph>
          Após 20km de trilha no dia anterior, resolvi tirar o dia para
          descansar. Fiquei uma boa parte do tempo no hostel, porém eu saí pra
          procurar presentes para comprar e parei pra tomar umas cervejas em um
          dos barzinhos da cidade. Também aproveitei pra comer bastante
          empanadas no Che Empanadas. Sério, empanadas é muito bom! Lembra um
          pouco o gosto de um calzone.
        </Paragraph>

        {/* DIA 10 */}
        <DayTitle>DIA 10</DayTitle>
        <Paragraph>
          No meu último dia na Patagônia, o tempo ficou meio nublado, com cara
          de que ia chover. Como eu estava muito satisfeito com o Fitz Roy,
          achei melhor não fazer a trilha para a Laguna Torre. Essa trilha tem
          duração de 06h. São 02km a menos que a do Fitz Roy. Sendo assim,
          resolvi fazer uma trilha mais leve e escolhi a trilha para o Chorrillo
          del Salto, com duração de 01h30min. A trilha é pouco procurada, então
          não tinha ninguém indo para ela no horário que eu fui, só via gente
          voltando. Chegando lá, haviam algumas famílias e uma excursão, no qual
          ficaram pouco tempo apreciando a cachoeira, o que ficou ótimo para eu
          poder tirar umas fotos sem ninguém aparecer nelas.
        </Paragraph>

        <BlogImage
          src="/img/blog/Chorrillo-del-Salto.JPG"
          alt="Chorrillo del Salto"
        />

        {/* DIA 11 E 12 */}
        <DayTitle>DIA 11 E 12</DayTitle>
        <Paragraph>
          Chegou a hora de voltar a realidade. Voltei de ônibus para El
          Calafate, onde lá eu peguei um vôo para Córdoba pra depois pegar um
          vôo na madrugada para Buenos Aires. Cheguei no Brasil às 08h30min
          cheio de boas histórias para contar.
        </Paragraph>

        <UsefulLinksBox title="LINKS ÚTEIS" />
      </Container>
    </Box>
  );
}
