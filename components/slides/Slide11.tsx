export const title = "Agendamento Efetivo do Paciente";

export default function Slide11() {
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
          {/* Background Decorative Shapes */}
          <div
            data-object="true"
            data-object-type="shape"
            style={{ position: "absolute", left: "-100px", top: "-100px", width: "350px", height: "350px", backgroundColor: "#e2e8f0", borderRadius: "50%", opacity: "0.4", zIndex: "1" }}
          ></div>
          <div
            data-object="true"
            data-object-type="shape"
            style={{ position: "absolute", left: "1100px", top: "450px", width: "300px", height: "300px", backgroundColor: "#e2e8f0", borderRadius: "50%", opacity: "0.4", zIndex: "1" }}
          ></div>
          {/* ================= RIGHT SIDE: TEXT CONTENT ================= */}
          {/* Main Title Textbox */}
          <div
            data-object="true"
            data-object-type="textbox"
            style={{ position: "absolute", left: "660px", top: "70px", width: "540px", height: "100px", zIndex: "10" }}
          >
            <p
              style={{ fontFamily: '"Montserrat", sans-serif', fontSize: "40px", fontWeight: "800", color: "#003087", lineHeight: "1.2" }}
            >
              Agendamento Efetivo do Paciente
            </p>
          </div>
          {/* Description Textbox */}
          <div
            data-object="true"
            data-object-type="textbox"
            style={{ position: "absolute", left: "660px", top: "180px", width: "540px", height: "80px", zIndex: "10" }}
          >
            <p
              style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "18px", color: "#4a5568", lineHeight: "1.5" }}
            >
              O processo de agendamento é estruturado para garantir a correta
              alocação do paciente, cruzando a disponibilidade do professor com a
              fila do projeto.
            </p>
          </div>
          {/* Bullet 1: Seleção de Horários */}
          <div
            data-object="true"
            data-object-type="shape"
            style={{ position: "absolute", left: "660px", top: "270px", width: "44px", height: "44px", backgroundColor: "#ebf4ff", borderRadius: "50%", border: "1px solid #bee3f8", zIndex: "1" }}
          ></div>
          <div
            data-object="true"
            data-object-type="icon"
            style={{ position: "absolute", left: "672px", top: "282px", width: "20px", height: "20px", zIndex: "10" }}
          >
            <i
              className="fa-regular fa-calendar-days"
              style={{ fontSize: "20px", color: "#0057b8" }}
            ></i>
          </div>
          <div
            data-object="true"
            data-object-type="textbox"
            style={{ position: "absolute", left: "720px", top: "268px", width: "480px", height: "60px", zIndex: "10" }}
          >
            <p
              style={{ fontFamily: '"Montserrat", sans-serif', fontSize: "18px", fontWeight: "700", color: "#003087", marginBottom: "4px" }}
            >
              Seleção de Horários
            </p>
            <p
              style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "15px", color: "#4a5568" }}
            >
              Visualização clara das janelas de atendimento livres na agenda do
              professor responsável.
            </p>
          </div>
          {/* Bullet 2: Vínculo de Atendimento */}
          <div
            data-object="true"
            data-object-type="shape"
            style={{ position: "absolute", left: "660px", top: "350px", width: "44px", height: "44px", backgroundColor: "#ebf4ff", borderRadius: "50%", border: "1px solid #bee3f8", zIndex: "1" }}
          ></div>
          <div
            data-object="true"
            data-object-type="icon"
            style={{ position: "absolute", left: "672px", top: "362px", width: "20px", height: "20px", zIndex: "10" }}
          >
            <i className="fa-solid fa-link" style={{ fontSize: "20px", color: "#0057b8" }}></i>
          </div>
          <div
            data-object="true"
            data-object-type="textbox"
            style={{ position: "absolute", left: "720px", top: "348px", width: "480px", height: "60px", zIndex: "10" }}
          >
            <p
              style={{ fontFamily: '"Montserrat", sans-serif', fontSize: "18px", fontWeight: "700", color: "#003087", marginBottom: "4px" }}
            >
              Vínculo de Atendimento
            </p>
            <p
              style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "15px", color: "#4a5568" }}
            >
              Associação do paciente ao projeto estratégico, trauma/lesão e unidade
              de lotação adequada.
            </p>
          </div>
          {/* Bullet 3: Confirmação Automática */}
          <div
            data-object="true"
            data-object-type="shape"
            style={{ position: "absolute", left: "660px", top: "430px", width: "44px", height: "44px", backgroundColor: "#ebf4ff", borderRadius: "50%", border: "1px solid #bee3f8", zIndex: "1" }}
          ></div>
          <div
            data-object="true"
            data-object-type="icon"
            style={{ position: "absolute", left: "672px", top: "442px", width: "20px", height: "20px", zIndex: "10" }}
          >
            <i
              className="fa-solid fa-check-double"
              style={{ fontSize: "20px", color: "#0057b8" }}
            ></i>
          </div>
          <div
            data-object="true"
            data-object-type="textbox"
            style={{ position: "absolute", left: "720px", top: "428px", width: "480px", height: "60px", zIndex: "10" }}
          >
            <p
              style={{ fontFamily: '"Montserrat", sans-serif', fontSize: "18px", fontWeight: "700", color: "#003087", marginBottom: "4px" }}
            >
              Confirmação Automática
            </p>
            <p
              style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "15px", color: "#4a5568" }}
            >
              Registro validado com mensagem de sucesso e alteração imediata do
              status do paciente na fila.
            </p>
          </div>
          {/* Highlight Box */}
          <div
            data-object="true"
            data-object-type="shape"
            style={{ position: "absolute", left: "660px", top: "520px", width: "540px", height: "100px", backgroundColor: "#ffffff", borderLeft: "5px solid #38a169", borderRadius: "0 8px 8px 0", boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)", zIndex: "1" }}
          ></div>
          <div
            data-object="true"
            data-object-type="icon"
            style={{ position: "absolute", left: "685px", top: "545px", width: "24px", height: "24px", zIndex: "10" }}
          >
            <i
              className="fa-solid fa-circle-info"
              style={{ fontSize: "24px", color: "#38a169" }}
            ></i>
          </div>
          <div
            data-object="true"
            data-object-type="textbox"
            style={{ position: "absolute", left: "725px", top: "540px", width: "455px", height: "60px", zIndex: "10" }}
          >
            <p
              style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "15px", color: "#4a5568", lineHeight: "1.5", fontStyle: "italic" }}
            >
              "O agendamento sistêmico elimina sobreposições, organiza a recepção
              nas unidades e prepara o aluno para o acompanhamento do caso clínico
              de forma antecipada."
            </p>
          </div>
          {/* ================= LEFT SIDE: IMAGES ================= */}
          {/* Image 1 Frame/Shadow (Horários Livres) */}
          <div
            data-object="true"
            data-object-type="shape"
            style={{ position: "absolute", left: "80px", top: "120px", width: "480px", height: "280px", backgroundColor: "#ffffff", borderRadius: "12px", boxShadow: "0 10px 25px rgba(0, 0, 0, 0.06)", border: "1px solid #e2e8f0", zIndex: "1" }}
          ></div>
          {/* Image 1: Horários Livres */}
          <img
            alt="Lista de Horários Livres"
            data-object="true"
            data-object-type="image"
            src="https://www.genspark.ai/image_placeholder.png"
            style={{ position: "absolute", left: "90px", top: "130px", width: "460px", height: "260px", objectFit: "cover", objectPosition: "top", borderRadius: "8px", border: "1px solid #edf2f7", zIndex: "5" }}
          />
          {/* Decorative Connection Arrow */}
          <div
            data-object="true"
            data-object-type="shape"
            style={{ position: "absolute", left: "450px", top: "380px", width: "40px", height: "40px", backgroundColor: "#0057b8", borderRadius: "50%", border: "4px solid #f5f7fa", zIndex: "6" }}
          ></div>
          <div
            data-object="true"
            data-object-type="icon"
            style={{ position: "absolute", left: "460px", top: "390px", width: "20px", height: "20px", zIndex: "10" }}
          >
            <i
              className="fa-solid fa-arrow-down"
              style={{ fontSize: "20px", color: "#ffffff" }}
            ></i>
          </div>
          {/* Image 2 Frame/Shadow (Sucesso do Agendamento) */}
          <div
            data-object="true"
            data-object-type="shape"
            style={{ position: "absolute", left: "160px", top: "350px", width: "440px", height: "280px", backgroundColor: "#ffffff", borderRadius: "12px", boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)", border: "1px solid #e2e8f0", zIndex: "2" }}
          ></div>
          {/* Image 2: Sucesso */}
          <img
            alt="Confirmação de Sucesso do Agendamento"
            data-object="true"
            data-object-type="image"
            src="https://page.gensparksite.com/slides_images/dbcd37feff740ad33691a37d52aefcf3.webp"
            style={{ position: "absolute", left: "170px", top: "360px", width: "420px", height: "260px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", border: "1px solid #edf2f7", zIndex: "5" }}
          />
          {/* ================= FOOTER ================= */}
          <div
            data-object="true"
            data-object-type="textbox"
            style={{ position: "absolute", left: "80px", top: "680px", width: "600px", height: "30px", zIndex: "10" }}
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
