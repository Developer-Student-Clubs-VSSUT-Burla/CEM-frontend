import { Container } from "@material-ui/core";

const DefaultLayout = ({ children }) => {
  return (
    <Container maxWidth={false} disableGutters>
      {/* Base <Navbar /> */}
      {children}
      {/* Base <Footer /> */}
    </Container>
  );
};

export default DefaultLayout;