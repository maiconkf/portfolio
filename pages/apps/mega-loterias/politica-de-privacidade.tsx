import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";

export default function Home() {
  return (
    <Grid
      sx={{
        backgroundColor: "primary.dark",
        color: "primary.contrastText",
      }}
    >
      <Container>
        <Typography variant="h1" pt={4} pb={0.5}>
          Política de Privacidade
        </Typography>
        <Typography>Atualizado em: 17 de fevereiro de 2024</Typography>
        <Typography pt={3}>
          Esta Política de Privacidade descreve como as informações são
          coletadas, usadas e compartilhadas quando você usa o aplicativo
          &quot;Mega Loterias&quot;, que utiliza o Firebase para Analytics e o
          AdMob para exibição de anúncios. Ao usar nosso aplicativo, você
          concorda com as práticas de privacidade descritas abaixo.
        </Typography>
        <List sx={{ listStyle: "decimal", pl: 2 }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText primary="Informações Coletadas" />
            <List
              subheader={<ListSubheader>Firebase Analytics:</ListSubheader>}
              sx={{ listStyle: "disc", pt: 2 }}
            >
              <ListItem sx={{ display: "list-item", pl: 0 }}>
                <ListItemText primary="O Mega Loterias utiliza o Firebase Analytics para coletar informações anônimas sobre o uso do aplicativo. Isso inclui dados sobre interações com o aplicativo, como a frequência de uso, as telas visitadas e as ações realizadas. Essas informações são usadas para melhorar a qualidade e o desempenho do aplicativo." />
              </ListItem>
            </List>
            <List
              subheader={<ListSubheader>Admob:</ListSubheader>}
              sx={{ listStyle: "disc", pt: 2 }}
            >
              <ListItem sx={{ display: "list-item", pl: 0 }}>
                <ListItemText primary="O aplicativo exibe anúncios do AdMob, que podem coletar dados para personalizar os anúncios exibidos a você. Isso inclui informações sobre seu dispositivo, localização aproximada e interesses com base nas suas interações com o aplicativo. Esses dados ajudam a exibir anúncios relevantes para você." />
              </ListItem>
            </List>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText primary="Uso das Informações" />
            <List
              subheader={
                <ListSubheader>
                  As informações coletadas são usadas exclusivamente para os
                  seguintes fins:
                </ListSubheader>
              }
              sx={{ listStyle: "disc", pt: 2 }}
            >
              <ListItem sx={{ display: "list-item", pt: 1, pb: 0, px: 0 }}>
                <ListItemText primary="Melhorar o aplicativo Mega Loterias, tornando-o mais útil e eficiente." />
              </ListItem>
              <ListItem sx={{ display: "list-item", p: 0 }}>
                <ListItemText primary="Personalizar a exibição de anúncios com base em seus interesses." />
              </ListItem>
              <ListItem sx={{ display: "list-item", p: 0 }}>
                <ListItemText primary="Avaliar o desempenho e a usabilidade do aplicativo." />
              </ListItem>
            </List>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText primary="Compartilhamento de Informações" />
            <List sx={{ pt: 1 }}>
              <ListItem sx={{ display: "list-item", p: 0 }}>
                <ListItemText primary="Nós não compartilhamos suas informações com terceiros, a menos que seja exigido por lei ou para cumprir obrigações legais." />
              </ListItem>
            </List>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText primary="Segurança" />
            <List sx={{ pt: 1 }}>
              <ListItem sx={{ display: "list-item", p: 0 }}>
                <ListItemText primary="Nós nos esforçamos para proteger suas informações pessoais. O Firebase e o AdMob implementam medidas de segurança para proteger os dados coletados." />
              </ListItem>
            </List>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText primary="Cookies e Tecnologias Semelhantes" />
            <List sx={{ pt: 1 }}>
              <ListItem sx={{ display: "list-item", p: 0 }}>
                <ListItemText primary="O aplicativo não utiliza cookies nem tecnologias semelhantes para rastrear sua atividade." />
              </ListItem>
            </List>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText primary="Privacidade de Crianças" />
            <List sx={{ pt: 1 }}>
              <ListItem sx={{ display: "list-item", p: 0 }}>
                <ListItemText primary="O Mega Loterias não se destina a crianças menores de 13 anos. Não coletamos intencionalmente informações de crianças menores de 13 anos. Se você acredita que coletamos informações de uma criança, entre em contato conosco para que possamos tomar medidas adequadas." />
              </ListItem>
            </List>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText primary="Alterações na Política de Privacidade" />
            <List sx={{ pt: 1 }}>
              <ListItem sx={{ display: "list-item", p: 0 }}>
                <ListItemText primary="Podemos atualizar esta Política de Privacidade de tempos em tempos, para refletir alterações nas práticas de coleta e uso de informações. Recomendamos que você reveja periodicamente esta política." />
              </ListItem>
            </List>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText primary="Contato" />
            <List sx={{ pt: 1 }}>
              <ListItem sx={{ display: "list-item", p: 0 }}>
                <ListItemText primary="Se tiver alguma dúvida ou preocupação sobre esta Política de Privacidade ou o uso de suas informações, entre em contato conosco pelo seguinte endereço de e-mail: maiconkf.apps@gmail.com" />
              </ListItem>
            </List>
          </ListItem>
        </List>
        <Typography pb={6}>
          Ao continuar a usar o Mega Loterias, você concorda com esta Política
          de Privacidade.
        </Typography>
      </Container>
    </Grid>
  );
}
