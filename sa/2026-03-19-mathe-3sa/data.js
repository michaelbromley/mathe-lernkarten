const SA_META = {
  subject: 'Mathematik',
  title: '3. Schriftliche Arbeit',
  date: '19.3.2026',
  className: '2CD',
};

// ─── Flashcard sections ──────────────────────────────────────────────────────

const FLASHCARD_SECTIONS = [
  {
    id: 'sec-bruch',
    label: 'Bruchrechnung',
    color: '#4a9b6f',
    cardColor: '#1a2744',
    cards: [
      {
        q: 'Was sind die Vorrangregeln bei der Bruchrechnung?',
        a: `<strong>Punkt vor Strich!</strong>
Zuerst: \u00b7 (mal) und : (geteilt)<br>
Dann: + (plus) und \u2212 (minus)<br>
Klammern haben <em>immer</em> Vorrang.`,
      },
      {
        q: 'Wie addiert/subtrahiert man Br\u00fcche?',
        a: `<strong>Gleichnamig machen, dann z\u00e4hlen.</strong>
1. Gemeinsamen Nenner (kgV) finden<br>
2. Z\u00e4hler entsprechend erweitern<br>
<f>a/n \u00b1 b/n = (a\u00b1b)/n</f>`,
      },
      {
        q: 'Wie multipliziert man Br\u00fcche?',
        a: `<strong>Z\u00e4hler \u00d7 Z\u00e4hler, Nenner \u00d7 Nenner</strong>
<f>a/b \u00b7 c/d = (a\u00b7c)/(b\u00b7d)</f>
Tipp: Vorher k\u00fcrzen, wenn m\u00f6glich!`,
      },
      {
        q: 'Wie dividiert man Br\u00fcche?',
        a: `<strong>Mit dem Kehrwert multiplizieren!</strong>
<f>a/b : c/d = a/b \u00b7 d/c</f>
Den zweiten Bruch umdrehen und dann multiplizieren.`,
      },
      {
        q: 'Wie k\u00fcrzt und erweitert man Br\u00fcche?',
        a: `<strong>K\u00fcrzen:</strong> Z\u00e4hler und Nenner durch dieselbe Zahl dividieren.<br>
<strong>Erweitern:</strong> Z\u00e4hler und Nenner mit derselben Zahl multiplizieren.<br>
Der Wert des Bruchs bleibt gleich!`,
      },
    ],
  },

  {
    id: 'sec-gleich',
    label: 'Gleichungen',
    color: '#9b4a8c',
    cardColor: '#2d1f3d',
    cards: [
      {
        q: 'Was ist das Ziel beim L\u00f6sen einer Gleichung?',
        a: `<strong>Die Unbekannte (x) allein stellen!</strong>
Beide Seiten der Gleichung gleich behandeln:<br>
+ \u2212 \u00b7 : auf <em>beiden</em> Seiten anwenden, um x zu isolieren.`,
      },
      {
        q: 'Wie l\u00f6st man eine einstufige Gleichung?',
        a: `<strong>Eine Umkehroperation anwenden.</strong>
Beispiel: x + 5 = 12<br>
<f>x = 12 \u2212 5 = 7</f>
Probe: 7 + 5 = 12 \u2713`,
      },
      {
        q: 'Wie l\u00f6st man eine mehrstufige Gleichung?',
        a: `<strong>Schritt f\u00fcr Schritt umformen.</strong>
Beispiel: 3x + 4 = 19<br>
1. \u2212 4: &nbsp;3x = 15<br>
2. : 3: &nbsp;&nbsp;x = 5<br>
Jeder Schritt = ein Auftragsstrichen!`,
      },
      {
        q: 'Wie macht man die Probe bei einer Gleichung?',
        a: `<strong>x-Wert einsetzen und pr\u00fcfen.</strong>
L\u00f6sung x = 5 in 3x + 4 = 19:<br>
3\u00b75 + 4 = 15 + 4 = <strong>19 \u2713</strong><br>
Linke Seite = Rechte Seite \u2192 richtig!`,
      },
      {
        q: 'Wie \u00fcbersetzt man einen Text in eine Gleichung?',
        a: `<strong>Unbekannte mit x benennen, Satz aufschreiben.</strong>
\u201eEine Zahl, um 7 vergr\u00f6\u00dfert, ergibt 20\u201c<br>
<f>x + 7 = 20</f>
\u201eDas Dreifache einer Zahl minus 4 ist 11\u201c<br>
<f>3x \u2212 4 = 11</f>`,
      },
      {
        q: 'Wie \u00fcbersetzt man eine Streichholz-/Boxen-Situation?',
        a: `<strong>Gleichung aus der Situation aufstellen.</strong>
Jede Box enth\u00e4lt gleich viele Streichh\u00f6lzer (= x).<br>
Gesamtzahl Streichh\u00f6lzer = Anzahl Boxen \u00b7 x<br>
<f>n \u00b7 x = Gesamtzahl</f>`,
      },
    ],
  },

  {
    id: 'sec-prop',
    label: 'Proportionalit\u00e4t',
    color: '#4a9b6f',
    cardColor: '#1f3326',
    cards: [
      {
        q: 'Was bedeutet direkte Proportionalit\u00e4t?',
        a: `<strong>\u201eJe mehr \u2026 desto mehr\u201c</strong>
Wenn eine Gr\u00f6\u00dfe steigt, steigt die andere im gleichen Verh\u00e4ltnis.<br>
<f>y = k \u00b7 x</f>
k = Proportionalit\u00e4tskonstante (konstant!)`,
      },
      {
        q: 'Wie berechnet man k bei direkter Proportionalit\u00e4t?',
        a: `<strong>Proportionalit\u00e4tskonstante k:</strong>
<f>k = y / x</f>
k bleibt f\u00fcr alle Wertepaare gleich.<br>
Einheit beachten (z.B. \u20ac/kg, km/h \u2026)`,
      },
      {
        q: 'Was bedeutet indirekte Proportionalit\u00e4t?',
        a: `<strong>\u201eJe mehr \u2026 desto weniger\u201c</strong>
Wenn eine Gr\u00f6\u00dfe steigt, sinkt die andere proportional.<br>
<f>x \u00b7 y = k (konstant)</f>
oder: y = k / x`,
      },
      {
        q: 'Wie berechnet man k bei indirekter Proportionalit\u00e4t?',
        a: `<strong>Proportionalit\u00e4tskonstante k:</strong>
<f>k = x \u00b7 y</f>
Das Produkt der beiden Gr\u00f6\u00dfen ist immer gleich.`,
      },
      {
        q: 'Was ist die Schlussrechnung (Dreisatz)?',
        a: `<strong>\u00dcber den Wert f\u00fcr 1 rechnen.</strong>
1. Wert f\u00fcr 1 Einheit berechnen (\u00f7)<br>
2. Mit gew\u00fcnschter Menge multiplizieren (\u00b7)<br>
<em>Beispiel:</em> 3 kg = 7,50 \u20ac \u2192 1 kg = 2,50 \u20ac \u2192 5 kg = 12,50 \u20ac`,
      },
      {
        q: 'Fehlende Werte in Tabelle: direkte Proportionalit\u00e4t',
        a: `<strong>Verh\u00e4ltnisgleichung aufstellen.</strong>
<f>x\u2081 / y\u2081 = x\u2082 / y\u2082</f>
oder: y\u2082 = y\u2081 \u00b7 (x\u2082 / x\u2081)<br>
Alternativ: k = y/x bestimmen und anwenden.`,
      },
    ],
  },

  {
    id: 'sec-viereck',
    label: 'Vierecke & Fl\u00e4chenberechnung',
    color: '#d4a017',
    cardColor: '#3d2800',
    cards: [
      {
        q: 'Umfang von Rechteck, Quadrat, Parallelogramm',
        a: `<strong>Rechteck:</strong> <f>U = 2\u00b7(a + b)</f>
<strong>Quadrat:</strong> <f>U = 4\u00b7a</f>
<strong>Parallelogramm:</strong> <f>U = 2\u00b7(a + b)</f>`,
      },
      {
        q: 'Umfang von Raute, Deltoid, Trapez',
        a: `<strong>Raute:</strong> <f>U = 4\u00b7a</f>
<strong>Deltoid:</strong> <f>U = 2\u00b7(a + b)</f>
<strong>Trapez:</strong> <f>U = a + b + c + d</f>
(alle vier Seiten addieren)`,
      },
      {
        q: 'Wie berechnet man die Fl\u00e4che einer Raute?',
        a: `<strong>Zwei Methoden:</strong>
<strong>1. Diagonalen:</strong> <f>A = (e \u00b7 f) / 2</f>
<strong>2. Basis \u00d7 H\u00f6he:</strong> <f>A = a \u00b7 h</f>
e, f = Diagonalen; a = Seite; h = H\u00f6he`,
      },
      {
        q: 'Wie berechnet man die Fl\u00e4che eines Deltoids?',
        a: `<strong>Deltoid (Drachenviereck):</strong>
Die Diagonalen stehen senkrecht aufeinander.<br>
<f>A = (e \u00b7 f) / 2</f>
e, f = die beiden Diagonalen`,
      },
      {
        q: 'Wie berechnet man die Fl\u00e4che eines Trapez?',
        a: `<strong>Trapez (a \u2225 c):</strong>
<f>A = (a + c) / 2 \u00b7 h</f>
a, c = parallele Grundlinien<br>
h = senkrechter Abstand zwischen a und c`,
      },
      {
        q: 'Wie leitet man die Formel f\u00fcr Raute/Deltoid her?',
        a: `<strong>Zerlegung in Dreiecke!</strong>
Durch beide Diagonalen in 4 Dreiecke zerlegen.<br>
Jedes Dreieck: \u00bd \u00b7 (e/2) \u00b7 (f/2) \u2014 \u00d7 4 ergibt:<br>
<f>A = e\u00b7f / 2</f>`,
      },
      {
        q: 'Wie leitet man die Trapezformel her?',
        a: `<strong>Erg\u00e4nzung zum Parallelogramm:</strong>
Zwei gleiche Trapeze zusammenlegen \u2192 Parallelogramm.<br>
Parallelogramm: A = (a+c) \u00b7 h \u2014 Trapez = H\u00e4lfte:<br>
<f>A = (a + c) / 2 \u00b7 h</f>`,
      },
      {
        q: 'Umkehraufgabe: Seite/H\u00f6he aus Fl\u00e4cheninhalt berechnen',
        a: `<strong>Formel nach der gesuchten Gr\u00f6\u00dfe umformen.</strong>
Beispiel Trapez, h gesucht:<br>
A = (a+c)/2 \u00b7 h &nbsp;|&nbsp; :(a+c)/2<br>
<f>h = 2\u00b7A / (a + c)</f>`,
      },
      {
        q: 'Spezielle Trapeze \u2013 was muss ich wissen?',
        a: `<strong>Gleichschenkliges Trapez:</strong> c = d (Schenkel gleich lang)<br>
Basiswinkel sind jeweils gleich.<br>
<strong>Winkelsumme im Trapez:</strong>
<f>\u03b1 + \u03b2 + \u03b3 + \u03b4 = 360\u00b0</f>`,
      },
      {
        q: 'Zusammengesetzte Figuren \u2013 Fl\u00e4che berechnen',
        a: `<strong>Zwei Methoden:</strong>
<strong>Aufteilen + Addieren:</strong> Figur in Teilfl\u00e4chen zerlegen \u2192 addieren.<br>
<strong>Erg\u00e4nzen \u2212 Subtrahieren:</strong> Erg\u00e4nzen und Teilfl\u00e4che abziehen.<br>
Je nach Figur die passende Methode w\u00e4hlen!`,
      },
    ],
  },
];

