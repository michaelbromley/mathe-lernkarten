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
<f><fr>a|n</fr> \u00b1 <fr>b|n</fr> = <fr>a \u00b1 b|n</fr></f>`,
      },
      {
        q: 'Wie multipliziert man Br\u00fcche?',
        a: `<strong>Z\u00e4hler \u00d7 Z\u00e4hler, Nenner \u00d7 Nenner</strong>
<f><fr>a|b</fr> \u00b7 <fr>c|d</fr> = <fr>a \u00b7 c|b \u00b7 d</fr></f>
Tipp: Vorher k\u00fcrzen, wenn m\u00f6glich!`,
      },
      {
        q: 'Wie dividiert man Br\u00fcche?',
        a: `<strong>Mit dem Kehrwert multiplizieren!</strong>
<f><fr>a|b</fr> : <fr>c|d</fr> = <fr>a|b</fr> \u00b7 <fr>d|c</fr></f>
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
<f>k = <fr>y|x</fr></f>
k bleibt f\u00fcr alle Wertepaare gleich.<br>
Einheit beachten (z.B. \u20ac/kg, km/h \u2026)`,
      },
      {
        q: 'Was bedeutet indirekte Proportionalit\u00e4t?',
        a: `<strong>\u201eJe mehr \u2026 desto weniger\u201c</strong>
Wenn eine Gr\u00f6\u00dfe steigt, sinkt die andere proportional.<br>
<f>x \u00b7 y = k (konstant)</f>
oder: y = <fr>k|x</fr>`,
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
<f><fr>x\u2081|y\u2081</fr> = <fr>x\u2082|y\u2082</fr></f>
oder: y\u2082 = y\u2081 \u00b7 <fr>x\u2082|x\u2081</fr><br>
Alternativ: k = <fr>y|x</fr> bestimmen und anwenden.`,
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
<strong>1. Diagonalen:</strong> <f>A = <fr>e \u00b7 f|2</fr></f>
<strong>2. Basis \u00d7 H\u00f6he:</strong> <f>A = a \u00b7 h</f>
e, f = Diagonalen; a = Seite; h = H\u00f6he`,
      },
      {
        q: 'Wie berechnet man die Fl\u00e4che eines Deltoids?',
        a: `<strong>Deltoid (Drachenviereck):</strong>
Die Diagonalen stehen senkrecht aufeinander.<br>
<f>A = <fr>e \u00b7 f|2</fr></f>
e, f = die beiden Diagonalen`,
      },
      {
        q: 'Wie berechnet man die Fl\u00e4che eines Trapez?',
        a: `<strong>Trapez (a \u2225 c):</strong>
<f>A = <fr>a + c|2</fr> \u00b7 h</f>
a, c = parallele Grundlinien<br>
h = senkrechter Abstand zwischen a und c`,
      },
      {
        q: 'Wie leitet man die Formel f\u00fcr Raute/Deltoid her?',
        a: `<strong>Zerlegung in Dreiecke!</strong>
Durch beide Diagonalen in 4 Dreiecke zerlegen.<br>
Jedes Dreieck: \u00bd \u00b7 <fr>e|2</fr> \u00b7 <fr>f|2</fr> \u2014 \u00d7 4 ergibt:<br>
<f>A = <fr>e \u00b7 f|2</fr></f>`,
      },
      {
        q: 'Wie leitet man die Trapezformel her?',
        a: `<strong>Erg\u00e4nzung zum Parallelogramm:</strong>
Zwei gleiche Trapeze zusammenlegen \u2192 Parallelogramm.<br>
Parallelogramm: A = (a+c) \u00b7 h \u2014 Trapez = H\u00e4lfte:<br>
<f>A = <fr>a + c|2</fr> \u00b7 h</f>`,
      },
      {
        q: 'Umkehraufgabe: Seite/H\u00f6he aus Fl\u00e4cheninhalt berechnen',
        a: `<strong>Formel nach der gesuchten Gr\u00f6\u00dfe umformen.</strong>
