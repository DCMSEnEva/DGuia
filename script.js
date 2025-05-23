// Cuestionario y Respuestas (20 preguntas en total)
const quizQuestions = [
  // Preguntas originales (10)
  { q: "Según la teoría de la Gestalt, ¿qué significa el principio de 'figura y fondo'?", a: "Afirma que cualquier campo perceptual se divide en un elemento principal (figura) y el contexto que lo rodea (fondo). La figura se distingue del fondo por características como tamaño, forma o color." },
  { q: "¿Por qué, según los textos, tenemos dificultad para percibir sabores cuando estamos resfriados?", a: "Esto ocurre porque el sentido del gusto trabaja en conjunto con el sentido del olfato. Cuando el olfato disminuye debido a un resfriado, la combinación de estímulos gustativos y olfativos se ve afectada, haciendo que la comida parezca insípida." },
  { q: "¿Cuál es la función principal de los conos en la visión?", a: "Los conos son células fotorreceptoras en la retina responsables de la visión en colores y funcionan mejor en condiciones de luz brillante. Se utilizan para la visión diurna." },
  { q: "Describe brevemente el recorrido de las ondas sonoras desde el exterior hasta el oído medio.", a: "Las ondas sonoras viajan por el aire, son recogidas por el pabellón auricular y conducidas a través del conducto auditivo externo hasta el tímpano. El tímpano vibra en respuesta a estas ondas." },
  { q: "¿Qué es la transducción gustativa?", a: "La transducción gustativa es el proceso por el cual un receptor gustativo es estimulado por una sustancia disuelta, enviando impulsos nerviosos al cerebro para interpretar la sensación del gusto. Ocurre en las papilas gustativas cuando los compuestos químicos se disuelven en la saliva." },
  { q: "Según la ley céfalo-caudal, ¿cómo progresa el control motor en los bebés?", a: "Según la ley céfalo-caudal, el control motor progresa desde la cabeza hacia los pies. El bebé primero domina el control de su cabeza, luego el tronco, y finalmente las piernas y los pies." },
  { q: "¿Cuál es la principal diferencia en el enfoque del desarrollo cognitivo entre Piaget y Vigotsky, según los textos?", a: "Piaget se enfoca en lo que el niño no puede hacer y considera al niño como un 'científico solitario' que descubre por sí mismo. Vigotsky se enfoca en cómo los adultos y educadores pueden ayudar al niño a progresar en su aprendizaje a través de la interacción social y la 'zona de desarrollo próximo'." },
  { q: "Menciona dos de las características del pensamiento preoperacional según la teoría de Piaget.", a: "Dos características son la centración, donde el niño se enfoca en un solo aspecto de una situación ignorando otros, y el egocentrismo, donde no puede ver las cosas desde la perspectiva de otros. Otras características son el foco en la apariencia y el razonamiento estático." },
  { q: "¿Qué miden los decibelios (dB) y los herzios (Hz) en relación con la audición?", a: "Los decibelios (dB) miden la intensidad o volumen del sonido, mientras que los herzios (Hz) miden la frecuencia o tono (grave/agudo). Ambos parámetros son importantes para medir la pérdida auditiva." },
  { q: "¿Cuál es la función principal del sistema de Braille para las personas con deficiencia visual?", a: "El sistema Braille es un código de lectura y escritura basado en combinaciones de seis puntos en relieve. Permite a las personas ciegas leer y escribir tocando estos puntos." },
  // Nuevas preguntas (5 adicionales)
  { q: "¿Cuál es la diferencia entre motricidad fina y motricidad gruesa, y cómo se desarrollan en los primeros años de vida?", a: "La motricidad gruesa implica músculos grandes (ej.: correr, saltar) y se desarrolla primero, siguiendo la ley céfalo-caudal. La motricidad fina requiere precisión (ej.: agarrar objetos pequeños) y se desarrolla más tarde, alineándose con la ley próximo-distal. A los 6 meses, los bebés usan el 'prensor palmar'; a los 12 meses, dominan el 'prensor de pinza'." },
  { q: "¿Qué papel juega el sistema vestibular en el desarrollo motor y el equilibrio?", a: "El sistema vestibular, ubicado en el oído interno, detecta cambios en la postura y el movimiento. Es crucial para desarrollar la coordinación ojo-mano y estabilizar la mirada durante movimientos. Un déficit puede causar retrasos en habilidades como sentarse o caminar." },
  { q: "¿Cómo influye la teoría de la 'Zona de Desarrollo Próximo' (Vigotsky) en la educación inclusiva para niños con necesidades sensoriales?", a: "La ZDP permite identificar lo que un niño puede lograr con apoyo (ej.: guía de un docente). En niños con deficiencias sensoriales, se adapta el entorno para maximizar su potencial y se fomenta la colaboración entre pares para construir conocimiento compartido." },
  { q: "¿Qué es la sobreregularización en el desarrollo del lenguaje y cómo se manifiesta en niños pequeños?", a: "Es un error gramatical común donde los niños aplican reglas generales a excepciones (ej.: 'rompido' en lugar de 'roto'). Ocurre porque priorizan patrones regulares durante la adquisición del lenguaje, reflejando un avance cognitivo." },
  { q: "¿Cómo se relaciona el tono muscular con el desarrollo motor en bebés prematuros?", a: "Los bebés prematuros suelen tener hipotonía, lo que retrasa hitos como sostener la cabeza. Esto se debe a la inmadurez del sistema nervioso central. Se requiere intervención temprana (ej.: fisioterapia) para estimular el desarrollo neuromuscular." },
  // Nuevas preguntas (5 adicionales, temas avanzados)
  { q: "¿Qué implicaciones tiene el desarrollo de la agudeza visual en la lectoescritura durante la infancia temprana?", a: "La agudeza visual, medida con tablas de letras, es fundamental para reconocer formas y símbolos. Un desarrollo deficiente puede retrasar la discriminación visual necesaria para identificar letras y números, requiriendo intervención optométrica temprana." },
  { q: "¿Cómo se clasifican las deficiencias auditivas según su localización anatómica?", a: "Se clasifican en conductivas (alteraciones en el oído externo o medio) y neurosensoriales (daño en la cóclea o nervio auditivo). Ejemplos: otitis media (conductiva) y pérdida coclear (neurosensorial)." },
  { q: "¿Qué es el razonamiento estático en el periodo preoperacional de Piaget?", a: "Característica del pensamiento infantil donde el niño cree que el mundo no cambia, percibiendo solo el estado actual sin considerar transformaciones. Por ejemplo, piensa que una cantidad de agua no cambia al verterla en un vaso diferente." },
  { q: "¿Cómo se relaciona el desarrollo del campo visual con la exploración espacial en niños pequeños?", a: "El campo visual (área visible sin mover los ojos) se amplía con la edad, permitiendo a los niños percibir objetos periféricos y navegar su entorno con mayor seguridad y coordinación." },
  { q: "¿Cuál es el papel del sistema Braille en la autonomía de personas con ceguera total?", a: "El sistema Braille permite leer y escribir independientemente, facilitando el acceso a la educación, el empleo y la vida social. Es esencial para la inclusión digital mediante dispositivos táctiles adaptados." }
];

