import {
  faCalendarCheck,
  faCheckCircle,
  faClock,
  faPhone,
  faPhoneSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const title = "Gerenciamento da Fila — Status em Tempo Real";

export default function Slide9() {
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
          left: "950px",
          top: "-50px",
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
          left: "-100px",
          top: "500px",
          width: "250px",
          height: "250px",
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
          width: "1000px",
          height: "100px",
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
          Gerenciamento da Fila — Status em Tempo Real
        </p>
      </div>
      {/* Description Textbox */}
      <div
        data-object="true"
        data-object-type="textbox"
        style={{
          position: "absolute",
          left: "80px",
          top: "160px",
          width: "560px",
          height: "100px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "18px",
            color: "#4a5568",
            lineHeight: "1.6",
          }}
        >
          O módulo de fila de espera permite o acompanhamento contínuo de cada
          paciente, utilizando indicadores visuais para garantir agilidade e
          organização no processo de agendamento clínico.
        </p>
      </div>
      {/* Bullet 1: EM ESPERA */}
      <div
        style={{
          position: "absolute",
          left: "80px",
          top: "280px",
          width: "44px",
          height: "44px",
          backgroundColor: "#fff5f5",
          border: "2px solid #e53e3e",
          borderRadius: "50%",
          zIndex: "1",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          left: "92px",
          top: "292px",
          width: "20px",
          height: "20px",
          zIndex: "10",
        }}
      >
        <FontAwesomeIcon
          icon={faClock}
          style={{ fontSize: "20px", color: "#e53e3e" }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          left: "145px",
          top: "282px",
          width: "480px",
          height: "40px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Montserrat", sans-serif',
            fontSize: "18px",
            fontWeight: "700",
            color: "#e53e3e",
            paddingBottom: "0px",
            margin: "0px",
          }}
        >
          EM ESPERA
        </p>
        <p
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "15px",
            color: "#4a5568",
            margin: "0px",
          }}
        >
          Aguardando o primeiro contato da recepção para triagem.
        </p>
      </div>
      {/* Bullet 2: PARA LIGAR */}
      <div
        style={{
          position: "absolute",
          left: "80px",
          top: "345px",
          width: "44px",
          height: "44px",
          backgroundColor: "#ebf8ff",
          border: "2px solid #3182ce",
          borderRadius: "50%",
          zIndex: "1",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          left: "92px",
          top: "357px",
          width: "20px",
          height: "20px",
          zIndex: "10",
        }}
      >
        <FontAwesomeIcon
          icon={faPhone}
          style={{ fontSize: "20px", color: "#3182ce" }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          left: "145px",
          top: "347px",
          width: "480px",
          height: "40px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Montserrat", sans-serif',
            fontSize: "18px",
            fontWeight: "700",
            color: "#3182ce",
            margin: "0px",
          }}
        >
          PARA LIGAR
        </p>
        <p
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "15px",
            color: "#4a5568",
            margin: "0px",
          }}
        >
          Paciente sinalizado com prioridade para contato telefônico.
        </p>
      </div>
      {/* Bullet 3: SEM RESPOSTA */}
      <div
        style={{
          position: "absolute",
          left: "80px",
          top: "410px",
          width: "44px",
          height: "44px",
          backgroundColor: "#c4c4c5",
          border: "2px solid #28282d",
          borderRadius: "50%",
          zIndex: "1",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          left: "92px",
          top: "422px",
          width: "20px",
          height: "20px",
          zIndex: "10",
        }}
      >
        <FontAwesomeIcon
          icon={faPhoneSlash}
          style={{ fontSize: "20px", color: "#28282d" }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          left: "145px",
          top: "412px",
          width: "480px",
          height: "40px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Montserrat", sans-serif',
            fontSize: "18px",
            fontWeight: "700",
            color: "#28282d",
            margin: "0px",
          }}
        >
          SEM RESPOSTA
        </p>
        <p
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "15px",
            color: "#4a5568",
            margin: "0px",
          }}
        >
          Tentativas de contato realizadas sem sucesso. Requer nova ação.
        </p>
      </div>
      {/* Bullet 4: RECUSOU */}
      <div
        style={{
          position: "absolute",
          left: "80px",
          top: "475px",
          width: "44px",
          height: "44px",
          backgroundColor: "#e2c9c9",
          border: "2px solid #e90f0f",
          borderRadius: "50%",
          zIndex: "1",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          left: "92px",
          top: "487px",
          width: "20px",
          height: "20px",
          zIndex: "10",
        }}
      >
        <FontAwesomeIcon
          icon={faPhoneSlash}
          style={{ fontSize: "20px", color: "#e90f0f" }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          left: "145px",
          top: "477px",
          width: "510px",
          height: "40px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Montserrat", sans-serif',
            fontSize: "18px",
            fontWeight: "700",
            color: "#e90f0f",
            margin: "0px",
          }}
        >
          CLIENTE RECUSOU
        </p>
        <p
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "15px",
            color: "#4a5568",
            display: "flex",
            alignItems: "flex-start",
            margin: "0px",
          }}
        >
          Ao contactar o cliente, o mesmo recusou o atendimento por alegar já
          estar curado.
        </p>
      </div>
      {/* Bullet 5: AGENDADO */}
      <div
        style={{
          position: "absolute",
          left: "80px",
          top: "540px",
          width: "44px",
          height: "44px",
          backgroundColor: "#f0fff4",
          border: "2px solid #38a169",
          borderRadius: "50%",
          zIndex: "1",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          left: "92px",
          top: "552px",
          width: "20px",
          height: "20px",
          zIndex: "10",
        }}
      >
        <FontAwesomeIcon
          icon={faCalendarCheck}
          style={{ fontSize: "20px", color: "#38a169" }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          left: "145px",
          top: "542px",
          width: "480px",
          height: "40px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Montserrat", sans-serif',
            fontSize: "18px",
            fontWeight: "700",
            color: "#38a169",
            margin: "0px",
          }}
        >
          AGENDADO
        </p>
        <p
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "15px",
            color: "#4a5568",
            margin: "0px",
          }}
        >
          Horário e data confirmados com o paciente na unidade.
        </p>
      </div>
      {/* Bullet 6: CONCLUÍDO */}
      <div
        style={{
          position: "absolute",
          left: "80px",
          top: "605px",
          width: "44px",
          height: "44px",
          backgroundColor: "#f7fafc",
          border: "2px solid #a0aec0",
          borderRadius: "50%",
          zIndex: "1",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          left: "92px",
          top: "617px",
          width: "20px",
          height: "20px",
          zIndex: "10",
        }}
      >
        <FontAwesomeIcon
          icon={faCheckCircle}
          style={{ fontSize: "20px", color: "#718096" }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          left: "145px",
          top: "607px",
          width: "480px",
          height: "40px",
          zIndex: "10",
        }}
      >
        <p
          style={{
            fontFamily: '"Montserrat", sans-serif',
            fontSize: "18px",
            fontWeight: "700",
            color: "#718096",
            margin: "0px"
          }}
        >
          CONCLUÍDO
        </p>
        <p
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "15px",
            color: "#4a5568",
            margin: "0px"
          }}
        >
          Atendimento realizado, analisado e finalizado no sistema.
        </p>
      </div>
      {/* Image Area Right */}
      <div
        data-object="true"
        data-object-type="shape"
        style={{
          position: "absolute",
          left: "680px",
          top: "160px",
          width: "520px",
          height: "460px",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 15px 35px rgba(0, 0, 0, 0.08)",
          border: "1px solid #e2e8f0",
          zIndex: "1",
        }}
      ></div>
      <img
        alt="Tela de Gerenciamento da Fila no Sistema"
        data-object="true"
        data-object-type="image"
        src="img/Recepcao/tela_espera_ligacao_Lista_Ligando_sem_resposta_recusado.png"
        style={{
          position: "absolute",
          left: "690px",
          top: "170px",
          width: "500px",
          height: "440px",
          objectFit: "contain",
          objectPosition: "left top",
          borderRadius: "8px",
          border: "1px solid #edf2f7",
          zIndex: "5",
        }}
      />
      <img
        alt="Tela de Gerenciamento da Fila no Sistema"
        data-object="true"
        data-object-type="image"
        src="img/Recepcao/tela_espera_ligacao_Lista_Atendido.png"
        style={{
          position: "absolute",
          left: "690px",
          top: "415px",
          width: "250px",
          height: "200px",
          objectFit: "cover",
          objectPosition: "center",
          borderRadius: "8px",
          border: "1px solid #edf2f7",
          zIndex: "5",
        }}
      />
      <img
        alt="Tela de Gerenciamento da Fila no Sistema"
        data-object="true"
        data-object-type="image"
        src="img/Recepcao/tela_espera_ligacao_Lista_Atendido_agendando_agendado.png"
        style={{
          position: "absolute",
          left: "940px",
          top: "415px",
          width: "250px",
          height: "200px",
          objectFit: "cover",
          objectPosition: "center",
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
