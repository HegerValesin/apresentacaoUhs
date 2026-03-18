import { faCircleCheck, faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const title = "CID — Classificação Internacional de Doenças";

const sectionColor = "#d97706";

const campos = [
  {
    titulo: "Pesquisa por Código ou Descrição",
    desc: "Busque o código alfanumérico (ex.: M54.5) ou pela descrição da condição (ex.: 'dor lombar').",
  },
  {
    titulo: "Diagnóstico Principal",
    desc: "Condição de saúde primária que motivou o atendimento e orienta o plano terapêutico.",
  },
  {
    titulo: "Diagnósticos Secundários",
    desc: "Condições concomitantes relevantes que influenciam o tratamento ou o prognóstico do paciente.",
  },
  {
    titulo: "Descrição e Justificativa Clínica",
    desc: "O CID registrado deve estar alinhado à anamnese, exames físicos e hipótese diagnóstica.",
  },
  {
    titulo: "Validação pelo Professor Responsável",
    desc: "O professor supervisor é responsável pela confirmação e homologação do código registrado.",
  },
];

const orientacoes = [
  "Utilize o código de maior precisão clínica disponível na tabela CID-10.",
  "Em caso de incerteza diagnóstica, consulte o professor antes de registrar o código.",
  "O CID registrado deve ser coerente com a anamnese e os exames realizados.",
  "Diagnósticos secundários devem ser informados quando influenciam o plano terapêutico.",
  "O CID-10 é obrigatório em todos os prontuários e documentos clínicos emitidos.",
];

export default function Slide6() {
  return (
    <div
      className="slide-container"
      style={{ position: "relative", width: "1580px", height: "720px", overflow: "hidden", backgroundColor: "#f5f7fa" }}
    >
      <div data-object="true" data-object-type="shape" style={{ position: "absolute", left: "0px", top: "0px", width: "300px", height: "8px", backgroundColor: sectionColor, zIndex: "1" }} />
      <div data-object="true" data-object-type="shape" style={{ position: "absolute", left: "1300px", top: "-100px", width: "350px", height: "350px", borderRadius: "50%", backgroundColor: "#fef3c7", opacity: "0.5", zIndex: "0" }} />

      <div data-object="true" data-object-type="textbox" style={{ position: "absolute", left: "80px", top: "22px", zIndex: "10" }}>
        <span style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "12px", fontWeight: "700", color: sectionColor, backgroundColor: "#fef3c7", padding: "3px 14px", borderRadius: "20px" }}>
          Revisão do Laudo — Seção 4 de 8
        </span>
      </div>

      <div data-object="true" data-object-type="textbox" style={{ position: "absolute", left: "80px", top: "55px", width: "1100px", zIndex: "10" }}>
        <p style={{ fontFamily: '"Montserrat", sans-serif', fontSize: "40px", fontWeight: "800", color: "#003087", margin: "0", lineHeight: "1.15" }}>
          CID — Classificação Internacional de Doenças
        </p>
      </div>

      <div data-object="true" data-object-type="textbox" style={{ position: "absolute", left: "80px", top: "128px", width: "820px", zIndex: "10" }}>
        <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "18px", color: "#4a5568", margin: "0", lineHeight: "1.6" }}>
          Codificação oficial da condição de saúde do paciente, obrigatória para completude do prontuário e emissão de documentos clínicos.
        </p>
      </div>

      {/* Painel esquerdo */}
      <div data-object="true" data-object-type="shape" style={{ position: "absolute", left: "80px", top: "210px", width: "680px", height: "468px", backgroundColor: "#ffffff", borderRadius: "14px", border: "1px solid #d9e2ec", boxShadow: "0 12px 26px rgba(0,0,0,0.05)", zIndex: "1" }} />
      <div data-object="true" data-object-type="icon" style={{ position: "absolute", left: "100px", top: "226px", width: "40px", height: "40px", borderRadius: "50%", backgroundColor: sectionColor, display: "flex", alignItems: "center", justifyContent: "center", zIndex: "10" }}>
        <FontAwesomeIcon icon={faTag} style={{ fontSize: "18px", color: "#ffffff" }} />
      </div>
      <div data-object="true" data-object-type="textbox" style={{ position: "absolute", left: "152px", top: "232px", width: "580px", zIndex: "10" }}>
        <p style={{ fontFamily: '"Montserrat", sans-serif', fontSize: "14px", fontWeight: "700", color: sectionColor, margin: "0", textTransform: "uppercase", letterSpacing: "0.5px" }}>
          Como Utilizar
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
          <strong>Importante:</strong> O registro de um código CID incorreto pode invalidar documentos clínicos e impactar o cuidado do paciente. Dúvidas devem ser dirimidas com o professor.
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
        alt="Tela de CID — seleção de código"
        data-object="true"
        data-object-type="image"
        src="/img/Professor/Sistema_Prof_atendimento_paciente_Acompanhamento_laudo_Exames.png"
        style={{ position: "absolute", left: "800px", top: "548px", width: "356px", height: "112px", objectFit: "cover", objectPosition: "top", borderRadius: "8px", border: "1px solid #edf2f7", zIndex: "5" }}
      />
      <img
        alt="Tela de CID — diagnóstico registrado"
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
