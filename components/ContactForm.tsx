"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "../utils/validations";
import type { z } from "zod";

// Types from zod schema
// import type { ContactFormSchema } from '../utils/validations'
type ContactFormSchema = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactFormSchema) => {
    // handle form submission
    console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-lg mx-auto p-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl space-y-6 text-white border border-white/20"
    >
      <div className="flex gap-4 flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <label className="block text-sm font-medium mb-1 text-orange-100">
            First Name
          </label>
          <input
            {...register("firstName")}
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-300 placeholder:text-orange-200 bg-white/10 text-white ${
              errors.firstName ? "border-red-500" : "border-white/30"
            }`}
            placeholder="First Name"
          />
          {errors.firstName && (
            <p className="text-red-400 text-xs mt-1">
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div className="w-full md:w-1/2">
          <label className="block text-sm font-medium mb-1 text-orange-100">
            Last Name
          </label>
          <input
            {...register("lastName")}
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-300 placeholder:text-orange-200 bg-white/10 text-white ${
              errors.lastName ? "border-red-500" : "border-white/30"
            }`}
            placeholder="Last Name"
          />
          {errors.lastName && (
            <p className="text-red-400 text-xs mt-1">
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1 text-orange-100">
          Email
        </label>
        <input
          {...register("email")}
          className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-300 placeholder:text-orange-200 bg-white/10 text-white ${
            errors.email ? "border-red-500" : "border-white/30"
          }`}
          placeholder="Email"
        />
        {errors.email && (
          <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium mb-1 text-orange-100">
          Phone
        </label>
        <input
          {...register("phone")}
          className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-300 placeholder:text-orange-200 bg-white/10 text-white ${
            errors.phone ? "border-red-500" : "border-white/30"
          }`}
          placeholder="Phone"
        />
        {errors.phone && (
          <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium mb-1 text-orange-100">
          Message
        </label>
        <textarea
          {...register("message")}
          className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-300 placeholder:text-orange-200 bg-white/10 text-white ${
            errors.message ? "border-red-500" : "border-white/30"
          }`}
          placeholder="Your message..."
          rows={4}
        />
        {errors.message && (
          <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-orange-600/80 text-white rounded-lg hover:bg-orange-700/90 transition font-semibold shadow-lg"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
