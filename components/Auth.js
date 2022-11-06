import { Client } from "@xmtp/xmtp-js";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { Button, Input, Hero, Widget } from "web3uikit";
import Messages from "./Messages";
import RequestLoanModal from "./RequestLoanModal";

export default function Auth() {
    const { account, isWeb3Enabled } = useMoralis();
    const [xmtp, setXmtp] = useState();
    const [signed, setSigned] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [address, setAddress] = useState("");
    const [conversation, setConversation] = useState();
    const [message, setMessage] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [connected, setConnected] = useState(false);

    async function sign() {
        setButtonDisabled(true);
        const { ethereum } = window;
        const provider = await new ethers.providers.Web3Provider(ethereum);
        const signer = await provider.getSigner();
        const xmtp = await Client.create(signer);
        setXmtp(xmtp);
        setSigned(true);
        setButtonDisabled(false);
    }

    async function chat() {
        try {
            if (!signed) return;
            const conversation = await xmtp.conversations.newConversation(address);
            setConversation(conversation);
            setConnected(true);
        } catch (e) {
            console.log("This error is coming from chat Auth component");
            console.log(e);
        }
    }

    async function handleSend() {
        if (message.length == 0) return;
        await conversation.send(message);
        await chat();
    }

    async function updateUI() {
        await chat();
    }

    useEffect(() => {
        updateUI();
    }, [isWeb3Enabled, signed]);

    return (
        <div>
            {!signed ? (
                <div className="flex justify-center p-12 pr-32">
                    <Button
                        onClick={sign}
                        text="Sign In"
                        theme="primary"
                        type="button"
                        size="large"
                        disabled={buttonDisabled}
                        isLoading={buttonDisabled}
                    />
                </div>
            ) : (
                <div className="grid grid-cols-4">
                    <div className="p-4 col-span-3">
                        {conversation ? (
                            <Messages address={address} conversation={conversation} />
                        ) : (
                            <div></div>
                        )}
                    </div>
                    <div
                        style={{
                            width: "50vh",
                        }}
                    >
                        <div>
                            <Hero
                                align="left"
                                height="30%"
                                linearGradient="linear-gradient(113.54deg, rgba(60, 87, 140, 0.5) 14.91%, rgba(70, 86, 169, 0.5) 43.21%, rgba(125, 150, 217, 0.345) 44.27%, rgba(129, 161, 225, 0.185) 55.76%), linear-gradient(151.07deg, #141659 33.25%, #4152A7 98.24%)"
                                textColor="#fff"
                            >
                                <div className="p-2">
                                    <Input
                                        name="message"
                                        width="90px"
                                        prefixIcon="eth"
                                        onChange={(e) => {
                                            setAddress(e.target.value);
                                        }}
                                        onBlur={(e) => {
                                            e.target.value = "";
                                        }}
                                    />
                                </div>
                                <Button
                                    icon="plus"
                                    text="Add new conversation"
                                    theme="primary"
                                    size="large"
                                    onClick={() => chat()}
                                    isLoading={buttonDisabled}
                                />
                                <div className="p-2 pl-24 text-white">Powered by XMTP</div>
                            </Hero>
                        </div>
                    </div>
                    <div className="absolute bottom-32 right-96">
                        <Input
                            label="Enter your message"
                            name="message"
                            width="900px"
                            prefixIcon="mail"
                            onChange={(e) => {
                                setMessage(e.target.value);
                            }}
                            onBlur={(e) => {
                                e.target.value = "";
                            }}
                        />
                    </div>
                    <div className="absolute bottom-32 right-64">
                        <Button
                            id="test-button-primary"
                            text="Send"
                            theme="primary"
                            type="button"
                            size="large"
                            onClick={() => handleSend()}
                            disabled={!connected}
                        />
                    </div>
                    <div className="absolute bottom-32 right-32">
                        <Button
                            id="test-button-primary"
                            text="Request"
                            theme="colored"
                            color="yellow"
                            type="button"
                            size="large"
                            onClick={() => setShowModal(true)}
                            disabled={!connected}
                        />
                    </div>

                    <RequestLoanModal
                        isVisible={showModal}
                        onClose={() => setShowModal(false)}
                        address={address}
                    />
                </div>
            )}
        </div>
    );
}
