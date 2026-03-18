import { faCircleCheck, faNotesMedical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const title = "Condutas e Tratamentos";

const sectionColor = "#059669";

const campos = [
  {
    titulo: "Procedimentos e Técnicas Realizados",
    desc: "Descrição das técnicas terapêuticas e recursos utilizados durante a sessão de atendimento.",
  },
  {
    titulo: "Parâmetros e Dosagem",
    desc: "Tempo de aplicação, intensidade, frequência e demais parâmetros técnicos de cada procedimento.",
  },
  {
    titulo: "Resposta Imediata do Paciente",
    desc: "Reação clínica observada durante e após cada intervenção terapêutica realizada.",
  },
  {
    titulo: "Materiais e Equipamentos Utilizados",
    desc: "Recursos físicos e tecnológicos empregados na sessão, incluindo marca e modelo quando relevante.",
  },
  {
    titulo: "Intercorrências e Orientações Domiciliares",
    desc: "Eventos adversos durante a sessão e instruções de autocuidado fornecidas ao paciente.",
  },
];

const orientacoes = [
  "Descreva cada procedimento com seus parâmetros técnicos completos para garantir a reprodutibilidade.",
  "Registre a resposta imediata do paciente a cada conduta aplicada durante a sessão.",
  "Documente todas as intercorrências, mesmo que consideradas de menor relevância clínica.",
  "O prontuário de condutas constitui o registro legal do atendimento — omissões são inaceitáveis.",
  "Certifique-se de que o professor tenha acesso para validar as condutas antes do encerramento.",
];

export default function Slide5() {
  return (
    <div
      className="slide-container"
      style={{ position: "relative", width: "1580px", height: "720px", overflow: "hidden", backgroundColor: "#f5f7fa" }}
    >
      <div data-object="true" data-object-type="shape" style={{ position: "absolute", left: "0px", top: "0px", width: "300px", height: "8px", backgroundColor: sectionColor, zIndex: "1" }} />
      <div data-object="true" data-object-type="shape" style={{ position: "absolute", left: "1300px", top: "-100px", width: "350px", height: "350px", borderRadius: "50%", backgroundColor: "#d1fae5", opacity: "0.4", zIndex: "0" }} />

      <div data-object="true" data-object-type="textbox" style={{ position: "absolute", left: "80px", top: "22px", zIndex: "10" }}>
        <span style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "12px", fontWeight: "700", color: sectionColor, backgroundColor: "#d1fae5", padding: "3px 14px", borderRadius: "20px" }}>
          Revisão do Laudo — Seção 3 de 8
        </span>
      </div>

      <div data-object="true" data-object-type="textbox" style={{ position: "absolute", left: "80px", top: "55px", width: "900px", zIndex: "10" }}>
        <p style={{ fontFamily: '"Montserrat", sans-serif', fontSize: "40px", fontWeight: "800", color: "#003087", margin: "0", lineHeight: "1.15" }}>
          Condutas e Tratamentos
        </p>
      </div>

      <div data-object="true" data-object-type="textbox" style={{ position: "absolute", left: "80px", top: "128px", width: "820px", zIndex: "10" }}>
        <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "18px", color: "#4a5568", margin: "0", lineHeight: "1.6" }}>
          Registro detalhado de todos os procedimentos terapêuticos e condutas clínicas realizados durante a sessão de atendimento.
        </p>
      </div>

      {/* Painel esquerdo */}
      <div data-object="true" data-object-type="shape" style={{ position: "absolute", left: "80px", top: "210px", width: "680px", height: "468px", backgroundColor: "#ffffff", borderRadius: "14px", border: "1px solid #d9e2ec", boxShadow: "0 12px 26px rgba(0,0,0,0.05)", zIndex: "1" }} />
      <div data-object="true" data-object-type="icon" style={{ position: "absolute", left: "100px", top: "226px", width: "40px", height: "40px", borderRadius: "50%", backgroundColor: sectionColor, display: "flex", alignItems: "center", justifyContent: "center", zIndex: "10" }}>
        <FontAwesomeIcon icon={faNotesMedical} style={{ fontSize: "18px", color: "#ffffff" }} />
      </div>
      <div data-object="true" data-object-type="textbox" style={{ position: "absolute", left: "152px", top: "232px", width: "580px", zIndex: "10" }}>
        <p style={{ fontFamily: '"Montserrat", sans-serif', fontSize: "14px", fontWeight: "700", color: sectionColor, margin: "0", textTransform: "uppercase", letterSpacing: "0.5px" }}>
          Pontos de Revisão
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
          <strong>Importante:</strong> O registro detalhado das condutas é obrigatório e constitui evidência legal do atendimento realizado. Omissões podem ser interpretadas como falha na assistência.
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

      <img
        alt="Tela de condutas e tratamentos"
        data-object="true"
        data-object-type="image"
        src="/img/Professor/Sistema_Prof_atendimento_paciente_Acompanhamento_laudo_Analises.png"
        style={{ position: "absolute", left: "800px", top: "548px", width: "356px", height: "112px", objectFit: "cover", objectPosition: "top", borderRadius: "8px", border: "1px solid #edf2f7", zIndex: "5" }}
      />
      <img
        alt="Tela de condutas — parte 2"
        data-object="true"
        data-object-type="image"
        src="/img/Professor/Sistema_Prof_atendimento_paciente_Acompanhamento_laudo_fim.png"
        style={{ position: "absolute", left: "1164px", top: "548px", width: "356px", height: "112px", objectFit: "cover", objectPosition: "top", borderRadius: "8px", border: "1px solid #edf2f7", zIndex: "5" }}
      />

      <div data-object="true" data-object-type="textbox" style={{ position: "absolute", left: "80px", top: "688px", zIndex: "10" }}>
        <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "14px", fontWeight: "600", color: "#a0aec0", textTransform: "uppercase", letterSpacing: "1px", margin: "0" }}>
          Clínica Escola de Fisioterapia — 2026
        </p>
      </div>
    </div>
  );
}
