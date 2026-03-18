import { faCircleCheck, faCommentMedical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const title = "Anamnese";

const sectionColor = "#0057b8";

const campos = [
  {
    titulo: "Queixa Principal e Duração",
    desc: "Motivo central da consulta e há quanto tempo o paciente apresenta os sintomas.",
  },
  {
    titulo: "Histórico da Doença Atual",
    desc: "Evolução cronológica dos sintomas, fatores de melhora/piora e tratamentos anteriores.",
  },
  {
    titulo: "Antecedentes Pessoais e Familiares",
    desc: "Condições clínicas prévias, cirurgias, hospitalizações e histórico familiar relevante.",
  },
  {
    titulo: "Medicamentos em Uso e Alergias",
    desc: "Relação completa de medicamentos contínuos e alergias conhecidas a medicamentos ou substâncias.",
  },
  {
    titulo: "Hábitos de Vida e Atividade Profissional",
    desc: "Nível de atividade física, ocupação, qualidade do sono e hábitos de saúde.",
  },
];

const orientacoes = [
  "Registre as informações com clareza e objetividade, utilizando terminologia clínica adequada.",
  "A anamnese deve ser concluída antes de qualquer avaliação física ou intervenção terapêutica.",
  "Capture todas as queixas relatadas, mesmo que não sejam a queixa principal.",
  "Em casos pediátricos ou com limitações de comunicação, registre também o relato do responsável.",
  "O professor poderá solicitar complementação ou revisão das informações registradas.",
];

export default function Slide3() {
  return (
    <div
      className="slide-container"
      style={{ position: "relative", width: "1580px", height: "720px", overflow: "hidden", backgroundColor: "#f5f7fa" }}
    >
      {/* Barra de acento */}
      <div data-object="true" data-object-type="shape" style={{ position: "absolute", left: "0px", top: "0px", width: "300px", height: "8px", backgroundColor: sectionColor, zIndex: "1" }} />
      {/* Círculo decorativo */}
      <div data-object="true" data-object-type="shape" style={{ position: "absolute", left: "1300px", top: "-100px", width: "350px", height: "350px", borderRadius: "50%", backgroundColor: "#dbeafe", opacity: "0.4", zIndex: "0" }} />

      {/* Badge */}
      <div data-object="true" data-object-type="textbox" style={{ position: "absolute", left: "80px", top: "22px", zIndex: "10" }}>
        <span style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "12px", fontWeight: "700", color: sectionColor, backgroundColor: "#dbeafe", padding: "3px 14px", borderRadius: "20px" }}>
          Revisão do Laudo — Seção 1 de 8
        </span>
      </div>

      {/* Título */}
      <div data-object="true" data-object-type="textbox" style={{ position: "absolute", left: "80px", top: "55px", width: "750px", zIndex: "10" }}>
        <p style={{ fontFamily: '"Montserrat", sans-serif', fontSize: "40px", fontWeight: "800", color: "#003087", margin: "0", lineHeight: "1.15" }}>
          Anamnese
        </p>
      </div>

      {/* Subtítulo */}
      <div data-object="true" data-object-type="textbox" style={{ position: "absolute", left: "80px", top: "128px", width: "800px", zIndex: "10" }}>
        <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "18px", color: "#4a5568", margin: "0", lineHeight: "1.6" }}>
          Entrevista clínica inicial que consolida o histórico completo do paciente, orientando o diagnóstico e o planejamento terapêutico.
        </p>
      </div>

      {/* Painel esquerdo */}
      <div data-object="true" data-object-type="shape" style={{ position: "absolute", left: "80px", top: "210px", width: "680px", height: "468px", backgroundColor: "#ffffff", borderRadius: "14px", border: "1px solid #d9e2ec", boxShadow: "0 12px 26px rgba(0,0,0,0.05)", zIndex: "1" }} />

      {/* Cabeçalho do painel esquerdo */}
      <div data-object="true" data-object-type="icon" style={{ position: "absolute", left: "100px", top: "226px", width: "40px", height: "40px", borderRadius: "50%", backgroundColor: sectionColor, display: "flex", alignItems: "center", justifyContent: "center", zIndex: "10" }}>
        <FontAwesomeIcon icon={faCommentMedical} style={{ fontSize: "18px", color: "#ffffff" }} />
      </div>
      <div data-object="true" data-object-type="textbox" style={{ position: "absolute", left: "152px", top: "232px", width: "580px", zIndex: "10" }}>
        <p style={{ fontFamily: '"Montserrat", sans-serif', fontSize: "14px", fontWeight: "700", color: sectionColor, margin: "0", textTransform: "uppercase", letterSpacing: "0.5px" }}>
          Pontos de Revisão
        </p>
      </div>

      {/* Divisória */}
      <div data-object="true" data-object-type="shape" style={{ position: "absolute", left: "100px", top: "274px", width: "640px", height: "1px", backgroundColor: "#e2e8f0", zIndex: "5" }} />

      {/* Itens */}
      {campos.map((campo, i) => (
        <div
          key={i}
          style={{ position: "absolute", left: "100px", top: `${288 + i * 60}px`, width: "640px", display: "flex", alignItems: "flex-start", gap: "14px", zIndex: "10" }}
        >
          <div style={{ width: "26px", minWidth: "26px", height: "26px", borderRadius: "50%", backgroundColor: sectionColor, color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: '"Montserrat", sans-serif', fontSize: "13px", fontWeight: "700", marginTop: "2px", flexShrink: 0 }}>
            {i + 1}
          </div>
          <div>
            <p style={{ fontFamily: '"Montserrat", sans-serif', fontSize: "15px", fontWeight: "700", color: "#1a202c", margin: "0" }}>{campo.titulo}</p>
            <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "13px", color: "#4a5568", margin: "3px 0 0 0", lineHeight: "1.4" }}>{campo.desc}</p>
          </div>
        </div>
      ))}

      {/* Nota */}
      <div data-object="true" data-object-type="shape" style={{ position: "absolute", left: "98px", top: "592px", width: "644px", height: "62px", backgroundColor: "#fef9e7", borderLeft: "4px solid #f59e0b", borderRadius: "8px", zIndex: "5" }} />
      <div data-object="true" data-object-type="textbox" style={{ position: "absolute", left: "114px", top: "600px", width: "614px", zIndex: "10" }}>
        <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "12px", color: "#92400e", lineHeight: "1.55", margin: "0" }}>
          <strong>Importante:</strong> A anamnese é o alicerce do prontuário clínico. Informações incompletas podem comprometer todo o planejamento terapêutico.
        </p>
      </div>

      {/* Painel direito */}
      <div data-object="true" data-object-type="shape" style={{ position: "absolute", left: "780px", top: "210px", width: "760px", height: "468px", backgroundColor: "#ffffff", borderRadius: "14px", border: "1px solid #d9e2ec", boxShadow: "0 12px 26px rgba(0,0,0,0.05)", zIndex: "1" }} />

      {/* Cabeçalho do painel direito */}
      <div data-object="true" data-object-type="textbox" style={{ position: "absolute", left: "800px", top: "226px", width: "720px", zIndex: "10" }}>
        <p style={{ fontFamily: '"Montserrat", sans-serif', fontSize: "14px", fontWeight: "700", color: "#003087", margin: "0", textTransform: "uppercase", letterSpacing: "0.5px" }}>
          Orientações de Revisão
        </p>
      </div>
      <div data-object="true" data-object-type="shape" style={{ position: "absolute", left: "800px", top: "250px", width: "720px", height: "1px", backgroundColor: "#e2e8f0", zIndex: "5" }} />

      {/* Orientações */}
      {orientacoes.map((item, i) => (
        <div
          key={i}
          style={{ position: "absolute", left: "800px", top: `${264 + i * 54}px`, width: "720px", display: "flex", alignItems: "flex-start", gap: "10px", zIndex: "10" }}
        >
          <FontAwesomeIcon icon={faCircleCheck} style={{ fontSize: "15px", color: "#16a34a", marginTop: "2px", flexShrink: 0 }} />
          <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "14px", color: "#2d3748", margin: "0", lineHeight: "1.5" }}>{item}</p>
        </div>
      ))}

      {/* Captura de tela — prontuário visão geral */}
      <img
        alt="Prontuário do paciente — visão geral do laudo"
        data-object="true"
        data-object-type="image"
        src="/img/Professor/Sistema_Prof_atendimento_paciente_Acompanhamento_laudo.png"
        style={{ position: "absolute", left: "800px", top: "542px", width: "720px", height: "118px", objectFit: "cover", objectPosition: "top", borderRadius: "8px", border: "1px solid #edf2f7", zIndex: "5" }}
      />

      {/* Rodapé */}
      <div data-object="true" data-object-type="textbox" style={{ position: "absolute", left: "80px", top: "688px", zIndex: "10" }}>
        <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "14px", fontWeight: "600", color: "#a0aec0", textTransform: "uppercase", letterSpacing: "1px", margin: "0" }}>
          Clínica Escola de Fisioterapia — 2026
        </p>
      </div>
    </div>
  );
}
