import { type DvlaDetails } from "../models/Models";

export const RegistrationSummary = ({registrationNumber, make, yearOfManufacture, engineCapacity, color, fuelType, motExpiryDate}:DvlaDetails) => {
  return <div className="flex">
    <div>Is this your car?</div>
    <div>{registrationNumber}</div>
    <div>{make}</div>
    <div>{yearOfManufacture}</div>
    <div>{engineCapacity}</div>
    <div>{color}</div>
    <div>{fuelType}</div>
    <div>{motExpiryDate}</div>
  </div>;
}