// Helper function to parse fee amount from string
export const parseFeeAmount = (feeString) => {
  if (!feeString || feeString === 'FREE') return 0;
  
  // Extract numeric value from fee string (e.g., "$1", "₦200", "1.5%")
  const match = feeString.match(/[\d.]+/);
  return match ? parseFloat(match[0]) : 0;
};

// Helper function to check if fee is percentage
export const isFeePercentage = (feeString) => {
  return feeString && feeString.includes('%');
};

// Main fee calculation function
export const calculateFee = (amount, feeString) => {
  try {
    const numAmount = parseFloat(amount);
    
    if (!feeString || feeString === 'FREE' || isNaN(numAmount) || numAmount <= 0) {
      return 0;
    }

    let feeVal = 0;

    if (isFeePercentage(feeString)) {
      // Handle percentage fees like "1.5%" or "1.5% ($1 – $5)" or "2% ($1–$2)"
      const percentage = parseFeeAmount(feeString) / 100;
      feeVal = numAmount * percentage;
      
      // Check for min/max caps in the fee string
      const minMaxMatch = feeString.match(/\$(\d+(?:\.\d+)?)\s*[–-]\s*\$(\d+(?:\.\d+)?)/);
      if (minMaxMatch) {
        const minFee = parseFloat(minMaxMatch[1]);
        const maxFee = parseFloat(minMaxMatch[2]);
        if (!isNaN(minFee) && !isNaN(maxFee)) {
          feeVal = Math.max(minFee, Math.min(feeVal, maxFee));
        }
      }
    } else {
      // Handle fixed fees like "$1", "$0.50", "₦200"
      feeVal = parseFeeAmount(feeString);
    }

    return isNaN(feeVal) ? 0 : feeVal;
  } catch (error) {
    console.error('Error calculating fee:', error);
    return 0;
  }
};

// Function to get service details from fees data
export const getServiceFromFees = (fees, userType, category, serviceName) => {
  if (!fees || !userType || !category || !serviceName) return null;
  
  const categoryServices = fees[userType]?.[category];
  if (!categoryServices || !Array.isArray(categoryServices)) return null;
  
  return categoryServices.find(service => service.Service === serviceName);
};