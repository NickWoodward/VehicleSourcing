import { MercedesLogo, BMWLogo, PeugeotLogo, AbarthLogo, AudiLogo, MiniLogo, SeatLogo } from "../utils/svgComponents";

export const BrandCloud = () => {
  return (
    <div className="bg-slate-100 w-full max-w-[260px] -mt-4 ">
      {/* <p className="text-center text-sm font-semibold text-gray-900 lg:text-left">
        Performance Motoring from
      </p> */}
      <ul
        role="list"
        className=" flex justify-center items-center gap-8 mt-6 text-slate-600"
      >
          <li><MercedesLogo className="h-14 aspect-square" /></li>
          <li><BMWLogo className="h-14 aspect-square" /></li>
          <li><SeatLogo className="flex h-14 "/></li>

          {/* <li><PeugeotLogo className="h-20 aspect-square"/></li> */}
          {/* <li><AbarthLogo className="h-20 aspect-square" /></li> */}
      
      </ul>
      <ul
        role="list"
        className=" flex justify-center items-center gap-8 w-full mt-6 text-slate-600"
      >
          <li><AudiLogo className="max-w-md w-20 aspect-auto" /></li>
          <li><MiniLogo className="max-w-md w-20 aspect-auto" /></li>
      </ul>
    </div>
  );
}