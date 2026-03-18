import {
  faClipboardCheck,
  faClockRotateLeft,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const title = "Perfil Aluno";

export default function Slide1() {
  return (
    <div
      className="slide-container"
      style={{ position: "relative", width: "1580px", height: "720px", overflow: "hidden", backgroundColor: "#f5f7fa" }}
    >
      {/* ── Barra de destaque superior ── */}
      <div data-object="true" data-object-type="shape" style={{ position: "absolute", left: "0px", top: "0px", width: "300px", height: "8px", backgroundColor: "#003087", zIndex: "1" }} />

      {/* ── Círculo decorativo ── */}
      <div data-object="true" data-object-type="shape" style={{ position: "absolute", left: "-150px", top: "500px", width: "400px", height: "220px", backgroundColor: "#e2e8f0", borderRadius: "50% 50% 0 0", opacity: "0.4", zIndex: "0" }} />
      {/* ── Badge de perfil ── */}
      <div data-object="true" data-object-type="textbox" style={{ position: "absolute", left: "80px", top: "22px", zIndex: "10" }}>
        <span style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "12px", fontWeight: "700", color: "#0057b8", backgroundColor: "#e8f0fe", padding: "3px 14px", borderRadius: "20px" }}>
          Perfil Aluno
        </span>
      </div>

      {/* ── Título ── */}
      <div data-object="true" data-object-type="textbox" style={{ position: "absolute", left: "80px", top: "55px", width: "820px", zIndex: "10" }}>
        <p style={{ fontFamily: '"Montserrat", sans-serif', fontSize: "40px", fontWeight: "800", color: "#003087", margin: "0", lineHeight: "1.15" }}>
          Listagem de Atendimentos
        </p>
      </div>

      {/* ── Subtítulo ── */}
      <div data-object="true" data-object-type="textbox" style={{ position: "absolute", left: "80px", top: "128px", width: "820px", zIndex: "10" }}>
        <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "18px", color: "#4a5568", margin: "0", lineHeight: "1.6" }}>
          Após a recepção, o aluno acessa sua lista de atendimentos para consultar o histórico do paciente,
          iniciar a sessão e acompanhar o status de revisão pelo professor responsável.
        </p>
      </div>

      {/* ── Painel esquerdo ── */}
      <div data-object="true" data-object-type="shape" style={{ position: "absolute", left: "80px", top: "210px", width: "680px", height: "465px", backgroundColor: "#ffffff", borderRadius: "14px", border: "1px solid #d9e2ec", boxShadow: "0 12px 26px rgba(0,0,0,0.05)", zIndex: "1" }} />

      {/* Item 1 — Histórico */}
      <div data-object="true" data-object-type="shape" style={{ position: "absolute", left: "98px", top: "228px", width: "644px", height: "88px", backgroundColor: "#fffbeb", borderLeft: "4px solid #d97706", borderRadius: "10px", zIndex: "5" }} />
      <div data-object="true" data-object-type="icon" style={{ position: "absolute", left: "116px", top: "246px", width: "38px", height: "38px", borderRadius: "9px", backgroundColor: "#d97706", display: "flex", alignItems: "center", justifyContent: "center", zIndex: "10" }}>
        <FontAwesomeIcon icon={faClockRotateLeft} style={{ fontSize: "18px", color: "#ffffff" }} />
      </div>
      <div data-object="true" data-object-type="textbox" style={{ position: "absolute", left: "168px", top: "237px", width: "554px", zIndex: "10" }}>
        <p style={{ fontFamily: '"Montserrat", sans-serif', fontSize: "16px", fontWeight: "700", color: "#92400e", margin: "0" }}>Histórico do Paciente</p>
        <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "13px", color: "#78350f", margin: "5px 0 0 0", lineHeight: "1.5" }}>
          Consulte todos os atendimentos anteriores do paciente em nossas clínicas antes de iniciar a sessão.
        </p>
      </div>

      {/* Item 2 — Iniciar Atendimento */}
      <div data-object="true" data-object-type="shape" style={{ position: "absolute", left: "98px", top: "332px", width: "644px", height: "88px", backgroundColor: "#f0fdf4", borderLeft: "4px solid #16a34a", borderRadius: "10px", zIndex: "5" }} />
      <div data-object="true" data-object-type="icon" style={{ position: "absolute", left: "116px", top: "352px", width: "100px", height: "30px", borderRadius: "6px", backgroundColor: "#16a34a", display: "flex", alignItems: "center", justifyContent: "center", gap: "5px", zIndex: "10" }}>
        <FontAwesomeIcon icon={faPlay} style={{ fontSize: "11px", color: "#ffffff" }} />
        <span style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "11px", fontWeight: "700", color: "#ffffff" }}>Iniciar</span>
      </div>
      <div data-object="true" data-object-type="textbox" style={{ position: "absolute", left: "226px", top: "340px", width: "496px", zIndex: "10" }}>
        <p style={{ fontFamily: '"Montserrat", sans-serif', fontSize: "16px", fontWeight: "700", color: "#14532d", margin: "0" }}>Iniciar Atendimento</p>
        <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "13px", color: "#166534", margin: "5px 0 0 0", lineHeight: "1.5" }}>
          Abre o prontuário clínico para que o aluno conduza o processo assistencial completo com o paciente.
        </p>
      </div>

      {/* Item 3 — Aguardando Revisão */}
      <div data-object="true" data-object-type="shape" style={{ position: "absolute", left: "98px", top: "436px", width: "644px", height: "88px", backgroundColor: "#fff7ed", borderLeft: "4px solid #ea580c", borderRadius: "10px", zIndex: "5" }} />
      <div data-object="true" data-object-type="icon" style={{ position: "absolute", left: "116px", top: "455px", width: "118px", height: "28px", borderRadius: "5px", backgroundColor: "#ea580c", display: "flex", alignItems: "center", justifyContent: "center", zIndex: "10" }}>
        <span style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "10px", fontWeight: "700", color: "#ffffff" }}>AGUARDANDO REVISÃO</span>
      </div>
      <div data-object="true" data-object-type="textbox" style={{ position: "absolute", left: "244px", top: "444px", width: "478px", zIndex: "10" }}>
        <p style={{ fontFamily: '"Montserrat", sans-serif', fontSize: "16px", fontWeight: "700", color: "#7c2d12", margin: "0" }}>Aguardando Revisão</p>
        <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "13px", color: "#9a3412", margin: "5px 0 0 0", lineHeight: "1.5" }}>
          O atendimento foi finalizado pelo aluno e aguarda análise e validação pelo professor responsável.
        </p>
      </div>

      {/* Nota informativa */}
      <div data-object="true" data-object-type="shape" style={{ position: "absolute", left: "98px", top: "540px", width: "644px", height: "58px", backgroundColor: "#f0f4ff", borderRadius: "8px", zIndex: "5" }} />
      <div data-object="true" data-object-type="textbox" style={{ position: "absolute", left: "112px", top: "548px", width: "616px", zIndex: "10" }}>
        <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "12px", color: "#3b5bdb", lineHeight: "1.55", margin: "0", fontStyle: "italic" }}>
          Ao iniciar o atendimento, o aluno terá acesso ao prontuário completo: anamnese, questionários, exames físicos, condutas, CID, fisioterapia, documentos e agendamento de retorno.
        </p>
      </div>

      {/* ── Painel direito ── */}
      <div data-object="true" data-object-type="shape" style={{ position: "absolute", left: "780px", top: "210px", width: "760px", height: "465px", backgroundColor: "#ffffff", borderRadius: "14px", border: "1px solid #d9e2ec", boxShadow: "0 12px 26px rgba(0,0,0,0.05)", zIndex: "1" }} />

      <img alt="Lista de atendimentos do aluno" data-object="true" data-object-type="image"
        src="/img/Estudante/Sistema_Alunos_atendimento.png"
        style={{ position: "absolute", left: "798px", top: "228px", width: "362px", height: "200px", objectFit: "contain", objectPosition: "center", borderRadius: "8px", border: "1px solid #edf2f7", zIndex: "5" }} />

      <img alt="Detalhes do paciente" data-object="true" data-object-type="image"
        src="/img/Estudante/Sistema_Alunos_atendimento_paciente.png"
        style={{ position: "absolute", left: "1170px", top: "228px", width: "362px", height: "200px", objectFit: "contain", objectPosition: "center", borderRadius: "8px", border: "1px solid #edf2f7", zIndex: "5" }} />

      <img alt="Atendimento finalizado — aguardando revisão do professor" data-object="true" data-object-type="image"
        src="/img/Estudante/Sistema_Alunos_atendimento_paciente_Acompanhamento_finalizada_aluno.png"
        style={{ position: "absolute", left: "798px", top: "446px", width: "734px", height: "210px", objectFit: "contain", objectPosition: "center", borderRadius: "8px", border: "1px solid #edf2f7", zIndex: "5" }} />

      {/* ── Rodapé ── */}
      <div data-object="true" data-object-type="textbox" style={{ position: "absolute", left: "80px", top: "684px", zIndex: "10" }}>
        <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "14px", fontWeight: "600", color: "#a0aec0", textTransform: "uppercase", letterSpacing: "1px", margin: "0" }}>
          Clínica Escola de Fisioterapia — 2026
        </p>
      </div>
    </div>
  );
}
