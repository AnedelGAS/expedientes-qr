// js/conectorMedico.js

const diccionarioMedico = {
    // ==========================================
    // SYSTEM: TIPOS DE SANGRE (SISTEMA ABO Y RH)
    // ==========================================
    "A+": "Grupo sanguíneo con antígenos A y factor Rh en los glóbulos rojos. Es uno de los tipos más comunes; puede recibir sangre de A+, A-, O+ y O-.",
    "A-": "Grupo sanguíneo con antígenos A pero sin factor Rh. Puede donar a variantes A+ y A-, pero solo puede recibir de A- y O-.",
    "B+": "Grupo sanguíneo con antígenos B y factor Rh. Puede recibir transfusiones de tipos B+, B-, O+ y O-.",
    "B-": "Grupo sanguíneo con antígenos B pero carente de factor Rh. Es un tipo raro; puede recibir únicamente de B- y O-.",
    "AB+": "Receptor universal. Contiene antígenos A, B y factor Rh, lo que le permite recibir sangre de cualquier grupo sanguíneo sin riesgo de rechazo.",
    "AB-": "El tipo de sangre más raro del sistema ABO. Puede recibir de todos los tipos negativos (A-, B-, AB-, O-).",
    "O+": "Grupo sanguíneo que carece de antígenos A o B, pero tiene factor Rh. Es el donante más común; puede dar sangre a cualquier tipo positivo (A+, B+, AB+, O+).",
    "O-": "Donante universal. No posee antígenos A, B ni Rh en los eritrocitos. Crucial en salas de emergencias cuando no hay tiempo de clasificar la sangre del paciente.",

    // ==========================================
    // SYSTEM: ALERGIAS (INMUNOLÓGICAS)
    // ==========================================
    "mariscos": "Reacción alérgica a las proteínas de animales marinos (crustáceos/moluscos). Puede desencadenar desde urticaria severa hasta anafilaxia grave.",
    "penicilina": "Hipersensibilidad inmunológica a los antibióticos de la familia de los betalactámicos. Requiere el uso de alternativas como macrólidos.",
    "polen": "Rinitis alérgica estacional provocada por esporas y polen de plantas. Causa inflamación respiratoria, estornudos y lagrimeo.",
    "látex": "Reacción a las proteínas del caucho natural presente en guantes o dispositivos médicos. Causa dermatitis por contacto o problemas respiratorios.",
    "maní": "Una de las alergias alimentarias más graves. El consumo o contacto mínimo puede provocar un choque anafiláctico de evolución rápida.",
    "cacahuates": "Una de las alergias alimentarias más graves. El consumo o contacto mínimo puede provocar un choque anafiláctico de evolución rápida.",
    "nueces": "Reacción adversa a frutos secos de árbol (almendras, nueces, avellanas). Suele ser una condición permanente y de alta sensibilidad.",
    "leche": "Reacción inmunitaria a las proteínas de la leche (caseína o suero). No debe confundirse con la intolerancia a la lactosa (que es digestiva).",
    "huevo": "Hipersensibilidad a las proteínas de la clara o la yema. Común en la infancia; es un factor clave a revisar en la administración de ciertas vacunas.",
    "soja": "Alergia alimentaria común provocada por las proteínas de los productos de soya, frecuente en alimentos procesados.",
    "trigo": "Reacción alérgica a las proteínas del trigo (incluido el gluten). Difiere de la enfermedad celíaca al activar una respuesta de anticuerpos IgE.",
    "picadura de abeja": "Hipersensibilidad al veneno de los apitoxinas. Puede causar hinchazón local extrema o reacciones sistémicas mortales si no se aplica epinefrina.",
    "ácaros": "Reacción alérgica al polvo doméstico y los desechos de ácaros microscópicos. Principal detonante de asma bronquial en el hogar.",
    "Aspirina": "Intolerancia o reacción alérgica al ácido acetilsalicílico y otros AINEs. Puede causar broncoespasmos o urticaria severa.",

    // ==========================================
    // SYSTEM: PADECIMIENTOS CRÓNICOS (PATOLOGÍAS)
    // ==========================================
    "diabetes tipo 2": "Enfermedad metabólica crónica caracterizada por altos niveles de glucosa en sangre debido a la resistencia celular a la insulina.",
    "diabetes tipo 1": "Afección autoinmune donde el páncreas produce poca o ninguna insulina, requiriendo administración diaria de esta hormona.",
    "hipertension": "Trastorno cardiovascular donde la presión arterial sistólica/diastólica se eleva de forma sostenida, dañando vasos sanguíneos y corazón.",
    "asma": "Afección inflamatoria crónica de las vías respiratorias que produce sibilancias, disnea, opresión en el pecho y tos.",
    "hipotiroidismo": "Deficiencia hormonal causada por una actividad subóptima de la glándula tiroides, ralentizando el metabolismo general.",
    "hipertiroidismo": "Producción excessive de hormonas tiroideas que acelera el metabolismo del cuerpo, causando pérdida de peso y taquicardias.",
    "artritis reumatoide": "Enfermedad inflamatoria autoinmune crónica que afecta principalmente a las articulaciones, causando dolor, hinchazón y deformidad.",
    "insuficiencia renal": "Pérdida progresiva de la capacidad de los riñones para filtrar los desechos del flujo sanguíneo, requiriendo control estricto o diálisis.",
    "epilepsia": "Trastorno del sistema nervioso central en el que la actividad cerebral se altera, provocando convulsiones o períodos de comportamiento inusual.",
    "migraña": "Tipo de dolor de cabeza recurrente de gran intensidad, típicamente hemicraneal, acompañado de náuseas y sensibilidad a la luz/sonido.",
    "cardiopatia isquemica": "Enfermedad caracterizada por el estrechamiento de las arterias coronarias, lo que disminuye el flujo de oxígeno al músculo cardíaco.",
    "enfermedad celiaca": "Afección autoinmune digestiva grave donde el consumo de gluten daña el revestimiento del intestino delgado, impidiendo la absorción de nutrientes.",
    "anemia cronica": "Disminución prolongada de la masa de glóbulos rojos o de los niveles de hemoglobina, limitando el transporte de oxígeno en el cuerpo.",
    "lupus": "Enfermedad autoinmune sistémica en la que el sistema inmunitario ataca por error a los tejidos sanos, como la piel, articulaciones y riñones.",
    "epoc": "Enfermedad Pulmonar Obstructiva Crónica que causa la limitación del flujo de aire y problemas respiratorios progresivos, comúnmente asociada al tabaquismo.",
    "insuficiencia cardiaca": "Incapacidad crónica del corazón para bombear sangre eficientemente, lo que reduce el suministro de oxígeno a los tejidos y genera fatiga o retención de líquidos.",
    "fibromialgia": "Trastorno crónico caracterizado por dolor musculoesquelético generalizado, fatiga persistente, problemas de sueño y alteraciones del estado de ánimo.",
    "esclerosis multiple": "Enfermedad autoinmune y desmielinizante del sistema nervioso central que interrumpe la comunicación entre el cerebro y el resto del cuerpo.",
    "enfermedad de crohn": "Proceso inflamatorio crónico del tracto digestivo de naturaleza autoinmune, capaz de afectar cualquier tramo desde la boca hasta el ano.",
    "colitis ulcerosa": "Enfermedad inflamatoria intestinal de curso crónico que produce inflamación prolongada y úlceras en la mucosa profunda del colon y el recto.",
    "osteoporosis": "Afección ósea metabólica caracterizada por la disminución de la densidad de la masa ósea, lo que debilita los huesos y eleva exponencialmente el riesgo de fracturas.",
    "parkinson": "Trastorno neurológico degenerativo y progresivo que afecta el sistema motor debido a la pérdida de neuronas productoras de dopamina en el cerebro.",
    "alzheimer": "Forma progresiva de demencia que destruye gradualmente la memoria, las capacidades cognitivas y la aptitud para realizar las tareas cotidianas más simples.",
    "insuficiencia venosa": "Alteración vascular donde las venas de las extremidades inferiores presentan dificultad para retornar la sangre adecuadamente hacia el corazón, causando várices y edema.",
    "hipercolesterolemia": "Presencia de niveles anormalmente elevados de colesterol en sangre, incrementando significativamente el riesgo de aterosclerosis y eventos cardiovasculares.",
    "higado graso no alcoholico": "Acumulación excesiva de lípidos en las células hepáticas que no está vinculada al consumo de alcohol, asociada frecuentemente a la obesidad y el síndrome metabólico.",
    "apnea del sueño": "Trastorno respiratorio nocturno caracterizado por interrupciones repetidas de la respiración durante el sueño debido al colapso temporal de las vías aéreas superiores.",
    "gota": "Forma dolorosa de artritis reactiva provocada por la cristalización y acumulación de ácido úrico en el interior y alrededor de las articulaciones.",
    "psoriasis": "Afección cutánea inflamatoria de origen inmunitario que acelera el ciclo de vida de las células de la piel, provocando la aparición de placas escamosas y prurito.",
    "ansiedad cronica": "Trastorno emocional prolongado caracterizado por una preocupación y un miedo excesivos, persistentes y difíciles de controlar ante situaciones cotidianas.",
    "depresion mayor": "Trastorno del estado de ánimo grave y recurrente que causa sentimientos persistentes de tristeza, pérdida de interés y una alteración funcional en el día a día.",
    "arritmia cardiaca": "Cualquier alteración en el ritmo o frecuencia de los latidos del corazón, haciendo que este lata de manera demasiado rápida, lenta o irregular.",
    "glaucoma": "Grupo de afecciones oculares que dañan progresivamente el nervio óptico, a menudo debido a una presión intraocular anormalmente alta, siendo causa principal de ceguera.",
    "vih": "Virus de la Inmunodeficiencia Humana que ataca y destruye las células del sistema inmunitario (linfocitos T CD4), debilitando las defenses del organismo ante infecciones."
};

/**
 * Función conectora para buscar términos médicos expandidos.
 */
export function obtenerDefinicion(termino) {
    if (!termino) return "Término no especificado.";
    
    const clave = termino.trim().toLowerCase();
    
    // 1. Búsqueda exacta en minúsculas
    if (diccionarioMedico[clave]) {
        return diccionarioMedico[clave];
    }
    
    // 2. Búsqueda directa para códigos de sangre con mayúsculas (A+, AB-, etc.)
    if (diccionarioMedico[termino.trim()]) {
        return diccionarioMedico[termino.trim()];
    }

    // 3. Intento de coincidencia parcial por si escriben cosas similares (Ej. "Diabetes" -> "diabetes tipo 2")
    const llaves = Object.keys(diccionarioMedico);
    const coincidencia = llaves.find(llave => llave.includes(clave) || clave.includes(llave));
    if (coincidencia) {
        return `[Coincidencia para ${coincidencia}]: ${diccionarioMedico[coincidencia]}`;
    }

    return "Definición no encontrada en el catálogo local del conector. Verifique la ortografía o consulte el servidor central.";
}