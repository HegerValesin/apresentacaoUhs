import {
  faArrowRight,
  faCircleCheck,
  faClipboardCheck,
  faClockRotateLeft,
  faFilePen,
  faListCheck,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

export const title = "Análise e Encerramento";

const alunoProcessos = [
  {
    numero: "1",
    titulo: "Listagem de Atendimentos",
    descricao:
      "Permite visualizar os atendimentos disponíveis e aplicar filtro por professor responsável.",
    icone: faListCheck,
  },
  {
    numero: "2",
    titulo: "Histórico do Paciente",
    descricao:
      "Antes do atendimento, o botão de histórico permite consultar todos os atendimentos anteriores do paciente em nossas clínicas.",
    icone: faClockRotateLeft,
    //destaqueIcone: "pi-history",
  },
  {
    numero: "3",
    titulo: "Iniciar Atendimento",
    descricao:
      "Inicia o atendimento para que o aluno conduza todo o processo assistencial com o paciente.",
    icone: faPlay,
  },
  {
    numero: "4",
    titulo: "Encerramento",
    descricao:
      "Ao encerrar, o prontuário segue para análise e encerramento do professor responsável.",
    icone: faClipboardCheck,
  },
];

const professorProcessos = [
  {
    numero: "1",
    titulo: "Listagem de Atendimentos",
    descricao:
      "Exibe todos os atendimentos sob sua responsabilidade, incluindo os de primeira análise e os de encerramento.",
    icone: faListCheck,
  },
  {
    numero: "2",
    titulo: "Histórico do Paciente",
    descricao:
      "Antes do atendimento, o botão de histórico permite consultar todo o histórico do paciente em nossas clínicas.",
    icone: faClockRotateLeft,
    //destaqueIcone: "pi-history",
  },
  {
    numero: "3",
    titulo: "Iniciar Atendimento",
    descricao:
      "Inicia o atendimento para conduzir o processo assistencial completo com o paciente.",
    icone: faPlay,
  },
  {
    numero: "4",
    titulo: "Finalizar Atendimento",
    descricao:
      "O botão de finalização permite ao professor revisar o atendimento realizado pelo aluno e registrar retornos e observações.",
    icone: faCircleCheck,
    //destaqueIcone: faCircleCheck,
  },
  {
    numero: "5",
    titulo: "Editar Atendimento",
    descricao:
      "O botão de edição permite ao professor ajustar atendimentos do dia já finalizados.",
    icone: faFilePen,
  },
  {
    numero: "6",
    titulo: "Encerramento",
    descricao:
      "No fluxo do professor, o prontuário pode ser encerrado diretamente, sem necessidade de nova análise.",
    icone: faClipboardCheck,
  },
];

export default function Slide1() {
const router = useRouter();

  const openAluno = () => {
    const currentHash =
      typeof window !== "undefined" && window.location.hash
        ? window.location.hash
        : "analiseEncerramento?returnTo=%2F%23slide10";
    const returnTo = `/${currentHash}`;
    router.push(
      `/analiseEncerramento/aluno?returnTo=${encodeURIComponent(returnTo)}`,
    );
  };

  const openProfessor = () => {
    const currentHash =
      typeof window !== "undefined" && window.location.hash
        ? window.location.hash
        : "analiseEncerramento?returnTo=%2F%23slide10";
    const returnTo = `/${currentHash}`;
    router.push(
      `/analiseEncerramento/professor?returnTo=${encodeURIComponent(returnTo)}`,
    );
  };

  return (
    <div
      className="slide-container"
      style={{
        position: "relative",
        width: "1580px",
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
          left: "-150px",
          top: "500px",
          width: "400px",
          height: "220px",
          backgroundColor: "#e2e8f0",
          borderRadius: "50% 50% 0 0",
          opacity: "0.4",
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
          width: "1200px",
          height: "60px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Montserrat", sans-serif',
            fontSize: "42px",
            fontWeight: "850",
            color: "#003087",
            lineHeight: "1.2",
          }}
        >
          Análise e Encerramento do Atendimento
        </p>
      </div>
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "80px",
          top: "140px",
          width: "1390px",
          height: "64px",
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
            margin: "3px 0 0 0",
          }}
        >
          O fluxo assistencial pode ser conduzido por aluno ou professor, com etapas específicas de atendimento,
          análise e encerramento. A seguir, estão os processos operacionais de cada perfil no sistema.
        </p>
      </div>

      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "80px",
          top: "220px",
          width: "670px",
          height: "450px",
          backgroundColor: "#ffffff",
          borderRadius: "14px",
          border: "1px solid #d9e2ec",
          boxShadow: "0 12px 26px rgba(0, 0, 0, 0.05)",
          zIndex: "1",
        }}
      ></div>

      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "100px",
          top: "242px",
          width: "220px",
          height: "30px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Montserrat", sans-serif',
            fontSize: "24px",
            fontWeight: "800",
            color: "#003087",
            margin: "0",
          }}
        >
          Perfil Aluno
        </p>
      </div>

      {alunoProcessos.map((processo, index) => (
        <div
          key={`aluno-${processo.numero}`}
          style={{
            position: "absolute",
            left: "98px",
            top: `${285 + index * 90}px`,
            width: "634px",
            height: "78px",
            backgroundColor: "#f8fbff",
            border: "1px solid #d7e4f3",
            borderRadius: "10px",
            display: "flex",
            alignItems: "flex-start",
            gap: "14px",
            padding: "12px 14px",
            zIndex: "10",
          }}
        >
          <div
            style={{
              width: "28px",
              minWidth: "28px",
              height: "28px",
              borderRadius: "50%",
              backgroundColor: "#003087",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: '"Montserrat", sans-serif',
              fontSize: "14px",
              fontWeight: "700",
              marginTop: "2px",
            }}
          >
            {processo.numero}
          </div>

          <div style={{ width: "22px", minWidth: "22px", marginTop: "4px" }}>
            <FontAwesomeIcon icon={processo.icone} style={{ fontSize: "18px", color: "#0057b8" }} />
          </div>

          <div style={{ flex: 1 }}>
            <p
              style={{
                margin: "0",
                fontFamily: '"Montserrat", sans-serif',
                fontSize: "16px",
                fontWeight: "700",
                color: "#12395f",
              }}
            >
              {processo.titulo}
            </p>
            <p
              style={{
                margin: "4px 0 0 0",
                fontFamily: '"Open Sans", sans-serif',
                fontSize: "13px",
                lineHeight: "1.35",
                color: "#4a5568",
              }}
            >
              {processo.descricao}
            </p>
            {/* {processo.destaqueIcone && (
              <p
                style={{
                  margin: "3px 0 0 0",
                  fontFamily: '"Open Sans", sans-serif',
                  fontSize: "11px",
                  fontWeight: "700",
                  color: "#1968f1",
                }}
              >
                Ícone no sistema: {processo.destaqueIcone}
              </p>
            )} */}
          </div>
        </div>
      ))}
      {/*Visualizar processo */}
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "500px",
          top: "642px",
          width: "250px",
          height: "30px",
          zIndex: "10",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          cursor: "pointer",
        }}
        onClick={() => {openAluno();}}
      >
        <p
          style={{
            fontFamily: '"Montserrat", sans-serif',
            fontSize: "14px",
            fontWeight: "900",
            color: "#003087",
            margin: "0",
          }}
        >
          Visualizar processo no sistema 
        </p>
        <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{ fontSize: "15px", color: "#4da6ff"}}
                  />
      </div>

      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "760px",
          top: "220px",
          width: "730px",
          height: "450px",
          backgroundColor: "#ffffff",
          borderRadius: "14px",
          border: "1px solid #d9e2ec",
          boxShadow: "0 12px 26px rgba(0, 0, 0, 0.05)",
          zIndex: "1",
        }}
      ></div>

      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "780px",
          top: "242px",
          width: "260px",
          height: "30px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Montserrat", sans-serif',
            fontSize: "24px",
            fontWeight: "800",
            color: "#003087",
            margin: "0",
          }}
        >
          Perfil Professor
        </p>
      </div>

      {professorProcessos.map((processo, index) => (
        <div
          key={`professor-${processo.numero}`}
          style={{
            position: "absolute",
            left: "778px",
            top: `${282 + index * 63}px`,
            width: "695px",
            height: "54px",
            backgroundColor: "#f8fbff",
            border: "1px solid #d7e4f3",
            borderRadius: "10px",
            display: "flex",
            alignItems: "flex-start",
            gap: "12px",
            padding: "8px 12px",
            zIndex: "10",
          }}
        >
          <div
            style={{
              width: "24px",
              minWidth: "24px",
              height: "24px",
              borderRadius: "50%",
              backgroundColor: "#003087",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: '"Montserrat", sans-serif',
              fontSize: "12px",
              fontWeight: "700",
              marginTop: "2px",
            }}
          >
            {processo.numero}
          </div>

          <div style={{ width: "20px", minWidth: "20px", marginTop: "2px" }}>
            <FontAwesomeIcon icon={processo.icone} style={{ fontSize: "16px", color: "#0057b8" }} />
          </div>

          <div style={{ flex: 1 }}>
            <p
              style={{
                margin: "0",
                fontFamily: '"Montserrat", sans-serif',
                fontSize: "15px",
                fontWeight: "700",
                color: "#12395f",
              }}
            >
              {processo.titulo}
            </p>
            <p
              style={{
                margin: "2px 0 0 0",
                fontFamily: '"Open Sans", sans-serif',
                fontSize: "12px",
                lineHeight: "1.25",
                color: "#4a5568",
              }}
            >
              {processo.descricao}
              {/* {processo.destaqueIcone ? ` (Ícone: ${processo.destaqueIcone})` : ""} */}
            </p>
          </div>
        </div>
      ))}
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "1250px",
          top: "645px",
          width: "250px",
          height: "30px",
          zIndex: "10",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          cursor: "pointer",
        }}
        onClick={() => {openProfessor();}}
      >
        <p
          style={{
            fontFamily: '"Montserrat", sans-serif',
            fontSize: "14px",
            fontWeight: "900",
            color: "#003087",
            margin: "0",
          }}
        >
          Visualizar processo no sistema 
        </p>
        <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{ fontSize: "15px", color: "#4da6ff"}}
                  />
      </div>

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
