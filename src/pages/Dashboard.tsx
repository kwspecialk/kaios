import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchDashboardData } from '@/services/api';
import { DashboardKPI } from '@/types/dashboard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, Brain, Users, DollarSign } from 'lucide-react';
import { TrendChart, ScoreRing } from '@/components/DashboardCharts';

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'health':
      return <Activity className="h-6 w-6 text-green-500" />;
    case 'productivity':
      return <Brain className="h-6 w-6 text-blue-500" />;
    case 'social':
      return <Users className="h-6 w-6 text-purple-500" />;
    case 'financial':
      return <DollarSign className="h-6 w-6 text-amber-500" />;
    default:
      return null;
  }
};

export const Dashboard: React.FC = () => {
  const { data: dashboardData, isLoading } = useQuery<DashboardKPI[]>({
    queryKey: ['dashboard'],
    queryFn: () => fetchDashboardData().then(data => data as DashboardKPI[]),
    retry: false
  });

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-lg">Loading your dashboard...</div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">KaiOS Dashboard</h1>
        <div className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleTimeString()}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardData?.map((category) => (
          <Card key={category.category} className="overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-bold capitalize flex items-center">
                {getCategoryIcon(category.category)}
                <span className="ml-2">{category.category}</span>
              </CardTitle>
              <ScoreRing score={category.score} category={category.category} />
            </CardHeader>
            <CardContent>
              <TrendChart category={category.category} />
              {category.metrics.map((metric) => (
                <div key={metric.id} className="mt-4">
                  <div className="flex justify-between items-baseline">
                    <div className="text-gray-600">{metric.name}</div>
                    <div className="font-semibold">
                      {metric.value} {metric.unit}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <div className="text-xs text-gray-500">
                      Source: {metric.source}
                    </div>
                    <div className="h-1 w-24 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${(metric.value / 10) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;