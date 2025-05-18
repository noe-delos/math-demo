// app/api/image-extraction/route.ts
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

// Créer le client OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "your-openai-api-key",
});

export async function POST(request: NextRequest) {
  try {
    console.log("Démarrage de la requête d'extraction d'image avec GPT-4o");

    const { exerciseImage, correctionImage } = await request.json();

    if (!exerciseImage || !correctionImage) {
      return NextResponse.json(
        { error: "Les deux images sont requises" },
        { status: 400 }
      );
    }

    // Prompt pour l'extraction OCR des images avec support pour LaTeX
    const extractionPrompt =
      "Veuillez extraire tout le contenu textuel et mathématique de ces images. " +
      "Pour la première image (énoncé), transcrivez tout le texte et les équations mathématiques. " +
      "Pour la deuxième image (correction), détaillez chaque étape de la résolution mathématique. " +
      "IMPORTANT: Vous DEVEZ écrire toutes les expressions mathématiques en utilisant la syntaxe LaTeX " +
      "entre DOUBLES dollars uniquement, comme ceci: $$ f(x) = 2x + 3 $$. " +
      "N'utilisez JAMAIS de dollars simples, même pour les expressions en ligne. " +
      "Séparez clairement l'énoncé et la correction. " +
      "Assurez-vous de respecter toute la notation mathématique (indices, exposants, intégrales, etc.) en utilisant la syntaxe LaTeX appropriée.";

    console.log("Envoi de la requête d'extraction à OpenAI");

    // Préparer la requête pour OpenAI avec les deux images
    const response = await openai.responses.create({
      model: "gpt-4o",
      input: [
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text: extractionPrompt,
            },
            {
              type: "input_image",
              image_url: `data:image/jpeg;base64,${exerciseImage}`,
              detail: "high", // Demander une analyse détaillée
            },
            {
              type: "input_image",
              image_url: `data:image/jpeg;base64,${correctionImage}`,
              detail: "high", // Demander une analyse détaillée
            },
          ],
        },
      ],
    });

    console.log("Réponse d'extraction reçue de OpenAI");

    // Extraire le contenu de la réponse
    const extractedContent = response.output_text || "";

    // Séparer l'énoncé et la correction
    let exerciseContent = "";
    let correctionContent = "";

    // Essayer de diviser le contenu basé sur des marqueurs courants
    if (
      extractedContent.includes("Première image") &&
      extractedContent.includes("Deuxième image")
    ) {
      // Division basée sur "Première image" et "Deuxième image"
      const parts = extractedContent.split(
        /Deuxième image|Correction|Solution/i
      );
      exerciseContent = parts[0];
      correctionContent = parts.length > 1 ? parts[1] : "";
    } else if (
      extractedContent.includes("Pour la première image") &&
      extractedContent.includes("Pour la deuxième image")
    ) {
      // Division basée sur "Pour la première image" et "Pour la deuxième image"
      const parts = extractedContent.split("Pour la deuxième image");
      exerciseContent = parts[0];
      correctionContent =
        parts.length > 1 ? "Pour la deuxième image" + parts[1] : "";
    } else if (
      extractedContent.includes("Énoncé") &&
      extractedContent.includes("Correction")
    ) {
      // Division basée sur "Énoncé" et "Correction"
      const parts = extractedContent.split(/Correction|Solution/i);
      exerciseContent = parts[0];
      correctionContent = parts.length > 1 ? "Correction: " + parts[1] : "";
    } else {
      // Division basée sur la moitié du texte si aucun marqueur n'est trouvé
      const lines = extractedContent.split("\n");
      const midpoint = Math.floor(lines.length / 2);
      exerciseContent = lines.slice(0, midpoint).join("\n");
      correctionContent = lines.slice(midpoint).join("\n");
    }

    return NextResponse.json({
      exerciseContent: exerciseContent.trim(),
      correctionContent: correctionContent.trim(),
    });
  } catch (error) {
    console.error("Erreur lors de l'extraction d'image:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Une erreur inattendue s'est produite",
        details: error instanceof Error ? error.stack : JSON.stringify(error),
      },
      { status: 500 }
    );
  }
}
