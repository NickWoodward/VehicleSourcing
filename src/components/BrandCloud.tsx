import { MercedesLogo, BMWLogo, PeugeotLogo, AbarthLogo, AudiLogo, MiniLogo, SeatLogo } from "../utils/svgComponents";

export const BrandCloud = () => {
  return (
    <div className="mx-auto w-11/12 space-y-8 ">
      <ul
        role="list"
        className="flex items-center gap-6 text-slate-600"
      >
          <li><MercedesLogo className="h-11 aspect-square" /></li>
          <li><BMWLogo className="h-11 aspect-square" /></li>
          <li><SeatLogo className="flex h-11 "/></li>

          {/* <li><PeugeotLogo className="h-20 aspect-square"/></li> */}
          {/* <li><AbarthLogo className="h-20 aspect-square" /></li> */}
      
      </ul>
      {/* <ul
        role="list"
        className=" flex justify-center items-center gap-8 w-full text-slate-600"
      >
          <li><AudiLogo className="max-w-md w-20 aspect-auto" /></li>
          <li><MiniLogo className="max-w-md w-20 aspect-auto" /></li>
      </ul> */}
    </div>
  );
}