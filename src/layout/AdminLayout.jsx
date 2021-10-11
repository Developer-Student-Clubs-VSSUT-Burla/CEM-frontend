import { Container } from "@material-ui/core";

const AdminLayout = ({ children }) => {
  return (
    <Container maxWidth={false} disableGutters>
      {/* Admin <Navbar /> */}
      {children}
      {/*Admin <Footer /> */}
    </Container>
  );
};

export default AdminLayout;