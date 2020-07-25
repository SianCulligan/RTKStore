import React from "react";

function Footer() {
  const styles = {
    footer: {
      bottom: 0,
      textAlign: "center",
      position: "fixed",
      left: 0,
      width: "100%",
      height: "100px",
      fontFamily: "Jolly Lodger",
      backgroundImage:
        "url(https://media0.giphy.com/media/12wteMTXxjLaVO/200.gif)",
      color: "white",
      fontSize: "5rem"
    }
  };
  return (
    <footer>
      <div style={styles.footer}>
        <footer>
          <span>Mischief Managed</span>
        </footer>
      </div>
    </footer>
  );
}

export default Footer;