// ─── Exercise groups ─────────────────────────────────────────────────────────

const EXERCISE_GROUPS = [
  {
    id: 'ex-group-A',
    label: 'Trapez \u2013 A berechnen',
    color: '#e8522a',
    diagram: 'trapez',
    variables: [
      { name: 'a', label: 'Grundlinie a', unit: 'cm' },
      { name: 'c', label: 'Grundlinie c', unit: 'cm' },
      { name: 'h', label: 'H\u00f6he', unit: 'cm' },
      { name: 'A', label: 'Fl\u00e4che', unit: 'cm\u00b2' },
    ],
    exercises: [
      {
        find: 'A',
        given: { a: 10, c: 3, h: 5 },
        answer: 32.5,
        label: 'Fl\u00e4che berechnen',
        steps: [
          'Formel: <sf>A = (a + c) / 2 \u00b7 h</sf>',
          'Einsetzen: <sf>A = (10 + 3) / 2 \u00b7 5 = 6,5 \u00b7 5 = 32,5 cm\u00b2</sf>',
        ],
      },
      {
        find: 'A',
        given: { a: 9, c: 5, h: 4 },
        answer: 28,
        label: 'Fl\u00e4che berechnen',
        steps: ['<sf>A = (9 + 5) / 2 \u00b7 4 = 7 \u00b7 4 = 28 cm\u00b2</sf>'],
      },
      {
        find: 'A',
        given: { a: 12, c: 6, h: 7 },
        answer: 63,
        label: 'Fl\u00e4che berechnen',
        steps: ['<sf>A = (12 + 6) / 2 \u00b7 7 = 9 \u00b7 7 = 63 cm\u00b2</sf>'],
      },
      {
        find: 'A',
        given: { a: 15, c: 7, h: 6 },
        answer: 66,
        label: 'Fl\u00e4che berechnen',
        steps: ['<sf>A = (15 + 7) / 2 \u00b7 6 = 11 \u00b7 6 = 66 cm\u00b2</sf>'],
      },
    ],
  },

  {
    id: 'ex-group-h',
    label: 'Trapez \u2013 h berechnen',
    color: '#4a9b6f',
    diagram: 'trapez',
    variables: [
      { name: 'a', label: 'Grundlinie a', unit: 'cm' },
      { name: 'c', label: 'Grundlinie c', unit: 'cm' },
      { name: 'h', label: 'H\u00f6he', unit: 'cm' },
      { name: 'A', label: 'Fl\u00e4che', unit: 'cm\u00b2' },
    ],
    exercises: [
      {
        find: 'h',
        given: { a: 8, c: 5, A: 91 },
        answer: 14,
        label: 'H\u00f6he berechnen',
        steps: [
          'Formel umstellen: <sf>h = 2 \u00b7 A / (a + c)</sf>',
          'Einsetzen: <sf>h = 2 \u00b7 91 / (8 + 5) = 182 / 13 = 14 cm</sf>',
        ],
      },
      {
        find: 'h',
        given: { a: 9, c: 3, A: 30 },
        answer: 5,
        label: 'H\u00f6he berechnen',
        steps: ['<sf>h = 2 \u00b7 30 / (9 + 3) = 60 / 12 = 5 cm</sf>'],
      },
      {
        find: 'h',
        given: { a: 10, c: 4, A: 49 },
        answer: 7,
        label: 'H\u00f6he berechnen',
        steps: ['<sf>h = 2 \u00b7 49 / (10 + 4) = 98 / 14 = 7 cm</sf>'],
      },
      {
        find: 'h',
        given: { a: 14, c: 6, A: 80 },
        answer: 8,
        label: 'H\u00f6he berechnen',
        steps: ['<sf>h = 2 \u00b7 80 / (14 + 6) = 160 / 20 = 8 cm</sf>'],
      },
    ],
  },

  {
    id: 'ex-group-c',
    label: 'Trapez \u2013 c berechnen',
    color: '#9b4a8c',
    diagram: 'trapez',
    variables: [
      { name: 'a', label: 'Grundlinie a', unit: 'cm' },
      { name: 'c', label: 'Grundlinie c', unit: 'cm' },
      { name: 'h', label: 'H\u00f6he', unit: 'cm' },
      { name: 'A', label: 'Fl\u00e4che', unit: 'cm\u00b2' },
    ],
    exercises: [
      {
        find: 'c',
        given: { a: 9, h: 4, A: 30 },
        answer: 6,
        label: 'Obere Grundlinie berechnen',
        steps: [
          'Formel umstellen: <sf>c = 2 \u00b7 A / h \u2212 a</sf>',
          'Einsetzen: <sf>c = 2 \u00b7 30 / 4 \u2212 9 = 15 \u2212 9 = 6 cm</sf>',
        ],
      },
      {
        find: 'c',
        given: { a: 12, h: 5, A: 55 },
        answer: 10,
        label: 'Obere Grundlinie berechnen',
        steps: ['<sf>c = 2 \u00b7 55 / 5 \u2212 12 = 22 \u2212 12 = 10 cm</sf>'],
      },
      {
        find: 'c',
        given: { a: 10, h: 6, A: 48 },
        answer: 6,
        label: 'Obere Grundlinie berechnen',
        steps: ['<sf>c = 2 \u00b7 48 / 6 \u2212 10 = 16 \u2212 10 = 6 cm</sf>'],
      },
      {
        find: 'c',
        given: { a: 8, h: 3, A: 21 },
        answer: 6,
        label: 'Obere Grundlinie berechnen',
        steps: ['<sf>c = 2 \u00b7 21 / 3 \u2212 8 = 14 \u2212 8 = 6 cm</sf>'],
      },
    ],
  },

  {
    id: 'ex-group-a',
    label: 'Trapez \u2013 a berechnen',
    color: '#d4a017',
    diagram: 'trapez',
    variables: [
      { name: 'a', label: 'Grundlinie a', unit: 'cm' },
      { name: 'c', label: 'Grundlinie c', unit: 'cm' },
      { name: 'h', label: 'H\u00f6he', unit: 'cm' },
      { name: 'A', label: 'Fl\u00e4che', unit: 'cm\u00b2' },
    ],
    exercises: [
      {
        find: 'a',
        given: { c: 3, h: 5, A: 32.5 },
        answer: 10,
        label: 'Untere Grundlinie berechnen',
        steps: [
          'Formel umstellen: <sf>a = 2 \u00b7 A / h \u2212 c</sf>',
          'Einsetzen: <sf>a = 2 \u00b7 32,5 / 5 \u2212 3 = 13 \u2212 3 = 10 cm</sf>',
        ],
      },
      {
        find: 'a',
        given: { c: 4, h: 8, A: 60 },
        answer: 11,
        label: 'Untere Grundlinie berechnen',
        steps: ['<sf>a = 2 \u00b7 60 / 8 \u2212 4 = 15 \u2212 4 = 11 cm</sf>'],
      },
      {
        find: 'a',
        given: { c: 5, h: 6, A: 57 },
        answer: 14,
        label: 'Untere Grundlinie berechnen',
        steps: ['<sf>a = 2 \u00b7 57 / 6 \u2212 5 = 19 \u2212 5 = 14 cm</sf>'],
      },
      {
        find: 'a',
        given: { c: 6, h: 4, A: 34 },
        answer: 11,
        label: 'Untere Grundlinie berechnen',
        steps: ['<sf>a = 2 \u00b7 34 / 4 \u2212 6 = 17 \u2212 6 = 11 cm</sf>'],
      },
    ],
  },
];
