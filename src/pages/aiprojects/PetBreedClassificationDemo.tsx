import { Link } from "react-router-dom";
import { ArrowLeft, Upload, Image as ImageIcon } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";

// improt images
import bulldog1 from "@/assets/DogClassificationData/american_bulldog_13.jpg";
import bulldog2 from "@/assets/DogClassificationData/american_bulldog_102.jpg";
import pitbull1 from "@/assets/DogClassificationData/american_pit_bull_terrier_33.jpg";
import pitbull2 from "@/assets/DogClassificationData/american_pit_bull_terrier_166.jpg";
import beagle1 from "@/assets/DogClassificationData/beagle_118.jpg";
import beagle2 from "@/assets/DogClassificationData/beagle_178.jpg";



/* -----------------------------
   Demo Samples (UI Simulation)
-------------------------------- */
const DEMO_SAMPLES = [
  {
    id: "bulldog_1",
    src: bulldog1,
    predictions: [
      { label: "American Bulldog", score: 0.82 },
      { label: "American Pit Bull", score: 0.11 },
      { label: "Beagle", score: 0.07 },
    ],
  },
  {
    id: "bulldog_2",
    src: bulldog2,
    predictions: [
      { label: "American Bulldog", score: 0.89 },
      { label: "American Pit Bull", score: 0.10 },
      { label: "Beagle", score: 0.01 },
    ],
  },
  {
    id: "pitbull_1",
    src: pitbull1,
    predictions: [
      { label: "American Pit Bull", score: 0.74 },
      { label: "American Bulldog", score: 0.18 },
      { label: "Staffordshire Bull Terrier", score: 0.08 },
    ],
  },
  {
    id: "pitbull_2",
    src: pitbull2,
    predictions: [
      { label: "American Pit Bull", score: 0.81 },
      { label: "American Bulldog", score: 0.12 },
      { label: "Boxer", score: 0.07 },
    ],
  },
  {
    id: "beagle_1",
    src: beagle1,
    predictions: [
      { label: "Beagle", score: 0.76 },
      { label: "Basset Hound", score: 0.15 },
      { label: "American Bulldog", score: 0.09 },
    ],
  },
  {
    id: "beagle_2",
    src: beagle2,
    predictions: [
      { label: "Beagle", score: 0.84 },
      { label: "Basset Hound", score: 0.10 },
      { label: "Foxhound", score: 0.06 },
    ],
  },
];

export default function PetBreedDemo() {
  const [preview, setPreview] = useState<string | null>(null);
  const [selectedSample, setSelectedSample] =
    useState<(typeof DEMO_SAMPLES)[0] | null>(null);
  const [predictions, setPredictions] = useState<any[] | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  /* -----------------------------
     Upload handler (visual only)
  -------------------------------- */
  const handleImageUpload = (file: File) => {
    setPreview(URL.createObjectURL(file));
    setSelectedSample(null);
    setPredictions(null);
  };

  return (
    <div className="min-h-screen bg-dark-space text-foreground">
      <Navigation />

      <div className="container mx-auto px-6 py-20 animate-fade-in">
        {/* Back */}
        <Link to="/portfolio/ai">
          <Button
            variant="outline"
            className="mb-8 hover:bg-secondary hover:border-secondary glow-blue hover-scale font-heading px-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to AI Projects
          </Button>
        </Link>

        {/* Title */}
        <h1 className="font-heading text-5xl md:text-6xl font-black text-neon-green mb-4">
          Pet Breed Classification Demo
        </h1>

        <p className="text-muted-foreground max-w-3xl mb-12">
          Interactive UI demonstration of a MobileNetV2 dog breed classifier.
          Simulated inference is provided locally, while the full production
          model runs live on Hugging Face.
        </p>

        {/* Model Info */}
        <div className="mb-12 grid md:grid-cols-3 gap-6">
          <div className="bg-dark-surface border border-border rounded-lg p-6">
            <p className="font-heading text-sm text-muted-foreground mb-1">
              Model
            </p>
            <p className="text-neon-green font-heading">
              MobileNetV2 — 25 Dog Breeds
            </p>
          </div>

          <div className="bg-dark-surface border border-border rounded-lg p-6">
            <p className="font-heading text-sm text-muted-foreground mb-1">
              Input
            </p>
            <p className="text-neon-green font-heading">
              RGB Image (224×224)
            </p>
          </div>

          <div className="bg-dark-surface border border-border rounded-lg p-6">
            <p className="font-heading text-sm text-muted-foreground mb-1">
              Deployment
            </p>
            <p className="text-neon-green font-heading">
              Hugging Face · Gradio
            </p>
          </div>
        </div>

        {/* Upload + Preview */}
        <div className="mb-16 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-heading text-2xl mb-4">Upload Image</h2>

            <div
              className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition cursor-pointer"
              onClick={() =>
                document.getElementById("imageUpload")?.click()
              }
            >
              <input
                id="imageUpload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files?.[0]) {
                    handleImageUpload(e.target.files[0]);
                  }
                }}
              />

              <Upload className="mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">
                Click to upload or drag & drop an image
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-2xl mb-4">Preview</h2>

            <div className="bg-dark-surface border border-border rounded-lg h-72 flex items-center justify-center">
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="max-h-full rounded-lg"
                />
              ) : (
                <div className="text-muted-foreground flex flex-col items-center">
                  <ImageIcon className="mb-2" />
                  No image selected
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sample Gallery */}
        <h2 className="font-heading text-2xl mb-4">Try Sample Images</h2>
        <div className="grid grid-cols-3 gap-4 mb-10">
          {DEMO_SAMPLES.map((sample) => (
            <button
              key={sample.id}
              onClick={() => {
                setSelectedSample(sample);
                setPreview(sample.src);
                setPredictions(null);
              }}
              className={`border rounded-lg overflow-hidden transition ${
                selectedSample?.id === sample.id
                  ? "border-primary"
                  : "border-border hover:border-primary"
              }`}
            >
              <img src={sample.src} alt={sample.id} className="w-full h-24 object-cover" />
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-4 mb-12">
          <Button
            disabled={!selectedSample || isRunning}
            onClick={() => {
              if (!selectedSample) return;
              setIsRunning(true);

              setTimeout(() => {
                setPredictions(selectedSample.predictions);
                setIsRunning(false);
              }, 900);
            }}
            className="bg-secondary text-secondary-foreground border hover:bg-secondary/50 hover:border-secondary glow-blue hover-scale font-heading px-6 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-secondary disabled:hover:border-border"
          >
            {isRunning ? "Running inference..." : "Simulate Inference"} 
          </Button>

          <a
            href="https://huggingface.co/spaces/Fryo21/dog-breed-classifier"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-secondary text-secondary-foreground border hover:bg-secondary/50 hover:border-secondary glow-blue hover-scale font-heading px-6">
              Live Demo (Hugging Face)
            </Button>
          </a>
        </div>

        {/* Results */}
        <section>
          <h2 className="font-heading text-2xl mb-4">Predictions</h2>

          <div className="bg-dark-surface border border-border rounded-lg p-6 space-y-4">
            {predictions ? (
              predictions.map((pred) => (
                <div key={pred.label}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{pred.label}</span>
                    <span>{Math.round(pred.score * 100)}%</span>
                  </div>
                  <div className="w-full h-2 bg-border rounded">
                    <div
                      className="h-2 bg-primary rounded transition-all"
                      style={{ width: `${pred.score * 100}%` }}
                    />
                  </div>
                </div>
              ))
            ) : (
              <p className="text-muted-foreground italic">
                Select a sample and run simulated inference, or use the live demo
                for real predictions.
              </p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
