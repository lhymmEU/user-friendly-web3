"use client";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";

const ConnectButton = () => {
  return (
    <div className="py-20">
      <Header
        title="ConnectButton UI Component"
        subtitle="Learn what our ConnectButton UI component is, how to use it, and how to customize it."
      />
      <ConnectButtons />
      <Footer />
    </div>
  );
};

const ConnectButtons = () => {
  return (
    <div className="grid gap-4 lg:grid-cols-3 justify-center">
      <DefaultConnectButton />
      <CustomWallets />
      <ButtonApperance />
      <CustomThemeButton />
    </div>
  );
};

// Default button UI component
const DefaultConnectButton = () => {
  return (
    <div className="flex flex-col items-center mb-20 md:mb-20">
      <p className="text-zinc-300 text-base mb-4 md:mb-4">
        Default ConnectButton Component
      </p>
    </div>
  );
};

// Display customized wallets in connect button
const CustomWallets = () => {
  // TODO: create an array of recommended wallets

  // TODO: create an array of wallets to display

  return (
    <div className="flex flex-col items-center mb-20 md:mb-20">
      <p className="text-zinc-300 text-base mb-4 md:mb-4">
        Customize Wallets Displayed
      </p>
    </div>
  );
};

// Customize button and modal appearance
const ButtonApperance = () => {
  return (
    <div className="flex flex-col items-center mb-20 md:mb-20">
      <p className="text-zinc-300 text-base mb-4 md:mb-4">
        Customize Button Apperance
      </p>
    </div>
  );
};

// Customize welcome screen
const CustomWelcomeScreen = () => {
    return (
        <div></div>
    );
};

const CustomThemeButton = () => {
    return (
        <div className="flex flex-col items-center mb-20 md:mb-20">
            <p  className="text-zinc-300 text-base mb-4 md:mb-4">Customize Button Theme</p>
        </div>
    );
};

export default ConnectButton;