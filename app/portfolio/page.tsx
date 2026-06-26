// app/portfolio/page.tsx
export default function PortfolioPage() {
  return (
    <iframe
      src="/ClipAndCode_Portfolio.html"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        border: "none",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        zIndex: 9999,
      }}
      title="Clip & Code Portfolio"
    />
  );
}