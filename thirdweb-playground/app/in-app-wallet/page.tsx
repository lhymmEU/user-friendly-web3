'use client';
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { ConnectButton } from "thirdweb/react";
import { client } from "../client";
import { inAppWallet } from "thirdweb/wallets";

const InAppWalletPage = () => {
    return (
        <div className="py-20">
            <Header 
                title="In-App Wallets"
                subtitle="Learn what In-App Wallets are and how to implement them into your app."
            />
            <InAppWalletOptions />
            <Footer />
        </div>
    )
};

const InAppWalletOptions = () => {
    return (
      <div className="grid gap-4 lg:grid-cols-3 justify-center">
        <AllOptions />
        <EmailOnly />
        <SocialOnly />
        <PhonePassKey />
      </div>
    );
};

// Default In-App Wallet options (all options)
const AllOptions = () => {
    return (
        <div className="flex flex-col items-center mb-20 md:mb-20">
            <p  className="text-zinc-300 text-base mb-4 md:mb-4">All Options</p>
            <ConnectButton client={client}/>
        </div>
    )
};

// In-App Wallet options with email only
const EmailOnly = () => {
    return (
        <div className="flex flex-col items-center mb-20 md:mb-20">
            <p  className="text-zinc-300 text-base mb-4 md:mb-4">Email Only</p>
            <ConnectButton
                client={client}
                wallets={[ inAppWallet({
                    auth: {
                        options: [
                            "email"
                        ]
                    }
                })]} />
        </div>
    )
};

// In-App Wallet options with social only
const SocialOnly = () => {
    return (
        <div className="flex flex-col items-center mb-20 md:mb-20">
            <p  className="text-zinc-300 text-base mb-4 md:mb-4">Social Only</p>
            <ConnectButton
                client={client}
                wallets={[ inAppWallet({
                    auth: {
                        options: [
                            "google",
                            "facebook",
                            "apple"
                        ]
                    }
                })]} />
        </div>
    )
};

// In-App Wallet options with phone and pass key
const PhonePassKey = () => {
    return (
        <div className="flex flex-col items-center mb-20 md:mb-20">
            <p  className="text-zinc-300 text-base mb-4 md:mb-4">Phone + Pass Key</p>
            <ConnectButton
                client={client}
                wallets={[ inAppWallet({
                    auth: {
                        options: [
                            "phone",
                            "passkey",
                        ]
                    }
                })]} />
        </div>
    )
};

export default InAppWalletPage;