import { faClipboardUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const title =
  "Enviando Lista para Recepção - Fila de Espera";

export default function Slide8_1() {
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
          width: "1200px",
          height: "60px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Montserrat", sans-serif',
            fontSize: "42px",
            fontWeight: "850",
            color: "#003087",
            lineHeight: "1.2",
          }}
        >
          Enviando Lista para Recepção - Fila de Espera
        </p>
      </div>
      {/* Description Textbox */}
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "80px",
          top: "145px",
          width: "1050px",
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
            margin: "3px 0 0 0",
          }}
        >
          Os professores podem enviar uma lista de pacientes para a recepção via sistema para que liguem
          para os pacientes.
        </p>
        <p
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "20px",
            fontWeight: "400",
            color: "#4a5568",
            lineHeight: "1.5",
            margin: "0px",
          }}
        >
          Podendo ver as queixas/relatos deixadas pelo paciente no momento da inclusão
          do paciente na fila de espera, para que possam priorizar os atendimentos.
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
        alt="Lista de paciente para enviar para ligação"
        data-object="true"
        data-object-type="image"
        src="img/Professor/tela_espera_ligacao_Prof_liga.png"
        style={{
          position: "absolute",
          left: "100px",
          top: "250px",
          width: "470px",
          height: "230px",
          objectFit: "contain",
          objectPosition: "top",
          borderRadius: "6px",
          border: "1px solid #edf2f7",
          zIndex: "5",
          cursor: "pointer",
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
          1. Lista de Pacientes Disponível
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
          O professor tem acesso a uma lista de pacientes que solicitaram
          atendimento e estão a disposição da clínica:
          <br />
          <span style={{ color: "#0057b8", fontWeight: "700" }}>
            • Dados e Queixa do Paciente
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
        <FontAwesomeIcon
          icon={faClipboardUser}
          style={{ fontSize: "40px", color: "#cbd5e0", display: "block" }}
        />
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
        alt="Detalhamento Clínico para ligação"
        data-object="true"
        data-object-type="image"
        src="img/Professor/tela_espera_ligacao_Prof_liga_liga.png"
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
          cursor: "pointer",
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
          2. Agendamento Detalhado com a Queixa
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
          O professor pode clicar no paciente para acessar um detalhamento clínico, com as seguintes informações:
          <br />
          <span style={{ color: "#0057b8", fontWeight: "700" }}>
            • Queixa (Trauma/Lesão)
          </span>
          <br />
          <span style={{ color: "#0057b8", fontWeight: "700" }}>
            • Enviar para Ligação
          </span>
          <br />
          <span style={{ color: "#0057b8", fontWeight: "700" }}>
            • Reencaminha para Fila
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
