import {
  createContext,
  useContext,
  useState,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react";

// Define the shape of the context
interface ParkContextType {
  parkDetails: {
    parkName?: string;
    kwhDuration?: string;
    kwhAvailable?: string;
    yearlyYield?: string;
  };
  setParkDetails: React.Dispatch<
    React.SetStateAction<{
      parkName: string;
      kwhDuration: string;
      kwhAvailable: string;
      yearlyYield: string;
    }>
  >;
  parkDetailsPage: {
    seller?: string;
    amount?: string;
    pricePerKwh?: string;
    monthlyYield?: string;
    purchasekWH?: string;
  };
  setParkDetailsPage: React.Dispatch<
    React.SetStateAction<{
      seller: string;
      amount: string;
      pricePerKwh: string;
      monthlyYield: string;
      purchasekWH: string;
    }>
  >;
  isParkDetailed: boolean;
  setIsParkDetailed: Dispatch<SetStateAction<boolean>>;
}

// Create the context
const ParkContext = createContext<ParkContextType | undefined>(undefined);

// Create a custom hook to use the context
export const useParkContext = () => {
  const context = useContext(ParkContext);
  if (!context) {
    throw new Error("useParkContext must be used within a ParkProvider");
  }
  return context;
};

// Create a provider component
interface ParkProviderProps {
  children: ReactNode;
}
export const ParkProvider = ({ children }: ParkProviderProps) => {
  const [parkDetails, setParkDetails] = useState({
    parkName: "",
    kwhDuration: "",
    kwhAvailable: "",
    yearlyYield: "",
  });

  const [isParkDetailed, setIsParkDetailed] = useState(false);

  const [parkDetailsPage, setParkDetailsPage] = useState({
    seller: "",
    amount: "",
    pricePerKwh: "",
    monthlyYield: "",
    purchasekWH: "",
  });

  return (
    <ParkContext.Provider
      value={{
        parkDetails,
        setParkDetails,
        parkDetailsPage,
        setParkDetailsPage,
        isParkDetailed,
        setIsParkDetailed,
      }}
    >
      {children}
    </ParkContext.Provider>
  );
};
