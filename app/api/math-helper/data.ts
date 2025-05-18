export const courseContent = `
# PRIMITIVES ET ÉQUATIONS DIFFÉRENTIELLES

Tout le cours sur les primitives en vidéo: https://youtu.be/tIm3DN63bxQ
Tout le cours sur les équations différentielles en vidéo: https://youtu.be/qHF5kIDFkW8

## Partie 1: Primitive d'une fonction

### 1) Définition et propriétés

Exemple:
On considère les fonctions f et F définies par: f(x) = 2x + 3 et F(x) = x² + 3x - 1
Si on dérive F, on constate que: F'(x) = 2x + 3 = f(x).
Lorsque F' = f, on dit que F est une primitive de f.

Définition: f est une fonction continue sur un intervalle I.
On appelle primitive de f, une fonction F, telle que: F' = f.

Remarque:
Dans ces conditions, dire que « F est une primitive de f »
revient à dire que « f est la dérivée de F ».

Méthode: Vérifier qu'une fonction est une primitive d'une autre fonction

Dans chaque cas, dire si F est une primitive de f.
a) F(x) = x²/2 et f(x) = x.
b) F(x) = e^x et f(x) = e^(x + 1).
c) F(x) = ln(x)/x et f(x) = -ln(x)/x².

Correction
a) F'(x) = 2x/2 = x = f(x)
Donc F est une primitive de f.

b) F'(x) = 1 × e^x + x × e^x = e^x(x + 1) = f(x)
Donc F est une primitive de f.

c) F'(x) = (1×x×1-ln(x)×1)/x² = (1-ln(x))/x² ≠ f(x)
Donc F n'est pas une primitive de f.

Propriété: Deux primitives d'une même fonction continue sur un intervalle diffèrent d'une constante.

Démonstration:
Soit F et G deux primitives de la fonction f sur I.
Alors: F'(x) = f(x) et G'(x) = f(x).
Donc: F'(x) = G'(x), soit F'(x) - G'(x) = 0, soit encore (F - G)'(x) = 0.
La fonction F - G possède une dérivée nulle sur I, elle est donc constante sur I.
On nomme C cette constante. Ainsi: F(x) - G(x) = C pour tout x de I.
On en déduit que les deux primitives de f diffèrent d'une constante.

Propriété: f est une fonction continue sur un intervalle I.
Si F est une primitive de f alors pour tout réel C, la fonction x ↦ F(x) + C est une primitive de f.

Démonstration:
F est une primitive de f.
On pose G(x) = F(x) + C.
G'(x) = F'(x) + 0 = F'(x) = f(x).
Donc G est une primitive de f.

Exemple:
On a vu dans la méthode précédente que F est une primitive de f avec:
F(x) = x²/2 et f(x) = x.
Donc, la fonction G définie par G(x) = x²/2 + 5 est également une primitive de f.
En effet: G'(x) = 2x/2 + 0 = x = f(x).

Propriété: Toute fonction continue sur un intervalle admet des primitives sur cet intervalle.

Remarque: Bien que l'existence étant assurée, la forme explicite d'une primitive n'est pas toujours connue. Par exemple, la fonction x ↦ e^(-x²) ne possède pas de primitive sous forme explicite.

Méthode: Recherche d'une primitive particulière

Soit la fonction f définie sur ℝ* par f(x) = e^(2x)(2x-1)/x².

a) Démontrer que la fonction F définie sur ℝ* par F(x) = e^(2x)/x est une primitive de f.
b) Déterminer la primitive G de la fonction f qui s'annule en x = 1.

Correction
1) F'(x) = (2e^(2x)×x-e^(2x))/x² = e^(2x)(2x-1)/x² = f(x).
Donc F' = f et donc la fonction F est une primitive de f.

2) On cherche la primitive de la fonction f qui s'annule en x = 1, soit: G(1) = 0.
Si G est une primitive de f alors: G(x) = F(x) + C, où C est un nombre réel.
Donc: G(1) = F(1) + C
Et donc: F(1) + C = 0
Soit: e^(2×1)/1 + C = 0
e² + C = 0
C = -e²
La primitive de la fonction f qui s'annule en x = 1 est G telle que:
G(x) = F(x) - e² = e^(2x)/x - e²

### 2) Primitives des fonctions usuelles

| Fonction f | Une primitive F |
|------------|----------------|
| a, a ∈ ℝ | ax |
| x^n avec n ∈ ℕ* | (1/(n+1))x^(n+1) |
| 1/x² | -1/x |
| 1/x Avec x > 0 | ln(x) |
| 1/√x | 2√x |
| e^x | e^x |

### 3) Linéarité des primitives

Propriété:
Si F est une primitive de f et G est une primitive de g alors:
- F + G est une primitive de f + g,
- kF est une primitive de kf, avec k réel.

Démonstrations:
- (F + G)' = F' + G' = f + g = a(f + g)
- (kF)' = kF' = k × af = a(kf)

### 4) Primitives de fonctions composées

u est une fonction dérivable sur un intervalle I.

| Fonction | Une primitive |
|----------|--------------|
| 2u'u | u² |
| u'e^u | e^u |
| u'/u avec u > 0 | ln(u) |

Méthode: Déterminer une primitive (1)

Dans chaque cas, déterminer une primitive F de la fonction f.
a) f(x) = x³ - 2
b) f(x) = 3x² - 3/x²
c) f(x) = 3/x sur ]0; +∞[
d) f(x) = 2/√x

Correction
a) F(x) = (1/4)x⁴ - 2x

b) f(x) = 3x² - 3/x² = 3x² - 3 × (1/x²) donc F(x) = x³ - 3 × (-1/x) = x³ + 3/x

c) f(x) = 3/x = 3 × 1/x
   F(x) = 3 ln(x)
Remarque: L'intervalle de recherche de la primitive est ]0; +∞[, car la fonction ln est définie pour des valeurs strictement positives.

d) f(x) = 2/√x = 2 × 1/√x
   F(x) = 2 × 2√x = 4√x

Méthode: Déterminer une primitive (2)

Dans chaque cas, déterminer une primitive F de la fonction f.
a) f(x) = (2x - 5)(x² - 5x + 4)
b) f(x) = xe^(x²)
c) f(x) = x²/(x³+1)

Correction
a) f(x) = (2x - 5)(x² - 5x + 4)
   = (1/2) × 2(2x - 5)(x² - 5x + 4) du type 2u'u
   En effet: u(x) = x² - 5x + 4 → u'(x) = 2x - 5.
   Une primitive de 2u'u est de la forme u².
   Soit: F(x) = (1/2)(x² - 5x + 4)²

b) f(x) = xe^(x²) = (1/2) × 2xe^(x²) du type u'e^u
   En effet: u(x) = x² → u'(x) = 2x.
   Une primitive de u'e^u est de la forme e^u.
   Soit: F(x) = (1/2)e^(x²)

c) f(x) = x²/(x³+1) = (1/3) × (3x²)/(x³+1) du type u'/u
   En effet: u(x) = x³ + 1 → u'(x) = 3x²
   Une primitive de u'/u est de la forme ln(u).
   Soit: F(x) = (1/3)ln(x³ + 1)

## Partie 2: Équations différentielles

### 1) Définition d'une équation différentielle

Définition: Une équation différentielle est une équation dont l'inconnue est une fonction et où interviennent des dérivées de cette fonction.

Exemples:
a) L'équation f'(x) = 5 est une équation différentielle.
   L'inconnue est la fonction f.
   En considérant que y est la fonction inconnue qui dépend de x, l'équation peut se noter:
   y' = 5

b) L'équation y' = 2x² - 3 est également une équation différentielle.
   L'inconnue est la fonction y dont la dérivée est égale à 2x² - 3.

### 2) Équation différentielle du type y' = f

Définition: Soit une fonction f définie sur un intervalle I.
La fonction g est une solution de l'équation différentielle y' = f si et seulement si g'(x) = f(x).

Propriété:
Dire que F est une primitive de f, revient à dire que F est une solution de l'équation différentielle y' = f.
En effet, F' = f.

Méthode: Vérifier qu'une fonction est solution d'une équation différentielle

Prouver que la fonction g définie sur ]0; +∞[ par g(x) = 3x² + ln x est solution de l'équation différentielle y' = 6x + 1/x.

Correction
g'(x) = 3 × 2x + 1/x = 6x + 1/x
Donc, g est solution de l'équation différentielle y' = 6x + 1/x.

### 3) Équations différentielles du type y' = ay

Propriété: Les solutions de l'équation différentielle y' = ay, a ∈ ℝ, sont les fonctions de la forme x ↦ Ce^(ax), où C est une constante réelle quelconque.

Démonstration:
- Soit la fonction f définie sur ℝ par f(x) = Ce^(ax), où C est un réel.
Alors, f'(x) = C × ae^(ax) = a × Ce^(ax) = af(x).
Donc f'(x) = af(x).
f est donc solution de l'équation différentielle y' = ay.

- Réciproquement, soit f une solution de l'équation différentielle y' = ay.
Et soit g la fonction définie sur ℝ par g(x) = e^(-ax) × f(x).
g est dérivable sur ℝ et on a: g'(x) = -ae^(-ax) × f(x) + e^(-ax) × f'(x).
Comme f est solution de l'équation différentielle y' = ay, on a: f'(x) = af(x).
Ainsi: g'(x) = -e^(-ax) × af(x) + e^(-ax) × af(x) = 0.
La fonction g est donc égale à une constante réelle C, soit:
e^(-ax) × f(x) = C.
Et donc: f(x) = C × (1/e^(-ax)) = Ce^(ax).

Méthode: Résoudre une équation différentielle du type y' = ay

On considère l'équation différentielle 3y' + 5y = 0.
1) a) Déterminer la forme générale des fonctions solutions de l'équation.
   b) Représenter à l'aide de la calculatrice ou d'un logiciel, quelques courbes des fonctions solutions.
2) Déterminer l'unique solution f telle que f(1) = 2.

Correction
1) a) 3y' + 5y = 0
      3y' = -5y
      y' = -(5/3)y
   Les solutions sont les fonctions de la forme: x ↦ Ce^(-(5/3)x), C ∈ ℝ.

b) Pour différentes valeurs de C, on obtient: [Graphique des courbes]

2) f est solution de l'équation différentielle, donc de la forme: f(x) = Ce^(-(5/3)x)
   Donc f(1) = Ce^(-(5/3)×1) = Ce^(-(5/3))
   Or, f(1) = 2.
   Donc: Ce^(-(5/3)) = 2
         C = 2/e^(-(5/3)) = 2e^(5/3)
   Et donc: f(x) = 2e^(5/3) e^(-(5/3)x) = 2e^((5/3)(1-x))

Propriété: Si f et g sont deux solutions de l'équation différentielle y' = ay, a ∈ ℝ,
alors f + g et kf, k ∈ ℝ, sont également solutions de l'équation différentielle.

Démonstrations:
- (f + g)' = f' + g' = af + ag = a(f + g)
- (kf)' = kf' = k × af = a(kf)

### 4) Équations différentielles du type y' = ay + b

Propriété: La fonction x ↦ -(b/a) est solution de l'équation différentielle
y' = ay + b (a ≠ 0). Cette solution est appelée solution particulière constante.

Démonstration:
On pose: g(x) = -(b/a). Alors g'(x) = 0.
Or, ag(x) + b = a × (-(b/a)) + b = -b + b = 0 = g'(x).
Donc: g'(x) = ag(x) + b.
g est donc solution de l'équation différentielle y' = ay + b.

Propriété: Les solutions de l'équation différentielle y' = ay + b (a ≠ 0) sont les fonctions
de la forme x ↦ Ce^(ax) - (b/a), où C ∈ ℝ.

Solutions de l'équation     Solution particulière
y' = ay                     constante de l'équation
                           y' = ay + b

Remarque: L'équation y' = ay + b est appelée équation différentielle linéaire du premier ordre à coefficients constants.

Méthode: Résoudre une équation différentielle du type y' = ay + b

On considère l'équation différentielle (E): 2y' - y = 3.
a) Déterminer une solution particulière constante de l'équation différentielle (E).
b) Déterminer la forme générale des solutions de l'équation différentielle y' = (1/2)y.
c) En déduire la forme générale des solutions de l'équation différentielle (E).
d) Déterminer l'unique solution f de (E) telle que f(0) = -1.

Correction
a) Modifions l'écriture de l'équation différentielle:
   2y' - y = 3
   2y' = y + 3
   y' = (1/2)y + (3/2)

   Une solution particulière constante est la fonction: x ↦ -3.
   En effet: -(b/a) = -(3/2)/(1/2) = -3.

b) Les solutions de l'équation différentielle y' = (1/2)y sont de la forme: x ↦ Ce^((1/2)x), C ∈ ℝ.

c) Les solutions de l'équation différentielle (E) sont de la forme:
   x ↦ Ce^((1/2)x) - 3, C ∈ ℝ

d) f est solution de l'équation différentielle, donc de la forme: f(x) = Ce^((1/2)x) - 3, C ∈ ℝ
   Donc f(0) = Ce^((1/2)×0) - 3 = C - 3
   Or, f(0) = -1
   Donc: C - 3 = -1
         C = 3 - 1
         C = 2
   Et donc: f(x) = 2e^((1/2)x) - 3
`;
