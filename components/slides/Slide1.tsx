export const title = "UHS — Universidade Christus Health System";

export default function Slide1() {
  return (
    <div
      className="slide-container"
      style={{
        position: "relative",
        width: "1280px",
        height: "720px",
        overflow: "hidden",
        backgroundColor: "#003087",
      }}
    >
      {/* Decorative Background Shape (Right Side Light Area) */}
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "850px",
          top: "0px",
          width: "430px",
          height: "720px",
          backgroundColor: "#002266",
          zIndex: "1",
        }}
      ></div>
      {/* Decorative Watermark Icon */}
      <div
        data-object="true"
        data-object-type="icon"
        style={{
          position: "absolute",
          left: "860px",
          top: "320px",
          width: "400px",
          height: "400px",
          zIndex: "1",
          opacity: "0.05",
        }}
      >
        <i
          className="fa-solid fa-notes-medical"
          style={{ fontSize: "350px", color: "#ffffff", display: "block" }}
        ></i>
      </div>
      {/* Medical Icon */}
      <div
        data-object="true"
        data-object-type="icon"
        style={{
          position: "absolute",
          left: "80px",
          top: "120px",
          width: "64px",
          height: "64px",
          zIndex: "10",
        }}
      >
        <i
          className="fa-solid fa-staff-snake"
          style={{ fontSize: "58px", color: "#4da6ff", display: "block" }}
        ></i>
      </div>
      {/* Main Title Textbox */}
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "80px",
          top: "220px",
          width: "680px",
          height: "160px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Montserrat", sans-serif',
            fontSize: "56px",
            fontWeight: "800",
            color: "#ffffff",
            lineHeight: "1.2",
          }}
        >
          UHS — Universidade Christus Health System
        </p>
      </div>
      {/* Subtitle Textbox */}
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "80px",
          top: "390px",
          width: "650px",
          height: "80px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "26px",
            fontWeight: "400",
            color: "#e0e4f0",
            lineHeight: "1.5",
          }}
        >
          Sistema Integrado de Gestão Clínica e Educacional
        </p>
      </div>
      {/* Footer Textbox */}
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "80px",
          top: "640px",
          width: "600px",
          height: "40px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "16px",
            fontWeight: "600",
            color: "#a0b0d0",
            textTransform: "uppercase",
            letterSpacing: "1.5px",
          }}
        >
          Clínica Escola de Fisioterapia — 2026
        </p>
      </div>
      {/* Image Shadow/Offset Shape */}
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "780px",
          top: "140px",
          width: "420px",
          height: "460px",
          backgroundColor: "#00174a",
          borderRadius: "12px",
          zIndex: "1",
        }}
      ></div>
      {/* Dashboard/System Image */}
      <img
        alt="Tela inicial do sistema UHS"
        data-object="true"
        data-object-type="image"
        src="img/Login2.png"
        style={{
          position: "absolute",
          left: "750px",
          top: "110px",
          width: "420px",
          height: "460px",
          borderRadius: "12px",
          objectFit: "cover",
          border: "4px solid #ffffff",
          boxShadow: "0 15px 35px rgba(0, 0, 0, 0.4)",
          zIndex: "5",
        }}
      />
    </div>
  );
}
