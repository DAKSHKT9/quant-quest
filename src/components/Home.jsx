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

  const buySubscription = async () => {
    if (!walletAddress) {
      alert("Please connect your wallet first.");
      return;
    }

    try {
      // Connect to Ethereum provider
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      // Contract details
      const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // Replace with your contract address
      const contractABI = [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "buy_subscription",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address[]",
              name: "toppers",
              type: "address[]",
            },
            {
              internalType: "uint256[]",
              name: "payment",
              type: "uint256[]",
            },
          ],
          name: "weekly_pay",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          stateMutability: "payable",
          type: "receive",
        },
      ];
      // Create a contract instance
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      // Send a transaction to call buySubscription
      const tx = await contract.buySubscription({
        value: ethers.utils.parseEther("0.1"), // Replace with the correct value required for the subscription
      });

      console.log("Transaction sent:", tx.hash);

      // Wait for the transaction to be mined
      await tx.wait();
      console.log("Transaction confirmed:", tx.hash);
      alert("Subscription purchased successfully!");
    } catch (error) {
      console.error("Transaction failed:", error);
      alert("Transaction failed. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Welcome to My Quiz App</h2>
      {walletAddress ? (
        <>
          <p>Connected Account: {walletAddress}</p>

          {subscribed ? (
            <button onClick={buySubscription}>Buy Subscription </button>
          ) : (
            <div></div>
          )}
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
