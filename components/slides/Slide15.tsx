import { faHandHoldingMedical, faNetworkWired, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const title = "Conclusão e Diferenciais";

export default function Slide15() {
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
      {/* Main Background Layer */}
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "0px",
          top: "0px",
          width: "1280px",
          height: "720px",
          backgroundColor: "#003087",
          zIndex: "1",
        }}
      ></div>
      {/* Background Decorative Shapes */}
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "1000px",
          top: "-150px",
          width: "450px",
          height: "450px",
          backgroundColor: "#ffffff",
          borderRadius: "50%",
          opacity: "0.03",
          zIndex: "2",
        }}
      ></div>
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "-100px",
          top: "500px",
          width: "350px",
          height: "350px",
          backgroundColor: "#ffffff",
          borderRadius: "50%",
          opacity: "0.03",
          zIndex: "2",
        }}
      ></div>
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "540px",
          top: "300px",
          width: "200px",
          height: "2px",
          backgroundColor: "#4da6ff",
          opacity: "0.3",
          zIndex: "2",
        }}
      ></div>
      {/* Title */}
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "40px",
          top: "100px",
          width: "1200px",
          height: "120px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Montserrat", sans-serif',
            fontSize: "44px",
            fontWeight: "800",
            color: "#ffffff",
            textAlign: "center",
            lineHeight: "1.2",
          }}
        >
          UHS — Transformando o Atendimento em Aprendizado
        </p>
      </div>
      {/* Subtitle / Main Message */}
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "190px",
          top: "220px",
          width: "900px",
          height: "60px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "20px",
            color: "#e2e8f0",
            textAlign: "center",
            lineHeight: "1.5",
          }}
        >
          Unindo tecnologia, educação e saúde para proporcionar um processo
          acadêmico de excelência e um atendimento clínico humanizado, seguro e
          eficiente.
        </p>
      </div>
      {/* ================= CARD 1: Qualidade Clínica ================= */}
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "140px",
          top: "350px",
          width: "300px",
          height: "280px",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)",
          borderTop: "6px solid #38a169",
          zIndex: "3",
        }}
      ></div>
      <div
        data-object="true"
        data-object-type="icon"
        style={{
          position: "absolute",
          left: "265px",
          top: "380px",
          width: "50px",
          height: "50px",
          zIndex: "10",
        }}
      >
        <FontAwesomeIcon icon={faHandHoldingMedical} style={{ fontSize: "50px", color: "#0057b8" }} />
      </div>
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "160px",
          top: "450px",
          width: "260px",
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
          Qualidade Clínica
        </p>
      </div>
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "160px",
          top: "490px",
          width: "260px",
          height: "120px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "15px",
            color: "#4a5568",
            textAlign: "center",
            lineHeight: "1.5",
          }}
        >
          Atendimento padronizado e focado na recuperação do paciente, com filas
          e prioridades geridas de forma transparente.
        </p>
      </div>
      {/* ================= CARD 2: Excelência Educacional ================= */}
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "490px",
          top: "350px",
          width: "300px",
          height: "280px",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)",
          borderTop: "6px solid #d69e2e",
          zIndex: "3",
        }}
      ></div>
      <div
        data-object="true"
        data-object-type="icon"
        style={{
          position: "absolute",
          left: "615px",
          top: "380px",
          width: "50px",
          height: "50px",
          zIndex: "10",
        }}
      >
        <FontAwesomeIcon icon={faUserGraduate} style={{ fontSize: "50px", color: "#0057b8" }} />
      </div>
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "510px",
          top: "450px",
          width: "260px",
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
          Excelência Educacional
        </p>
      </div>
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "510px",
          top: "490px",
          width: "260px",
          height: "120px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "15px",
            color: "#4a5568",
            textAlign: "center",
            lineHeight: "1.5",
          }}
        >
          Ambiente prático que prepara o aluno para a realidade, sob supervisão
          constante e avaliação criteriosa dos professores.
        </p>
      </div>
      {/* ================= CARD 3: Inovação Tecnológica ================= */}
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "840px",
          top: "350px",
          width: "300px",
          height: "280px",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)",
          borderTop: "6px solid #3182ce",
          zIndex: "3",
        }}
      ></div>
      <div
        data-object="true"
        data-object-type="icon"
        style={{
          position: "absolute",
          left: "965px",
          top: "380px",
          width: "50px",
          height: "50px",
          zIndex: "10",
        }}
      >
        <FontAwesomeIcon icon={faNetworkWired} style={{ fontSize: "50px", color: "#0057b8" }} />
      </div>
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "860px",
          top: "450px",
          width: "260px",
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
          Inovação Tecnológica
        </p>
      </div>
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "860px",
          top: "490px",
          width: "260px",
          height: "120px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "15px",
            color: "#4a5568",
            textAlign: "center",
            lineHeight: "1.5",
          }}
        >
          Plataforma digital integrada que otimiza agendamentos, segurança de
          dados e centraliza as informações da universidade.
        </p>
      </div>
      {/* ================= FOOTER ================= */}
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "0px",
          top: "660px",
          width: "1280px",
          height: "30px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "14px",
            fontWeight: "600",
            color: "#cbd5e0",
            textTransform: "uppercase",
            letterSpacing: "2px",
            textAlign: "center",
          }}
        >
          LIT — Laboratório de Inovações Tecnológicas | Unichristus
        </p>
      </div>
    </div>
  );
}
