import { Link } from "react-router-dom";
import { ArrowLeft, Upload, Image as ImageIcon } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";

export default function PetBreedDemo() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageUpload = (file: File) => {
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="min-h-screen bg-dark-space text-foreground">
      <Navigation />

      <div className="container mx-auto px-6 py-20 animate-fade-in">
        {/* Back */}
        <Link to="/portfolio/ai">
          <Button
            variant="outline"
            className="mb-8 hover:border-primary hover:text-primary hover-scale font-heading"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to AI Projects
          </Button>
        </Link>

        {/* Title */}
        <h1 className="font-heading text-5xl md:text-6xl font-black text-neon-green mb-4">
          Live Pet Breed Classification Demo
        </h1>

        <p className="text-muted-foreground max-w-3xl mb-12">
          This demo showcases the inference pipeline for the deployed MobileNetV2-based
          dog breed classifier. Upload a pet image to see predicted breed probabilities.
        </p>

        {/* Model Info */}
        <div className="mb-12 grid md:grid-cols-3 gap-6">
          <div className="bg-dark-surface border border-border rounded-lg p-6">
            <p className="font-heading text-sm text-muted-foreground mb-1">
              Model
            </p>
            <p className="text-neon-green font-heading">
              MobileNetV2 — Dog Breeds (25 classes)
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
              Status
            </p>
            <p className="text-primary font-heading">
              UI Ready · Backend Pending
            </p>
          </div>
        </div>

        {/* Upload Area */}
        <div className="mb-16 grid md:grid-cols-2 gap-10 items-start">
          {/* Upload */}
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

          {/* Preview */}
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

        {/* Run Inference */}
        <div className="mb-16">
          <Button
            disabled
            className="bg-secondary text-secondary-foreground opacity-60 cursor-not-allowed font-heading px-8 py-6"
          >
            Run Inference (Backend Not Connected)
          </Button>
        </div>

        {/* Results */}
        <section>
          <h2 className="font-heading text-2xl mb-4">Predictions</h2>

          <div className="bg-dark-surface border border-border rounded-lg p-6 space-y-4">
            {[
              { label: "Golden Retriever", score: 0.62 },
              { label: "Labrador Retriever", score: 0.21 },
              { label: "German Shepherd", score: 0.09 },
            ].map((pred) => (
              <div key={pred.label}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{pred.label}</span>
                  <span>{Math.round(pred.score * 100)}%</span>
                </div>
                <div className="w-full h-2 bg-border rounded">
                  <div
                    className="h-2 bg-primary rounded"
                    style={{ width: `${pred.score * 100}%` }}
                  />
                </div>
              </div>
            ))}

            <p className="text-xs text-muted-foreground italic">
              Sample output shown for UI demonstration purposes.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
