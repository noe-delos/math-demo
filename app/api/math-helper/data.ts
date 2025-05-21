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

export const courseSecondCourse = `
Chapitre 4
Matrices

I - Notion de matrice et vocabulaire
Dans tout le chapitre n, p, q sont des entiers naturels non nuls.

Définition 1
Une matrice A à n lignes et p colonnes est un tableau défini par n × p éléments de ℝ notés a_{i,j} pour 1 ≤ i ≤ n et 1 ≤ j ≤ p avec ∀(i, j) ∈ [[1; n]] × [[1; p]], a_{i,j} ∈ ℝ.
Le nombre a_{i,j} est le coefficient d'indice (i, j) de la matrice A.
La matrice A est parfois dite de taille ou de format (n, p) ou tout simplement matrice n × p.
L'ensemble des matrices de taille (n, p) à coefficients dans ℝ est noté M_{n,p}(ℝ).

On présente généralement les matrices de cette manière :
j-ème colonne
↓
(a_{11} a_{12} ... a_{1j} ... a_{1p})
(a_{21} a_{22} ... a_{2j} ... a_{2p})
(  ⋮     ⋮           ⋮           ⋮  )
i-ème ligne → (a_{i1} a_{i2} ... a_{ij} ... a_{ip}) ∈ M_{n,p}(ℝ)
(  ⋮     ⋮           ⋮           ⋮  )
(a_{n1} a_{n2} ... a_{nj} ... a_{np})

Exercice 1
1. À quels ensembles appartiennent les matrices suivantes ?
   1) A = (1 2 3)
          (4 5 6)
          (7 8 9)
   
   2) B = (1  -1   e )
          (π  √2  0,2)
   
   3) Id₃ = (1 0 0)
             (0 1 0)
             (0 0 1)
   
   4) C = (1)
          (2)
          (3)
   
   5) D = (1  -2)
          (-2  4)
   
   6) E = (2 1)
          (0 0)
   
   7) 0₂,₃ = (0 0 0)
              (0 0 0)
   
   8) F = (3)

2. Écrire sous forme de tableau la matrice M = (i−j)_{1≤i≤3, 1≤j≤4}.

Définition 2
On adopte le vocabulaire suivant :
- M_n(ℝ) = M_{n,n}(ℝ) est l'ensemble des matrices carrées de taille n à coefficients dans ℝ.
- M_{1,p}(ℝ) est l'ensemble des matrices lignes de taille p à coefficients dans ℝ.
- M_{n,1}(ℝ) est l'ensemble des matrices colonnes de taille n à coefficients dans ℝ.
- A = (a_{i,j}) ∈ M_n(ℝ) est une matrice triangulaire supérieure si ∀(i, j) ∈ [[1; n]]², i > j ⟹ a_{i,j} = 0.
- A = (a_{i,j}) ∈ M_n(ℝ) est une matrice triangulaire inférieure si ∀(i, j) ∈ [[1; n]]², i < j ⟹ a_{i,j} = 0.
- A = (a_{i,j}) ∈ M_n(ℝ) est une matrice diagonale si ∀(i, j) ∈ [[1; n]]², i ≠ j ⟹ a_{i,j} = 0.
  On note parfois (a_{i,j}) = diag(a_{11}, ..., a_{nn}).
- A = (a_{i,j}) ∈ M_n(ℝ) est une matrice symétrique si ∀(i, j) ∈ [[1; n]]², a_{j,i} = a_{i,j}.
- 0_{n,p} ∈ M_{n,p}(ℝ) est la matrice nulle, dont tous les coefficients valent 0. On la note aussi 0.
- Id_n ∈ M_n(ℝ) est la matrice identité : diagonale, de taille n, dont les coefficients diagonaux valent 1.

Exercice 2
Pour n = 3, donner des exemples de matrices triangulaire supérieure (resp. inférieure), diagonale et symétrique.

II - Opérations de base sur les matrices

II.1 - Addition de matrices et multiplication d'un réel par une matrice

Définition 3
On définit les opérations suivantes sur l'ensemble M_{n,p}(ℝ) :
Addition : ∀A = (a_{i,j})_{1≤i≤n, 1≤j≤p} ∈ M_{n,p}(ℝ), ∀B = (b_{i,j})_{1≤i≤n, 1≤j≤p} ∈ M_{n,p}(ℝ), A+B = (a_{i,j}+b_{i,j})_{1≤i≤n, 1≤j≤p} ∈ M_{n,p}(ℝ).
Multiplication par un réel : ∀λ ∈ ℝ, ∀A = (a_{i,j})_{1≤i≤n, 1≤j≤p} ∈ M_{n,p}(ℝ), λA = (λa_{i,j})_{1≤i≤n, 1≤j≤p} ∈ M_{n,p}(ℝ).

Exercice 3
À partir des matrices de l'exercice 1, calculer E + D, 3B et A−3Id₃.

Remarque 1
⚠ Il est possible d'additionner deux matrices uniquement lorsqu'elles ont les mêmes dimensions.

II.2 - Multiplication matricielle

Définition 4
On définit le produit d'une matrice A de n lignes et p colonnes avec une matrice B de p lignes et q colonnes comme la matrice de n lignes et q colonnes suivante :

∀A = (a_{i,j})_{1≤i≤n, 1≤j≤p} ∈ M_{n,p}(ℝ), ∀B = (b_{k,j})_{1≤k≤p, 1≤j≤q} ∈ M_{p,q}(ℝ), AB = (∑_{k=1}^{p} a_{i,k}b_{k,j})_{1≤i≤n, 1≤j≤q} ∈ M_{n,q}(ℝ).

⚠ On ne peut calculer le produit AB que si le nombre de lignes de A égale le nombre de colonnes de B.

Remarque 2
En particulier le produit d'une matrice ligne ℓ = (ℓ_j)_{1≤j≤n} ∈ M_{1,n}(ℝ) et d'une matrice colonne c = (c_i)_{1≤i≤n} ∈ M_{n,1}(ℝ) est un nombre, égal à ℓ_1c_1 + ... + ℓ_nc_n.
Le coefficient (i, j) du produit AB est le produit de la i-ème ligne de A avec la j-ème colonne de B.

On peut disposer les calculs ainsi :
[Diagram showing matrix multiplication calculation]

Exercice 4
À partir des matrices de l'exemple 1, calculer les produits :
1. ED   2. DE   3. AId₃   4. AC   5. 0₂,₃A   6. EB   7. Que dire de BE ?

Proposition 1 :   Propriétés du produit
Le produit matriciel ...
1. est associatif : ∀A ∈ M_{n,p}(𝕂), ∀B ∈ M_{p,q}(𝕂), ∀C ∈ M_{q,r}(𝕂), (AB)C = A(BC).
2. est distributif à gauche par rapport à − : ∀A ∈ M_{n,p}(𝕂), ∀B, C ∈ M_{p,q}(𝕂), A(B + C) = AB + AC.
3. est distributif à droite par rapport à + : ∀A, B ∈ M_{n,p}(𝕂), ∀C ∈ M_{p,q}(𝕂), (A + B)C = AC + BC.
4. commute avec le produit externe : ∀λ ∈ 𝕂, ∀(A, B) ∈ M_{n,p}(𝕂) × M_{p,q}(𝕂), (λA)B = A(λB) = λ(AB).
5. vérifie ∀A ∈ M_{n,p}(𝕂), AId_p = A et Id_nA = A.
6. n'est pas commutatif.
7. ne vérifie pas la propriété du produit nul.

Exercice 5
Soit M = (-1 -3)
          ( 2  4). Vérifier que M² − 3M + 2Id₂ = 0₂,₂ puis factoriser l'expression de gauche dans l'égalité précédente.

III - Puissances de matrice

Définition 5
Soit k ∈ ℕ et soit A une matrice carrée de M_n(ℝ).
On appelle puissance k-ième de A, et on note A^k, la matrice A × ... × A (k fois).
Par convention A^0 = I_n.

Comme le produit matriciel ne commute pas en général, la puissance de matrice garde seulement certaines propriétés des réels :

Proposition 2
Soient (k, l, n) ∈ ℕ² et (A, B) ∈ (M_p(ℝ)²).
1. A^k A^l = A^{k+l}
2. (A^k)^l = A^{kl}
3. ⚠ Lorsque A et B commutent, on a :
   (a) (AB)^k = A^k B^k
   (b) (A−B)(A+B) = A² − B²
   (c) (A+B)² = A² + 2AB + B²
   (d) (A−B)² = A² − 2AB + B²
   (e) (A+B)^n = ∑_{i=0}^{n} binom(n,i) A^i B^{n-i}

Remarques 3
Deux exemples fondamentaux de matrices qui commutent.
- Pour tout A ∈ M_n(ℝ), pour tout λ ∈ ℝ : A et λI_n commutent.
- Pour toute matrice carrée A : toutes les puissances de A commutent entre elles.

Exercice 6
Calculer, si possible :
1. A² pour A = (1 1 2)
                 (2 1 0)

2. A², A³, B², AB, BA, A+B, (A+B)², A² + 2AB + B² pour A = (2 -1) et B = (3 -1)
                                                            (0  1)        (0  3)

3. M⁰, M¹, M², M³, M⁴, M^{100} pour M = (0 0 0 0)
                                          (1 0 0 0)
                                          (0 1 0 0)
                                          (0 0 1 0)

Remarque 4
Une application importante du calcul de puissances de matrices est l'étude des suites récurrentes (notamment les suites récurrentes couplées qui interviennent en probabilités).

IV - Inverse d'une matrice

Définition 6
Soit A ∈ M_n(ℝ) une matrice carrée. On appelle matrice inverse de A et on note A^{-1} ∈ M_n(ℝ) une matrice qui vérifie
AA^{-1} = Id_n = A^{-1}A

L'ensemble des matrices carrées de taille n à coefficients dans ℝ qui admettent une inverse est noté GL_n(ℝ).

Proposition 3
Soient A, B ∈ GL_n(ℝ).
1. A^{-1} est unique : si BA = Id_n ou AB = Id_n alors B = A^{-1}.
2. (A^{-1})^{-1} = A
3. ⚠ (AB)^{-1} = B^{-1}A^{-1}.

Exercice 7
1. Vérifier que B = (1   0  -1)
                    (1   1   1)
                    (-1/2 1/2 1)
                    (-1  0   2)
   est l'inverse de la matrice A = (2 0  1)
                                    (0 2 -1)
                                    (1 0  1).

2. Soit n ∈ ℕ. Montrer que si A² − A = I_n alors A est inversible, et préciser son inverse.

3. Soit n ∈ ℕ, λ ∈ ℝ*. Vérifier que λI_n est inversible, d'inverse (1/λ)I_n et que 0_n n'est pas inversible.

Remarque 5
Pour des matrices inversibles, les propriétés de calcul des puissances sont valables pour des puissances négatives.

Remarque 6
⚠ La somme de deux matrices inversibles n'est pas inversible en général. Par exemple I_n et −I_n sont inversibles mais I_n − I_n = 0_n ne l'est pas.

Exercice 8
1. Soit A ∈ GL_n(ℝ). Montrer que pour tout p ∈ ℕ, A^p est inversible et préciser son inverse.
2. Soit A ∈ M_p(ℝ) et P ∈ GL_p(ℝ). Simplifier (P^{-1}AP)², (P^{-1}AP)³.
   Conjecturer une formule pour (P^{-1}AP)^n valable pour n ∈ ℕ* et la prouver par récurrence. Est-elle encore valable pour n = 0 ?
   Si de plus A est inversible, vérifier que pour tout n ∈ ℕ, (P^{-1}AP)^n est inversible et préciser son inverse.
   Déduire que la formule démontrée est encore vraie pour les entiers négatifs.

En calcul matriciel, lorsqu'une matrice est inversible cela permet d'obtenir de nouvelles règles de calcul. On peut "simplifier" par cette matrice dans les égalités, comme on le fait dans ℝ à l'aide de la division. Cependant il ne faut pas oublier de tenir compte de la non commutativité des matrices.
Pour ne pas faire d'erreur, il faut multiplier, à gauche ou à droite, par l'inverse de la matrice. En conséquence :

Proposition 4
Soit C ∈ GL_n(ℝ), et A et B des matrices telles que les produits suivants aient un sens.

Simplification à gauche :  CA = B ⟹ A = C^{-1}B
                          CA = CB ⟹ A = B

Simplification à droite :  AC = B ⟹ A = BC^{-1}
                          AC = BC ⟹ A = B

Exercice 9
1. Soient A, B telles que AB = 0. Montrer que si A ≠ 0 et B ≠ 0 alors ni A ni B ne sont inversibles.
2. Soit B = (-1 1)
           ( 0 0) Calculer B² + B et déduire que B n'est pas inversible.

Proposition 5
Soit A = (a b)
         (c d), où a, b, c, d sont quatre nombres réels. Alors,

1. Si ad − bc = 0, A n'est pas inversible.
2. Si ad − bc ≠ 0, A est inversible et A^{-1} = (1/(ad−bc)) * (d  -b)
                                                             (-c   a).

Remarque 7
Le calcul explicite de l'inverse d'une matrice carrée de petite dimension (3 × 3, voire plus rarement 4×4), qui repose essentiellement sur une série de manipulations techniques, sera vu dans le chapitre consacré à la résolution de systèmes linéaires. Ceci signifie qu'une bonne partie des exercices sur les matrices n'est pas encore faisable.

V - Transposition et matrices symétriques

Soit A = (a_{i,j})_{1≤i≤n, 1≤j≤p} ∈ M_{n,p}(ℝ). La transposée de A est la matrice ᵗA = (a'_{i,j})_{1≤i≤p, 1≤j≤n} ∈ M_{p,n}(ℝ) où :

∀(i, j) ∈ [[1; p]] × [[1; n]], a'_{i,j} = a_{j,i}

La transposition est une opération qui échange les lignes et les colonnes d'une matrice.

Exercice 10
Calculer la transposée de chacune des matrices de l'exemple 1.

Proposition 6 :   Propriétés de la transposition
On a :
1. ∀A ∈ M_{n,p}(𝕂),   ᵗ(ᵗA) = A.
2. ⚠ ∀A ∈ M_{n,p}(𝕂), ∀B ∈ M_{p,q}(𝕂),   ᵗ(AB) = ᵗB ᵗA.
3. ∀λ ∈ ℝ, ∀A, B ∈ M_{n,p}(𝕂),   ᵗ(λA + B) = λ ᵗA + ᵗB.
4. ∀A ∈ GL_n(ℝ),   ᵗ(A^{-1}) = (ᵗA)^{-1}.
5. L'ensemble {A ∈ M_n(ℝ) : A = ᵗA} est l'ensemble des matrices symétriques d'ordre n (parfois noté S_n(ℝ)).

Exercice 11
Vérifier la deuxième formule sur les matrices B et E de l'exemple 1.
`;
