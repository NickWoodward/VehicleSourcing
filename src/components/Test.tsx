// import { useStore } from '@nanostores/react'

// import { $isOpen } from '../store/store';

// export const Test = () => {
//   const open = useStore($isOpen);
//   console.log('dickhead',open);
//   return <div>Hello {open}</div>
// }


export const HeroCTA = () => {
  const { form, setForm } = useContext(FormStateContext);

  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/dvla", {
        method: "POST",
        body: JSON.stringify({
          numberplate
        }),
      });

      return await response.json();
      
    } catch (error) {
      console.log(error);
    }

  }

  const handleRegSubmit = async (e:FormEvent) => {
    e.preventDefault();
    const data = await fetchData();

    setForm((form) => produce(form, (draft) => {
      draft.steps.partExchange = data
      draft.px = true;
    }));
    setModalVisible(true);
  }

  return (
    <div className="xxs-v:mt-4 mt-6 xs:mt-4 lg:mt-8 h-24 flex flex-col   space-y-1.5 xl:space-y-2">
      {modalVisible && <div>DATA:{JSON.stringify(form)}</div>}
      {
        modalVisible && 
        <Modal 
          close={() => setModalVisible(false)} 
          modalClasses=" fixed flex justify-end w-full h-full mx-auto z-50"
        >
          <RegistrationSummary {...form.steps.partExchange} />
        </Modal>
      }
      {
        plateOpen? 
        <Button   
          className="font-numberplate cta-btn--hero shadow-lg px-4 w-[160px] xl:w-[180px] 3xl :w-200px h-[45px] xl:h-[50px] 3xl:h-[60px]  py-2.5 md:py-3 xl:py-4 bg-yellow outline outline-1 outline-gray-500 3xl:leading-10"
          rounded="md"
          size="sm"
        >
          <a href="#contact" className="flex justify-center items-center space-x-3 w-full">
            <span className="text-gray-800  text-[1.5rem] 3xl:text-[1.7rem]">START</span>
          </a>
        </Button> 
        : 
        <form             
          onSubmit={(e) => handleRegSubmit(e)}
        >
          <input   
            value={numberplate}
            onChange={changeHandler}
            onFocus={() => setPlatePlaceholder("")}
            onBlur={() => setPlatePlaceholder("ENTER REG")}
            placeholder={platePlaceholder}
          />
        </form>
      }

      <div className="sell-cta">
        <Button   
          className="cta-btn--hero invisible opacity-0 xxs-v:py-0 py-2  flex items-center space-x-2 xl:space-x-2.5 cursor"
          rounded
          variant="ghost"
          size="sm"
          onClick={toggleNumberPlate}
        >
        {
          plateOpen? 
            <span className="ml-1 xl:ml-0 text-sm xs:text-md xl:text-lg text-gray-500">Or sell us your car</span>:
            <span className="ml-1 xl:ml-0 text-sm xs:text-md xl:text-lg text-gray-500">Get Started</span>  
        }          
        
          <ChevronRight className="h-3 w-3 xl:h-4 xl:w-4 text-gray-500 flex-none" />

        </Button>
      </div>
    </div>
  )
}

