/**
 * data.js — Mathe Lernkarten 2CD
 *
 * This is the only file you need to edit to add/change content.
 *
 * FLASHCARDS
 * ----------
 * Each entry in FLASHCARD_SECTIONS defines a category section on the
 * Lernkarten tab. Add new sections or cards freely — the app picks them
 * up automatically and adds them to the TOC.
 *
 *   id        unique slug, used for TOC anchor (no spaces)
 *   label     display name shown in the section heading and TOC
 *   color     CSS color for the dot + formula border + answer label
 *   cardColor background hex for the front of cards in this section
 *   cards     array of { q, a } objects
 *               q  — question text (plain text or HTML)
 *               a  — answer HTML; wrap formulas in <f>…</f> shorthand
 *                    (the app converts <f> → styled formula block)
 *
 * EXERCISES
 * ---------
 * Each entry in EXERCISE_GROUPS defines a group on the Übungen tab.
 *
 *   id        unique slug, used for TOC anchor
 *   label     display name for the group heading
 *   color     CSS color for the group dot
 *   exercises array of exercise objects:
 *               find   which variable to solve for: 'A' | 'h' | 'c' | 'a'
 *               a      bottom base (cm)   — omit if this is the unknown
 *               c      top base (cm)      — omit if this is the unknown
 *               h      height (cm)        — omit if this is the unknown
 *               A      area (cm²)         — omit if this is the unknown
 *               unit   answer unit string, e.g. 'cm²' or 'cm'
 *               label  short description shown in the card header
 *               steps  array of step strings (HTML ok, use <sf>…</sf> for
 *                      inline step formula styling)
 */

// ─── Shorthand tags ──────────────────────────────────────────────────────────
// In card answers, wrap formula blocks in <f>…</f>.
// In exercise steps, wrap inline formulas in <sf>…</sf>.
// The app replaces these at render time.

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
Zuerst: · (mal) und : (geteilt)<br>
Dann: + (plus) und − (minus)<br>
Klammern haben <em>immer</em> Vorrang.`,
      },
      {
        q: 'Wie addiert/subtrahiert man Brüche?',
        a: `<strong>Gleichnamig machen, dann zählen.</strong>
1. Gemeinsamen Nenner (kgV) finden<br>
2. Zähler entsprechend erweitern<br>
<f>a/n ± b/n = (a±b)/n</f>`,
      },
      {
        q: 'Wie multipliziert man Brüche?',
        a: `<strong>Zähler × Zähler, Nenner × Nenner</strong>
<f>a/b · c/d = (a·c)/(b·d)</f>
Tipp: Vorher kürzen, wenn möglich!`,
      },
      {
        q: 'Wie dividiert man Brüche?',
        a: `<strong>Mit dem Kehrwert multiplizieren!</strong>
<f>a/b : c/d = a/b · d/c</f>
Den zweiten Bruch umdrehen und dann multiplizieren.`,
      },
      {
        q: 'Wie kürzt und erweitert man Brüche?',
        a: `<strong>Kürzen:</strong> Zähler und Nenner durch dieselbe Zahl dividieren.<br>
