import { useEffect, useState } from "react";
import { Modal, Icon, useNotification, Input } from "web3uikit";
import starkAbi from "../constants/Stark.json";
import contractAddresses from "../constants/networkMapping.json";
import { useMoralis } from "react-moralis";
import { ethers } from "ethers";

export default function P2PModal({isVisible, onClose}) {
    const [borrowAmount, setBorrowAmount] = useState("0");
    const { isWeb3Enabled, account, chainId } = useMoralis();
    const [isOkDisabled, setIsOkDisabled] = useState(false);
    const [availableTokens, setAvailableTokens] = useState("0");
    const dispatch = useNotification();

    async function updateUI() {
        const { ethereum } = window;
        const provider = await new ethers.providers.Web3Provider(ethereum);
        const signer = await provider.getSigner();
        const contractAddress = await contractAddresses["Stark"][parseInt(chainId)][0];
        const contract = await new ethers.Contract(contractAddress, starkAbi, signer);
    }

    async function borrow() {
        try {
            if (+availableTokens < +borrowAmount) {
                alert("You can only borrow 80% of your collateral!");
                return;
            }
            // setIsOkDisabled(true);
            const { ethereum } = window;
            const provider = await new ethers.providers.Web3Provider(ethereum);
            const signer = await provider.getSigner();
            const contractAddress = await contractAddresses["Stark"][parseInt(chainId)][0];
            const contract = await new ethers.Contract(contractAddress, starkAbi, signer);
            // console.log("Borrowing...");
            // const tx = await contract.borrow(
            //     tokenAddresses[borrowIndex],
            //     ethers.utils.parseEther(borrowAmount)
            // );
            // const txReceipt = await tx.wait(1);
            // if (txReceipt.status === 1) {
            //     console.log("Borrowed!");
            // setIsOkDisabled(false);
            //     handleBorrowSuccess();
            // } else {
            //     alert("Transaction Failed for some reason. Please try again!");
            //     setIsOkDisabled(false);
            // }
        } catch (e) {
            console.log(e);
            console.log("This error is coming from `BorrowModal` borrow function");
            setIsOkDisabled(false);
        }
    }

    const handleBorrowSuccess = async function () {
        onClose && onClose();
        dispatch({
            type: "success",
            title: "Asset Borrowed!",
            message: "Asset Borrowed - Please Refresh",
            position: "topR",
        });
    };

    useEffect(() => {
        updateUI();
    }, [isWeb3Enabled]);

    return (
        <div className="pt-2">
            <Modal
                isVisible={isVisible}
                onCancel={onClose}
                onCloseButtonPressed={onClose}
                onClose={onClose}
                // onOk={borrow}
                title="Raise P2P Request"
                width="450px"
                isCentered={true}
                isOkDisabled={false}
            >
                <div
                    style={{
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                    className="p-4"
                >
                    <div className="p-4">
                        <Input
                            label="Amount"
                            name="Amount"
                            type="text"
                            onChange={(event) => {
                                setBorrowAmount(event.target.value);
                            }}
                        />
                    </div>
                    <div className="p-4">
                        <Input
                            label="Rented Until (in years)"
                            name="Rented Until"
                            type="text"
                            onChange={(event) => {
                                setBorrowAmount(event.target.value);
                            }}
                        />
                    </div>
                </div>
            </Modal>
        </div>
    );
}
