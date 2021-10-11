import { Container } from "@material-ui/core";
import AdminNavbar from "../components/navbar/AdminNavbar"

const AdminLayout = ({ children }) => {
  return (
    <Container maxWidth={false} disableGutters>
      <AdminNavbar />
      {children}
      {/*Admin <Footer /> */}
    </Container>
  );
};

export default AdminLayout;