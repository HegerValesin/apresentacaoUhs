import { useRouter } from "next/navigation";
import {
  faArrowRight,
  faClipboardCheck,
  faListCheck,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const title = "Fluxo do Professor no UHS";

export default function Slide10() {
  const router = useRouter();

  const openEnviosListaRecepcao = () => {
    const currentHash =
      typeof window !== "undefined" && window.location.hash
        ? window.location.hash
        : "#slide10";
    const returnTo = `/${currentHash}`;
    router.push(
      `/envioslistarecepcao?returnTo=${encodeURIComponent(returnTo)}`,
    );
  };

  const openAnaliseEncerramento = () => {
    const currentHash =
      typeof window !== "undefined" && window.location.hash
        ? window.location.hash
        : "#slide10";
    const returnTo = `/${currentHash}`;
    router.push(
      `/analiseEncerramento?returnTo=${encodeURIComponent(returnTo)}`,
    );
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
          left: "1000px",
          top: "-100px",
          width: "400px",
          height: "400px",
          backgroundColor: "#e2e8f0",
          borderRadius: "50%",
          opacity: "0.4",
          zIndex: "1",
        }}
      ></div>
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "-150px",
          top: "550px",
          width: "300px",
          height: "300px",
          backgroundColor: "#e2e8f0",
          borderRadius: "50%",
          opacity: "0.5",
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
          width: "1120px",
          height: "60px",
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
          }}
        >
          Fluxo: Professor
          <FontAwesomeIcon
            icon={faArrowRight}
            style={{ fontSize: "30px", color: "#4da6ff", margin: "0 10px" }}
          />
          Recepção
          <FontAwesomeIcon
            icon={faArrowRight}
            style={{ fontSize: "30px", color: "#4da6ff", margin: "0 10px" }}
          />
          Paciente
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
          height: "40px",
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
          Processo estruturado de supervisão acadêmica e gestão de atendimentos
          dentro do sistema UHS.
        </p>
      </div>
      {/* Connecting Lines */}
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "100px",
          top: "244px",
          width: "4px",
          height: "106px",
          backgroundColor: "#cbd5e0",
          zIndex: "1",
        }}
      ></div>
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "100px",
          top: "394px",
          width: "4px",
          height: "106px",
          backgroundColor: "#cbd5e0",
          zIndex: "1",
        }}
      ></div>
      {/* ================= STEP 1 ================= */}
      {/* Node 1 */}
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "80px",
          top: "200px",
          width: "44px",
          height: "44px",
          backgroundColor: "#003087",
          borderRadius: "50%",
          boxShadow: "0 4px 10px rgba(0, 48, 135, 0.3)",
          zIndex: "1",
        }}
      ></div>
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "80px",
          top: "210px",
          width: "44px",
          height: "24px",
          zIndex: "10",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: '"Montserrat", sans-serif',
            fontSize: "20px",
            fontWeight: "700",
            color: "#ffffff",
            margin: "0",
          }}
        >
          1
        </p>
      </div>
      {/* Card 1 Background (clicável) */}
      <div
        data-object="true"
        data-object-type="shape"
        onClick={openEnviosListaRecepcao}
        style={{
          position: "absolute",
          left: "150px",
          top: "180px",
          width: "460px",
          height: "110px",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.05)",
          borderLeft: "5px solid #0057b8",
          zIndex: "1",
          cursor: "pointer",
        }}
      ></div>

      {/* Card 1 Content (clicável) */}
      <div
        data-object="true"
        data-object-type="icon"
        onClick={openEnviosListaRecepcao}
        style={{
          position: "absolute",
          left: "170px",
          top: "200px",
          width: "24px",
          height: "80px",
          zIndex: "10",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <FontAwesomeIcon
          icon={faListCheck}
          style={{ fontSize: "24px", color: "#0057b8" }}
        />
      </div>

      <div
        data-object="true"
        data-object-type="textbox"
        onClick={openEnviosListaRecepcao}
        style={{
          position: "absolute",
          left: "210px",
          top: "198px",
          width: "380px",
          height: "25px",
          zIndex: "10",
          cursor: "pointer",
        }}
      >
        <p
          style={{
            fontFamily: '"Montserrat", sans-serif',
            fontSize: "18px",
            fontWeight: "700",
            color: "#003087",
          }}
        >
          Envio de Lista para Recepção
        </p>
      </div>
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "210px",
          top: "228px",
          width: "380px",
          height: "60px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "15px",
            color: "#4a5568",
            lineHeight: "1.4",
          }}
        >
          O professor envia a lista de pacientes que devem ser contactados e
          agendados para o atendimento clínico.
        </p>
      </div>
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "200px",
          top: "285px",
          width: "470px",
          height: "30px",
          zIndex: "10",
        }}
        onClick={openEnviosListaRecepcao}
      >
        <p
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "10px",
            color: "#1968f1",
            lineHeight: "1.6",
          }}
        >
          Clicar no card para visualizar detalhes do fluxo de envio da lista
          para recepção.
        </p>
      </div>
      {/* ================= STEP 2 ================= */}
      {/* Node 2 */}
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "80px",
          top: "350px",
          width: "44px",
          height: "44px",
          backgroundColor: "#003087",
          borderRadius: "50%",
          boxShadow: "0 4px 10px rgba(0, 48, 135, 0.3)",
          zIndex: "1",
        }}
      ></div>
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "80px",
          top: "360px",
          width: "44px",
          height: "24px",
          zIndex: "10",
          textAlign: "center",
          cursor: "pointer",
        }}
        onClick={openAnaliseEncerramento}
      >
        <p
          style={{
            fontFamily: '"Montserrat", sans-serif',
            fontSize: "20px",
            fontWeight: "700",
            color: "#ffffff",
            margin: "0",
          }}
        >
          2
        </p>
      </div>
      {/* Card 2 Background */}
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "150px",
          top: "330px",
          width: "460px",
          height: "110px",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.05)",
          borderLeft: "5px solid #2b6cb0",
          zIndex: "1",
          cursor: "pointer",
        }}
        onClick={openAnaliseEncerramento}
      ></div>
      {/* Card 2 Content */}
      <div
        data-object="true"
        data-object-type="icon"
        style={{
          position: "absolute",
          left: "170px",
          top: "350px",
          width: "24px",
          height: "80px",
          zIndex: "10",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          cursor: "pointer",
        }}
        onClick={openAnaliseEncerramento}
      >
        <FontAwesomeIcon
          icon={faClipboardCheck}
          style={{ fontSize: "24px", color: "#2b6cb0" }}
          onClick={openAnaliseEncerramento}
        />
      </div>
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "210px",
          top: "348px",
          width: "380px",
          height: "25px",
          zIndex: "10",
          cursor: "pointer",
        }}
      >
        <p
          style={{
            fontFamily: '"Montserrat", sans-serif',
            fontSize: "18px",
            fontWeight: "700",
            color: "#003087",
          }}
        >
          Análise e Encerramento
        </p>
      </div>
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "210px",
          top: "378px",
          width: "380px",
          height: "60px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "15px",
            color: "#4a5568",
            lineHeight: "1.4",
          }}
        >
          Avaliação cuidadosa dos atendimentos realizados pelos alunos,
          finalizando e validando os casos no sistema.
        </p>
      </div>
       <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "200px",
          top: "432px",
          width: "470px",
          height: "30px",
          zIndex: "10",
        }}
        onClick={openAnaliseEncerramento}
      >
        <p
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "10px",
            color: "#1968f1",
            lineHeight: "1.6",
          }}
        >
          Clicar no card para visualizar detalhes do fluxo de análise e encerramento.
        </p>
      </div>
      {/* ================= STEP 3 ================= */}
      {/* Node 3 */}
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "80px",
          top: "500px",
          width: "44px",
          height: "44px",
          backgroundColor: "#003087",
          borderRadius: "50%",
          boxShadow: "0 4px 10px rgba(0, 48, 135, 0.3)",
          zIndex: "1",
        }}
      ></div>
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "80px",
          top: "510px",
          width: "44px",
          height: "24px",
          zIndex: "10",
          textAlign: "center",
        }}
        onClick={openAnaliseEncerramento}
      >
        <p
          style={{
            fontFamily: '"Montserrat", sans-serif',
            fontSize: "20px",
            fontWeight: "700",
            color: "#ffffff",
            margin: "0",
          }}
        >
          3
        </p>
      </div>
      {/* Card 3 Background */}
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "150px",
          top: "480px",
          width: "460px",
          height: "110px",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.05)",
          borderLeft: "5px solid #4da6ff",
          zIndex: "1",
        }}
      ></div>
      {/* Card 3 Content */}
      <div
        data-object="true"
        data-object-type="icon"
        style={{
          position: "absolute",
          left: "170px",
          top: "500px",
          width: "24px",
          height: "80px",
          zIndex: "10",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
        onClick={openAnaliseEncerramento}
      >
        <FontAwesomeIcon
          icon={faUserDoctor}
          style={{ fontSize: "24px", color: "#4da6ff" }}
          onClick={openAnaliseEncerramento}
        />
      </div>
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "210px",
          top: "498px",
          width: "380px",
          height: "25px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Montserrat", sans-serif',
            fontSize: "18px",
            fontWeight: "700",
            color: "#003087",
          }}
        >
          Atendimento Direto
        </p>
      </div>
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "210px",
          top: "528px",
          width: "380px",
          height: "60px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "15px",
            color: "#4a5568",
            lineHeight: "1.4",
          }}
        >
          Quando necessário, o professor realiza o atendimento direto ao
          paciente sem a intermediação do aluno.
        </p>
      </div>
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "200px",
          top: "583px",
          width: "470px",
          height: "30px",
          zIndex: "10",
        }}
        onClick={openAnaliseEncerramento}
      >
        <p
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "10px",
            color: "#1968f1",
            lineHeight: "1.6",
          }}
        >
          Clicar no card para visualizar detalhes do atendimento direto.
        </p>
      </div>
      {/* Image Area Right */}
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "660px",
          top: "180px",
          width: "540px",
          height: "420px",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 15px 35px rgba(0, 0, 0, 0.08)",
          border: "1px solid #e2e8f0",
          zIndex: "1",
        }}
      ></div>
      <img
        alt="Ações do professor no sistema"
        data-object="true"
        data-object-type="image"
        src="img/Professor/Sistema_Recep_atendimento_paciente_Acompanhamento_Lista_atendido.png"
        style={{
          position: "absolute",
          left: "670px",
          top: "190px",
          width: "520px",
          height: "400px",
          objectFit: "cover",
          objectPosition: " top right",
          borderRadius: "8px",
          border: "1px solid #edf2f7",
          zIndex: "5",
        }}
      />
      {/* Footer Textbox */}
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "80px",
          top: "670px",
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
