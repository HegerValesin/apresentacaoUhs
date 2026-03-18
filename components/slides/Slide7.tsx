import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const title = "Módulo: Fila de Espera";

export default function Slide7() {
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
          width: "800px",
          height: "60px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Montserrat", sans-serif',
            fontSize: "48px",
            fontWeight: "800",
            color: "#003087",
            lineHeight: "1.2",
          }}
        >
          Módulo: Fila de Espera
        </p>
      </div>
      {/* Icon */}
      <div
        data-object="true"
        data-object-type="icon"
        style={{
          position: "absolute",
          left: "1140px",
          top: "60px",
          width: "60px",
          height: "60px",
          zIndex: "10",
        }}
      >
        <i
          className="fa-solid fa-users-line"
          style={{
            fontSize: "48px",
            color: "#0057b8",
            display: "block",
            opacity: "0.8",
          }}
        ></i>
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
          height: "80px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "22px",
            fontWeight: "400",
            color: "#4a5568",
            lineHeight: "1.5",
          }}
        >
          O sistema oferece uma 
          <strong> gestão centralizada e transparente</strong> das filas de
          espera, permitindo o acompanhamento organizado dos pacientes
          aguardando atendimento nas clínicas escola.
        </p>
      </div>
      {/* CARD 1 (Funcionalidades) Shape */}
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "80px",
          top: "230px",
          width: "450px",
          height: "410px",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
          border: "1px solid #e2e8f0",
          zIndex: "1",
        }}
      ></div>
      {/* CARD 1 Title */}
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "110px",
          top: "260px",
          width: "390px",
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
          Principais Recursos
        </p>
      </div>
      {/* CARD 1 List Item 1 Icon */}
      <div
        data-object="true"
        data-object-type="icon"
        style={{
          position: "absolute",
          left: "110px",
          top: "320px",
          width: "400px",
          height: "60px",
          zIndex: "10",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FontAwesomeIcon icon={faCheckCircle} style={{ fontSize: "20px", color: "#0057b8", marginRight: "10px" }} />
      {/* CARD 1 List Item 1 Text */}
        <p
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "16px",
            color: "#4a5568",
            lineHeight: "1.4",
            alignItems: "center",
            padding: "0.5px",
            marginLeft: "15px",
          }}
        >
          <strong>Filtros Avançados:</strong> Busca rápida por projeto,
          estratégia, trauma ou lesão.
        </p>
      </div>
      {/* CARD 1 List Item 2 Icon */}
      <div
        data-object="true"
        data-object-type="icon"
        style={{
          position: "absolute",
          left: "110px",
          top: "390px",
          width: "400px",
          height: "60px",
          zIndex: "10",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FontAwesomeIcon icon={faCheckCircle} style={{ fontSize: "20px", color: "#0057b8", marginRight: "10px" }} />
      {/* CARD 1 List Item 2 Text */}
        <p
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "16px",
            color: "#4a5568",
            lineHeight: "1.4",
            alignItems: "center",
            padding: "0.5px",
            marginLeft: "15px",
          }}
        >
          <strong>Visualização em Lista:</strong> Acompanhamento claro da ordem
          de prioridade e tempo de espera.
        </p>
      </div>
      {/* CARD 1 List Item 3 Icon */}
      <div
        data-object="true"
        data-object-type="icon"
        style={{
          position: "absolute",
          left: "110px",
          top: "460px",
          width: "400px",
          height: "60px",
          zIndex: "10",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FontAwesomeIcon icon={faCheckCircle} style={{ fontSize: "20px", color: "#0057b8", marginRight: "10px" }} />
      {/* CARD 1 List Item 3 Text */}
        <p
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "16px",
            color: "#4a5568",
            lineHeight: "1.4",
            alignItems: "center",
            padding: "0.5px",
            marginLeft: "15px",
          }}
        >
          <strong>Gestão de Vagas:</strong> Separação eficiente por tipo de
          atendimento necessário.
        </p>
      </div>
      {/* CARD 1 List Item 4 Icon */}
      <div
        data-object="true"
        data-object-type="icon"
        style={{
          position: "absolute",
          left: "110px",
          top: "530px",
          width: "400px",
          height: "60px",
          zIndex: "10",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FontAwesomeIcon icon={faCheckCircle} style={{ fontSize: "20px", color: "#0057b8", marginRight: "10px" }} />
      {/* CARD 1 List Item 4 Text */}
        <p
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "16px",
            color: "#4a5568",
            lineHeight: "1.4",
            alignItems: "center",
            padding: "0.5px",
            marginLeft: "15px",
          }}
        >
          <strong>Controle Operacional:</strong> Visão consolidada para os
          recepcionistas coordenarem os fluxos.
        </p>
      </div>
      {/* CARD 2 (Interface) Shape */}
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "560px",
          top: "230px",
          width: "640px",
          height: "410px",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
          border: "1px solid #e2e8f0",
          zIndex: "1",
        }}
      ></div>
      {/* CARD 2 Image */}
      <img
        alt="Interface da Fila de Espera"
        data-object="true"
        data-object-type="image"
        src="img/Recepcao/tela_espera_ligacao_Lista_Ligando_sem_resposta_recusado.png"
        style={{
          position: "absolute",
          left: "580px",
          top: "250px",
          width: "600px",
          height: "320px",
          objectFit: "contain",
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
          left: "580px",
          top: "535px",
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
          left: "580px",
          top: "590px",
          width: "600px",
          height: "30px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Montserrat", sans-serif',
            fontSize: "20px",
            fontWeight: "700",
            color: "#003087",
            textAlign: "center",
          }}
        >
          Interface de Gestão da Fila de Espera
        </p>
      </div>
      {/* Footer Textbox */}
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "80px",
          top: "670px",
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