// Preguntas de Ensayo (5 preguntas en total)
const essayQuestions = [
  { q: "Explica en detalle los principios de organización perceptiva de la Gestalt presentados en el texto y cómo se aplican a la forma en que los humanos perciben su entorno, citando ejemplos del material.", a: "Los principios de la Gestalt incluyen figura-fondo, proximidad, semejanza, cierre y continuidad. Estos principios explican cómo el cerebro organiza estímulos visuales en patrones coherentes. Por ejemplo, el principio de continuidad se usa en diseño educativo para estructurar actividades de lectoescritura en niños con dislexia, guiando la atención visual de manera natural." },
  { q: "Compara el desarrollo de la visión y la audición en los bebés desde el nacimiento hasta los seis meses de edad, destacando los hitos clave y las diferencias en la maduración de ambos sentidos según el texto.", a: "Desde el nacimiento, los bebés prefieren rostros humanos y siguen objetos con los ojos, pero su visión es borrosa. A los 3 meses, reconocen colores y formas. En audición, discriminan sonidos a los 1-2 meses y responden a voces familiares. La visión se desarrolla más lentamente que la audición, con avances notables en discriminación visual a los 6 meses." },
  { q: "Analiza la interconexión entre los sentidos del gusto y el olfato, explicando cómo influyen mutuamente en la percepción del sabor y describiendo cómo se estimulan estos sentidos en los niños pequeños según el material.", a: "El gusto y el olfato están intrínsecamente conectados, formando la base de la percepción del sabor. En niños pequeños, la exposición a sabores variados (ej.: alimentos nuevos) y aromas (ej.: hierbas) estimula estas capacidades. Para niños con trastornos del espectro autista, intervenciones como terapias sensoriales ayudan a superar aversiones alimentarias." },
  { q: "Describe las leyes del desarrollo motor mencionadas en el texto y explica cómo influyen en la secuencia de adquisición de habilidades motrices en los bebés.", a: "Las leyes céfalo-caudal y próximo-distal describen cómo el control motor progresa desde la cabeza hacia los pies y desde el centro del cuerpo hacia las extremidades. Estas leyes son fundamentales para evaluar trastornos motores y diseñar actividades como juegos sensoriales para fortalecer habilidades motrices en niños de 1-3 años." },
  { q: "Discute las diferentes clasificaciones de la deficiencia auditiva y visual según el texto, detallando los criterios utilizados (localización de la lesión, grado de pérdida, etc.) y mencionando los tipos de ayuda o sistemas de comunicación relevantes para cada caso.", a: "Las deficiencias auditivas se clasifican en conductivas (alteraciones en el oído externo o medio) y neurosensoriales (daño en la cóclea o nervio auditivo). Para la visión, se distingue entre ceguera total y baja visión. Tecnologías como audífonos inteligentes y dispositivos táctiles mejoran la inclusión educativa, complementadas con estrategias pedagógicas adaptadas." },
  // Nueva pregunta de ensayo (1 adicional)
  { q: "Analiza cómo las teorías del desarrollo motor, como las de Piaget y Vigotsky, se aplican en entornos educativos para niños con necesidades sensoriales y motoras.", a: "Piaget enfatiza la exploración activa del entorno, crucial para niños con hipotonía que requieren actividades sensoriales para fortalecer el control motor. Vigotsky destaca la colaboración social, aplicable en aulas inclusivas donde docentes y compañeros guían el aprendizaje mediante la Zona de Desarrollo Próximo. Ejemplos: juegos adaptados para mejorar la motricidad fina y herramientas multisensoriales para reforzar la percepción." }
];

