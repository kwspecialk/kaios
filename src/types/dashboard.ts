export interface HealthMetric {
    id: string;
    name: string;
    value: number;
    unit: string;
    timestamp: Date;
    source: string;
  }
  
  export interface DashboardKPI {
    category: 'health' | 'productivity' | 'social' | 'financial';
    metrics: HealthMetric[];
    score: number;
  }