import Image from "next/image";
export default function Confidencialidad() {
  return (
    <div className="contract-wizard">
      <Image alt="logo" src={"/logo.png"} width={400} height={100}></Image>
      <h2>
        ACUERDO DE CONFIDENCIALIDAD Y SEGURIDAD EN MATERIA DE PROTECCION DE
        DATOS
      </h2>
      <p>
        Conforme las obligaciones y funciones del personal, recogidas en
        Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de
        abril de 2016 relativo a la protección de las personas físicas en lo que
        respecta al tratamiento de datos personales y a la libre circulación de
        estos datos yla Ley Orgánica 3/2018, de 5 de diciembre, de protección de
        datos personales y garantía de los derechos digitales, se acuerda que en
        virtud a la relación que une a FUNDACION ALTIUS ESPAÑA (en adelante, el
        RESPONSABLE DEL FICHERO) con el VOLUNTARIO objeto del presente contrato
        y como usuario autorizado para el acceso/tratamiento (necesario o
        incidental) de datos dentro de las funciones atribuidas o inherentes a
        la función asignada por el RESPONSABLE DEL FICHERO, de protección de
        datos de carácter personal, el usuario se compromete a:
      </p>
      <ol>
        <li>
          Seguir “NORMATIVA PARA EL TRATAMIENTO DE DATOS” que son las normas
          para el acceso a datos que figuran en el Documento de Seguridad del
          RESPONSABLE DEL FICHERO, de la cual declara que tiene pleno
          conocimiento.
        </li>
        <li>
          En virtud de este acuerdo guardar el secreto profesional de todos
          aquellos datos conocidos en el través de la relación que lo une a R
          ESPONSABLE D EL FICHERO, aún después de finalizada dicha relación.
        </li>
        <li>
          Manejar la documentación interna utilizada para la realización de las
          funciones atribuidas según las leyes de propiedad intelectual, y
          normas vigentes.
        </li>
      </ol>
      <p>Además, declara conocer y acepta que:</p>
      <ol>
        <li>
          Se le ha indicado que puede consultar en el Documento de Seguridad: la
          normativa vigente en cada momento para e l tratamiento de datos, así
          como las medidas de seguridad que ha de cumplir.
        </li>
        <li>
          Las responsabilidades y sanciones en las que como usuario pueda
          incurrir por una gestión negligente de sus obligaciones serán las
          previstas, en su caso, por la legislación vigente.
        </li>
        <li>
          Que aplicará esta normativa al acceso a datos necesario o incidental
          de cualquiera de la/s empresa/s arriba indicada/s como RESPONSABLE DE
          FICHERO.
        </li>
      </ol>
    </div>
  );
}
