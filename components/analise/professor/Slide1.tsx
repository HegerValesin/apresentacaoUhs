import {
  faClipboardCheck,
  faClockRotateLeft,
  faFilePen,
  faListCheck,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const title = "Perfil Professor";

export default function Slide1() {
  return (
    <div
      className="slide-container"
      style={{ position: "relative", width: "1580px", height: "720px", overflow: "hidden", backgroundColor: "#f5f7fa" }}
    >
      <div data-object="true" data-object-type="shape" style={{ position: "absolute", left: "0px", top: "0px", width: "300px", height: "8px", backgroundColor: "#003087", zIndex: "1" }} />
      <div data-object="true" data-object-type="shape" style={{ position: "absolute", left: "-150px", top: "500px", width: "400px", height: "220px", backgroundColor: "#e2e8f0", borderRadius: "50% 50% 0 0", opacity: "0.4", zIndex: "0" }} />

      <div data-object="true" data-object-type="textbox" style={{ position: "absolute", left: "80px", top: "22px", zIndex: "10" }}>
        <span style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "12px", fontWeight: "700", color: "#0057b8", backgroundColor: "#e8f0fe", padding: "3px 14px", borderRadius: "20px" }}>
          Perfil Professor
        </span>
      </div>

      <div data-object="true" data-object-type="textbox" style={{ position: "absolute", left: "80px", top: "55px", width: "860px", zIndex: "10" }}>
        <p style={{ fontFamily: '"Montserrat", sans-serif', fontSize: "40px", fontWeight: "800", color: "#003087", margin: "0", lineHeight: "1.15" }}>
          Listagem de Atendimentos
        </p>
      </div>

      <div data-object="true" data-object-type="textbox" style={{ position: "absolute", left: "80px", top: "128px", width: "850px", zIndex: "10" }}>
        <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "18px", color: "#4a5568", margin: "0", lineHeight: "1.6" }}>
          O professor acompanha atendimentos finalizados pelos alunos, revisa o laudo, pode editar registros
          do dia e conclui o encerramento clínico com validação pedagógica.
        </p>
      </div>

      <div data-object="true" data-object-type="shape" style={{ position: "absolute", left: "80px", top: "210px", width: "680px", height: "465px", backgroundColor: "#ffffff", borderRadius: "14px", border: "1px solid #d9e2ec", boxShadow: "0 12px 26px rgba(0,0,0,0.05)", zIndex: "1" }} />

      <div data-object="true" data-object-type="shape" style={{ position: "absolute", left: "98px", top: "228px", width: "644px", height: "80px", backgroundColor: "#eff6ff", borderLeft: "4px solid #2563eb", borderRadius: "10px", zIndex: "5" }} />
      <div data-object="true" data-object-type="icon" style={{ position: "absolute", left: "116px", top: "247px", width: "34px", height: "34px", borderRadius: "8px", backgroundColor: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center", zIndex: "10" }}>
        <FontAwesomeIcon icon={faListCheck} style={{ fontSize: "16px", color: "#ffffff" }} />
      </div>
      <div data-object="true" data-object-type="textbox" style={{ position: "absolute", left: "164px", top: "236px", width: "560px", zIndex: "10" }}>
        <p style={{ fontFamily: '"Montserrat", sans-serif', fontSize: "16px", fontWeight: "700", color: "#1e3a8a", margin: "0" }}>Fila de Atendimentos</p>
        <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "13px", color: "#1e40af", margin: "4px 0 0 0", lineHeight: "1.5" }}>
          Visualize casos pendentes de revisão, atendimentos finalizados e pacientes já validados.
        </p>
      </div>

      <div data-object="true" data-object-type="shape" style={{ position: "absolute", left: "98px", top: "322px", width: "644px", height: "80px", backgroundColor: "#fffbeb", borderLeft: "4px solid #d97706", borderRadius: "10px", zIndex: "5" }} />
      <div data-object="true" data-object-type="icon" style={{ position: "absolute", left: "116px", top: "341px", width: "34px", height: "34px", borderRadius: "8px", backgroundColor: "#d97706", display: "flex", alignItems: "center", justifyContent: "center", zIndex: "10" }}>
        <FontAwesomeIcon icon={faClockRotateLeft} style={{ fontSize: "16px", color: "#ffffff" }} />
      </div>
      <div data-object="true" data-object-type="textbox" style={{ position: "absolute", left: "164px", top: "330px", width: "560px", zIndex: "10" }}>
        <p style={{ fontFamily: '"Montserrat", sans-serif', fontSize: "16px", fontWeight: "700", color: "#92400e", margin: "0" }}>Histórico do Paciente</p>
        <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "13px", color: "#78350f", margin: "4px 0 0 0", lineHeight: "1.5" }}>
          Consulte evolução clínica, registros anteriores e condutas para fundamentar a validação.
        </p>
      </div>

      <div data-object="true" data-object-type="shape" style={{ position: "absolute", left: "98px", top: "416px", width: "644px", height: "80px", backgroundColor: "#eef2ff", borderLeft: "4px solid #4f46e5", borderRadius: "10px", zIndex: "5" }} />
      <div data-object="true" data-object-type="icon" style={{ position: "absolute", left: "116px", top: "435px", width: "34px", height: "34px", borderRadius: "8px", backgroundColor: "#4f46e5", display: "flex", alignItems: "center", justifyContent: "center", zIndex: "10" }}>
        <FontAwesomeIcon icon={faFilePen} style={{ fontSize: "16px", color: "#ffffff" }} />
      </div>
      <div data-object="true" data-object-type="textbox" style={{ position: "absolute", left: "164px", top: "424px", width: "560px", zIndex: "10" }}>
        <p style={{ fontFamily: '"Montserrat", sans-serif', fontSize: "16px", fontWeight: "700", color: "#3730a3", margin: "0" }}>Editar Atendimento</p>
        <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "13px", color: "#4338ca", margin: "4px 0 0 0", lineHeight: "1.5" }}>
          Momento que diferencia o perfil professor: ajustes finos no laudo já finalizado pelo aluno.
        </p>
      </div>

      <div data-object="true" data-object-type="shape" style={{ position: "absolute", left: "98px", top: "510px", width: "644px", height: "80px", backgroundColor: "#f0fdf4", borderLeft: "4px solid #16a34a", borderRadius: "10px", zIndex: "5" }} />
      <div data-object="true" data-object-type="icon" style={{ position: "absolute", left: "116px", top: "529px", width: "34px", height: "34px", borderRadius: "8px", backgroundColor: "#16a34a", display: "flex", alignItems: "center", justifyContent: "center", zIndex: "10" }}>
        <FontAwesomeIcon icon={faUserCheck} style={{ fontSize: "16px", color: "#ffffff" }} />
      </div>
      <div data-object="true" data-object-type="textbox" style={{ position: "absolute", left: "164px", top: "518px", width: "560px", zIndex: "10" }}>
        <p style={{ fontFamily: '"Montserrat", sans-serif', fontSize: "16px", fontWeight: "700", color: "#14532d", margin: "0" }}>Validar e Encerrar</p>
        <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "13px", color: "#166534", margin: "4px 0 0 0", lineHeight: "1.5" }}>
          Após revisão e correções, o professor valida o atendimento e realiza o encerramento final.
        </p>
      </div>

      <div data-object="true" data-object-type="shape" style={{ position: "absolute", left: "98px", top: "604px", width: "644px", height: "56px", backgroundColor: "#f8fafc", borderLeft: "4px solid #94a3b8", borderRadius: "8px", zIndex: "5" }} />
      <div data-object="true" data-object-type="textbox" style={{ position: "absolute", left: "112px", top: "613px", width: "618px", zIndex: "10" }}>
        <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "12px", color: "#334155", lineHeight: "1.5", margin: "0" }}>
          <strong>Diferença-chave:</strong> no perfil professor há etapa explícita de edição após o atendimento do aluno,
          garantindo padronização clínica e qualidade pedagógica.
        </p>
      </div>

      <div data-object="true" data-object-type="shape" style={{ position: "absolute", left: "780px", top: "210px", width: "760px", height: "465px", backgroundColor: "#ffffff", borderRadius: "14px", border: "1px solid #d9e2ec", boxShadow: "0 12px 26px rgba(0,0,0,0.05)", zIndex: "1" }} />

      <img
        alt="Fila de atendimentos do professor"
        data-object="true"
        data-object-type="image"
        src="/img/Professor/Sistema_Prof_atendimento_paciente_Acompanhamento_lista.png"
        style={{ position: "absolute", left: "798px", top: "228px", width: "362px", height: "200px", objectFit: "contain", objectPosition: "center", borderRadius: "8px", border: "1px solid #edf2f7", zIndex: "5" }}
      />

      <img
        alt="Atendimento pronto para revisão"
        data-object="true"
        data-object-type="image"
        src="/img/Professor/Sistema_Prof_atendimento_paciente_Acompanhamento_Lista_atendido.png"
        style={{ position: "absolute", left: "1170px", top: "228px", width: "362px", height: "200px", objectFit: "contain", objectPosition: "center", borderRadius: "8px", border: "1px solid #edf2f7", zIndex: "5" }}
      />

      <img
        alt="Tela de revisão e edição do laudo"
        data-object="true"
        data-object-type="image"
        src="/img/Professor/Sistema_Prof_atendimento_paciente_Acompanhamento_laudo.png"
        style={{ position: "absolute", left: "798px", top: "446px", width: "734px", height: "210px", objectFit: "contain", objectPosition: "center", borderRadius: "8px", border: "1px solid #edf2f7", zIndex: "5" }}
      />

      <div data-object="true" data-object-type="textbox" style={{ position: "absolute", left: "80px", top: "684px", zIndex: "10" }}>
        <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "14px", fontWeight: "600", color: "#a0aec0", textTransform: "uppercase", letterSpacing: "1px", margin: "0" }}>
          Clínica Escola de Fisioterapia — 2026
        </p>
      </div>
    </div>
  );
}
