"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface Doctor {
  id: number;
  name: string;
  gender: string;
  specialty: string;
  workTime: string;
  degree: string;
  image: string;
  defaultRating: number;
  comments: Array<{ user: string; text: string; date: string }>;
}

interface FilterContextType {
  doctors: Doctor[];
  setDoctors: React.Dispatch<React.SetStateAction<Doctor[]>>;
  genderFilter: string;
  setGenderFilter: React.Dispatch<React.SetStateAction<string>>;
  degreeFilter: string;
  setDegreeFilter: React.Dispatch<React.SetStateAction<string>>;
}

interface FilterProviderProps {
  children: ReactNode;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: FilterProviderProps) => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [genderFilter, setGenderFilter] = useState<string>("");
  const [degreeFilter, setDegreeFilter] = useState<string>("");

  useEffect(() => {
    const fetchDoctors = async () => {
      const res = await fetch("/api/doctors");
      const data = await res.json();
      setDoctors(data);
    };
    fetchDoctors();
  }, []);

  return (
    <FilterContext.Provider
      value={{
        doctors,
        setDoctors,
        genderFilter,
        setGenderFilter,
        degreeFilter,
        setDegreeFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilterContext must be used within a FilterProvider");
  }
  return context;
};
