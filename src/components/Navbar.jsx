import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link to="./" style={styles.link}>
        Home
      </Link>
      <Link to="./about" style={styles.link}>
        About us
      </Link>
    </nav>
  );
}

const styles = {
  nav: {
    background: "#6b3a3a",
    padding: "10px",
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    padding: "6px 12px",
    background: "#a77474",
    borderRadius: "5px",
  },
};