<strong>Erweitern:</strong> Zähler und Nenner mit derselben Zahl multiplizieren.<br>
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
        q: 'Was ist das Ziel beim Lösen einer Gleichung?',
        a: `<strong>Die Unbekannte (x) allein stellen!</strong>
Beide Seiten der Gleichung gleich behandeln:<br>
+ − · : auf <em>beiden</em> Seiten anwenden, um x zu isolieren.`,
      },
      {
        q: 'Wie löst man eine einstufige Gleichung?',
        a: `<strong>Eine Umkehroperation anwenden.</strong>
Beispiel: x + 5 = 12<br>
<f>x = 12 − 5 = 7</f>
Probe: 7 + 5 = 12 ✓`,
      },
      {
        q: 'Wie löst man eine mehrstufige Gleichung?',
        a: `<strong>Schritt für Schritt umformen.</strong>
Beispiel: 3x + 4 = 19<br>
1. − 4: &nbsp;3x = 15<br>
2. : 3: &nbsp;&nbsp;x = 5<br>
Jeder Schritt = ein Auftragsstrichen!`,
      },
      {
        q: 'Wie macht man die Probe bei einer Gleichung?',
        a: `<strong>x-Wert einsetzen und prüfen.</strong>
Lösung x = 5 in 3x + 4 = 19:<br>
3·5 + 4 = 15 + 4 = <strong>19 ✓</strong><br>
Linke Seite = Rechte Seite → richtig!`,
      },
      {
        q: 'Wie übersetzt man einen Text in eine Gleichung?',
        a: `<strong>Unbekannte mit x benennen, Satz aufschreiben.</strong>
„Eine Zahl, um 7 vergrößert, ergibt 20"<br>
<f>x + 7 = 20</f>
„Das Dreifache einer Zahl minus 4 ist 11"<br>
<f>3x − 4 = 11</f>`,
      },
      {
        q: 'Wie übersetzt man eine Streichholz-/Boxen-Situation?',
        a: `<strong>Gleichung aus der Situation aufstellen.</strong>
Jede Box enthält gleich viele Streichhölzer (= x).<br>
Gesamtzahl Streichhölzer = Anzahl Boxen · x<br>
<f>n · x = Gesamtzahl</f>`,
      },
    ],
  },

  {
    id: 'sec-prop',
    label: 'Proportionalität',
    color: '#4a9b6f',
    cardColor: '#1f3326',
    cards: [
      {
        q: 'Was bedeutet direkte Proportionalität?',
        a: `<strong>„Je mehr … desto mehr"</strong>
Wenn eine Größe steigt, steigt die andere im gleichen Verhältnis.<br>
<f>y = k · x</f>
k = Proportionalitätskonstante (konstant!)`,
      },
      {
        q: 'Wie berechnet man k bei direkter Proportionalität?',
        a: `<strong>Proportionalitätskonstante k:</strong>
<f>k = y / x</f>
k bleibt für alle Wertepaare gleich.<br>
Einheit beachten (z.B. €/kg, km/h …)`,
      },
      {
        q: 'Was bedeutet indirekte Proportionalität?',
        a: `<strong>„Je mehr … desto weniger"</strong>
Wenn eine Größe steigt, sinkt die andere proportional.<br>
<f>x · y = k (konstant)</f>
oder: y = k / x`,
      },
      {
        q: 'Wie berechnet man k bei indirekter Proportionalität?',
        a: `<strong>Proportionalitätskonstante k:</strong>
<f>k = x · y</f>
Das Produkt der beiden Größen ist immer gleich.`,
      },
      {
        q: 'Was ist die Schlussrechnung (Dreisatz)?',
        a: `<strong>Über den Wert für 1 rechnen.</strong>
1. Wert für 1 Einheit berechnen (÷)<br>
2. Mit gewünschter Menge multiplizieren (·)<br>
<em>Beispiel:</em> 3 kg = 7,50 € → 1 kg = 2,50 € → 5 kg = 12,50 €`,
      },
      {
        q: 'Fehlende Werte in Tabelle: direkte Proportionalität',
        a: `<strong>Verhältnisgleichung aufstellen.</strong>
<f>x₁ / y₁ = x₂ / y₂</f>
oder: y₂ = y₁ · (x₂ / x₁)<br>
Alternativ: k = y/x bestimmen und anwenden.`,
      },
    ],
  },

  {
    id: 'sec-viereck',
    label: 'Vierecke & Flächenberechnung',
    color: '#d4a017',
    cardColor: '#3d2800',
    cards: [
      {
        q: 'Umfang von Rechteck, Quadrat, Parallelogramm',
        a: `<strong>Rechteck:</strong> <f>U = 2·(a + b)</f>
<strong>Quadrat:</strong> <f>U = 4·a</f>
<strong>Parallelogramm:</strong> <f>U = 2·(a + b)</f>`,
      },
      {
        q: 'Umfang von Raute, Deltoid, Trapez',
        a: `<strong>Raute:</strong> <f>U = 4·a</f>
<strong>Deltoid:</strong> <f>U = 2·(a + b)</f>
<strong>Trapez:</strong> <f>U = a + b + c + d</f>
(alle vier Seiten addieren)`,
      },
      {
        q: 'Wie berechnet man die Fläche einer Raute?',
        a: `<strong>Zwei Methoden:</strong>
<strong>1. Diagonalen:</strong> <f>A = (e · f) / 2</f>
<strong>2. Basis × Höhe:</strong> <f>A = a · h</f>
e, f = Diagonalen; a = Seite; h = Höhe`,
      },
      {
        q: 'Wie berechnet man die Fläche eines Deltoids?',
        a: `<strong>Deltoid (Drachenviereck):</strong>
Die Diagonalen stehen senkrecht aufeinander.<br>
<f>A = (e · f) / 2</f>
e, f = die beiden Diagonalen`,
      },
      {
        q: 'Wie berechnet man die Fläche eines Trapez?',
        a: `<strong>Trapez (a ∥ c):</strong>
<f>A = (a + c) / 2 · h</f>
a, c = parallele Grundlinien<br>
h = senkrechter Abstand zwischen a und c`,
      },
      {
        q: 'Wie leitet man die Formel für Raute/Deltoid her?',
        a: `<strong>Zerlegung in Dreiecke!</strong>
Durch beide Diagonalen in 4 Dreiecke zerlegen.<br>
Jedes Dreieck: ½ · (e/2) · (f/2) — × 4 ergibt:<br>
<f>A = e·f / 2</f>`,
      },
      {
        q: 'Wie leitet man die Trapezformel her?',
        a: `<strong>Ergänzung zum Parallelogramm:</strong>
Zwei gleiche Trapeze zusammenlegen → Parallelogramm.<br>
Parallelogramm: A = (a+c) · h — Trapez = Hälfte:<br>
<f>A = (a + c) / 2 · h</f>`,
      },
      {
        q: 'Umkehraufgabe: Seite/Höhe aus Flächeninhalt berechnen',
        a: `<strong>Formel nach der gesuchten Größe umformen.</strong>
Beispiel Trapez, h gesucht:<br>
A = (a+c)/2 · h &nbsp;|&nbsp; :(a+c)/2<br>
<f>h = 2·A / (a + c)</f>`,
      },
      {
        q: 'Spezielle Trapeze – was muss ich wissen?',
        a: `<strong>Gleichschenkliges Trapez:</strong> c = d (Schenkel gleich lang)<br>
Basiswinkel sind jeweils gleich.<br>
<strong>Winkelsumme im Trapez:</strong>
<f>α + β + γ + δ = 360°</f>`,
      },
      {
        q: 'Zusammengesetzte Figuren – Fläche berechnen',
        a: `<strong>Zwei Methoden:</strong>
<strong>Aufteilen + Addieren:</strong> Figur in Teilflächen zerlegen → addieren.<br>
<strong>Ergänzen − Subtrahieren:</strong> Ergänzen und Teilfläche abziehen.<br>
Je nach Figur die passende Methode wählen!`,
      },
    ],
  },
];


