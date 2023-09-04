import React from "react"; 

const Footer = () => {
  return (
    <footer style={StyleSheet.footer}>
      <p> Beth L. Haynes &copy:2023</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "navy",
    padding: "20px",
    textAlign: "center",
    fontSize: "12px",
    color: "white",
  },
}

export default Footer;