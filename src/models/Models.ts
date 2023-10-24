import { z } from 'zod';

export const UserSchema = z.object({
  id: z.number(),
  fName: z.string().trim().min(2, {message: "> 2 characters"}),
  sName: z.string().trim().min(2, {message: "> 2 characters"}),
  email: z.string().email().trim().toLowerCase(),
  phone: z.string().regex(new RegExp(/^0([1-6][0-9]{8,10}|7[0-9]{9})$/)),
});

export const VehicleSchema = z.object({
  manufacturer: z.string().trim().min(2, {message: "> 2 characters"}),
  model: z.string().trim().min(2, {message: "> 2 characters"}),
  year: z.number().min(1983, {message: "> 1983"}),
});

export const UserSchemaWithVehicle = UserSchema.merge(VehicleSchema);

export type User = z.infer<typeof UserSchema>;
export type Vehicle = z.infer<typeof VehicleSchema>;
export type UserWithVehicle = z.infer<typeof UserSchemaWithVehicle>;