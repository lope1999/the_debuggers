import { Share2, Download, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function ShareCalculation({ 
  theme, 
  amount, 
  fee, 
  net, 
  currency, 
  service, 
  category 
}) {
  const [copied, setCopied] = useState(false);

  if (!service) return null;

  const formatCurrency = (value) => {
    const symbol = currency === 'NGN' ? '₦' : '$';
    return `${symbol}${parseFloat(value).toFixed(2)}`;
  };

  const generateShareText = () => {
    return `💰 Fee Calculation

Service: ${service}
Category: ${category}

Amount: ${formatCurrency(amount)}
Fee: ${formatCurrency(fee)}
You Receive: ${formatCurrency(net)}

Calculated using PaySwap Fee Calculator
${window.location.href}

#vitalswaphackathon2025 #theDebuggers`;
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generateShareText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const shareNative = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Fee Calculation',
          text: generateShareText()
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      copyToClipboard();
    }
  };

  const downloadAsImage = () => {
    // Create a simple text-based receipt
    const canvas = document.createElement('canvas');
    canvas.width = 600;
    canvas.height = 700;
    const ctx = canvas.getContext('2d');

    // Background
    const gradient = ctx.createLinearGradient(0, 0, 600, 700);
    gradient.addColorStop(0, theme === 'dark' ? '#1e293b' : '#f8fafc');
    gradient.addColorStop(1, theme === 'dark' ? '#0f172a' : '#e2e8f0');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 600, 700);

    // Header
    ctx.fillStyle = theme === 'dark' ? '#ffffff' : '#1e293b';
    ctx.font = 'bold 32px Inter, system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Fee Calculation', 300, 80);

    ctx.font = '18px Inter, system-ui, sans-serif';
    ctx.fillStyle = theme === 'dark' ? '#94a3b8' : '#64748b';
    ctx.fillText(new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }), 300, 115);

    // Divider
    ctx.strokeStyle = theme === 'dark' ? '#334155' : '#cbd5e1';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(50, 145);
    ctx.lineTo(550, 145);
    ctx.stroke();

    // Service Info
    ctx.font = 'bold 24px Inter, system-ui, sans-serif';
    ctx.fillStyle = theme === 'dark' ? '#ffffff' : '#1e293b';
    ctx.textAlign = 'left';
    ctx.fillText('Service Details', 50, 200);

    ctx.font = '18px Inter, system-ui, sans-serif';
    ctx.fillStyle = theme === 'dark' ? '#94a3b8' : '#64748b';
    ctx.fillText(`Service: ${service}`, 50, 240);
    ctx.fillText(`Category: ${category}`, 50, 275);

    // Amounts Box
    const boxY = 330;
    ctx.fillStyle = theme === 'dark' ? '#1e3a8a' : '#dbeafe';
    ctx.fillRect(50, boxY, 500, 280);

    ctx.fillStyle = theme === 'dark' ? '#ffffff' : '#1e293b';
    
    // Amount
    ctx.font = '18px Inter, system-ui, sans-serif';
    ctx.fillText('Amount', 80, boxY + 50);
    ctx.font = 'bold 28px Inter, system-ui, sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText(formatCurrency(amount), 520, boxY + 50);

    // Fee
    ctx.textAlign = 'left';
    ctx.font = '18px Inter, system-ui, sans-serif';
    ctx.fillText('Fee', 80, boxY + 120);
    ctx.fillStyle = '#ef4444';
    ctx.font = 'bold 28px Inter, system-ui, sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText(formatCurrency(fee), 520, boxY + 120);

    // Divider in box
    ctx.strokeStyle = theme === 'dark' ? '#3b82f6' : '#93c5fd';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(80, boxY + 160);
    ctx.lineTo(520, boxY + 160);
    ctx.stroke();

    // You Receive
    ctx.textAlign = 'left';
    ctx.fillStyle = theme === 'dark' ? '#ffffff' : '#1e293b';
    ctx.font = 'bold 24px Inter, system-ui, sans-serif';
    ctx.fillText('You Receive', 80, boxY + 210);
    ctx.fillStyle = '#22c55e';
    ctx.font = 'bold 36px Inter, system-ui, sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText(formatCurrency(net), 520, boxY + 210);

    // Footer
    ctx.fillStyle = theme === 'dark' ? '#64748b' : '#94a3b8';
    ctx.font = '16px Inter, system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('PaySwap Fee Calculator - The Debuggers', 300, 660);

    // Download
    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `fee-calculation-${Date.now()}.png`;
      a.click();
      URL.revokeObjectURL(url);
    });
  };

  return (
    <div className="flex flex-wrap gap-3 justify-center mt-6">
      <button
        onClick={shareNative}
        className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
          theme === "dark"
            ? "bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 border border-blue-500/30"
            : "bg-blue-100 text-blue-700 hover:bg-blue-200 border border-blue-200"
        }`}
      >
        <Share2 className="w-5 h-5" />
        Share
      </button>

      <button
        onClick={copyToClipboard}
        className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
          theme === "dark"
            ? "bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 border border-purple-500/30"
            : "bg-purple-100 text-purple-700 hover:bg-purple-200 border border-purple-200"
        }`}
      >
        {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
        {copied ? 'Copied!' : 'Copy'}
      </button>

      <button
        onClick={downloadAsImage}
        className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
          theme === "dark"
            ? "bg-green-500/20 text-green-400 hover:bg-green-500/30 border border-green-500/30"
            : "bg-green-100 text-green-700 hover:bg-green-200 border border-green-200"
        }`}
      >
        <Download className="w-5 h-5" />
        Download Image
      </button>
    </div>
  );
}