Beispiel Trapez, h gesucht:<br>
A = <fr>a+c|2</fr> \u00b7 h &nbsp;|&nbsp; :<fr>a+c|2</fr><br>
<f>h = <fr>2 \u00b7 A|a + c</fr></f>`,
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

  // ── Bruchrechnung ──────────────────────────────────────────────────────────

  {
    id: 'ex-bruch-add',
    label: 'Br\u00fcche \u2013 Addition & Subtraktion',
    color: '#4a9b6f',
    diagram: null,
    variables: [
      { name: 'Ergebnis', label: 'Ergebnis', unit: '' },
    ],
    exercises: [
      {
        find: 'Ergebnis',
        given: {},
        answer: 5/6,
        answerDisplay: '5/6',
        prompt: '<fr>2|3</fr> + <fr>1|6</fr> = ?',
        label: 'Br\u00fcche addieren',
        steps: [
          'Gemeinsamen Nenner finden: kgV(3, 6) = 6',
          '<sf><fr>2|3</fr> = <fr>4|6</fr></sf>',
          '<sf><fr>4|6</fr> + <fr>1|6</fr> = <fr>5|6</fr></sf>',
        ],
      },
      {
        find: 'Ergebnis',
        given: {},
        answer: 5/12,
        answerDisplay: '5/12',
        prompt: '<fr>3|4</fr> \u2212 <fr>1|3</fr> = ?',
        label: 'Br\u00fcche subtrahieren',
        steps: [
          'Gemeinsamen Nenner finden: kgV(4, 3) = 12',
          '<sf><fr>3|4</fr> = <fr>9|12</fr></sf> und <sf><fr>1|3</fr> = <fr>4|12</fr></sf>',
          '<sf><fr>9|12</fr> \u2212 <fr>4|12</fr> = <fr>5|12</fr></sf>',
        ],
      },
      {
        find: 'Ergebnis',
        given: {},
        answer: 9/10,
        answerDisplay: '9/10',
        prompt: '<fr>1|2</fr> + <fr>2|5</fr> = ?',
        label: 'Br\u00fcche addieren',
        steps: [
          'Gemeinsamen Nenner finden: kgV(2, 5) = 10',
          '<sf><fr>1|2</fr> = <fr>5|10</fr></sf> und <sf><fr>2|5</fr> = <fr>4|10</fr></sf>',
          '<sf><fr>5|10</fr> + <fr>4|10</fr> = <fr>9|10</fr></sf>',
        ],
      },
      {
        find: 'Ergebnis',
        given: {},
        answer: 7/12,
        answerDisplay: '7/12',
        prompt: '<fr>5|6</fr> \u2212 <fr>1|4</fr> = ?',
        label: 'Br\u00fcche subtrahieren',
        steps: [
          'Gemeinsamen Nenner finden: kgV(6, 4) = 12',
          '<sf><fr>5|6</fr> = <fr>10|12</fr></sf> und <sf><fr>1|4</fr> = <fr>3|12</fr></sf>',
          '<sf><fr>10|12</fr> \u2212 <fr>3|12</fr> = <fr>7|12</fr></sf>',
        ],
      },
      {
        find: 'Ergebnis',
        given: {},
        answer: 5/8,
        answerDisplay: '5/8',
        prompt: '<fr>3|8</fr> + <fr>1|4</fr> = ?',
        label: 'Br\u00fcche addieren',
        steps: [
          'Gemeinsamen Nenner finden: kgV(8, 4) = 8',
          '<sf><fr>1|4</fr> = <fr>2|8</fr></sf>',
          '<sf><fr>3|8</fr> + <fr>2|8</fr> = <fr>5|8</fr></sf>',
        ],
      },
    ],
  },

  {
    id: 'ex-bruch-mult',
    label: 'Br\u00fcche \u2013 Multiplikation & Division',
    color: '#4a9b6f',
    diagram: null,
    variables: [
      { name: 'Ergebnis', label: 'Ergebnis', unit: '' },
    ],
    exercises: [
      {
        find: 'Ergebnis',
        given: {},
        answer: 1/2,
        answerDisplay: '1/2',
        prompt: '<fr>2|3</fr> \u00b7 <fr>3|4</fr> = ?',
        label: 'Br\u00fcche multiplizieren',
        steps: [
          'Z\u00e4hler \u00d7 Z\u00e4hler, Nenner \u00d7 Nenner:',
          '<sf><fr>2 \u00b7 3|3 \u00b7 4</fr> = <fr>6|12</fr> = <fr>1|2</fr></sf>',
        ],
      },
      {
        find: 'Ergebnis',
        given: {},
        answer: 1/2,
        answerDisplay: '1/2',
        prompt: '<fr>3|5</fr> \u00b7 <fr>5|6</fr> = ?',
        label: 'Br\u00fcche multiplizieren',
        steps: [
          '<sf><fr>3 \u00b7 5|5 \u00b7 6</fr> = <fr>15|30</fr> = <fr>1|2</fr></sf>',
          'Tipp: 5 im Z\u00e4hler und Nenner k\u00fcrzen!',
        ],
      },
      {
        find: 'Ergebnis',
        given: {},
        answer: 3/2,
        answerDisplay: '3/2',
        prompt: '<fr>3|4</fr> : <fr>1|2</fr> = ?',
        label: 'Br\u00fcche dividieren',
        steps: [
          'Mit dem Kehrwert multiplizieren:',
          '<sf><fr>3|4</fr> \u00b7 <fr>2|1</fr> = <fr>6|4</fr> = <fr>3|2</fr></sf>',
        ],
      },
      {
        find: 'Ergebnis',
        given: {},
        answer: 5/6,
        answerDisplay: '5/6',
        prompt: '<fr>2|3</fr> : <fr>4|5</fr> = ?',
        label: 'Br\u00fcche dividieren',
        steps: [
          'Mit dem Kehrwert multiplizieren:',
          '<sf><fr>2|3</fr> \u00b7 <fr>5|4</fr> = <fr>10|12</fr> = <fr>5|6</fr></sf>',
        ],
      },
      {
        find: 'Ergebnis',
        given: {},
        answer: 1/4,
        answerDisplay: '1/4',
        prompt: '<fr>5|6</fr> \u00b7 <fr>3|10</fr> = ?',
        label: 'Br\u00fcche multiplizieren',
        steps: [
          '<sf><fr>5 \u00b7 3|6 \u00b7 10</fr> = <fr>15|60</fr> = <fr>1|4</fr></sf>',
          'Tipp: Vorher 5 und 10 k\u00fcrzen, 3 und 6 k\u00fcrzen!',
        ],
      },
    ],
  },

  // ── Gleichungen ────────────────────────────────────────────────────────────

  {
    id: 'ex-gleich-einfach',
    label: 'Gleichungen \u2013 einstufig',
    color: '#9b4a8c',
    diagram: null,
    variables: [
      { name: 'x', label: 'x', unit: '' },
    ],
    exercises: [
      {
        find: 'x',
        given: {},
        answer: 8,
        prompt: 'x + 7 = 15',
        label: 'Einstufige Gleichung',
        steps: [
          '<sf>x + 7 = 15 &nbsp;| \u2212 7</sf>',
          '<sf>x = 8</sf>',
          'Probe: 8 + 7 = 15 \u2713',
        ],
      },
      {
        find: 'x',
        given: {},
        answer: 15,
        prompt: 'x \u2212 3 = 12',
        label: 'Einstufige Gleichung',
        steps: [
          '<sf>x \u2212 3 = 12 &nbsp;| + 3</sf>',
          '<sf>x = 15</sf>',
          'Probe: 15 \u2212 3 = 12 \u2713',
        ],
      },
      {
        find: 'x',
        given: {},
        answer: 7,
        prompt: '4 \u00b7 x = 28',
        label: 'Einstufige Gleichung',
        steps: [
          '<sf>4x = 28 &nbsp;| : 4</sf>',
          '<sf>x = 7</sf>',
          'Probe: 4 \u00b7 7 = 28 \u2713',
        ],
      },
      {
        find: 'x',
        given: {},
        answer: 15,
        prompt: '<fr>x|5</fr> = 3',
        label: 'Einstufige Gleichung',
        steps: [
          '<sf><fr>x|5</fr> = 3 &nbsp;| \u00b7 5</sf>',
          '<sf>x = 15</sf>',
          'Probe: 15 : 5 = 3 \u2713',
        ],
      },
      {
        find: 'x',
        given: {},
        answer: 8,
        prompt: '2x = 16',
        label: 'Einstufige Gleichung',
        steps: [
          '<sf>2x = 16 &nbsp;| : 2</sf>',
          '<sf>x = 8</sf>',
          'Probe: 2 \u00b7 8 = 16 \u2713',
        ],
      },
    ],
  },

  {
    id: 'ex-gleich-mehr',
    label: 'Gleichungen \u2013 mehrstufig',
    color: '#9b4a8c',
    diagram: null,
    variables: [
      { name: 'x', label: 'x', unit: '' },
    ],
    exercises: [
      {
        find: 'x',
        given: {},
        answer: 5,
        prompt: '3x + 5 = 20',
        label: 'Mehrstufige Gleichung',
        steps: [
          '<sf>3x + 5 = 20 &nbsp;| \u2212 5</sf>',
          '<sf>3x = 15 &nbsp;| : 3</sf>',
          '<sf>x = 5</sf>',
          'Probe: 3 \u00b7 5 + 5 = 15 + 5 = 20 \u2713',
        ],
      },
      {
        find: 'x',
        given: {},
        answer: 7,
        prompt: '2x \u2212 3 = 11',
        label: 'Mehrstufige Gleichung',
        steps: [
          '<sf>2x \u2212 3 = 11 &nbsp;| + 3</sf>',
          '<sf>2x = 14 &nbsp;| : 2</sf>',
          '<sf>x = 7</sf>',
          'Probe: 2 \u00b7 7 \u2212 3 = 14 \u2212 3 = 11 \u2713',
        ],
      },
      {
        find: 'x',
        given: {},
        answer: 5,
        prompt: '5x + 8 = 33',
        label: 'Mehrstufige Gleichung',
        steps: [
          '<sf>5x + 8 = 33 &nbsp;| \u2212 8</sf>',
          '<sf>5x = 25 &nbsp;| : 5</sf>',
          '<sf>x = 5</sf>',
          'Probe: 5 \u00b7 5 + 8 = 25 + 8 = 33 \u2713',
        ],
      },
      {
        find: 'x',
        given: {},
        answer: 6,
        prompt: '4x \u2212 6 = 18',
        label: 'Mehrstufige Gleichung',
        steps: [
          '<sf>4x \u2212 6 = 18 &nbsp;| + 6</sf>',
          '<sf>4x = 24 &nbsp;| : 4</sf>',
          '<sf>x = 6</sf>',
          'Probe: 4 \u00b7 6 \u2212 6 = 24 \u2212 6 = 18 \u2713',
        ],
      },
      {
        find: 'x',
        given: {},
        answer: 7,
        prompt: '3x \u2212 4 = 17',
        label: 'Mehrstufige Gleichung',
        steps: [
          '<sf>3x \u2212 4 = 17 &nbsp;| + 4</sf>',
          '<sf>3x = 21 &nbsp;| : 3</sf>',
          '<sf>x = 7</sf>',
          'Probe: 3 \u00b7 7 \u2212 4 = 21 \u2212 4 = 17 \u2713',
        ],
      },
    ],
  },

  // ── Proportionalit\u00e4t ─────────────────────────────────────────────────────

  {
    id: 'ex-prop-direkt',
    label: 'Direkte Proportionalit\u00e4t',
    color: '#4a9b6f',
    diagram: null,
    variables: [
      { name: 'Ergebnis', label: 'Ergebnis', unit: '' },
    ],
    exercises: [
      {
        find: 'Ergebnis',
        given: {},
        answer: 20,
        prompt: '3 kg kosten 12 \u20ac. Was kosten 5 kg?',
        label: 'Dreisatz',
        steps: [
          'Preis pro kg: <sf>k = <fr>12|3</fr> = 4 \u20ac/kg</sf>',
          '<sf>5 \u00b7 4 = 20 \u20ac</sf>',
        ],
      },
      {
        find: 'Ergebnis',
        given: {},
        answer: 5,
        prompt: 'y = k \u00b7 x. Bei x = 4 ist y = 20. Wie gro\u00df ist k?',
        label: 'k berechnen',
        steps: [
          '<sf>k = <fr>y|x</fr> = <fr>20|4</fr> = 5</sf>',
        ],
      },
      {
        find: 'Ergebnis',
        given: {},
        answer: 35,
        prompt: '2 m Stoff kosten 14 \u20ac. Was kosten 5 m?',
        label: 'Dreisatz',
        steps: [
          'Preis pro Meter: <sf>k = <fr>14|2</fr> = 7 \u20ac/m</sf>',
          '<sf>5 \u00b7 7 = 35 \u20ac</sf>',
        ],
      },
      {
        find: 'Ergebnis',
        given: {},
        answer: 24,
        prompt: 'k = 3 und x = 8. Berechne y = k \u00b7 x.',
        label: 'Wert berechnen',
        steps: [
          '<sf>y = k \u00b7 x = 3 \u00b7 8 = 24</sf>',
        ],
      },
      {
        find: 'Ergebnis',
        given: {},
        answer: 15,
        prompt: '4 Brote kosten 6 \u20ac. Was kosten 10 Brote?',
        label: 'Dreisatz',
        steps: [
          'Preis pro Brot: <sf>k = <fr>6|4</fr> = 1,5 \u20ac</sf>',
          '<sf>10 \u00b7 1,5 = 15 \u20ac</sf>',
        ],
      },
    ],
  },

  {
    id: 'ex-prop-indirekt',
    label: 'Indirekte Proportionalit\u00e4t',
    color: '#4a9b6f',
    diagram: null,
    variables: [
      { name: 'Ergebnis', label: 'Ergebnis', unit: '' },
    ],
    exercises: [
      {
        find: 'Ergebnis',
        given: {},
        answer: 3,
        prompt: '6 Arbeiter brauchen 4 Stunden. Wie lange brauchen 8 Arbeiter?',
        label: 'Indirekte Proportionalit\u00e4t',
        steps: [
          '<sf>k = 6 \u00b7 4 = 24</sf> (Arbeiterstunden)',
          '<sf>8 \u00b7 ? = 24</sf>',
          '<sf>? = <fr>24|8</fr> = 3 Stunden</sf>',
        ],
      },
      {
        find: 'Ergebnis',
        given: {},
        answer: 60,
        prompt: 'x \u00b7 y = k. Bei x = 5, y = 12. Wie gro\u00df ist k?',
        label: 'k berechnen',
        steps: [
          '<sf>k = x \u00b7 y = 5 \u00b7 12 = 60</sf>',
        ],
      },
      {
        find: 'Ergebnis',
        given: {},
        answer: 8,
        prompt: '4 Pumpen brauchen 6 Stunden. Wie lange brauchen 3 Pumpen?',
        label: 'Indirekte Proportionalit\u00e4t',
        steps: [
          '<sf>k = 4 \u00b7 6 = 24</sf>',
          '<sf>3 \u00b7 ? = 24</sf>',
          '<sf>? = <fr>24|3</fr> = 8 Stunden</sf>',
        ],
      },
      {
        find: 'Ergebnis',
        given: {},
        answer: 4,
        prompt: 'k = 36 und x = 9. Berechne y = <fr>k|x</fr>.',
        label: 'Wert berechnen',
        steps: [
          '<sf>y = <fr>k|x</fr> = <fr>36|9</fr> = 4</sf>',
        ],
      },
      {
        find: 'Ergebnis',
        given: {},
        answer: 4,
        prompt: '5 Maschinen brauchen 8 Stunden. Wie lange brauchen 10 Maschinen?',
        label: 'Indirekte Proportionalit\u00e4t',
        steps: [
          '<sf>k = 5 \u00b7 8 = 40</sf>',
          '<sf>10 \u00b7 ? = 40</sf>',
          '<sf>? = <fr>40|10</fr> = 4 Stunden</sf>',
        ],
      },
    ],
  },

  // ── Vierecke & Fl\u00e4chenberechnung ──────────────────────────────────────────

  {
    id: 'ex-viereck-A',
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
          'Formel: <sf>A = <fr>a + c|2</fr> \u00b7 h</sf>',
          'Einsetzen: <sf>A = <fr>10 + 3|2</fr> \u00b7 5 = 6,5 \u00b7 5 = 32,5 cm\u00b2</sf>',
        ],
      },
      {
        find: 'A',
        given: { a: 9, c: 5, h: 4 },
        answer: 28,
        label: 'Fl\u00e4che berechnen',
        steps: ['<sf>A = <fr>9 + 5|2</fr> \u00b7 4 = 7 \u00b7 4 = 28 cm\u00b2</sf>'],
      },
      {
        find: 'A',
        given: { a: 12, c: 6, h: 7 },
        answer: 63,
        label: 'Fl\u00e4che berechnen',
        steps: ['<sf>A = <fr>12 + 6|2</fr> \u00b7 7 = 9 \u00b7 7 = 63 cm\u00b2</sf>'],
      },
      {
        find: 'A',
        given: { a: 15, c: 7, h: 6 },
        answer: 66,
        label: 'Fl\u00e4che berechnen',
        steps: ['<sf>A = <fr>15 + 7|2</fr> \u00b7 6 = 11 \u00b7 6 = 66 cm\u00b2</sf>'],
      },
      {
        find: 'A',
        given: { a: 8, c: 4, h: 6 },
        answer: 36,
        label: 'Fl\u00e4che berechnen',
        steps: ['<sf>A = <fr>8 + 4|2</fr> \u00b7 6 = 6 \u00b7 6 = 36 cm\u00b2</sf>'],
      },
    ],
  },

  {
    id: 'ex-viereck-h',
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
          'Formel umstellen: <sf>h = <fr>2 \u00b7 A|a + c</fr></sf>',
          'Einsetzen: <sf>h = <fr>2 \u00b7 91|8 + 5</fr> = <fr>182|13</fr> = 14 cm</sf>',
        ],
      },
      {
        find: 'h',
        given: { a: 9, c: 3, A: 30 },
        answer: 5,
        label: 'H\u00f6he berechnen',
        steps: ['<sf>h = <fr>2 \u00b7 30|9 + 3</fr> = <fr>60|12</fr> = 5 cm</sf>'],
      },
      {
        find: 'h',
        given: { a: 10, c: 4, A: 49 },
        answer: 7,
        label: 'H\u00f6he berechnen',
        steps: ['<sf>h = <fr>2 \u00b7 49|10 + 4</fr> = <fr>98|14</fr> = 7 cm</sf>'],
      },
      {
        find: 'h',
        given: { a: 14, c: 6, A: 80 },
        answer: 8,
        label: 'H\u00f6he berechnen',
        steps: ['<sf>h = <fr>2 \u00b7 80|14 + 6</fr> = <fr>160|20</fr> = 8 cm</sf>'],
      },
      {
        find: 'h',
        given: { a: 12, c: 8, A: 60 },
        answer: 6,
        label: 'H\u00f6he berechnen',
        steps: ['<sf>h = <fr>2 \u00b7 60|12 + 8</fr> = <fr>120|20</fr> = 6 cm</sf>'],
      },
    ],
  },

  {
    id: 'ex-viereck-c',
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
          'Formel umstellen: <sf>c = <fr>2 \u00b7 A|h</fr> \u2212 a</sf>',
          'Einsetzen: <sf>c = <fr>2 \u00b7 30|4</fr> \u2212 9 = 15 \u2212 9 = 6 cm</sf>',
        ],
      },
      {
        find: 'c',
        given: { a: 12, h: 5, A: 55 },
        answer: 10,
        label: 'Obere Grundlinie berechnen',
        steps: ['<sf>c = <fr>2 \u00b7 55|5</fr> \u2212 12 = 22 \u2212 12 = 10 cm</sf>'],
      },
      {
        find: 'c',
        given: { a: 10, h: 6, A: 48 },
        answer: 6,
        label: 'Obere Grundlinie berechnen',
        steps: ['<sf>c = <fr>2 \u00b7 48|6</fr> \u2212 10 = 16 \u2212 10 = 6 cm</sf>'],
      },
      {
        find: 'c',
        given: { a: 8, h: 3, A: 21 },
        answer: 6,
        label: 'Obere Grundlinie berechnen',
        steps: ['<sf>c = <fr>2 \u00b7 21|3</fr> \u2212 8 = 14 \u2212 8 = 6 cm</sf>'],
      },
      {
        find: 'c',
        given: { a: 11, h: 5, A: 45 },
        answer: 7,
        label: 'Obere Grundlinie berechnen',
        steps: ['<sf>c = <fr>2 \u00b7 45|5</fr> \u2212 11 = 18 \u2212 11 = 7 cm</sf>'],
      },
    ],
  },

  {
    id: 'ex-viereck-a',
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
          'Formel umstellen: <sf>a = <fr>2 \u00b7 A|h</fr> \u2212 c</sf>',
          'Einsetzen: <sf>a = <fr>2 \u00b7 32,5|5</fr> \u2212 3 = 13 \u2212 3 = 10 cm</sf>',
        ],
      },
      {
        find: 'a',
        given: { c: 4, h: 8, A: 60 },
        answer: 11,
        label: 'Untere Grundlinie berechnen',
        steps: ['<sf>a = <fr>2 \u00b7 60|8</fr> \u2212 4 = 15 \u2212 4 = 11 cm</sf>'],
      },
      {
        find: 'a',
        given: { c: 5, h: 6, A: 57 },
        answer: 14,
        label: 'Untere Grundlinie berechnen',
        steps: ['<sf>a = <fr>2 \u00b7 57|6</fr> \u2212 5 = 19 \u2212 5 = 14 cm</sf>'],
      },
      {
        find: 'a',
        given: { c: 6, h: 4, A: 34 },
        answer: 11,
        label: 'Untere Grundlinie berechnen',
        steps: ['<sf>a = <fr>2 \u00b7 34|4</fr> \u2212 6 = 17 \u2212 6 = 11 cm</sf>'],
      },
      {
        find: 'a',
        given: { c: 5, h: 7, A: 56 },
        answer: 11,
        label: 'Untere Grundlinie berechnen',
        steps: ['<sf>a = <fr>2 \u00b7 56|7</fr> \u2212 5 = 16 \u2212 5 = 11 cm</sf>'],
      },
    ],
  },
];
