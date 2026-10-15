/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DiscordChannelsExplorer } from './components/DiscordChannelsExplorer';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';

export default function App() {
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);

  const handleOpenCheckout = (plan?: string) => {
    setSelectedPlan(plan);
    setCheckoutModalOpen(true);
  };

  const handleCloseCheckout = () => {
    setCheckoutModalOpen(false);
    setSelectedPlan(undefined);
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Fixed clean Navbar */}
      <Navbar onOpenCheckoutModal={(plan) => handleOpenCheckout(plan)} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Começo do site: Apresentação e Preços (Superpack R$ 59 / Fornecedores R$ 39) */}
        <HeroSection onOpenCheckoutModal={(plan) => handleOpenCheckout(plan)} />

        {/* Salas do Discord com os 52 canais */}
        <DiscordChannelsExplorer onSelectChannelBuy={(channel, plan) => handleOpenCheckout(plan)} />
      </main>

      {/* Footer simples e limpo */}
      <Footer />

      {/* Checkout / Modal de Redirecionamento para o Discord */}
      <CheckoutModal
        isOpen={checkoutModalOpen}
        onClose={handleCloseCheckout}
        planName={selectedPlan}
      />
    </div>
  );
}
