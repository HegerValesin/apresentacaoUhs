import { faCalendarDays, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const title = "Gerar Agenda";

export default function Slide5() {
  return (
    <div className="slide-container" style={{ position: "relative", width: "1280px", height: "720px", overflow: "hidden", backgroundColor: "#f5f7fa" }}>
      <div data-object="true" data-object-type="shape" style={{ position: "absolute", left: "0px", top: "0px", width: "280px", height: "8px", backgroundColor: "#003087", zIndex: "1" }} />
      <div data-object="true" data-object-type="shape" style={{ position: "absolute", left: "980px", top: "-120px", width: "360px", height: "360px", borderRadius: "50%", backgroundColor: "#e2e8f0", opacity: "0.35", zIndex: "0" }} />

      <div data-object="true" data-object-type="textbox" style={{ position: "absolute", left: "80px", top: "22px", zIndex: "10" }}>
        <span style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "12px", fontWeight: "700", color: "#0057b8", backgroundColor: "#e8f0fe", padding: "3px 14px", borderRadius: "20px" }}>
          Rotina Coordenador — Etapa 5 de 7
        </span>
      </div>

      <div data-object="true" data-object-type="textbox" style={{ position: "absolute", left: "80px", top: "56px", width: "820px", zIndex: "10" }}>
        <p style={{ fontFamily: '"Montserrat", sans-serif', fontSize: "40px", fontWeight: "800", color: "#003087", margin: "0", lineHeight: "1.15" }}>
          Gerar Agenda
        </p>
      </div>

      <div data-object="true" data-object-type="textbox" style={{ position: "absolute", left: "80px", top: "128px", width: "820px", zIndex: "10" }}>
        <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "18px", color: "#4a5568", margin: "0", lineHeight: "1.6" }}>
          Com os dados preenchidos, o sistema permite gerar a nova agenda para publicação no fluxo operacional.
        </p>
      </div>

      <div data-object="true" data-object-type="shape" style={{ position: "absolute", left: "80px", top: "220px", width: "1120px", height: "430px", backgroundColor: "#ffffff", borderRadius: "14px", border: "1px solid #d9e2ec", boxShadow: "0 12px 26px rgba(0,0,0,0.05)", zIndex: "1" }} />

      <img
        alt="Gerar Agenda"
        data-object="true"
        data-object-type="image"
        src="/img/Coordenador/Sistema_coo_agenda_professor_horarios_novo_gerar.png"
        style={{ position: "absolute", left: "98px", top: "238px", width: "1084px", height: "394px", objectFit: "contain", objectPosition: "center", borderRadius: "8px", border: "1px solid #edf2f7", zIndex: "5" }}
      />

      <div data-object="true" data-object-type="shape" style={{ position: "absolute", left: "80px", top: "670px", width: "1120px", height: "30px", backgroundColor: "transparent", zIndex: "5" }} />
      <div data-object="true" data-object-type="icon" style={{ position: "absolute", left: "82px", top: "673px", zIndex: "10" }}>
        <FontAwesomeIcon icon={faCalendarDays} style={{ fontSize: "14px", color: "#0057b8" }} />
      </div>
      <div data-object="true" data-object-type="textbox" style={{ position: "absolute", left: "102px", top: "671px", zIndex: "10" }}>
        <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "12px", color: "#4a5568", margin: "0" }}>
          Processo crítico: criação e publicação da agenda dos professores.
        </p>
      </div>
      <div data-object="true" data-object-type="icon" style={{ position: "absolute", left: "980px", top: "673px", zIndex: "10" }}>
        <FontAwesomeIcon icon={faCircleCheck} style={{ fontSize: "14px", color: "#16a34a" }} />
      </div>
      <div data-object="true" data-object-type="textbox" style={{ position: "absolute", left: "1000px", top: "671px", zIndex: "10" }}>
        <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: "12px", color: "#4a5568", margin: "0" }}>
          Clínica Escola de Fisioterapia — 2026
        </p>
      </div>
    </div>
  );
}
