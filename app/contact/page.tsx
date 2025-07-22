"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    reset();
    alert("Message sent successfully!");
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[500px] w-full">
        <Image
          src="/images/contact-hero.jpg"
          alt="Contact Hero"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-green-800/50 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-4xl font-bold mb-3">Get in Touch</h1>
            <p className="text-lg max-w-2xl mx-auto">
              We’d love to hear from you. Reach out with any questions or
              feedback.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 p-10 max-w-6xl mx-auto">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-green-800">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <Input
                placeholder="Full Name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <p className="text-red-600 text-sm mt-1">
                  Full name is required.
                </p>
              )}
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email Address"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">Email is required.</p>
              )}
            </div>
            <div>
              <Input
                placeholder="Subject"
                {...register("subject", { required: true })}
              />
              {errors.subject && (
                <p className="text-red-600 text-sm mt-1">
                  Subject is required.
                </p>
              )}
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                rows={5}
                {...register("message", { required: true })}
              />
              {errors.message && (
                <p className="text-red-600 text-sm mt-1">
                  Message is required.
                </p>
              )}
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-green-800 hover:bg-green-700 text-white"
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </Button>
          </form>
        </div>

        {/* Info + Map Image */}
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-green-800">Call Us</h3>
            <p className="text-gray-700">321-466-5535</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-green-800">Email</h3>
            <p className="text-gray-700">shirleytortsen@outlook.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-green-800">Address</h3>
            <p className="text-gray-700">5 Main St, Titusville, FL 32796</p>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <div className="max-w-4xl mx-auto my-20 px-6">
        <h2 className="text-2xl font-bold mb-6 text-green-800">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold">
              What services does Finnery Nutritional Centre offer?
            </h4>
            <p className="text-gray-600">
              We offer personalized nutrition plans, healthy recipes, and
              wellness education tailored to your dietary needs and goals.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">
              How soon will I get a response after submitting the form?
            </h4>
            <p className="text-gray-600">
              We typically respond within 24–48 hours on business days.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">
              Can I schedule an appointment directly?
            </h4>
            <p className="text-gray-600">
              Yes! Use the contact form to let us know you’re interested in
              booking a consultation.
            </p>
          </div>
        </div>
      </div>

      {/* Embedded Map */}
      {/* //   <div className="mt-20 px-6 max-w-6xl mx-auto">
    //     <h3 className="text-lg font-semibold text-green-800 mb-3">Find Us on the Map</h3>
    //     <iframe
    //       src="https://www.google.com/maps?q=5+Main+St,+Titusville,+FL+32796&output=embed"
    //       className="w-full h-[300px] rounded-xl border"
    //       loading="lazy"
    //     ></iframe>
    //   </div> */}
    </main>
  );
}