// Términos del Glosario (Todos los términos del archivo)
const glossaryTerms = [
  { term: "Sensación", definition: "El proceso fisiológico de recepción y reconocimiento de sensaciones y estímulos a través de los órganos sensoriales (vista, oído, olfato, gusto, tacto, equilibrio). Es la captación de un estímulo." },
  { term: "Percepción", definition: "El proceso mediante el cual el cerebro interpreta y da significado a la información recibida a través de los sentidos. Es la interpretación de la sensación." },
  { term: "Teoría de la Gestalt", definition: "Teoría psicológica que estudia cómo los humanos organizan la información sensorial en patrones significativos, enfatizando que 'El todo es más que la suma de las partes'." },
  { term: "Principio de Figura y Fondo", definition: "Principio de la Gestalt que establece que cualquier campo perceptual se divide en un elemento principal (figura) que se distingue de su entorno (fondo)." },
  { term: "Papilas Gustativas", definition: "Estructuras en la lengua (y otras áreas de la boca) que contienen las células receptoras del gusto y son sensibles a diferentes compuestos químicos que inducen las sensaciones del gusto." },
  { term: "Transducción Gustativa", definition: "El proceso por el cual la estimulación de un receptor gustativo por sustancias disueltas genera impulsos nerviosos que se envían al cerebro." },
  { term: "Conos", definition: "Células fotorreceptoras en la retina del ojo responsables de la visión en color y la visión diurna en condiciones de luz brillante." },
  { term: "Bastones", definition: "Células fotorreceptoras en la retina del ojo responsables de la visión en blanco y negro y la visión nocturna en condiciones de poca luz." },
  { term: "Tímpano (Membrana Timpánica)", definition: "Una membrana sensible en el oído medio que vibra en respuesta a las ondas sonoras." },
  { term: "Huesecillos (Martillo, Yunque, Estribo)", definition: "Tres pequeños huesos en el oído medio que vibran mecánicamente por los movimientos del tímpano y amplifican las ondas sonoras hacia el oído interno." },
  { term: "Cóclea", definition: "Estructura en forma de caracol en el oído interno que convierte las vibraciones del sonido en señales eléctricas que se envían al cerebro." },
  { term: "Trompa de Eustaquio", definition: "Conducto que conecta el oído medio con la cavidad oral y ayuda a igualar la presión del aire a ambos lados del tímpano." },
  { term: "Leyes del Desarrollo Motor", definition: "Principios que describen la secuencia predecible del desarrollo del control motor en los bebés, como la ley céfalo-caudal y la ley próximo-distal." },
  { term: "Ley Céfalo-Caudal", definition: "Principio del desarrollo motor que indica que el control progresa desde la cabeza (céfalo) hacia los pies (caudal)." },
  { term: "Ley Próximo-Distal", definition: "Principio del desarrollo motor que indica que el control progresa desde el centro del cuerpo (próximo) hacia las extremidades (distal)." },
  { term: "Motricidad Gruesa", definition: "Habilidades motoras que implican el uso de músculos grandes para actividades como correr, saltar y equilibrarse." },
  { term: "Motricidad Fina", definition: "Habilidades motoras que implican el uso de músculos pequeños y la coordinación ojo-mano para tareas como agarrar, dibujar y abrocharse botones." },
  { term: "Tono Muscular", definition: "El 'ajuste' o tensión inherente en los músculos que permite organizar gestos, controlar movimientos y mantener posturas." },
  { term: "Deficiencia Auditiva", definition: "Una pérdida perceptual o distorsión en el procesamiento de la estimulación acústica, que puede variar en grado desde leve hasta cofosis (pérdida total)." },
  { term: "Hipoacusia", definition: "Deficiencia auditiva en la que la audición es deficiente pero funcional para la vida ordinaria, permitiendo la adquisición del lenguaje oral (aunque con posibles deficiencias)." },
  { term: "Sordos Profundos", definition: "Sujetos cuya audición no es funcional para la vida ordinaria y no posibilita la adquisición del lenguaje oral por vía auditiva, dependiendo principalmente de la vía visual para la comunicación." },
  { term: "Sordera Conductiva", definition: "Tipo de sordera que se origina en una alteración del oído externo o medio que impide o dificulta la transmisión del sonido al oído interno." },
  { term: "Sordera Neurosensorial", definition: "Tipo de sordera que se origina en una lesión de las células nerviosas del oído interno (cóclea) o de los nervios auditivos que llevan al cerebro." },
  { term: "Deficiencia Visual", definition: "Alteración en la función visual, que abarca desde la ceguera total hasta diversos grados de baja visión o limitación visual." },
  { term: "Agudeza Visual", definition: "La claridad o nitidez de la visión, a menudo medida con una tabla de letras." },
  { term: "Campo Visual", definition: "El área total que se puede ver sin mover los ojos." },
  { term: "Sistema Braille", definition: "Sistema de lectura y escritura para personas ciegas basado en combinaciones de puntos en relieve que se leen al tacto." },
  { term: "Teoría de Piaget", definition: "Teoría del desarrollo cognitivo que describe las etapas por las que pasan los niños en su desarrollo intelectual, enfocándose en la construcción activa del conocimiento por parte del niño." },
  { term: "Periodo Sensoriomotor", definition: "Primera etapa del desarrollo cognitivo de Piaget (0-2 años), donde los niños aprenden a través de la interacción sensorial y motora con su entorno." },
  { term: "Periodo Preoperacional", definition: "Segunda etapa del desarrollo cognitivo de Piaget (2-7 años), caracterizada por el uso de símbolos (lenguaje, imágenes), pero con limitaciones como la centración y el egocentrismo." },
  { term: "Representación Mental", definition: "La capacidad de usar símbolos (palabras, imágenes) para representar objetos o situaciones que no están físicamente presentes. Incluye la imitación diferida, el dibujo, el lenguaje y las imágenes mentales." },
  { term: "Centración", definition: "Característica del pensamiento preoperacional donde el niño se enfoca en un solo aspecto de una situación, ignorando otros importantes." },
  { term: "Egocentrismo (Cognitivo)", definition: "Característica del pensamiento preoperacional donde el niño tiene dificultad para ver las cosas desde la perspectiva de otra persona." },
  { term: "Foco en la Apariencia", definition: "Característica del pensamiento preoperacional donde el niño se deja llevar por cómo se ven las cosas superficialmente, sin comprender las transformaciones subyacentes." },
  { term: "Razonamiento Estático", definition: "Característica del pensamiento preoperacional donde el niño piensa que el mundo no cambia, percibiendo solo el estado actual sin considerar las transiciones." },
  { term: "Teoría de Vigotsky", definition: "Teoría del desarrollo cognitivo que enfatiza el papel de la interacción social y el contexto cultural en el aprendizaje, destacando el concepto de Zona de Desarrollo Próximo." },
  { term: "Zona de Desarrollo Próximo (ZDP)", definition: "Según Vigotsky, la diferencia entre lo que un niño puede hacer por sí solo y lo que puede hacer con la ayuda de un adulto o compañero más capaz." },
  { term: "Sobreregularización", definition: "Error gramatical común en el desarrollo del lenguaje donde el niño aplica una regla gramatical de forma demasiado general (por ejemplo, decir 'rompido' en lugar de 'roto')." }
];

