export interface HealthMetricsService {
    // Get metrics for dashboard
    getDashboardMetrics(): Promise<{
      sleep: HealthMetric[];
      activity: HealthMetric[];
      nutrition: HealthMetric[];
      mood: HealthMetric[];
    }>;
    
    // Get specific metric history
    getMetricHistory(metricId: string, range: DateRange): Promise<HealthMetric[]>;
    
    // Get daily summary
    getDailySummary(date: Date): Promise<HealthSummary>;
  }