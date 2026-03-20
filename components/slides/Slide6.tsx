import { useRouter } from "next/navigation";
import {
  faCalendarDays,
  faChalkboardUser,
  faDesktop,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const title = "Perfis e Responsabilidades";

export default function Slide6() {
  const router = useRouter();

  const openCoordenadorAgenda = () => {
    const currentHash =
      typeof window !== "undefined" && window.location.hash
        ? window.location.hash
        : "#slide6";
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
      {/* Background Decorative Shape */}
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "-100px",
          top: "-100px",
          width: "300px",
          height: "300px",
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
          left: "1100px",
          top: "500px",
          width: "400px",
          height: "400px",
          backgroundColor: "#e2e8f0",
          borderRadius: "50%",
          opacity: "0.3",
          zIndex: "1",
        }}
      ></div>
      {/* Main Title Textbox */}
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "80px",
          top: "60px",
          width: "800px",
          height: "60px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Montserrat", sans-serif',
            fontSize: "44px",
            fontWeight: "800",
            color: "#003087",
            lineHeight: "1.2",
          }}
        >
          Perfis e Responsabilidades
        </p>
      </div>
      {/* Description Textbox */}
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "80px",
          top: "130px",
          width: "1120px",
          height: "60px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "20px",
            fontWeight: "400",
            color: "#4a5568",
            lineHeight: "1.5",
          }}
        >
          O sistema UHS é estruturado para atender diferentes perfis de
          usuários, integrando a gestão clínica e a jornada educacional de forma
          segura e eficiente.
        </p>
      </div>
      {/* ================= CARD 1: COORDENADOR ================= */}
      {/* Card 1 Background */}
      <div
        data-object="true"
        data-object-type="shape"
        onClick={openCoordenadorAgenda}
        style={{
          position: "absolute",
          left: "80px",
          top: "210px",
          width: "540px",
          height: "210px",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
          borderLeft: "6px solid #0057b8",
          zIndex: "1",
          cursor: "pointer",
        }}
      ></div>
      {/* Card 1 Icon */}
      <div
        data-object="true"
        data-object-type="icon"
        onClick={openCoordenadorAgenda}
        style={{
          position: "absolute",
          left: "110px",
          top: "240px",
          width: "50px",
          height: "50px",
          zIndex: "10",
          cursor: "pointer",
        }}
      >
        <FontAwesomeIcon
          icon={faCalendarDays}
          style={{ fontSize: "40px", color: "#0057b8", display: "block" }}
        />
      </div>
      {/* Card 1 Title */}
      <div
        data-object="true"
        data-object-type="textbox"
        onClick={openCoordenadorAgenda}
        style={{
          position: "absolute",
          left: "180px",
          top: "245px",
          width: "400px",
          height: "35px",
          zIndex: "10",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <p
          style={{
            fontFamily: '"Montserrat", sans-serif',
            fontSize: "24px",
            fontWeight: "700",
            color: "#003087",
          }}
        >
          Coordenador
        </p>
      </div>
      {/* Card 1 Text */}
      <div
        data-object="true"
        data-object-type="textbox"
        onClick={openCoordenadorAgenda}
        style={{
          position: "absolute",
          left: "110px",
          top: "300px",
          width: "480px",
          height: "100px",
          zIndex: "10",
          cursor: "pointer",
        }}
      >
        <p
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "18px",
            color: "#4a5568",
            lineHeight: "1.5",
          }}
        >
          Responsável por estruturar a operação diária. Cria e publica a agenda
          dos professores que supervisionarão o atendimento clínico em cada
          unidade.
        </p>
      </div>
      {/* ================= CARD 2: RECEPCIONISTA ================= */}
      {/* Card 2 Background */}
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "660px",
          top: "210px",
          width: "540px",
          height: "210px",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
          borderLeft: "6px solid #4da6ff",
          zIndex: "1",
        }}
      ></div>
      {/* Card 2 Icon */}
      <div
        data-object="true"
        data-object-type="icon"
        style={{
          position: "absolute",
          left: "690px",
          top: "240px",
          width: "50px",
          height: "50px",
          zIndex: "10",
        }}
      >
        <FontAwesomeIcon
          icon={faDesktop}
          style={{ fontSize: "40px", color: "#4da6ff", display: "block" }}
        />
      </div>
      {/* Card 2 Title */}
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "760px",
          top: "245px",
          width: "400px",
          height: "35px",
          zIndex: "10",
          display: "flex",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontFamily: '"Montserrat", sans-serif',
            fontSize: "24px",
            fontWeight: "700",
            color: "#003087",
          }}
        >
          Recepcionista
        </p>
      </div>
      {/* Card 2 Text */}
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "690px",
          top: "300px",
          width: "480px",
          height: "100px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "18px",
            color: "#4a5568",
            lineHeight: "1.5",
          }}
        >
          Atua na linha de frente operacional. Cadastra pacientes, gerencia
          filas de espera por projetos/estratégias e classifica triagens
          conforme traumas e lesões.
        </p>
      </div>
      {/* ================= CARD 3: PROFESSOR ================= */}
      {/* Card 3 Background */}
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "80px",
          top: "450px",
          width: "540px",
          height: "210px",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
          borderLeft: "6px solid #2b6cb0",
          zIndex: "1",
        }}
      ></div>
      {/* Card 3 Icon */}
      <div
        data-object="true"
        data-object-type="icon"
        style={{
          position: "absolute",
          left: "110px",
          top: "480px",
          width: "50px",
          height: "50px",
          zIndex: "10",
        }}
      >
        <FontAwesomeIcon
          icon={faChalkboardUser}
          style={{ fontSize: "40px", color: "#2b6cb0", display: "block" }}
        />
      </div>
      {/* Card 3 Title */}
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "180px",
          top: "485px",
          width: "400px",
          height: "35px",
          zIndex: "10",
          display: "flex",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontFamily: '"Montserrat", sans-serif',
            fontSize: "24px",
            fontWeight: "700",
            color: "#003087",
          }}
        >
          Professor
        </p>
      </div>
      {/* Card 3 Text */}
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "110px",
          top: "540px",
          width: "480px",
          height: "100px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "18px",
            color: "#4a5568",
            lineHeight: "1.5",
          }}
        >
          Valida o processo clínico e acadêmico. Envia listas para agendamento,
          analisa e encerra os atendimentos feitos por alunos, podendo realizar
          atendimentos diretos.
        </p>
      </div>
      {/* ================= CARD 4: ALUNO ================= */}
      {/* Card 4 Background */}
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "660px",
          top: "450px",
          width: "540px",
          height: "210px",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
          borderLeft: "6px solid #3182ce",
          zIndex: "1",
        }}
      ></div>
      {/* Card 4 Icon */}
      <div
        data-object="true"
        data-object-type="icon"
        style={{
          position: "absolute",
          left: "690px",
          top: "480px",
          width: "50px",
          height: "50px",
          zIndex: "10",
        }}
      >
        <FontAwesomeIcon
          icon={faUserGraduate}
          style={{ fontSize: "40px", color: "#3182ce", display: "block" }}
        />
      </div>
      {/* Card 4 Title */}
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "760px",
          top: "485px",
          width: "400px",
          height: "35px",
          zIndex: "10",
          display: "flex",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontFamily: '"Montserrat", sans-serif',
            fontSize: "24px",
            fontWeight: "700",
            color: "#003087",
          }}
        >
          Aluno
        </p>
      </div>
      {/* Card 4 Text */}
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "690px",
          top: "540px",
          width: "480px",
          height: "100px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "18px",
            color: "#4a5568",
            lineHeight: "1.5",
          }}
        >
          Executa a prática clínica sob supervisão. Realiza o atendimento dos
          pacientes agendados e preenche rigorosamente todos os prontuários e
          processos no sistema.
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