// Función para generar acordeón de preguntas
function generateAccordion(containerId, data) {
  const container = document.querySelector(`#${containerId} .accordion`);
  data.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <button onclick="toggleAnswer(this)">${item.q}</button>
      <div class="content">${item.a}</div>
    `;
    container.appendChild(card);
  });
}

// Función para alternar respuestas
function toggleAnswer(button) {
  const content = button.nextElementSibling;
  content.style.display = content.style.display === 'block' ? 'none' : 'block';
}

// Función para filtrar el glosario
document.getElementById('search')?.addEventListener('input', function () {
  const term = this.value.toLowerCase();
  const terms = document.querySelectorAll('.glossary-term');
  terms.forEach(el => {
    const text = el.textContent.toLowerCase();
    el.style.display = text.includes(term) ? 'block' : 'none';
  });
});

// Cargar datos al DOM
window.onload = () => {
  generateAccordion('quiz', quizQuestions);
  generateAccordion('ensayos', essayQuestions);
  const glossaryList = document.querySelector('.glossary-list');
  glossaryTerms.forEach(item => {
    const div = document.createElement('div');
    div.className = 'glossary-term';
    div.innerHTML = `<strong>${item.term}</strong>: ${item.definition}`;
    glossaryList.appendChild(div);
  });
};