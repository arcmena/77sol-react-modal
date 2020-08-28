import React, { useState, useRef } from "react";
import copy from "copy-to-clipboard";
import { Link } from "react-router-dom";

import { Button, Modal } from "./components/";
import {
  NearMeOutlined,
  FileCopyOutlined,
  EmailOutlined,
  GetAppOutlined,
  Whats,
} from "./assets/icons";

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleOutClick = () => {
    setOpen(false);
  };

  const handleWhatsapp = () => {
    window.open(`https://api.whatsapp.com/send?phone=&source=&data=`, "_blank");
  };

  const copyClipboard = () => {
    copy("Copiado!!");
  };

  return (
    <div className="index">
      <Button className="btn-primary" onClick={handleOpen}>
        Proposta
      </Button>

      <Modal open={open} backdrop={handleOutClick} className="modal">
        <main>
          <section className="modal-info">
            <NearMeOutlined style={{ fontSize: 90 }} />
            <h1>Enviar Proposta</h1>
            <p>
              Envie a proposta direto para o e-mail do cliente, copie o link no
              botão abaixo para enviar ou envie uma mensagem de whatsapp.
            </p>
          </section>

          <section className="modal-buttons">
            <a href="mailto:some@email.com">
              <Button className="btn-primary rounded" label="E-Mail">
                <EmailOutlined />
              </Button>
            </a>

            <Button
              className="btn-primary rounded"
              label="Copiar Link"
              onClick={copyClipboard}
            >
              <FileCopyOutlined />
            </Button>

            <Button
              className="whatsapp rounded"
              label="WhatsApp"
              onClick={handleWhatsapp}
            >
              <img src={Whats} alt="icon" />
            </Button>

            <Link to="../public/index.html" target="_blank" download>
              <Button className="btn-primary rounded" label="Exportar">
                <GetAppOutlined />
              </Button>
            </Link>
          </section>
        </main>
      </Modal>
    </div>
  );
}

export default App;
