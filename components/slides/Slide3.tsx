export const title = "Acesso Seguro ao Sistema";

export default function Slide3() {
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
          {/* Background Decorative Shape */}
          <div
            data-object="true"
            data-object-type="shape"
            style={{ position: "absolute", left: "-150px", top: "500px", width: "400px", height: "220px", backgroundColor: "#e2e8f0", borderRadius: "50% 50% 0 0", opacity: "0.4", zIndex: "1" }}
          ></div>
          {/* Main Title Textbox */}
          <div
            data-object="true"
            data-object-type="textbox"
            style={{ position: "absolute", left: "80px", top: "60px", width: "800px", height: "60px", zIndex: "10" }}
          >
            <p
              style={{ fontFamily: '"Montserrat", sans-serif', fontSize: "48px", fontWeight: "800", color: "#003087", lineHeight: "1.2" }}
            >
              Acesso Seguro ao Sistema
            </p>
          </div>
          {/* Security Icon */}
          <div
            data-object="true"
            data-object-type="icon"
            style={{ position: "absolute", left: "1140px", top: "60px", width: "60px", height: "60px", zIndex: "10" }}
          >
            <i
              className="fa-solid fa-shield-halved"
              style={{ fontSize: "48px", color: "#0057b8", display: "block", opacity: "0.8" }}
            ></i>
          </div>
          {/* Description Textbox */}
          <div
            data-object="true"
            data-object-type="textbox"
            style={{ position: "absolute", left: "80px", top: "140px", width: "1000px", height: "60px", zIndex: "10" }}
          >
            <p
              style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "22px", fontWeight: "400", color: "#4a5568", lineHeight: "1.5" }}
            >
              O sistema garante a proteção dos dados clínicos e educacionais através
              de autenticação centralizada via <strong>HUB SSO (Keycloak)</strong>.
              O acesso é feito utilizando o CPF e senha pessoal.
            </p>
          </div>
          {/* CARD 1 (Tela Inicial) Shape */}
          <div
            data-object="true"
            data-object-type="shape"
            style={{ position: "absolute", left: "80px", top: "230px", width: "510px", height: "410px", backgroundColor: "#ffffff", borderRadius: "12px", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)", border: "1px solid #e2e8f0", zIndex: "1" }}
          ></div>
          {/* CARD 1 Image */}
          <img
            alt="Tela Inicial do UHS"
            data-object="true"
            data-object-type="image"
            src="../img/Entrar_tela_login.png"
            style={{ position: "absolute", left: "100px", top: "250px", width: "470px", height: "280px", objectFit: "contain", objectPosition: "top", borderRadius: "6px", border: "1px solid #edf2f7", zIndex: "5" }}
          />
          {/* CARD 1 Title */}
          <div
            data-object="true"
            data-object-type="textbox"
            style={{ position: "absolute", left: "100px", top: "550px", width: "470px", height: "30px", zIndex: "10" }}
          >
            <p
              style={{ fontFamily: '"Montserrat", sans-serif', fontSize: "22px", fontWeight: "700", color: "#003087" }}
            >
              1. Portal de Entrada
            </p>
          </div>
          {/* CARD 1 Text */}
          <div
            data-object="true"
            data-object-type="textbox"
            style={{ position: "absolute", left: "100px", top: "585px", width: "470px", height: "45px", zIndex: "10" }}
          >
            <p
              style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "16px", color: "#4a5568", lineHeight: "1.5" }}
            >
              Acesso inicial pelo portal unificado, onde o usuário inicia o processo
              clicando em "Entrar".
            </p>
          </div>
          {/* Arrow Connector Icon */}
          <div
            data-object="true"
            data-object-type="icon"
            style={{ position: "absolute", left: "620px", top: "415px", width: "40px", height: "40px", zIndex: "10" }}
          >
            <i
              className="fa-solid fa-circle-arrow-right"
              style={{ fontSize: "40px", color: "#cbd5e0", display: "block" }}
            ></i>
          </div>
          {/* CARD 2 (Tela Login) Shape */}
          <div
            data-object="true"
            data-object-type="shape"
            style={{ position: "absolute", left: "690px", top: "230px", width: "510px", height: "410px", backgroundColor: "#ffffff", borderRadius: "12px", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)", border: "1px solid #e2e8f0", zIndex: "1" }}
          ></div>
          {/* CARD 2 Image */}
          <img
            alt="Tela de Login Keycloak"
            data-object="true"
            data-object-type="image"
            src="../img/Login2.png"
            style={{ position: "absolute", left: "710px", top: "250px", width: "470px", height: "280px", objectFit: "contain", objectPosition: "top", borderRadius: "6px", border: "1px solid #edf2f7", zIndex: "5" }}
          />
          {/* CARD 2 Title */}
          <div
            data-object="true"
            data-object-type="textbox"
            style={{ position: "absolute", left: "710px", top: "550px", width: "470px", height: "30px", zIndex: "10" }}
          >
            <p
              style={{ fontFamily: '"Montserrat", sans-serif', fontSize: "22px", fontWeight: "700", color: "#003087" }}
            >
              2. Autenticação Institucional
            </p>
          </div>
          {/* CARD 2 Text */}
          <div
            data-object="true"
            data-object-type="textbox"
            style={{ position: "absolute", left: "710px", top: "585px", width: "470px", height: "45px", zIndex: "10" }}
          >
            <p
              style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "16px", color: "#4a5568", lineHeight: "1.5" }}
            >
              Validação segura da identidade através do preenchimento do CPF e senha
              definida pelo usuário.
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
