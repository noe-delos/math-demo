/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { ImageIcon, X, RefreshCw } from "lucide-react";
import { Icon } from "@iconify/react";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import "katex/dist/katex.min.css";

// UI Components (simplified references to shadcn)
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  // State for file uploads
  const [exerciseImage, setExerciseImage] = useState<File | null>(null);
  const [correctionImage, setCorrectionImage] = useState<File | null>(null);
  const [exercisePreview, setExercisePreview] = useState<string | null>(null);
  const [correctionPreview, setCorrectionPreview] = useState<string | null>(
    null
  );

  // State for question and response
  const [question, setQuestion] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // State for showing response (to handle animation)
  const [showResponse, setShowResponse] = useState<boolean>(false);

  // Handle exercise image upload
  const handleExerciseUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setExerciseImage(file);

      // Create preview URL
      const reader = new FileReader();
      reader.onload = () => {
        setExercisePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle correction image upload
  const handleCorrectionUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setCorrectionImage(file);

      // Create preview URL
      const reader = new FileReader();
      reader.onload = () => {
        setCorrectionPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Remove uploaded images
  const removeExerciseImage = () => {
    setExerciseImage(null);
    setExercisePreview(null);
  };

  const removeCorrectionImage = () => {
    setCorrectionImage(null);
    setCorrectionPreview(null);
  };

  // Clear response and return to question mode
  const resetResponse = () => {
    setShowResponse(false);
    setTimeout(() => {
      setResponse("");
    }, 300); // Delay to allow animation to complete
  };

  // Convert File to base64 string
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = reader.result as string;
        // Remove the data URL prefix (e.g., "data:image/jpeg;base64,")
        const base64 = base64String.split(",")[1];
        resolve(base64);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  // Submit the question and images to the API
  const handleSubmit = async () => {
    if (!exerciseImage || !correctionImage || !question.trim()) {
      setError("Veuillez télécharger les deux images et poser une question.");
      return;
    }

    setError(null);
    setIsLoading(true);
    setResponse("");

    try {
      // Prepare the images for sending
      const exerciseBase64 = await fileToBase64(exerciseImage);
      const correctionBase64 = await fileToBase64(correctionImage);

      // Send the request to our API
      const response = await fetch("/api/math-helper", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          exerciseImage: exerciseBase64,
          correctionImage: correctionBase64,
          question,
        }),
      });

      if (!response.ok) {
        throw new Error("Échec de la réponse de l'IA");
      }

      // Parse the JSON response
      const data = await response.json();
      setResponse(data.content || "");
      setShowResponse(true);
    } catch (err) {
      setError(
        (err as Error).message || "Une erreur inattendue s'est produite"
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Markdown renderer component with enhanced math support
  const MarkdownContent = ({ content }: { content: string }) => {
    const remarkMathOptions = {
      singleDollarTextMath: false, // Désactive les dollars simples, seuls les doubles dollars fonctionnent
    };

    return (
      <ReactMarkdown
        remarkPlugins={[remarkGfm, [remarkMath, remarkMathOptions]]}
        rehypePlugins={[rehypeKatex]}
        components={{
          table: ({ children }) => (
            <div className="overflow-x-auto">
              <table className="border-collapse border border-zinc-300 my-4">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => <thead>{children}</thead>,
          th: ({ children }) => (
            <th className="border border-zinc-300 px-4 py-2 bg-zinc-100">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border border-zinc-300 px-4 py-2">{children}</td>
          ),
          tr: ({ children }) => <tr>{children}</tr>,
          pre: ({ children }) => (
            <pre className="bg-zinc-100 rounded-lg p-4 overflow-x-auto">
              {children}
            </pre>
          ),
          code: ({ children, className }) => {
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <code className={className}>{children}</code>
            ) : (
              <code className="bg-zinc-100 text-zinc-800 px-1 py-0.5 rounded text-sm">
                {children}
              </code>
            );
          },
          h2: ({ children }) => (
            <h2 className="text-xl font-bold mt-6 mb-3 pb-1 border-b border-zinc-200">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-lg font-semibold mt-5 mb-2 text-[#472683]">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-base font-semibold mt-4 mb-1">{children}</h4>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-[#472683] pl-4 italic my-4 text-zinc-700 bg-zinc-50 py-1">
              {children}
            </blockquote>
          ),
          ul: ({ children }) => (
            <ul className="list-disc pl-6 my-4 space-y-2">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal pl-6 my-4 space-y-2">{children}</ol>
          ),
          li: ({ children }) => <li className="mb-1">{children}</li>,
          p: ({ children }) => (
            <p className="my-3 leading-relaxed">{children}</p>
          ),
          strong: ({ children }) => (
            <strong className="font-bold text-[#472683]">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic text-zinc-700">{children}</em>
          ),
          hr: () => <hr className="my-6 border-t border-zinc-200" />,
        }}
      >
        {content}
      </ReactMarkdown>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <header>
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <img
              src="https://masterclassprepa.com/wp-content/uploads/2025/03/LOGO.webp"
              alt="MasterClass Prépa Logo"
              className="h-12"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://media.licdn.com/dms/image/v2/C5603AQGT7D1Oticx3A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1622012859366?e=1753315200&v=beta&t=Fjyixaqie1xlXveb1zLFgopNekMpX3iSAUDWSXQkbJs"
              alt="Avatar d'utilisateur"
              className="w-10 h-10 rounded-full"
            />
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="border-none">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Assistant Mathématiques IA
            </CardTitle>
            <CardDescription className="text-zinc-400">
              Téléchargez votre exercice de mathématiques et sa correction, puis
              posez une question spécifique sur la solution.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {/* Upload Section */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 gap-1 flex items-center">
                    <Icon
                      icon="ion:book"
                      className="mr-2 h-5 w-5 text-[#472683]"
                    />
                    Énoncé de l'exercice
                  </h3>
                  {!exercisePreview ? (
                    <label htmlFor="exercise-upload">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="border-2 border-dashed border-gray-300 rounded-lg p-6 h-56 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition shadow-soft"
                      >
                        <ImageIcon className="h-8 w-8 text-gray-400 mb-2" />
                        <p className="text-sm text-gray-500">
                          Télécharger l'image de l'exercice
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          PNG, JPG ou GIF
                        </p>
                      </motion.div>
                      <input
                        id="exercise-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleExerciseUpload}
                      />
                    </label>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="relative rounded-lg overflow-hidden shadow-soft"
                    >
                      <div className="aspect-video relative">
                        <img
                          src={exercisePreview}
                          alt="Aperçu de l'exercice"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <Button
                        size="icon"
                        variant="destructive"
                        className="absolute top-2 right-2 w-6 h-6"
                        onClick={removeExerciseImage}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </motion.div>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-1">
                    <Icon
                      icon="fluent:clipboard-math-formula-16-filled"
                      className="mr-2 size-6 text-emerald-500"
                    />
                    Correction
                  </h3>
                  {!correctionPreview ? (
                    <label htmlFor="correction-upload">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="border-2 border-dashed border-gray-300 rounded-lg p-6 h-56 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition shadow-soft"
                      >
                        <ImageIcon className="h-8 w-8 text-gray-400 mb-2" />
                        <p className="text-sm text-gray-500">
                          Télécharger l'image de la correction
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          PNG, JPG ou GIF
                        </p>
                      </motion.div>
                      <input
                        id="correction-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleCorrectionUpload}
                      />
                    </label>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="relative rounded-lg overflow-hidden shadow-soft"
                    >
                      <div className="aspect-video relative">
                        <img
                          src={correctionPreview}
                          alt="Aperçu de la correction"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <Button
                        size="icon"
                        variant="destructive"
                        className="absolute top-2 right-2 w-6 h-6"
                        onClick={removeCorrectionImage}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Question Input/Response Display Area */}
              <div className="relative min-h-[300px]">
                <AnimatePresence mode="wait">
                  {!showResponse ? (
                    <motion.div
                      key="question-input"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-2"
                    >
                      <Label
                        htmlFor="question"
                        className="text-lg font-semibold flex items-center"
                      >
                        <Icon
                          icon="mingcute:question-fill"
                          className="mr-2 size-6 text-amber-600"
                        />
                        Votre Question
                      </Label>
                      <Textarea
                        id="question"
                        placeholder="Posez une question spécifique sur la correction (ex: 'Pourquoi utilise-t-on cette formule à l'étape 3 ?')"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        className="h-56 resize-none shadow-soft placeholder:text-zinc-300"
                        disabled={isLoading}
                      />

                      <div className="flex justify-end mt-2">
                        <Button
                          onClick={handleSubmit}
                          disabled={
                            isLoading ||
                            !exerciseImage ||
                            !correctionImage ||
                            !question.trim()
                          }
                          loading={isLoading}
                          className="px-6 py-5 bg-[#472683] text-white hover:bg-[#472683]/90 flex items-center gap-2"
                        >
                          {isLoading ? "Traitement en cours..." : "Envoyer"}
                          {!isLoading && <Icon icon="formkit:submit" />}
                        </Button>
                      </div>

                      {/* Error message */}
                      {error && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="mt-4 p-4 bg-red-50 text-red-600 rounded-md"
                        >
                          {error}
                        </motion.div>
                      )}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="response-display"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white rounded-lg shadow-soft p-4 relative min-h-[350px] max-h-[46.5rem] lg:max-h-[50rem] overflow-y-auto"
                    >
                      <Button
                        onClick={resetResponse}
                        className="absolute right-2 top-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-700"
                        size="sm"
                      >
                        <RefreshCw className="h-4 w-4 mr-1" />
                        Nouvelle question
                      </Button>

                      <div className="mt-8 pb-4">
                        {isLoading ? (
                          <ResponseSkeleton />
                        ) : (
                          <MarkdownContent content={response} />
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

// Loading skeleton component
function ResponseSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-[90%]" />
      <Skeleton className="h-4 w-[80%]" />
      <Skeleton className="h-4 w-[85%]" />
      <Skeleton className="h-4 w-[70%]" />
    </div>
  );
}
