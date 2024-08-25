import React from "react";

const Home = ({ walletAddress, setWalletAddress }) => {
  let subscribed = true;

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]); // Set the wallet address in App.jsx state
        console.log("Connected account:", accounts[0]);
      } catch (error) {
        console.error("User rejected connection:", error);
      }
    } else {
      alert(
        "MetaMask is not installed. Please install it to use this feature."
      );
    }
  };

  return (
    <div style={styles.container}>
      <h2>Welcome to My Quiz App</h2>
      {walletAddress ? (
        <>
          <p>Connected Account: {walletAddress}</p>

          {subscribed ? <button>Buy Subscription </button> : <div></div>}
        </>
      ) : (
        <>
          <p>Connect your MetaMask wallet to start using the app.</p>
          <button onClick={connectWallet} style={styles.button}>
            Connect MetaMask Wallet
          </button>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  button: {
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Home;
