/* eslint-disable @typescript-eslint/no-explicit-any */

// app/api/math-helper/route.ts
import { NextRequest, NextResponse } from "next/server";
import {
  BedrockRuntimeClient,
  ConverseCommand,
} from "@aws-sdk/client-bedrock-runtime";
import { courseContent, courseSecondCourse } from "./data";

export async function POST(request: NextRequest) {
  try {
    console.log("Démarrage de la requête API math-helper");

    const { exerciseImage, correctionImage, question } = await request.json();

    if (!exerciseImage || !correctionImage || !question) {
      return NextResponse.json(
        { error: "Paramètres requis manquants" },
        { status: 400 }
      );
    }

    console.log("Extraction du contenu des images...");

    // 1. Appeler la route d'extraction d'image pour obtenir le contenu des images
    const extractionResponse = await fetch(
      new URL("/api/image-extraction", request.url),
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          exerciseImage,
          correctionImage,
        }),
      }
    );

    if (!extractionResponse.ok) {
      const error = await extractionResponse.json();
      throw new Error(`Erreur lors de l'extraction des images: ${error.error}`);
    }

    const { exerciseContent, correctionContent } =
      await extractionResponse.json();

    console.log("Contenu extrait avec succès");

    // 2. Créer le client Bedrock pour l'analyse
    console.log("Analyse de la question avec le contenu extrait");
    const client = new BedrockRuntimeClient({
      region: process.env.AWS_REGION as string,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
      },
    });

    // Format the prompt with the extracted content and student's question
    const formattedPrompt = `Vous êtes un assistant spécialisé dans le tutorat en mathématiques, conçu pour aider les élèves à comprendre leurs exercices de mathématiques et leurs corrections.

Voici le contenu du cours sur les primitives et équations différentielles sur lequel vous devez baser strictement vos réponses :
${courseContent}

Voici le contenu d'un second cours sur les matrices sur lequel vous devez baser strictement vos réponses :
${courseSecondCourse}

Votre tâche:
1. Examinez attentivement l'énoncé de l'exercice et sa correction qui ont été extraits des images.
2. Concentrez-vous sur la réponse à la question spécifique de l'élève concernant la correction.
3. Basez vos explications UNIQUEMENT sur le contenu du cours fourni ci-dessus et la logique mathématique visible dans les images.
4. Soyez précis, rigoureux et pédagogique dans vos explications.
5. Lorsque vous expliquez les étapes, soyez clair sur les principes mathématiques appliqués.

RÈGLES DE FORMATAGE IMPORTANTES:
- Vous avez la possibilité d'écrire vos formules mathématiques en LaTeX. 
- Vous DEVEZ TOUJOURS écrire les formules entre doubles dollars, comme ceci : $$ f(x) = \\log(x) + 2 $$. 
- N'utilisez JAMAIS de dollars simples, même pour les déclarations de variables.
- Variez votre formatage Markdown: utilisez des titres (##, ###), des listes (-, 1., 2.), des tableaux, des citations (>), du texte en **gras** et en *italique*, et des séparateurs (---).
- Organisez votre réponse en sections claires avec des titres appropriés.
- Utilisez des listes à puces pour les étapes ou les explications séquentielles.
- Utilisez des citations pour mettre en évidence des points importants ou des définitions du cours.

Ne faites pas d'hypothèses au-delà de ce qui est visible dans le contenu du cours fourni et des images. Si des informations sont manquantes, dites-le.

Voici l'énoncé de l'exercice qui a été extrait:
${exerciseContent}

Voici la correction de l'exercice qui a été extraite:
${correctionContent}

La question de l'élève est: ${question}

Veuillez analyser le contenu extrait et aider l'élève à comprendre le raisonnement mathématique.`;

    // Formater les messages
    const messages = [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: formattedPrompt,
          },
        ],
      },
    ];

    // Always use reasoning mode but without streaming
    const reasoningConfig = {
      thinking: {
        type: "enabled",
        budget_tokens: 2000,
      },
    };

    console.log("Préparation de la commande ConverseCommand");

    // Sans le paramètre system cette fois
    const command = new ConverseCommand({
      modelId: "eu.anthropic.claude-3-7-sonnet-20250219-v1:0",
      messages: messages as any,
      additionalModelRequestFields: reasoningConfig,
    });

    console.log("Envoi de la commande à AWS Bedrock");

    const response = await client.send(command);
    console.log("Réponse reçue de AWS Bedrock");

    // Extract content from response (pas besoin du raisonnement)
    let content = "";

    if (response.output?.message?.content) {
      console.log("Extraction du contenu de la réponse");
      for (const block of response.output.message.content) {
        if ("text" in block) {
          content = block.text || "";
        }
      }
    } else {
      console.log(
        "Structure de la réponse:",
        JSON.stringify(response, null, 2)
      );
    }

    // Return the JSON response
    return NextResponse.json({
      content: content,
    });
  } catch (error) {
    console.error("Erreur:", error);
    console.error(
      "Message d'erreur:",
      error instanceof Error ? error.message : "Erreur non standard"
    );
    console.error(
      "Stack trace:",
      error instanceof Error ? error.stack : "Non disponible"
    );

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