// ─── Exercise groups ─────────────────────────────────────────────────────────
//
// Trapez formula: A = (a + c) / 2 * h
// Rearrangements:
//   h = 2·A / (a+c)
//   c = 2·A / h − a
//   a = 2·A / h − c

const EXERCISE_GROUPS = [
  {
    id: 'ex-group-A',
    label: 'A berechnen – Fläche',
    color: '#e8522a',
    exercises: [
      {
        find: 'A', a: 10, c: 3, h: 5, A: 32.5, unit: 'cm²',
        label: 'Fläche berechnen',
        steps: [
          'Formel: <sf>A = (a + c) / 2 · h</sf>',
          'Einsetzen: <sf>A = (10 + 3) / 2 · 5 = 6,5 · 5 = 32,5 cm²</sf>',
        ],
      },
      {
        find: 'A', a: 9, c: 5, h: 4, A: 28, unit: 'cm²',
        label: 'Fläche berechnen',
        steps: ['<sf>A = (9 + 5) / 2 · 4 = 7 · 4 = 28 cm²</sf>'],
      },
      {
        find: 'A', a: 12, c: 6, h: 7, A: 63, unit: 'cm²',
        label: 'Fläche berechnen',
        steps: ['<sf>A = (12 + 6) / 2 · 7 = 9 · 7 = 63 cm²</sf>'],
      },
      {
        find: 'A', a: 15, c: 7, h: 6, A: 66, unit: 'cm²',
        label: 'Fläche berechnen',
        steps: ['<sf>A = (15 + 7) / 2 · 6 = 11 · 6 = 66 cm²</sf>'],
      },
    ],
  },

  {
    id: 'ex-group-h',
    label: 'h berechnen – Höhe',
    color: '#4a9b6f',
    exercises: [
      {
        find: 'h', a: 8, c: 5, A: 91, h: 14, unit: 'cm',
        label: 'Höhe berechnen',
        steps: [
          'Formel umstellen: <sf>h = 2 · A / (a + c)</sf>',
          'Einsetzen: <sf>h = 2 · 91 / (8 + 5) = 182 / 13 = 14 cm</sf>',
        ],
      },
      {
        find: 'h', a: 9, c: 3, A: 30, h: 5, unit: 'cm',
        label: 'Höhe berechnen',
        steps: ['<sf>h = 2 · 30 / (9 + 3) = 60 / 12 = 5 cm</sf>'],
      },
      {
        find: 'h', a: 10, c: 4, A: 49, h: 7, unit: 'cm',
        label: 'Höhe berechnen',
        steps: ['<sf>h = 2 · 49 / (10 + 4) = 98 / 14 = 7 cm</sf>'],
      },
      {
        find: 'h', a: 14, c: 6, A: 80, h: 8, unit: 'cm',
        label: 'Höhe berechnen',
        steps: ['<sf>h = 2 · 80 / (14 + 6) = 160 / 20 = 8 cm</sf>'],
      },
    ],
  },

  {
    id: 'ex-group-c',
    label: 'c berechnen – Obere Grundlinie',
    color: '#9b4a8c',
    exercises: [
      {
        find: 'c', a: 9, h: 4, A: 30, c: 6, unit: 'cm',
        label: 'Obere Grundlinie berechnen',
        steps: [
          'Formel umstellen: <sf>c = 2 · A / h − a</sf>',
          'Einsetzen: <sf>c = 2 · 30 / 4 − 9 = 15 − 9 = 6 cm</sf>',
        ],
      },
      {
        find: 'c', a: 12, h: 5, A: 55, c: 10, unit: 'cm',
        label: 'Obere Grundlinie berechnen',
        steps: ['<sf>c = 2 · 55 / 5 − 12 = 22 − 12 = 10 cm</sf>'],
      },
      {
        find: 'c', a: 10, h: 6, A: 48, c: 6, unit: 'cm',
        label: 'Obere Grundlinie berechnen',
        steps: ['<sf>c = 2 · 48 / 6 − 10 = 16 − 10 = 6 cm</sf>'],
      },
      {
        find: 'c', a: 8, h: 3, A: 21, c: 6, unit: 'cm',
        label: 'Obere Grundlinie berechnen',
        steps: ['<sf>c = 2 · 21 / 3 − 8 = 14 − 8 = 6 cm</sf>'],
      },
    ],
  },

  {
    id: 'ex-group-a',
    label: 'a berechnen – Untere Grundlinie',
    color: '#d4a017',
    exercises: [
      {
        find: 'a', c: 3, h: 5, A: 32.5, a: 10, unit: 'cm',
        label: 'Untere Grundlinie berechnen',
        steps: [
          'Formel umstellen: <sf>a = 2 · A / h − c</sf>',
          'Einsetzen: <sf>a = 2 · 32,5 / 5 − 3 = 13 − 3 = 10 cm</sf>',
        ],
      },
      {
        find: 'a', c: 4, h: 8, A: 60, a: 11, unit: 'cm',
        label: 'Untere Grundlinie berechnen',
        steps: ['<sf>a = 2 · 60 / 8 − 4 = 15 − 4 = 11 cm</sf>'],
      },
      {
        find: 'a', c: 5, h: 6, A: 57, a: 14, unit: 'cm',
        label: 'Untere Grundlinie berechnen',
        steps: ['<sf>a = 2 · 57 / 6 − 5 = 19 − 5 = 14 cm</sf>'],
      },
      {
        find: 'a', c: 6, h: 4, A: 34, a: 11, unit: 'cm',
        label: 'Untere Grundlinie berechnen',
        steps: ['<sf>a = 2 · 34 / 4 − 6 = 17 − 6 = 11 cm</sf>'],
      },
    ],
  },
];
