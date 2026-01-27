import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";


import cat_distribution from "@/assets/PetClassificationData/Cat breed distribution.png";
import dog_distribution from "@/assets/PetClassificationData/Dog breed distribution.png";
import cat_dog_distribution from "@/assets/PetClassificationData/Cats vs Dog Distribution.png";
import class_distribution from "@/assets/PetClassificationData/class distribution.png";

import model1_training from "@/assets/PetClassificationData/Model 1 Training curve.png"
import model2_training from "@/assets/PetClassificationData/Model 2 Training curve.png";
import model3_training from "@/assets/PetClassificationData/Model 3 Training curve.png";
import model4_training from "@/assets/PetClassificationData/Model 4 Training curve.png";

import model1_ConfusionMatrix from "@/assets/PetClassificationData/model 1 Evaluation.png";
import model2_ConfusionMatrix from "@/assets/PetClassificationData/model 2 Evaluation.png";
import model3_ConfusionMatrix from "@/assets/PetClassificationData/model 3 Evaluation.png";
import model4_ConfusionMatrix from "@/assets/PetClassificationData/model 4 Evaluation.png";

import performance_metrics from "@/assets/PetClassificationData/Performance Metrics.png";


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

            {/* Dataset Visualisations */}
            <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div>
                <img src={cat_dog_distribution} alt="Cats vs Dogs Distribution" className="rounded-lg border border-border max-w-md mx-auto" />
                <p className="mt-2 text-sm text-muted-foreground italic text-center">
                Binary class distribution (Cats vs Dogs)
                </p>
            </div>

            <div>
                <img src={class_distribution} alt="All Breed Distribution" className="rounded-lg border border-border max-w-md mx-auto" />
                <p className="mt-2 text-sm text-muted-foreground italic text-center">
                Combined breed distribution (37 classes)
                </p>
            </div>

            <div>
                <img src={cat_distribution} alt="Cat Breed Distribution" className="rounded-lg border border-border max-w-md mx-auto" />
                <p className="mt-2 text-sm text-muted-foreground italic text-center">
                Cat breed class distribution (12 classes)
                </p>
            </div>

            <div>
                <img src={dog_distribution} alt="Dog Breed Distribution" className="rounded-lg border border-border max-w-md mx-auto" />
                <p className="mt-2 text-sm text-muted-foreground italic text-center">
                Dog breed class distribution (25 classes)
                </p>
            </div>
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
            {/* Training Curves */}
            <div className="mt-10 grid md:grid-cols-2 gap-8">
                <div>
                    <img src={model1_training} alt="Model 1 Training Curve" className="rounded-lg border border-border max-w-md mx-auto" />
                    <p className="mt-2 text-sm text-muted-foreground italic text-center">
                    Model 1 (Custom CNN) training & validation curves
                    </p>
                </div>
                <div>
                    <img src={model2_training} alt="Model 2 Training Curve" className="rounded-lg border border-border max-w-md mx-auto" />
                    <p className="mt-2 text-sm text-muted-foreground italic text-center">
                    Model 2 (Cat Breed Classifier – MobileNetV2)
                    </p>
                </div>
                <div>
                    <img src={model3_training} alt="Model 3 Training Curve" className="rounded-lg border border-border max-w-md mx-auto" />
                    <p className="mt-2 text-sm text-muted-foreground italic text-center">
                    Model 3 (Dog Breed Classifier – MobileNetV2)
                    </p>
                </div>
                <div>
                    <img src={model4_training} alt="Model 4 Training Curve" className="rounded-lg border border-border max-w-md mx-auto" />
                    <p className="mt-2 text-sm text-muted-foreground italic text-center">
                    Model 4 (All Breeds – 37 Classes)
                    </p>
                </div>
            </div>
          
        </section>
        

        {/* CNN vs Transfer Learning */}
        <section className="mb-16">
          <h2 className="font-heading text-2xl mb-4">
            CNN vs Transfer Learning
          </h2>

        <div className="overflow-x-auto rounded-lg border border-primary/40 glow-neon">
            <table className="w-full text-left text-sm">
              <thead className="bg-primary/10 text-primary font-heading">
                <tr>
                  <th className="p-3">Aspect</th>
                  <th className="p-3">Custom CNN</th>
                  <th className="p-3">MobileNetV2</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="hover:bg-primary/5 transition-colors">
                  <td className="p-3">Training</td>
                  <td className="p-3">From scratch</td>
                  <td className="p-3">Transfer learning</td>
                </tr>
                <tr className="hover:bg-primary/5 transition-colors">
                  <td className="p-3">Accuracy</td>
                  <td className="p-3">~79%</td>
                  <td className="p-3">91–99%</td>
                </tr>
                <tr className="hover:bg-primary/5 transition-colors">
                  <td className="p-3">Generalisation</td>
                  <td className="p-3">Moderate</td>
                  <td className="p-3">Strong</td>
                </tr>
                <tr className="hover:bg-primary/5 transition-colors">
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

          {/* Confusion Matrices */}
            <div className="mt-16">
            <h3 className="font-heading text-xl mb-6 text-primary">
                Confusion Matrices
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
                <div>
                <img src={model1_ConfusionMatrix} alt="Model 1 Confusion Matrix" className="rounded-lg border border-border max-w-md mx-auto" />
                <p className="mt-2 text-sm text-muted-foreground italic text-center">
                    Model 1 – Binary classification (Cat vs Dog)
                </p>
                </div>

                <div>
                <img src={model2_ConfusionMatrix} alt="Model 2 Confusion Matrix" className="rounded-lg border border-border max-w-md mx-auto" />
                <p className="mt-2 text-sm text-muted-foreground italic text-center">
                    Model 2 – Cat breed classification
                </p>
                </div>

                <div>
                <img src={model3_ConfusionMatrix} alt="Model 3 Confusion Matrix" className="rounded-lg border border-border max-w-md mx-auto" />
                <p className="mt-2 text-sm text-muted-foreground italic text-center">
                    Model 3 – Dog breed classification
                </p>
                </div>

                <div>
                <img src={model4_ConfusionMatrix} alt="Model 4 Confusion Matrix" className="rounded-lg border border-border max-w-md mx-auto" />
                <p className="mt-2 text-sm text-muted-foreground italic text-center">
                    Model 4 – All breeds (37 classes)
                </p>
                </div>
            </div>
            </div>
        </section>

        {/* Performance Summary */}
        <section className="mb-16">
        <h2 className="font-heading text-2xl mb-4">Performance Summary</h2>

        <img
            src={performance_metrics}
            alt="Model Performance Metrics"
            className="rounded-lg border border-border max-w-4xl"
        />

        <p className="mt-3 text-sm text-muted-foreground italic">
            Accuracy, precision, recall, and F1-score across all models
        </p>
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

        {/* Team */}
        <section className="mb-16">
        <h2 className="font-heading text-2xl mb-4">Project Team</h2>

        <ul className="space-y-2 text-muted-foreground">
            <li>▹ <strong>Francis Obiokala</strong> — Team Lead</li>
            <li>▹ Gbemileke Micah</li>
            <li>▹ Manan Gandhi</li>
            <li>▹ Munib Ur Rehman Malik</li>
        </ul>
        </section>

     {/* Project Actions */}
        <section className="mt-16">
            <h2 className="font-heading text-2xl mb-4">Project Access</h2>

            <p className="text-muted-foreground max-w-3xl mb-8">
                Explore the live inference demo or review the full implementation, training
                pipeline, and evaluation methodology in the project repository.
            </p>

            <p className="text-muted-foreground max-w-3xl mb-8">
                The live demo showcases the full deployment pipeline using the selected
                MobileNetV2-based dog breed classifier. Model weights can be swapped without
                architectural changes.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
                {/* Live Demo */}
                <Link to="/portfolio/ai/pet-breed-classification/demo">
                  <Button
                    className="bg-secondary text-secondary-foreground border hover:bg-secondary/50 hover:border-secondary glow-blue hover-scale font-heading px-6">
                    Live Demo
                </Button>
                </Link>

                {/* Documentation */}
                <a
                href="https://github.com/YOUR_GITHUB_REPO_LINK"
                target="_blank"
                rel="noopener noreferrer"
                >
                <Button
                className="bg-secondary text-secondary-foreground border hover:bg-secondary/50 hover:border-secondary glow-blue hover-scale font-heading px-6">
                    Documentation
                </Button>
                </a>
            </div>

        </section>


      </div>
    </div>
  );
}
