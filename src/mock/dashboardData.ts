export const mockDashboardData = [
    {
      category: 'health',
      score: 85,
      metrics: [
        {
          id: '1',
          name: 'Sleep',
          value: 7.5,
          unit: 'hours',
          timestamp: new Date(),
          source: 'Garmin'
        },
        {
          id: '2',
          name: 'Steps',
          value: 8432,
          unit: 'steps',
          timestamp: new Date(),
          source: 'Garmin'
        }
      ]
    },
    {
      category: 'productivity',
      score: 78,
      metrics: [
        {
          id: '3',
          name: 'Focus Time',
          value: 4.2,
          unit: 'hours',
          timestamp: new Date(),
          source: 'RescueTime'
        },
        {
          id: '4',
          name: 'Tasks Completed',
          value: 12,
          unit: 'tasks',
          timestamp: new Date(),
          source: 'Todoist'
        }
      ]
    },
    {
      category: 'social',
      score: 72,
      metrics: [
        {
          id: '5',
          name: 'Connections',
          value: 3,
          unit: 'calls',
          timestamp: new Date(),
          source: 'Manual'
        },
        {
          id: '6',
          name: 'Events',
          value: 2,
          unit: 'meetings',
          timestamp: new Date(),
          source: 'Calendar'
        }
      ]
    },
    {
      category: 'financial',
      score: 92,
      metrics: [
        {
          id: '7',
          name: 'Savings Rate',
          value: 32,
          unit: '%',
          timestamp: new Date(),
          source: 'Plaid'
        },
        {
          id: '8',
          name: 'Investment Growth',
          value: 8.5,
          unit: '%',
          timestamp: new Date(),
          source: 'Plaid'
        }
      ]
    }
  ];