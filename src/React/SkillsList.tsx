import React, { useState } from "react";

const CategoryIcons = {
  "Desarrollo de software": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM11 6V8H9V6H11ZM7 6V8H5V6H7Z"></path>
    </svg>
  ),
  "Recover My UsB Flash/Pen Drive": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70 "
    >
      <path d="M36 2H12v20h24zM22 16a2 2 0 1 1-4 0v-6a2 2 0 1 1 4 0zm8 0a2 2 0 1 1-4 0v-6a2 2 0 1 1 4 0z"></path>
      <path d="M40 26H8v32h16a20 20 0 0 1 16-32z"></path>
      <path d="M40 30a16 16 0 1 0 16 16 16 16 0 0 0-16-16zm8.5 13.3l-9.4 10.6-6.5-6.5a2 2 0 0 1 2.8-2.8l3.5 3.5 6.6-7.4a2 2 0 1 1 3 2.7z"></path>
    </svg>
  ),
  "Instalación De Software": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M2 29.781V10.749a.25.25 0 0 1 .216-.248l23.5-3.213a.25.25 0 0 1 .284.248v22.245a.25.25 0 0 1-.25.25H2.25a.25.25 0 0 1-.25-.25z"></path>
      <path d="M30.245 6.656l31.469-4.614a.25.25 0 0 1 .286.247v27.492a.25.25 0 0 1-.25.25H30.281a.25.25 0 0 1-.25-.25V6.9a.25.25 0 0 1 .214-.244z"></path>
      <path d="M62 34.219v27.493a.25.25 0 0 1-.285.248l-31.469-4.43a.25.25 0 0 1-.215-.248V34.219a.25.25 0 0 1 .25-.25H61.75a.25.25 0 0 1 .25.25z"></path>
      <path d="M25.715 56.991l-23.5-3.3A.25.25 0 0 1 2 53.439v-19.22a.25.25 0 0 1 .25-.25h23.5a.25.25 0 0 1 .25.25v22.525a.25.25 0 0 1-.285.247z"></path>
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "Desarrollo de software": [
      "creación de tu tienda online",
      "",
      "",
    ],
    "Recover My UsB Flash/Pen Drive": [
      "---Daño Físico---",
      "Conector doblado o roto",
      "PCB dañados",
      "Daño por Agua o Calor",
      "Carcasa de impacto duro o agrietada",
      "---Errores Lógicos---",
      "Sistemas de Archivos Corruptos",
      "Archivos Eliminados o Perdidos",
      "Fallo del Controlador",
      "---Desgaste Natural---",
      "Corrupción inexplicable",
      "Fallos esporádicos de lectura/escritura",
      "A veces reconocido, a veces no",
      "Degradación gradual del rendimiento o errores aleatorios",
    ],
    "Instalación De Software": [
      "Ofimática y Comunicación",
      "Producción Musical",
      "Multimedia",
      "Diseño Gráfico y 3D",
      "Edición de Video",
      "Antivirus, Limpieza y otros",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
      ¿Qué hago?
      </h3>
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category]}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="pl-1">•</span>
                      <li className="pl-3">{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
