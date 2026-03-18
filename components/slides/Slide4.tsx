import { faUserLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const title = "Segurança: Acesso Restrito por Unidade";

export default function Slide4() {
  return (
    <div
          className="slide-container"
          style={{ position: "relative", width: "1280px", height: "720px", overflow: "hidden", backgroundColor: "#f5f7fa" }}
        >
          {/* Header Accent Shape */}
          <div
            data-object="true"
            data-object-type="shape"
            style={{ position: "absolute", left: "0px", top: "0px", width: "250px", height: "8px", backgroundColor: "#003087", zIndex: "1" }}
          ></div>
          {/* Background Decorative Shape (Left) */}
          <div
            data-object="true"
            data-object-type="shape"
            style={{ position: "absolute", left: "-100px", top: "-100px", width: "300px", height: "300px", backgroundColor: "#e2e8f0", borderRadius: "50%", opacity: "0.5", zIndex: "1" }}
          ></div>
          {/* Background Decorative Icon (Right) */}
          <div
            data-object="true"
            data-object-type="icon"
            style={{ position: "absolute", left: "800px", top: "200px", width: "400px", height: "400px", zIndex: "1", opacity: "0.03" }}
          >
            <i
              className="fa-solid fa-shield-halved"
              style={{ fontSize: "350px", color: "#003087", display: "block" }}
            ></i>
          </div>
          {/* Main Title Textbox */}
          <div
            data-object="true"
            data-object-type="textbox"
            style={{ position: "absolute", left: "80px", top: "60px", width: "800px", height: "120px", zIndex: "10" }}
          >
            <p
              style={{ fontFamily: '"Montserrat", sans-serif', fontSize: "44px", fontWeight: "800", color: "#003087", lineHeight: "1.2" }}
            >
              Segurança: Acesso Restrito por Unidade 🔒
            </p>
          </div>
          {/* Description Bullets Textbox */}
          <div
            data-object="true"
            data-object-type="textbox"
            style={{ position: "absolute", left: "80px", top: "200px", width: "560px", height: "200px", zIndex: "10" }}
          >
            <ul
              style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "20px", color: "#4a5568", lineHeight: "1.6", paddingLeft: "24px" }}
            >
              <li style={{ marginBottom: "12px" }}>
                Política de segurança rigorosa totalmente integrada ao processo
                acadêmico.
              </li>
              <li style={{ marginBottom: "12px" }}>
                O sistema verifica em tempo real a lotação atual do estudante no
                momento do login.
              </li>
              <li style={{ marginBottom: "12px" }}>
                Garante o compliance assistencial e a integridade do fluxo de
                atendimento da clínica.
              </li>
            </ul>
          </div>
          {/* Alert Box Shape Background */}
          <div
            data-object="true"
            data-object-type="shape"
            style={{ position: "absolute", left: "80px", top: "430px", width: "560px", height: "200px", backgroundColor: "#fff5f5", borderLeft: "6px solid #e53e3e", borderRadius: "0 8px 8px 0", boxShadow: "0 4px 15px rgba(229, 62, 62, 0.1)", zIndex: "1" }}
          ></div>
          <div style={{ alignItems: "center", display: "flex", justifyItems: "center"}}>
          {/* Alert Icon */}
          <div
            data-object="true"
            data-object-type="icon"
            style={{ position: "absolute", left: "110px", top: "460px", width: "40px", height: "40px", zIndex: "10" }}
          >
            <FontAwesomeIcon icon={faUserLock} style={{ fontSize: "32px", color: "#e53e3e" }} />
          </div>
          {/* Alert Title */}
          <div
            data-object="true"
            data-object-type="textbox"
            style={{ position: "absolute", left: "160px", top: "460px", width: "450px", height: "35px", zIndex: "10", alignItems: "center", display: "flex" }}
          >
            <p
              style={{ fontFamily: '"Montserrat", sans-serif', fontSize: "24px", fontWeight: "700", color: "#c53030", alignItems: "center", display: "flex" }}
            >
              Bloqueio Automático
            </p>
          </div>
          </div>
          {/* Alert Text */}
          <div
            data-object="true"
            data-object-type="textbox"
            style={{ position: "absolute", left: "160px", top: "505px", width: "450px", height: "110px", zIndex: "10" }}
          >
            <p
              style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "18px", color: "#4a5568", lineHeight: "1.6" }}
            >
              Estudantes que tentarem acessar o sistema de fora da unidade onde
              estão lotados terão o acesso bloqueado imediatamente. Isso protege os
              dados sensíveis dos pacientes e garante o controle operacional.
            </p>
          </div>
          {/* Image Frame/Shadow Shape */}
          <div
            data-object="true"
            data-object-type="shape"
            style={{ position: "absolute", left: "690px", top: "180px", width: "510px", height: "400px", backgroundColor: "#ffffff", borderRadius: "12px", boxShadow: "0 15px 35px rgba(0, 0, 0, 0.08)", border: "1px solid #e2e8f0", zIndex: "1" }}
          ></div>
          {/* System Image */}
          <img
            alt="Tela de bloqueio de acesso fora da unidade"
            data-object="true"
            data-object-type="image"
            src="../img/estudantes_fora_unidades.png"
            style={{ position: "absolute", left: "700px", top: "190px", width: "490px", height: "380px", objectFit: "cover", borderRadius: "8px", zIndex: "5" }}
          />
          <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "710px",
          top: "570px",
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
            style={{ position: "absolute", left: "80px", top: "670px", width: "600px", height: "30px", zIndex: "10" }}
          >
            <p
              style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "14px", fontWeight: "600", color: "#a0aec0", textTransform: "uppercase", letterSpacing: "1px" }}
            >
              Clínica Escola de Fisioterapia — 2026
            </p>
          </div>
        </div>
  );
}
