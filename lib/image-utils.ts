// lib/image-utils.ts
/**
 * Fonctions utilitaires pour le traitement des images
 */

/**
 * Convertit une chaîne base64 au format approprié pour l'API Bedrock
 * @param base64Image Image encodée en base64
 * @param mediaType Type MIME de l'image (par défaut: image/jpeg)
 * @returns Objet image au format attendu par l'API Claude
 */
export function prepareImageForAPI(
  base64Image: string,
  mediaType: string = "image/jpeg"
) {
  return {
    type: "image",
    source: {
      type: "base64",
      media_type: mediaType,
      data: base64Image,
    },
  };
}

/**
 * Nettoie et optimise le contenu extrait des images
 * @param content Contenu extrait de l'image
 * @returns Contenu nettoyé
 */
export function cleanExtractedContent(content: string): string {
  // Supprimer les mentions explicites d'OCR
  let cleaned = content.replace(
    /je vais extraire le contenu|voici le contenu extrait|j'ai extrait|extraction ocr/gi,
    ""
  );

  // Normaliser les formules mathématiques
  cleaned = cleaned.replace(
    /\$\$(.*?)\$\$/g,
    (_, formula) => `$$${formula.trim()}$$`
  );
  cleaned = cleaned.replace(
    /\$(.*?)\$/g,
    (_, formula) => `$${formula.trim()}$`
  );

  // Normaliser les espaces et sauts de ligne
  cleaned = cleaned.replace(/\n{3,}/g, "\n\n");
  cleaned = cleaned.trim();

  return cleaned;
}

/**
 * Sépare l'énoncé et la correction à partir du contenu extrait
 * @param extractedContent Contenu extrait complet
 * @returns Objet contenant l'énoncé et la correction
 */
export function separateContent(extractedContent: string): {
  exercise: string;
  correction: string;
} {
  const parts = extractedContent.split(/correction:|solution:|résolution:/i);

  if (parts.length > 1) {
    return {
      exercise: parts[0].trim(),
      correction: parts[1].trim(),
    };
  }

  // Si le séparateur n'est pas trouvé, essayer de diviser intelligemment
  const lines = extractedContent.split("\n");
  const midpoint = Math.floor(lines.length / 2);

  return {
    exercise: lines.slice(0, midpoint).join("\n").trim(),
    correction: lines.slice(midpoint).join("\n").trim(),
  };
}
