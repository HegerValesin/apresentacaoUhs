import { faClipboardUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const title = "Cadastro e Inclusão na Fila de Espera";

export default function Slide8() {
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
          left: "-150px",
          top: "500px",
          width: "400px",
          height: "220px",
          backgroundColor: "#e2e8f0",
          borderRadius: "50% 50% 0 0",
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
          width: "1000px",
          height: "60px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Montserrat", sans-serif',
            fontSize: "42px",
            fontWeight: "800",
            color: "#003087",
            lineHeight: "1.2",
          }}
        >
          Cadastro e Inclusão na Fila de Espera
        </p>
      </div>
      {/* Form Icon */}
      <div
        data-object="true"
        data-object-type="icon"
        style={{
          position: "absolute",
          left: "1100px",
          top: "60px",
          width: "60px",
          height: "60px",
          zIndex: "10",
          alignItems: "center",
        }}
      >
        <FontAwesomeIcon icon={faClipboardUser} style={{ fontSize: "48px", color: "#0057b8", display: "block", opacity: "0.8", alignItems: "center", padding:"30px 25px 30px 0" }} /> 
      </div>
      {/* Description Textbox */}
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "80px",
          top: "140px",
          width: "1000px",
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
          O processo de triagem e inclusão na fila assegura o registro
          estruturado de informações essenciais, garantindo que o paciente seja
          direcionado ao fluxo clínico e educacional adequado.
        </p>
      </div>
      {/* CARD 1 Shape */}
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "80px",
          top: "230px",
          width: "510px",
          height: "440px",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
          border: "1px solid #e2e8f0",
          zIndex: "1",
        }}
      ></div>
      {/* CARD 1 Image */}
      <img
        alt="Modal de Cadastro Parte 1"
        data-object="true"
        data-object-type="image"
        src="img/Recepcao/incluir_fila_espera_paciente.png"
        style={{
          position: "absolute",
          left: "100px",
          top: "250px",
          width: "470px",
          height: "230px",
          objectFit: "cover",
          objectPosition: "top",
          borderRadius: "6px",
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
          top: "470px",
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
      {/* CARD 1 Title */}
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "100px",
          top: "500px",
          width: "470px",
          height: "30px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Montserrat", sans-serif',
            fontSize: "22px",
            fontWeight: "700",
            color: "#003087",
          }}
        >
          1. Dados Iniciais de Vínculo
        </p>
      </div>
      {/* CARD 1 Text */}
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "100px",
          top: "535px",
          width: "470px",
          height: "110px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "16px",
            color: "#4a5568",
            lineHeight: "1.6",
          }}
        >
          O cadastramento inicia estabelecendo a base da identidade e
          direcionamento do paciente:
          <br />
          <span style={{ color: "#0057b8", fontWeight: "700" }}>
            • Dados do Paciente
          </span>
          <br />
          <span style={{ color: "#0057b8", fontWeight: "700" }}>
            • Dados da Vaga
          </span>
          <br />
          <span style={{ color: "#0057b8", fontWeight: "700" }}>
            • Especialidade
          </span>
        </p>
      </div>
      {/* Arrow Connector Icon */}
      <div
        data-object="true"
        data-object-type="icon"
        style={{
          position: "absolute",
          left: "620px",
          top: "415px",
          width: "40px",
          height: "40px",
          zIndex: "10",
        }}
      >
        <i
          className="fa-solid fa-circle-arrow-right"
          style={{ fontSize: "40px", color: "#cbd5e0", display: "block" }}
        ></i>
      </div>
      {/* CARD 2 Shape */}
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "690px",
          top: "230px",
          width: "510px",
          height: "440px",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
          border: "1px solid #e2e8f0",
          zIndex: "1",
        }}
      ></div>
      {/* CARD 2 Image */}
      <img
        alt="Modal de Cadastro Parte 2"
        data-object="true"
        data-object-type="image"
        src="img/Recepcao/incluir_fila_espera_dados.png"
        style={{
          position: "absolute",
          left: "710px",
          top: "250px",
          width: "470px",
          height: "230px",
          objectFit: "cover",
          objectPosition: "center",
          borderRadius: "6px",
          border: "1px solid #edf2f7",
          zIndex: "5",
        }}
      />
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "710px",
          top: "470px",
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
      {/* CARD 2 Title */}
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "710px",
          top: "500px",
          width: "470px",
          height: "30px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Montserrat", sans-serif',
            fontSize: "22px",
            fontWeight: "700",
            color: "#003087",
          }}
        >
          2. Detalhamento Clínico
        </p>
      </div>
      {/* CARD 2 Text */}
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "710px",
          top: "535px",
          width: "470px",
          height: "110px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "16px",
            color: "#4a5568",
            lineHeight: "1.6",
          }}
        >
          Registro das condições de saúde e alinhamento com a disciplina/projeto
          acadêmico:
          <br />
          <span style={{ color: "#0057b8", fontWeight: "700" }}>
            • Projeto / Estratégia
          </span>
          <br />
          <span style={{ color: "#0057b8", fontWeight: "700" }}>
            • Queixa (Trauma/Lesão)
          </span>
          <br />
          <span style={{ color: "#0057b8", fontWeight: "700" }}>
            • Diagnóstico Clínico
          </span>
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
