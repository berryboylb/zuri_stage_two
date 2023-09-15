import { z } from "zod";
export const CreatePersonDto = z.object({
  body: z.object({
    fullName: z
      .string()
      .min(3, { message: "fullName must have at least three characters " })
      .max(20, {
        message: "fullName must not be greater than 20 characters",
      }),
    email: z
      .string()
      .email("This is not a valid email.")
      .trim()
      .min(8, { message: "Email length must be at least 8." }),
    phoneNumber: z
      .string()
      .min(10, { message: "phonenumber must be at least 10." }),
    // hobbies: z.array(z.string()).min(0),
    age: z.number().int().min(0).max(100),
  }),
});

export const fullNameDto = z.object({
  query: z.object({
    fullName: z
      .string()
      .min(3, { message: "Full name must have at least three characters " })
      .max(20, {
        message: "Full name must not be greater than 20 characters",
      })
      .optional(), // Make fullName optional
  }),
});

export const UpdatePersonDto = z.object({
  body: z.object({
    fullName: z
      .string()
      .min(3, { message: "fullName must have at least three characters " })
      .max(20, {
        message: "fullName must not be greater than 20 characters",
      })
      .optional(),
    email: z
      .string()
      .email("This is not a valid email.")
      .trim()
      .min(8, { message: "Email length must be at least 8." })
      .optional(),
    phoneNumber: z
      .string()
      .min(10, { message: "phonenumber must be at least 10." })
      .optional(),
    // hobbies: z.array(z.string()).min(0).optional(),
    age: z.number().int().min(0).max(100).optional(),
  }),
});
