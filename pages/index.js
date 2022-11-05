import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useMoralis } from "react-moralis";
import AvailableBorrowTable from "../components/AvailableBorrowTable";
import WalletBalanceTable from "../components/WalletBalanceTable";
import SuppliesTable from "../components/SuppliesTable";
import BorrowsTable from "../components/BorrowsTable";
import Moralis from "moralis";
import { useEffect, useState } from "react";
import contractAddresses from "../constants/networkMapping.json";
import erc20Abi from "../constants/Weth.json";
import { ethers } from "ethers";
import sbtAbi from "../constants/Sbt.json";
import { useNotification } from "web3uikit";

export default function Home() {
    const { isWeb3Enabled, chainId, account } = useMoralis();
    const [tokenBalances, setTokenBalances] = useState({});
    const [isFetching, setIsFetching] = useState(true);
    const [users, setUsers] = useState([]);
    const tokenAddresses = [];
    const tokenNames = ["WBTC", "WETH", "DAI", "USDC", "ST"];
    const dispatch = useNotification();

    async function handleSbtMint() {
        const { ethereum } = window;
        const provider = await new ethers.providers.Web3Provider(ethereum);
        const signer = await provider.getSigner();
        const address = await contractAddresses["Sbt"][parseInt(chainId)][0];
        const contract = await new ethers.Contract(address, sbtAbi, signer);
        const isMinted = await contract.isAlreadyMinted();
        console.log("!isMinted", !isMinted);
        try {
            if (!users.includes(account) && !isMinted) {
                console.log("minting");
                const tx = await contract.safeMint();
                const txReceipt = await tx.wait(1);
                if (txReceipt.status === 1) {
                    users.push(account);
                    handleSbtMintSuccess();
                    console.log("yes");
                }
            }
        } catch (e) {
            console.log(e);
        }
    }

    const handleSbtMintSuccess = async function () {
        dispatch({
            type: "success",
            title: "Sbt received!",
            message: "You can check your sbt on opensea testnet",
            position: "topR",
        });
    };

    async function getTokenAddreses() {
        for (let token of tokenNames) {
            tokenAddresses.push(contractAddresses[token][parseInt(chainId)][0]);
        }
    }

    async function fetchBalances() {
        const balances = [];
        try {
            const { ethereum } = window;
            const provider = await new ethers.providers.Web3Provider(ethereum);
            const signer = await provider.getSigner();
            for (let tokenAddress of tokenAddresses) {
                const contract = await new ethers.Contract(tokenAddress, erc20Abi, signer);
                const tokenBalance = await contract.balanceOf(account);
                balances.push(ethers.utils.formatEther(tokenBalance));
            }

            const allBalances = new Object();

            tokenNames.forEach((token, i) => {
                allBalances[token] = balances[i];
            });

            setTokenBalances(allBalances);
            setIsFetching(false);
        } catch (e) {
            console.log(e);
            console.log("Error is coming from fetchBalances");
        }
    }

    async function updateUI() {
        await getTokenAddreses();
        await fetchBalances();
    }

    useEffect(() => {
        if (isWeb3Enabled && chainId == 80001) {
            updateUI();
        }
    }, [isWeb3Enabled, tokenBalances]);

    useEffect(() => {
        if (isWeb3Enabled && chainId == 80001) {
            handleSbtMint();
        }
    }, [isWeb3Enabled]);

    return (
        <div className="col-span-3 pr-32">
            {isWeb3Enabled ? (
                <div>
                    {chainId == 80001 ? (
                        !isFetching ? (
                            <div className="">
                                <div className="">
                                    <SuppliesTable
                                        tokenBalances={tokenBalances}
                                        tokenAddresses={tokenAddresses}
                                        tokenNames={tokenNames}
                                        isFetching={isFetching}
                                    />
                                </div>
                                <div className="">
                                    <BorrowsTable
                                        tokenBalances={tokenBalances}
                                        tokenAddresses={tokenAddresses}
                                        tokenNames={tokenNames}
                                        isFetching={isFetching}
                                    />
                                </div>
                                <div className="">
                                    <WalletBalanceTable
                                        tokenBalances={tokenBalances}
                                        tokenAddresses={tokenAddresses}
                                        tokenNames={tokenNames}
                                        isFetching={isFetching}
                                    />
                                </div>
                                <div>
                                    <AvailableBorrowTable
                                        tokenBalances={tokenBalances}
                                        tokenAddresses={tokenAddresses}
                                        tokenNames={tokenNames}
                                        isFetching={isFetching}
                                    />
                                </div>
                            </div>
                        ) : (
                            <div>Loading....</div>
                        )
                    ) : (
                        <div>Plz Connect to Polygon Mumbai testnet</div>
                    )}
                </div>
            ) : (
                <div>Please Connect Your Wallet</div>
            )}
        </div>
    );
}
