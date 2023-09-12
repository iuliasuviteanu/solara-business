export type ParkDetails = {
  id: number;
  seller: string;
  amount: string;
  pricePerKwh: string;
  priceTotal: string;
  monthlyYield: string;
};

export type FreeMarket = {
  id: number;
  kwhAvailable: string;
  kwhDuration: string;
  park: string;
  yearlyYield: string;
};

export type AvailableSolaras = {
  id: number;
  kwhAvailable: string;
  kwhDuration: string;
  park: string;
  yearlyYield: string;
};

export type JsonData = {
  parkDetails: ParkDetails[];
  freeMarket: FreeMarket[];
  availableSolaras: AvailableSolaras[];
};
