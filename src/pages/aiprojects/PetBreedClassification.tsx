import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";

/**
 * Optional assets (add later when ready)
 * You can plug these in gradually without breaking layout
 */
// import datasetSample from "@/assets/ai/pets/sample-grid.png";
// import cnnCurve from "@/assets/ai/pets/cnn-training.png";
// import mobilenetCurve from "@/assets/ai/pets/mobilenet-training.png";
// import confusionMatrix from "@/assets/ai/pets/confusion-dogs.png";

export default function PetBreedClassification() {
  return (
    <div className="min-h-screen bg-dark-space text-foreground">
      <Navigation />
      <div className="container mx-auto px-6 py-20 animate-fade-in">
        {/* Back */}
        <Link to="/portfolio/ai">
          <Button
            variant="outline"
            className="mb-8 hover:bg-secondary/100 hover:border-secondary glow-blue hover-scale font-heading px-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to AI Projects
          </Button>
        </Link>

        {/* Title */}
        <h1 className="font-heading text-5xl md:text-6xl font-black text-neon-green mb-6">
          Pet Breed Image Classification
        </h1>

        <p className="text-muted-foreground max-w-3xl mb-12">
          A deep learning project exploring fine-grained pet breed classification
          using custom convolutional neural networks and transfer learning with
          MobileNetV2 on the Oxford-IIIT Pet Dataset.
        </p>

        {/* Project Context */}
        <div className="mb-12 space-y-4">
          <p className="font-heading text-lg">
            <span className="font-medium">Focus:</span>{" "}
            <span className="text-neon-green">
              Image Classification · Deep Learning
            </span>
          </p>

          <p className="font-heading text-lg">
            <span className="font-medium">Tech Stack:</span>{" "}
            <span className="text-neon-green">
              Python · TensorFlow · Keras · CNNs · Transfer Learning
            </span>
          </p>

          <p className="font-heading text-lg">
            <span className="font-medium">Status:</span>{" "}
            <span className="text-neon-green">Completed</span>
          </p>
        </div>

        {/* Dataset */}
        <section className="mb-16">
          <h2 className="font-heading text-2xl mb-4">Dataset</h2>

          <p className="text-muted-foreground max-w-3xl mb-4">
            The project uses the Oxford-IIIT Pet Dataset, a widely-used benchmark
            dataset for fine-grained image classification.
          </p>

          <ul className="space-y-2 text-muted-foreground">
            <li>▹ 37 total pet breeds (25 dogs, 12 cats)</li>
            <li>▹ High variation in pose, lighting, and background</li>
            <li>▹ Used for both binary and multi-class classification</li>
          </ul>

          {/* Optional visual slot */}
          <div className="mt-6 text-sm text-muted-foreground italic">
            Dataset sample grid (cats & dogs)
          </div>
        </section>

        {/* Models */}
        <section className="mb-16">
          <h2 className="font-heading text-2xl mb-4">Models Implemented</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-heading text-xl text-primary mb-2">
                Custom CNN (From Scratch)
              </h3>
              <p className="text-muted-foreground">
                A baseline convolutional neural network built from scratch using
                Keras. Designed to establish foundational performance on binary
                classification (Cat vs Dog) and analyse training behaviour.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-xl text-primary mb-2">
                MobileNetV2 (Transfer Learning)
              </h3>
              <p className="text-muted-foreground">
                Pretrained MobileNetV2 models were fine-tuned for multi-class pet
                breed classification. The convolutional base was frozen, with a
                custom classification head added for each task.
              </p>

              <ul className="mt-3 space-y-1 text-muted-foreground">
                <li>▹ 12-class Cat Breed Classifier</li>
                <li>▹ 25-class Dog Breed Classifier</li>
                <li>▹ 37-class Combined Breed Classifier</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CNN vs Transfer Learning */}
        <section className="mb-16">
          <h2 className="font-heading text-2xl mb-4">
            CNN vs Transfer Learning
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-border text-left text-sm">
              <thead className="bg-dark-surface">
                <tr>
                  <th className="p-3">Aspect</th>
                  <th className="p-3">Custom CNN</th>
                  <th className="p-3">MobileNetV2</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr>
                  <td className="p-3">Training</td>
                  <td className="p-3">From scratch</td>
                  <td className="p-3">Transfer learning</td>
                </tr>
                <tr>
                  <td className="p-3">Accuracy</td>
                  <td className="p-3">~79%</td>
                  <td className="p-3">91–99%</td>
                </tr>
                <tr>
                  <td className="p-3">Generalisation</td>
                  <td className="p-3">Moderate</td>
                  <td className="p-3">Strong</td>
                </tr>
                <tr>
                  <td className="p-3">Use case</td>
                  <td className="p-3">Baseline learning</td>
                  <td className="p-3">Production-ready</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Results */}
        <section className="mb-16">
          <h2 className="font-heading text-2xl mb-4">
            Results & Evaluation
          </h2>

          <ul className="space-y-3 text-muted-foreground max-w-3xl">
            <li>
              ▹ Transfer learning significantly outperformed the custom CNN across
              all classification tasks.
            </li>
            <li>
              ▹ The 25-class dog breed classifier achieved the best balance of
              accuracy and generalisation.
            </li>
            <li>
              ▹ Species-specific models performed better than a single unified
              classifier.
            </li>
          </ul>

          <div className="mt-6 text-sm text-muted-foreground italic">
            Confusion matrix & training curves
          </div>
        </section>

        {/* Key Learnings */}
        <section className="mb-16">
          <h2 className="font-heading text-2xl mb-4">Key Learnings</h2>

          <ul className="space-y-3 text-muted-foreground max-w-3xl">
            <li>▹ Transfer learning dramatically improves convergence speed</li>
            <li>▹ Data augmentation improves robustness but not class imbalance</li>
            <li>▹ Fine-grained classification benefits from task-specific models</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
