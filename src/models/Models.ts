import { z } from 'zod';

export const PersonSchema = z.object({
  fName: z.string().trim().min(2, {message: "At least 2 letters"}),
  sName: z.string().trim().min(2, {message: "At least 2 letters"}),
  email: z.string().email().trim().toLowerCase(),
  phone: z.string().regex(new RegExp(/^0([1-6][0-9]{8,10}|7[0-9]{9})$/), {message: "Invalid number"}),
});

export const VehicleSchema = z.object({
  manufacturer: z.string().trim().min(2, {message: "At least 2 letters"}),
  model: z.string().trim().min(2, {message: "At least 2 letters"}),
  year: z.coerce.number().min(1983, {message: `< ${new Date().getFullYear() - 1983 } years`}),
});

export const PersonSchemaWithVehicle = PersonSchema.merge(VehicleSchema);

export type User = z.infer<typeof PersonSchema>;
export type Vehicle = z.infer<typeof VehicleSchema>;
export type UserWithVehicle = z.infer<typeof PersonSchemaWithVehicle>;