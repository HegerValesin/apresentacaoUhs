export const title = "✅ Agendamento Realizado com Sucesso!";

export default function Slide12() {
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
      {/* Background Decorative Shapes */}
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "1050px",
          top: "-150px",
          width: "400px",
          height: "400px",
          backgroundColor: "#e2e8f0",
          borderRadius: "50%",
          opacity: "0.5",
          zIndex: "1",
        }}
      ></div>
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "-100px",
          top: "550px",
          width: "250px",
          height: "250px",
          backgroundColor: "#e2e8f0",
          borderRadius: "50%",
          opacity: "0.4",
          zIndex: "1",
        }}
      ></div>
      {/* Main Card Shadow/Background */}
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "80px",
          top: "100px",
          width: "1120px",
          height: "540px",
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.08)",
          zIndex: "2",
        }}
      ></div>
      {/* Main Card Top Green Border */}
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "80px",
          top: "100px",
          width: "1120px",
          height: "8px",
          backgroundColor: "#38a169",
          borderRadius: "16px 16px 0 0",
          zIndex: "3",
        }}
      ></div>
      {/* Success Main Icon */}
      <div
        data-object="true"
        data-object-type="icon"
        style={{
          position: "absolute",
          left: "140px",
          top: "145px",
          width: "50px",
          height: "50px",
          zIndex: "10",
        }}
      >
        <i
          className="fa-solid fa-circle-check"
          style={{ fontSize: "50px", color: "#38a169", display: "block" }}
        ></i>
      </div>
      {/* Main Title */}
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "210px",
          top: "148px",
          width: "850px",
          height: "45px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Montserrat", sans-serif',
            fontSize: "36px",
            fontWeight: "800",
            color: "#003087",
            margin: "0",
            padding: "0",
          }}
        >
          Agendamento Realizado com Sucesso!
        </p>
      </div>
      {/* Subtitle */}
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "210px",
          top: "195px",
          width: "850px",
          height: "30px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "18px",
            fontWeight: "400",
            color: "#4a5568",
          }}
        >
          O paciente foi inserido na agenda e o fluxo assistencial avança para
          as próximas etapas.
        </p>
      </div>
      {/* Horizontal Divider */}
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "140px",
          top: "250px",
          width: "1000px",
          height: "1px",
          backgroundColor: "#e2e8f0",
          zIndex: "3",
        }}
      ></div>
      {/* ================= LEFT SIDE: IMAGE ================= */}
      {/* Image Frame Background */}
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "140px",
          top: "290px",
          width: "480px",
          height: "310px",
          backgroundColor: "#f7fafc",
          border: "1px solid #e2e8f0",
          borderRadius: "12px",
          zIndex: "3",
        }}
      ></div>
      {/* Success Notification Image */}
      <img
        alt="Notificação de Sucesso"
        data-object="true"
        data-object-type="image"
        src="img/Recepcao/tela_espera_ligacao_Lista_Atendido_agendando_agendado.png"
        style={{
          position: "absolute",
          left: "150px",
          top: "300px",
          width: "460px",
          height: "290px",
          objectFit: "contain",
          borderRadius: "8px",
          zIndex: "5",
        }}
      />
      {/* ================= RIGHT SIDE: FLOW TIMELINE ================= */}
      {/* Flow Title */}
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "660px",
          top: "280px",
          width: "300px",
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
          }}
        >
          Resumo do Fluxo Completo
        </p>
      </div>
      {/* Active Step Background Highlight */}
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "650px",
          top: "456px",
          width: "460px",
          height: "44px",
          backgroundColor: "#f0fff4",
          borderRadius: "8px",
          border: "1px solid #c6f6d5",
          zIndex: "2",
        }}
      ></div>
      {/* Timeline Lines */}
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "688px",
          top: "340px",
          width: "4px",
          height: "46px",
          backgroundColor: "#0057b8",
          zIndex: "3",
        }}
      ></div>
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "688px",
          top: "386px",
          width: "4px",
          height: "46px",
          backgroundColor: "#0057b8",
          zIndex: "3",
        }}
      ></div>
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "688px",
          top: "432px",
          width: "4px",
          height: "46px",
          backgroundColor: "#0057b8",
          zIndex: "3",
        }}
      ></div>
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "688px",
          top: "478px",
          width: "4px",
          height: "46px",
          backgroundColor: "#e2e8f0",
          zIndex: "3",
        }}
      ></div>
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "688px",
          top: "524px",
          width: "4px",
          height: "46px",
          backgroundColor: "#e2e8f0",
          zIndex: "3",
        }}
      ></div>
      {/* Timeline Nodes */}
      {/* Node 1 */}
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "680px",
          top: "330px",
          width: "20px",
          height: "20px",
          backgroundColor: "#0057b8",
          borderRadius: "50%",
          zIndex: "4",
        }}
      ></div>
      <div
        data-object="true"
        data-object-type="icon"
        style={{
          position: "absolute",
          left: "684px",
          top: "334px",
          width: "12px",
          height: "12px",
          zIndex: "10",
        }}
      >
        <i
          className="fa-solid fa-check"
          style={{ fontSize: "12px", color: "#ffffff", display: "block" }}
        ></i>
      </div>
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "720px",
          top: "328px",
          width: "300px",
          height: "24px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "16px",
            fontWeight: "600",
            color: "#4a5568",
            margin: "4px 0 0 0",
          }}
        >
          1. Cadastro na fila
        </p>
      </div>
      {/* Node 2 */}
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "680px",
          top: "376px",
          width: "20px",
          height: "20px",
          backgroundColor: "#0057b8",
          borderRadius: "50%",
          zIndex: "4",
        }}
      ></div>
      <div
        data-object="true"
        data-object-type="icon"
        style={{
          position: "absolute",
          left: "684px",
          top: "380px",
          width: "12px",
          height: "12px",
          zIndex: "10",
        }}
      >
        <i
          className="fa-solid fa-check"
          style={{ fontSize: "12px", color: "#ffffff", display: "block" }}
        ></i>
      </div>
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "720px",
          top: "374px",
          width: "300px",
          height: "24px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "16px",
            fontWeight: "600",
            color: "#4a5568",
            margin: "4px 0 0 0",
          }}
        >
          2. Professor envia lista
        </p>
      </div>
      {/* Node 3 */}
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "680px",
          top: "422px",
          width: "20px",
          height: "20px",
          backgroundColor: "#0057b8",
          borderRadius: "50%",
          zIndex: "4",
        }}
      ></div>
      <div
        data-object="true"
        data-object-type="icon"
        style={{
          position: "absolute",
          left: "684px",
          top: "426px",
          width: "12px",
          height: "12px",
          zIndex: "10",
        }}
      >
        <i
          className="fa-solid fa-check"
          style={{ fontSize: "12px", color: "#ffffff", display: "block" }}
        ></i>
      </div>
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "720px",
          top: "420px",
          width: "300px",
          height: "24px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "16px",
            fontWeight: "600",
            color: "#4a5568",
            margin: "4px 0 0 0",
          }}
        >
          3. Recepção contata
        </p>
      </div>
      {/* Node 4 (Current/Active) */}
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "676px",
          top: "464px",
          width: "28px",
          height: "28px",
          backgroundColor: "#38a169",
          borderRadius: "50%",
          border: "4px solid #c6f6d5",
          boxSizing: "border-box",
          boxShadow: "0 0 10px rgba(56, 161, 105, 0.3)",
          zIndex: "4",
        }}
      ></div>
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "720px",
          top: "466px",
          width: "380px",
          height: "24px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Montserrat", sans-serif',
            fontSize: "18px",
            fontWeight: "800",
            color: "#2f855a",
            margin: "1px 0 0 0",
          }}
        >
          4. Agendamento confirmado
        </p>
      </div>
      {/* Node 5 */}
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "680px",
          top: "514px",
          width: "20px",
          height: "20px",
          backgroundColor: "#ffffff",
          borderRadius: "50%",
          border: "3px solid #a0aec0",
          boxSizing: "border-box",
          zIndex: "4",
        }}
      ></div>
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "720px",
          top: "512px",
          width: "300px",
          height: "24px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "16px",
            fontWeight: "400",
            color: "#a0aec0",
            margin: "4px 0 0 0",
          }}
        >
          5. Aluno atende
        </p>
      </div>
      {/* Node 6 */}
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "680px",
          top: "560px",
          width: "20px",
          height: "20px",
          backgroundColor: "#ffffff",
          borderRadius: "50%",
          border: "3px solid #a0aec0",
          boxSizing: "border-box",
          zIndex: "4",
        }}
      ></div>
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "720px",
          top: "558px",
          width: "300px",
          height: "24px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "16px",
            fontWeight: "400",
            color: "#a0aec0",
            margin: "4px 0 0 0",
          }}
        >
          6. Professor finaliza
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
