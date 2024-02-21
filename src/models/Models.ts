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
  mileage: z.coerce.number().min(0, {message: "Only numbers"}),
});

export const PersonSchemaWithVehicle = PersonSchema.merge(VehicleSchema);

const numberPlateRegex = /(^[A-Z]{2}[0-9]{2}\s?[A-Z]{3}$)|(^[A-Z][0-9]{1,3}[A-Z]{3}$)|(^[A-Z]{3}[0-9]{1,3}[A-Z]$)|(^[0-9]{1,4}[A-Z]{1,2}$)|(^[0-9]{1,3}[A-Z]{1,3}$)|(^[A-Z]{1,2}[0-9]{1,4}$)|(^[A-Z]{1,3}[0-9]{1,3}$)|(^[A-Z]{1,3}[0-9]{1,4}$)|(^[0-9]{3}[DX]{1}[0-9]{3}$)/;

export const RegistrationSchema = z.string().trim().regex(numberPlateRegex, {message: "At least 2 letters"});

export const PartExchangeSchema = z.object({
  model: z.string().trim().min(2, {message: "At least 2 letters"}),
  mileage: z.string().pipe(z.coerce.number().min(1, {message: "Only numbers"}))
})

export const DvlaSchema = z.object({
  registrationNumber: RegistrationSchema,
  make: z.string().trim().min(2, {message: "At least 2 letters"}),
  // model: z.string().trim().min(2, {message: "At least 2 letters"}),
  yearOfManufacture: z.string().pipe(z.coerce.number().min(1983, {message: `< ${new Date().getFullYear() - 1983 } years`})),
  engineCapacity: z.string().pipe(z.coerce.number().min(1, {message: "Only numbers"})),
  fuelType: z.string().trim().min(2, {message: "At least 2 letters"}),
  color: z.string().trim().min(2, {message: "At least 2 letters"}),
  motExpiryDate: z.string().trim().min(10, {message: "xxxx-xx-xx"}),
  taxDueDate: z.string().trim().min(10, {message: "xxxx-xx-xx"}),
});
export const DvlaSchemaWithFormDetails = DvlaSchema.extend({
  model: z.string().trim().min(2, {message: "At least 2 letters"}),
  mileage: z.coerce.number().min(1, {message: "Only numbers"}),
});

export const FormSchema = PersonSchemaWithVehicle.extend({
  token: z.string(),
});

export type User = z.infer<typeof PersonSchema>;
export type Vehicle = z.infer<typeof VehicleSchema>;
export type UserWithVehicle = z.infer<typeof PersonSchemaWithVehicle>;
export type DvlaDetails = z.input<typeof DvlaSchema>;
export type RegistrationNumber = z.input<typeof RegistrationSchema>;
export type PartExchangeVehicle = z.input<typeof PartExchangeSchema>;