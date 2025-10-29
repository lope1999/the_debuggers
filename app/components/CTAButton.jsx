"use client";
export default function CTAButton({ swapTag, onClick, label = "Swap Now" }) {
  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={onClick}
      data-swap-tag={swapTag}
      style={{ marginTop: 12 }}
    >
      {label} {swapTag ? <span className="badge bg-light text-dark ms-2">{swapTag}</span> : null}
    </button>
  );
}
