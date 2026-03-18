import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faFolderOpen,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

export const title = "Interface Principal do Sistema";

export default function Slide5() {
  return (
    <div
      className="slide-container"
      style={{
        position: "relative",
        width: "1280px",
        height: "720px",
        overflow: "hidden",
        backgroundColor: "#f5f7fa",
      }}
    >
      {/* Header Accent Shape */}
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "0px",
          top: "0px",
          width: "250px",
          height: "8px",
          backgroundColor: "#003087",
          zIndex: "1",
        }}
      ></div>
      {/* Background Decorative Shape */}
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "1050px",
          top: "-50px",
          width: "300px",
          height: "300px",
          backgroundColor: "#e2e8f0",
          borderRadius: "50%",
          opacity: "0.4",
          zIndex: "1",
        }}
      ></div>
      {/* Main Title Textbox */}
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "80px",
          top: "60px",
          width: "1120px",
          height: "60px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Montserrat", sans-serif',
            fontSize: "44px",
            fontWeight: "800",
            color: "#003087",
            lineHeight: "1.2",
          }}
        >
          Interface Principal do Sistema
        </p>
      </div>
      {/* Description Textbox */}
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "80px",
          top: "130px",
          width: "1120px",
          height: "60px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "20px",
            fontWeight: "400",
            color: "#4a5568",
            lineHeight: "1.5",
          }}
        >
          A tela inicial consolidada centraliza o acesso rápido às funções
          diárias essenciais e indicadores operacionais, otimizando o fluxo de
          trabalho.
        </p>
      </div>
      {/* Pill 1 Background (Agendamentos) */}
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "80px",
          top: "210px",
          width: "200px",
          height: "44px",
          backgroundColor: "#ebf4ff",
          borderRadius: "22px",
          border: "1px solid #bee3f8",
          zIndex: "1",
        }}
      ></div>
      {/* Pill 1 Icon */}
      <div
        data-object="true"
        data-object-type="icon"
        style={{
          position: "absolute",
          left: "100px",
          top: "222px",
          width: "24px",
          height: "24px",
          zIndex: "10",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FontAwesomeIcon
          icon={faCalendarCheck}
          style={{ fontSize: "20px", color: "#0057b8" }}
        />
      </div>
      {/* Pill 1 Text */}
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "134px",
          top: "222px",
          width: "140px",
          height: "24px",
          zIndex: "10",
          display: "flex",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontFamily: '"Montserrat", sans-serif',
            fontSize: "16px",
            fontWeight: "700",
            color: "#003087",
          }}
        >
          Agendamentos
        </p>
      </div>
      {/* Pill 2 Background (Arquivo Documentos) */}
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "300px",
          top: "210px",
          width: "250px",
          height: "44px",
          backgroundColor: "#ebf4ff",
          borderRadius: "22px",
          border: "1px solid #bee3f8",
          zIndex: "1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></div>
      {/* Pill 2 Icon */}
      <div
        data-object="true"
        data-object-type="icon"
        style={{
          position: "absolute",
          left: "320px",
          top: "222px",
          width: "24px",
          height: "24px",
          zIndex: "10",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FontAwesomeIcon
          icon={faFolderOpen}
          style={{ fontSize: "20px", color: "#0057b8" }}
        />
      </div>
      {/* Pill 2 Text */}
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "354px",
          top: "222px",
          width: "190px",
          height: "24px",
          zIndex: "10",
          display: "flex",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontFamily: '"Montserrat", sans-serif',
            fontSize: "16px",
            fontWeight: "700",
            color: "#003087",
          }}
        >
          Arquivo / Documentos
        </p>
      </div>
      {/* Pill 3 Background (Cadastros) */}
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "570px",
          top: "210px",
          width: "160px",
          height: "44px",
          backgroundColor: "#ebf4ff",
          borderRadius: "22px",
          border: "1px solid #bee3f8",
          zIndex: "1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></div>
      {/* Pill 3 Icon */}
      <div
        data-object="true"
        data-object-type="icon"
        style={{
          position: "absolute",
          left: "590px",
          top: "222px",
          width: "24px",
          height: "24px",
          zIndex: "10",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FontAwesomeIcon
          icon={faAddressCard}
          style={{ fontSize: "20px", color: "#0057b8" }}
        />
      </div>
      {/* Pill 3 Text */}
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "624px",
          top: "222px",
          width: "100px",
          height: "24px",
          zIndex: "10",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            fontFamily: '"Montserrat", sans-serif',
            fontSize: "16px",
            fontWeight: "700",
            color: "#003087",
          }}
        >
          Cadastros
        </p>
      </div>
      {/* Hero Image Frame/Shadow Shape */}
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "80px",
          top: "280px",
          width: "1120px",
          height: "380px",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 15px 40px rgba(0, 0, 0, 0.1)",
          border: "1px solid #e2e8f0",
          zIndex: "1",
        }}
      ></div>
      {/* System Hero Image */}
      <img
        alt="Dashboard Principal Logado"
        data-object="true"
        data-object-type="image"
        src="img/Logado.png"
        style={{
          position: "absolute",
          left: "90px",
          top: "290px",
          width: "1100px",
          height: "360px",
          objectFit: "cover",
          objectPosition: "top",
          borderRadius: "8px",
          border: "1px solid #edf2f7",
          zIndex: "5",
        }}
      />
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "100px",
          top: "655px",
          width: "470px",
          height: "30px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "10px",
            color: "#4a5568",
            lineHeight: "1.6",
          }}
        >
          Clicar na imagem para amplicar
        </p>
      </div>
      {/* Footer Textbox */}
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "80px",
          top: "680px",
          width: "600px",
          height: "30px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "14px",
            fontWeight: "600",
            color: "#a0aec0",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          Clínica Escola de Fisioterapia — 2026
        </p>
      </div>
    </div>
  );
}
