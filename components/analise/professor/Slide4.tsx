import { faCircleCheck, faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const title = "Questionários";

const sectionColor = "#7c3aed";

const campos = [
  {
    titulo: "Escalas de Dor (EVA / NRS)",
    desc: "Mensuração padronizada da intensidade dolorosa em escala de 0 a 10.",
  },
  {
    titulo: "Questionários Funcionais",
    desc: "Instrumentos como DASH, WOMAC, Oswestry e PSFS validados para cada condição clínica.",
  },
  {
    titulo: "Escalas de Qualidade de Vida",
    desc: "Ferramentas como SF-36 e EQ-5D para avaliação do bem-estar global do paciente.",
  },
  {
    titulo: "Avaliações Cognitivas e Psicológicas",
    desc: "Ferramentas de triagem conforme indicação clínica e perfil do paciente.",
  },
  {
    titulo: "Questionários Específicos da Área",
    desc: "Instrumentos validados conforme a especialidade clínica em atendimento.",
  },
];

const orientacoes = [
  "Selecione o questionário mais adequado à condição clínica e à hipótese diagnóstica.",
  "Reaplique os mesmos instrumentos nas reavaliações para permitir comparação evolutiva.",
  "Os resultados devem ser interpretados criticamente, associados aos demais achados clínicos.",
  "Múltiplos questionários podem ser adicionados a um mesmo prontuário conforme necessidade.",
  "Conclua todos os campos antes de avançar para a próxima seção do laudo.",
];

export default function Slide4() {
  return (
    <div
      className="slide-container"
      style={{ position: "relative", width: "1580px", height: "720px", overflow: "hidden", backgroundColor: "#f5f7fa" }}
    >
      <div data-object="true" data-object-type="shape" style={{ position: "absolute", left: "0px", top: "0px", width: "300px", height: "8px", backgroundColor: sectionColor, zIndex: "1" }} />
      <div data-object="true" data-object-type="shape" style={{ position: "absolute", left: "1300px", top: "-100px", width: "350px", height: "350px", borderRadius: "50%", backgroundColor: "#ede9fe", opacity: "0.4", zIndex: "0" }} />

      <div data-object="true" data-object-type="textbox" style={{ position: "absolute", left: "80px", top: "22px", zIndex: "10" }}>
        <span style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "12px", fontWeight: "700", color: sectionColor, backgroundColor: "#ede9fe", padding: "3px 14px", borderRadius: "20px" }}>
          Revisão do Laudo — Seção 2 de 8
        </span>
      </div>

      <div data-object="true" data-object-type="textbox" style={{ position: "absolute", left: "80px", top: "55px", width: "750px", zIndex: "10" }}>
        <p style={{ fontFamily: '"Montserrat", sans-serif', fontSize: "40px", fontWeight: "800", color: "#003087", margin: "0", lineHeight: "1.15" }}>
          Questionários
        </p>
      </div>

      <div data-object="true" data-object-type="textbox" style={{ position: "absolute", left: "80px", top: "128px", width: "800px", zIndex: "10" }}>
        <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "18px", color: "#4a5568", margin: "0", lineHeight: "1.6" }}>
          Instrumentos padronizados e validados para mensurar objetivamente dor, funcionalidade e qualidade de vida do paciente.
        </p>
      </div>

      {/* Painel esquerdo */}
      <div data-object="true" data-object-type="shape" style={{ position: "absolute", left: "80px", top: "210px", width: "680px", height: "468px", backgroundColor: "#ffffff", borderRadius: "14px", border: "1px solid #d9e2ec", boxShadow: "0 12px 26px rgba(0,0,0,0.05)", zIndex: "1" }} />
      <div data-object="true" data-object-type="icon" style={{ position: "absolute", left: "100px", top: "226px", width: "40px", height: "40px", borderRadius: "50%", backgroundColor: sectionColor, display: "flex", alignItems: "center", justifyContent: "center", zIndex: "10" }}>
        <FontAwesomeIcon icon={faClipboardList} style={{ fontSize: "18px", color: "#ffffff" }} />
      </div>
      <div data-object="true" data-object-type="textbox" style={{ position: "absolute", left: "152px", top: "232px", width: "580px", zIndex: "10" }}>
        <p style={{ fontFamily: '"Montserrat", sans-serif', fontSize: "14px", fontWeight: "700", color: sectionColor, margin: "0", textTransform: "uppercase", letterSpacing: "0.5px" }}>
          Tipos de Questionários
        </p>
      </div>
      <div data-object="true" data-object-type="shape" style={{ position: "absolute", left: "100px", top: "274px", width: "640px", height: "1px", backgroundColor: "#e2e8f0", zIndex: "5" }} />

      {campos.map((campo, i) => (
        <div key={i} style={{ position: "absolute", left: "100px", top: `${288 + i * 60}px`, width: "640px", display: "flex", alignItems: "flex-start", gap: "14px", zIndex: "10" }}>
          <div style={{ width: "26px", minWidth: "26px", height: "26px", borderRadius: "50%", backgroundColor: sectionColor, color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: '"Montserrat", sans-serif', fontSize: "13px", fontWeight: "700", marginTop: "2px", flexShrink: 0 }}>
            {i + 1}
          </div>
          <div>
            <p style={{ fontFamily: '"Montserrat", sans-serif', fontSize: "15px", fontWeight: "700", color: "#1a202c", margin: "0" }}>{campo.titulo}</p>
            <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "13px", color: "#4a5568", margin: "3px 0 0 0", lineHeight: "1.4" }}>{campo.desc}</p>
          </div>
        </div>
      ))}

      <div data-object="true" data-object-type="shape" style={{ position: "absolute", left: "98px", top: "592px", width: "644px", height: "62px", backgroundColor: "#fef9e7", borderLeft: "4px solid #f59e0b", borderRadius: "8px", zIndex: "5" }} />
      <div data-object="true" data-object-type="textbox" style={{ position: "absolute", left: "114px", top: "600px", width: "614px", zIndex: "10" }}>
        <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "12px", color: "#92400e", lineHeight: "1.55", margin: "0" }}>
          <strong>Importante:</strong> A reaplicação sistemática dos questionários é essencial para documentar a evolução clínica e embasar decisões terapêuticas nas reavaliações.
        </p>
      </div>

      {/* Painel direito */}
      <div data-object="true" data-object-type="shape" style={{ position: "absolute", left: "780px", top: "210px", width: "760px", height: "468px", backgroundColor: "#ffffff", borderRadius: "14px", border: "1px solid #d9e2ec", boxShadow: "0 12px 26px rgba(0,0,0,0.05)", zIndex: "1" }} />
      <div data-object="true" data-object-type="textbox" style={{ position: "absolute", left: "800px", top: "226px", width: "720px", zIndex: "10" }}>
        <p style={{ fontFamily: '"Montserrat", sans-serif', fontSize: "14px", fontWeight: "700", color: "#003087", margin: "0", textTransform: "uppercase", letterSpacing: "0.5px" }}>
          Orientações de Revisão
        </p>
      </div>
      <div data-object="true" data-object-type="shape" style={{ position: "absolute", left: "800px", top: "250px", width: "720px", height: "1px", backgroundColor: "#e2e8f0", zIndex: "5" }} />
      {orientacoes.map((item, i) => (
        <div key={i} style={{ position: "absolute", left: "800px", top: `${264 + i * 54}px`, width: "720px", display: "flex", alignItems: "flex-start", gap: "10px", zIndex: "10" }}>
          <FontAwesomeIcon icon={faCircleCheck} style={{ fontSize: "15px", color: "#16a34a", marginTop: "2px", flexShrink: 0 }} />
          <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "14px", color: "#2d3748", margin: "0", lineHeight: "1.5" }}>{item}</p>
        </div>
      ))}

      {/* <img
        alt="Tela de questionários — lista"
        data-object="true"
        data-object-type="image"
        src="/img/Professor/Sistema_Prof_atendimento_paciente_Acompanhamento_laudo_Analises.png"
        style={{ position: "absolute", left: "800px", top: "548px", width: "356px", height: "112px", objectFit: "cover", objectPosition: "top", borderRadius: "8px", border: "1px solid #edf2f7", zIndex: "5" }}
      /> */}
      <img
        alt="Tela de questionários — formulário"
        data-object="true"
        data-object-type="image"
        src="/img/Professor/Sistema_Prof_atendimento_paciente_Acompanhamento_laudo_Exames.png"
        style={{ position: "absolute", left: "800px", top: "548px", width: "710px", height: "112px", objectFit: "cover", objectPosition: "top", borderRadius: "8px", border: "1px solid #edf2f7", zIndex: "5" }}
      />

      <div data-object="true" data-object-type="textbox" style={{ position: "absolute", left: "80px", top: "688px", zIndex: "10" }}>
        <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "14px", fontWeight: "600", color: "#a0aec0", textTransform: "uppercase", letterSpacing: "1px", margin: "0" }}>
          Clínica Escola de Fisioterapia — 2026
        </p>
      </div>
    </div>
  );
}
