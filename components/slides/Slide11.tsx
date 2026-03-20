import { useRouter } from "next/navigation";
import {
  faArrowRight,
  faCalendarDays,
  faCircleCheck,
  faClock,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const title = "Fluxo do Coordenador no UHS";

export default function Slide11() {
  const router = useRouter();

  const openCoordenadorAgenda = () => {
    const currentHash =
      typeof window !== "undefined" && window.location.hash
        ? window.location.hash
        : "#slide11";
    const returnTo = `/${currentHash}`;
    router.push(`/coordenadorAgenda?returnTo=${encodeURIComponent(returnTo)}`);
  };

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

      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "1020px",
          top: "-120px",
          width: "380px",
          height: "380px",
          backgroundColor: "#e2e8f0",
          borderRadius: "50%",
          opacity: "0.35",
          zIndex: "1",
        }}
      ></div>

      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "80px",
          top: "60px",
          width: "1120px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Montserrat", sans-serif',
            fontSize: "40px",
            fontWeight: "800",
            color: "#003087",
            lineHeight: "1.2",
            margin: "0",
          }}
        >
          Fluxo: Coordenador
          <FontAwesomeIcon
            icon={faArrowRight}
            style={{ fontSize: "28px", color: "#4da6ff", margin: "0 10px" }}
          />
          Agenda do Professor
          <FontAwesomeIcon
            icon={faArrowRight}
            style={{ fontSize: "28px", color: "#4da6ff", margin: "0 10px" }}
          />
          Operação Clínica
        </p>
      </div>

      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "80px",
          top: "150px",
          width: "1080px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "18px",
            color: "#4a5568",
            lineHeight: "1.5",
            margin: "0",
          }}
        >
          A rotina do coordenador concentra o planejamento da agenda dos professores,
          etapa essencial para que recepção, professor e aluno operem com previsibilidade.
        </p>
      </div>

      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "80px",
          top: "210px",
          width: "560px",
          height: "420px",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
          borderLeft: "6px solid #0057b8",
          zIndex: "1",
        }}
      ></div>

      {[{
        icon: faUserTie,
        title: "Selecionar Professor",
        text: "Definir o docente e a unidade para abertura do calendário de atendimento.",
      }, {
        icon: faClock,
        title: "Configurar Horários",
        text: "Criar blocos de horário evitando conflito e preservando cobertura assistencial.",
      }, {
        icon: faCircleCheck,
        title: "Gerar e Confirmar Agenda",
        text: "Publicar agenda e validar a listagem final para disponibilizar ao restante do fluxo.",
      }].map((item, idx) => (
        <div
          key={item.title}
          style={{
            position: "absolute",
            left: "110px",
            top: `${250 + idx * 116}px`,
            width: "500px",
            height: "94px",
            backgroundColor: "#f8fbff",
            border: "1px solid #d7e4f3",
            borderRadius: "10px",
            zIndex: "10",
            display: "flex",
            alignItems: "flex-start",
            gap: "14px",
            padding: "14px",
          }}
        >
          <div style={{ width: "24px", minWidth: "24px", marginTop: "4px" }}>
            <FontAwesomeIcon icon={item.icon} style={{ fontSize: "20px", color: "#0057b8" }} />
          </div>
          <div>
            <p style={{ margin: "0", fontFamily: '"Montserrat", sans-serif', fontSize: "16px", fontWeight: "700", color: "#12395f" }}>
              {item.title}
            </p>
            <p style={{ margin: "6px 0 0 0", fontFamily: '"Open Sans", sans-serif', fontSize: "14px", lineHeight: "1.45", color: "#4a5568" }}>
              {item.text}
            </p>
          </div>
        </div>
      ))}

      <div
        data-object="true"
        data-object-type="shape"
        onClick={openCoordenadorAgenda}
        style={{
          position: "absolute",
          left: "680px",
          top: "210px",
          width: "520px",
          height: "420px",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
          borderLeft: "6px solid #1d4ed8",
          zIndex: "1",
          cursor: "pointer",
        }}
      ></div>

      <img
        alt="Rotina do coordenador para criação da agenda"
        data-object="true"
        data-object-type="image"
        onClick={openCoordenadorAgenda}
        src="/img/Coordenador/Sistema_coo_agenda_professor_horarios_novo_gerar_confirma_listagem.png"
        style={{
          position: "absolute",
          left: "700px",
          top: "235px",
          width: "480px",
          height: "300px",
          objectFit: "contain",
          borderRadius: "8px",
          border: "1px solid #edf2f7",
          zIndex: "5",
          cursor: "pointer",
        }}
      />

      <div
        data-object="true"
        data-object-type="textbox"
        onClick={openCoordenadorAgenda}
        style={{ position: "absolute", left: "700px", top: "548px", width: "480px", zIndex: "10", cursor: "pointer" }}
      >
        <p style={{ fontFamily: '"Montserrat", sans-serif', fontSize: "18px", fontWeight: "700", color: "#003087", margin: "0" }}>
          Abrir rotina detalhada do coordenador
        </p>
        <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "14px", color: "#4a5568", margin: "8px 0 0 0", lineHeight: "1.5" }}>
          Clique para visualizar todas as 7 etapas com as telas do processo de criação da agenda dos professores.
        </p>
      </div>

      <div
        data-object="true"
        data-object-type="textbox"
        style={{ position: "absolute", left: "80px", top: "680px", zIndex: "10" }}
      >
        <p
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "14px",
            fontWeight: "600",
            color: "#a0aec0",
            textTransform: "uppercase",
            letterSpacing: "1px",
            margin: "0",
          }}
        >
          Clínica Escola de Fisioterapia — 2026
        </p>
      </div>
    </div>
  );
}
