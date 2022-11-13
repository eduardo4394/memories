import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";

import Posts from "./components/Posts/Posts";
import memories from "./images/logo-memories.png";
import Form from "./components/Form/Form";
import styled from "@emotion/styled";

const MyAppBar = styled(AppBar)({
  borderRadius: 15,
  margin: "30px 0",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
});

function App() {
  return (
    <Container maxWidth="lg">
      <MyAppBar position="static" color="inherit">
        <Typography>
          <img
            src={memories}
            alt="memorie's logo"
            style={{ width: "120px", height: "100%" }}
          />
        </Typography>
      </MyAppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
