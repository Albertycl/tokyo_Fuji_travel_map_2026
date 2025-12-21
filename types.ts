
import React from 'react';
export interface TripEvent {
  id: string;
  time: string;
  location: string;
  activity: string;
  notes: string;
  lat: number;
  lng: number;
  day: number;
  type: 'flight' | 'transport' | 'food' | 'stay' | 'sightseeing' | 'shopping';
  booking?: {
    provider?: string;
    number?: string;
    price?: string;
    payment?: string;
    status?: string;
    people?: number;
    period?: string;
  };
}

export interface DayPlan {
  day: number;
  date: string;
  title: string;
  color: string;
  events: TripEvent[];
}

export interface WeatherData {
  day: number;
  temp: string;
  icon: React.ReactNode;
  desc: string;
  fujiVisibility: string;
  isHistorical: boolean;
}
