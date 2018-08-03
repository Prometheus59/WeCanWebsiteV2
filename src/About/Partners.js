import React from "react";

import aviva from "../images/partners/aviva.png";
import unica from "../images/partners/unica.png";
import chubb from "../images/partners/chubb.png";
import coachman from "../images/partners/coachman.png";
import economical from "../images/partners/economical.png";
import economicalSelect from "../images/partners/economicalSelect.png";
import gore from "../images/partners/gore.png";
import intact from "../images/partners/intact.png";
import optimum from "../images/partners/optimum.png";
import perth from "../images/partners/perth.png";
import rsa from "../images/partners/RSA.png";
import travelers from "../images/partners/travelers.png";
import zurich from "../images/partners/zurich.png";
import wynard from "../images/partners/wynard.png";
import pafco from "../images/partners/pafco.png";
import nautimax from "../images/partners/nautimax.png";
import globali from "../images/partners/global.png";
import encon from "../images/partners/encon.png";
import pacific from "../images/partners/pacific.png";
import echelon from "../images/partners/echelon.png";
import abex from "../images/partners/abex.png";
import premier from "../images/partners/premier.png";
import wawanesa from "../images/partners/wawanesa.png";
import jevco from "../images/partners/jevco.png";
import guarantee from "../images/partners/guarantee.png";
import chieftain from "../images/partners/chieftain.png";
import caa from "../images/partners/caa.png";
import ace from "../images/partners/ace.png";
import pembridge from "../images/partners/pembridge.png";
import liberty from "../images/partners/liberty.png";
import novex from "../images/partners/novex.png";

export default class Partners extends React.Component {
  render() {
    return (
      <div>
        <h1 id="insurancepartners">Insurance Partners</h1>
        <div id="partnersList">
          <ul>
            <img src={aviva} alt="aviva" />
            <img src={chubb} alt="chubb" />
            <img src={chieftain} alt="chieftain" />
            <img src={economical} alt="economical" />
          </ul>
          <ul>
            <img src={gore} alt="gore" />
            <img src={intact} alt="intact" />
            <img src={optimum} alt="optimum" />
            <img src={perth} alt="perth" />
          </ul>
          <ul>
            <img src={rsa} alt="rsa" />
            <img src={zurich} alt="zurich" />
            <img src={wynard} alt="wynard" />
            <img src={pafco} alt="pafco" />
          </ul>
          <ul>
            <img src={globali} alt="globali" />
            <img src={encon} alt="encon" />
            <img src={pacific} alt="pacific" />
            <img src={echelon} alt="echelon" />
          </ul>
          <ul>
            <img src={premier} alt="premier" />
            <img src={wawanesa} alt="wawanesa" />
            <img src={jevco} alt="jevco" />
            <img src={guarantee} alt="guarantee" />
          </ul>
          <ul>
            <img src={caa} alt="caa" />
            <img src={pembridge} alt="pembridge" />
            <img src={ace} alt="ace" />
            <img src={novex} alt="novex" />
          </ul>

          <ul>
            <img src={economicalSelect} alt="economicalSelect" />
            <img src={travelers} alt="travelers" />
            <img src={nautimax} alt="nautimax" />
            <img src={abex} alt="abex" />
          </ul>
          <ul>
            <img src={coachman} alt="coachman" />
            <img src={liberty} alt="liberty" />
            <img src={unica} alt="unica" />
          </ul>
        </div>
      </div>
    );
  }
}
