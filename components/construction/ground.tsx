"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

const steps = [
    {
        id: 1,
        title: "Set up",
        description:
            "Sync drawings from Procore, Autodesk, Egnyte, Drive or Dropbox in minutes.",
        image: "g1.webp",
    },
    {
        id: 2,
        title: "Plan",
        description: "Create a clear execution plan directly on site.",
        image: "g2.webp",
    },
    {
        id: 3,
        title: "Capture",
        description: "Capture progress with 360° images and notes.",
        image: "g3.webp",
    },
    {
        id: 4,
        title: "Upload",
        description: "Upload and sync data automatically to the cloud.",
        image: "g4.webp",
    },
];

export default function GroundAerialSteps() {
    const [activeStep, setActiveStep] = useState(1);
    const current = steps.find((s) => s.id === activeStep);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-10 items-center p-4 md:px-36 pb-8">
            <div className="">
                {steps.map((step) => (
                    <Button
                        key={step.id}
                        onClick={() => setActiveStep(step.id)}
                        variant={"ghost"}
                        className={clsx(
                            "w-full justify-start rounded-none text-left h-auto p-6 border border-border",
                            activeStep === step.id
                                ? "border-l-blue-600 border-l-4 bg-secondary"
                                : "hover:border-muted"
                        )}
                    >
                        <div>
                            <p className="text-xs text-blue-600 font-medium">
                                {String(step.id).padStart(2, "0")}
                            </p>
                            <h3 className="text-lg font-semibold">{step.title}</h3>

                            {activeStep === step.id && (
                                <span className="text-sm text-muted-foreground mt-2 text-wrap">
                                    {step.description}
                                </span>
                            )}
                        </div>
                    </Button>
                ))}
            </div>

            <div className="relative w-full h-100  overflow-hidden">
                {current && (
                    <img
                        src={current.image}
                        alt={current.title}
                        className="object-cover h-full transition-all duration-500"
                    />
                )}
            </div>
        </div>
    );
}
