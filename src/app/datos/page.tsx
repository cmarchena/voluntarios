import Image from "next/image";
export default function DerechosDatos() {
  return (
    <div className="contract-wizard docs">
      <Image alt="logo" src={"/logo.png"} width={400} height={100}></Image>
      <h2>AUTORIZACIÓN PARA EL TRATAMIENTO DE SUS DATOS</h2>

      <p>
        En cumplimiento de lo dispuesto en el artículo 13 del Reglamento (UE)
        2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016
        relativo a la protección de las personas físicas en lo que respecta al
        tratamiento de datos personales y a la libre circulación de estos datos
        (RGPD) y en el artículo 11 de la Ley Orgánica 3/2018, de 5 de diciembre,
        de protección de datos personales y garantía de los derechos
        digitales(en adelante, LOPDGDD), la FUNDACIÓN ALTIUS ESPAÑA (en adelante
        “la Fundación”) le informa que los datos personales que proporciona,
        serán incorporados en un fichero cuyo responsable es la Fundación Altius
        España con domicilio en Ronda de Segovia 34, 28005 Madrid, con la
        finalidad de gestionar adecuadamente los proyectos a los que se inscribe
        y proporcionarle nuestros servicios en la Fundación, así como el envío
        de noticias, avisos, publicidad, información y ofertas de la Fundación,
        etc.
      </p>
      <p>
        Informamos que los datos están custodiados con las debidas medidas de
        seguridad técnicas y organizativas necesarias, garantizando la seguridad
        de los mismos, en virtud del RGPD y la LOPDGDD y que solo se conservarán
        el tiempo necesario para cumplir con los fines por los que se están
        tratando y con las obligaciones legales pertinentes. En el momento en el
        que no sean necesarios, procederemos a destruirlos de forma segura.
      </p>
      <p>
        Asimismo, se le informa que dichos datos o el acceso al fichero que los
        contiene pueda ser facilitado a aquellos órganos o entidades que en
        virtud de una disposición legal exijan que les sea facilitado dicho
        acceso. Sus datos podrán ser cedidos a la Administración Territorial LC
        con domicilio en Calle Praderas, nº 1, 28221, Madrid siempre que esta
        cesión sea necesaria para gestionar el proyecto al que se inscribe.
      </p>
      <p>
        En cumplimiento del art. 13 del RGPD, se informa que en cualquier
        momento podrán retirar el consentimiento al tratamiento y presentar una
        reclamación ante la autoridad de control competente en el caso de
        incumplimiento de lo establecido en el RGPD.
      </p>
      <p>
        Para contactar con el Delegado de Protección de Datos, puede enviar un
        email a la siguiente dirección de correo electrónico: <a href="mailto:dpo@serviciosrc.es">dpo@serviciosrc.es</a>
      </p>
      <p>
        Podrá ejercer su derecho de acceso, rectificación, supresión, limitación
        del tratamiento, portabilidad de los datos y cancelación al tratamiento
        de sus datos personales enviando un escrito a Fundación Altius España,
        Ronda de Segovia 34, 28005, Madrid o mediante el envío de un correo
        electrónico a <a href="mailto:derechos.lopd@fundacionaltius.org">derechos.lopd@fundacionaltius.org</a> en los términos y
        condiciones previstos en el RGPD y la propia LOPDGDD.
      </p>
    </div>
  );
}
