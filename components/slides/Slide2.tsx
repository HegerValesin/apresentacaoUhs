export const title = "O que é o UHS?";

export default function Slide2() {
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
            style={{ position: "absolute", left: "1000px", top: "-100px", width: "400px", height: "400px", backgroundColor: "#e2e8f0", borderRadius: "50%", opacity: "0.5", zIndex: "1" }}
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
              O que é o UHS?
            </p>
          </div>
          {/* Description Textbox */}
          <div
            data-object="true"
            data-object-type="textbox"
            style={{ position: "absolute", left: "80px", top: "140px", width: "1120px", height: "100px", zIndex: "10" }}
          >
            <p
              style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "24px", fontWeight: "400", color: "#4a5568", lineHeight: "1.5" }}
            >
              O <strong>Unichristus Health System (UHS)</strong> é um sistema
              unificado projetado para atender todas as clínicas escola da
              Universidade Unichristus, operando simultaneamente em dois pilares
              fundamentais:
            </p>
          </div>
          {/* LEFT CARD (Processo Clínico) Background */}
          <div
            data-object="true"
            data-object-type="shape"
            style={{ position: "absolute", left: "80px", top: "250px", width: "540px", height: "380px", backgroundColor: "#ffffff", borderTop: "6px solid #0057b8", borderRadius: "8px", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)", zIndex: "1" }}
          ></div>
          {/* LEFT CARD Icon */}
          <div
            data-object="true"
            data-object-type="icon"
            style={{ position: "absolute", left: "120px", top: "290px", width: "60px", height: "60px", zIndex: "10" }}
          >
            <i
              className="fa-solid fa-hospital-user"
              style={{ fontSize: "48px", color: "#0057b8", display: "block" }}
            ></i>
          </div>
          {/* LEFT CARD Title */}
          <div
            data-object="true"
            data-object-type="textbox"
            style={{ position: "absolute", left: "200px", top: "300px", width: "380px", height: "40px", zIndex: "10" }}
          >
            <p
              style={{ fontFamily: '"Montserrat", sans-serif', fontSize: "28px", fontWeight: "700", color: "#003087" }}
            >
              Processo Clínico
            </p>
          </div>
          {/* LEFT CARD Content */}
          <div
            data-object="true"
            data-object-type="textbox"
            style={{ position: "absolute", left: "120px", top: "380px", width: "460px", height: "210px", zIndex: "10" }}
          >
            <ul
              style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "20px", color: "#2d3748", lineHeight: "1.6", paddingLeft: "24px", margin: "0" }}
            >
              <li style={{ marginBottom: "16px" }}>
                <strong>Cadastro de pacientes</strong> e histórico.
              </li>
              <li style={{ marginBottom: "16px" }}>
                <strong>Cadastro de profissionais</strong> da saúde.
              </li>
              <li style={{ marginBottom: "16px" }}>
                Gestão de <strong>agenda profissional</strong> e agendamento
                contínuo de pacientes.
              </li>
              <li style={{ marginBottom: "16px" }}>
                Geração de <strong>relatórios clínicos</strong> e operacionais
                detalhados.
              </li>
            </ul>
          </div>
          {/* RIGHT CARD (Processo Educacional) Background */}
          <div
            data-object="true"
            data-object-type="shape"
            style={{ position: "absolute", left: "660px", top: "250px", width: "540px", height: "380px", backgroundColor: "#ffffff", borderTop: "6px solid #0057b8", borderRadius: "8px", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)", zIndex: "1" }}
          ></div>
          {/* RIGHT CARD Icon */}
          <div
            data-object="true"
            data-object-type="icon"
            style={{ position: "absolute", left: "700px", top: "290px", width: "60px", height: "60px", zIndex: "10" }}
          >
            <i
              className="fa-solid fa-user-graduate"
              style={{ fontSize: "48px", color: "#0057b8", display: "block" }}
            ></i>
          </div>
          {/* RIGHT CARD Title */}
          <div
            data-object="true"
            data-object-type="textbox"
            style={{ position: "absolute", left: "780px", top: "300px", width: "380px", height: "40px", zIndex: "10" }}
          >
            <p
              style={{ fontFamily: '"Montserrat", sans-serif', fontSize: "28px", fontWeight: "700", color: "#003087" }}
            >
              Processo Educacional
            </p>
          </div>
          {/* RIGHT CARD Content */}
          <div
            data-object="true"
            data-object-type="textbox"
            style={{ position: "absolute", left: "700px", top: "380px", width: "460px", height: "210px", zIndex: "10" }}
          >
            <ul
              style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "20px", color: "#2d3748", lineHeight: "1.6", paddingLeft: "24px", margin: "0" }}
            >
              <li style={{ marginBottom: "16px" }}>
                <strong>Atendimento dos pacientes</strong> realizado pelo estudante
                diretamente no sistema.
              </li>
              <li style={{ marginBottom: "16px" }}>
                <strong>Análise do professor</strong> sobre as condutas e registros
                do aluno.
              </li>
              <li style={{ marginBottom: "16px" }}>
                <strong>Encerramento</strong> e validação do atendimento do paciente
                pelo professor responsável.
              </li>
            </ul>
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
