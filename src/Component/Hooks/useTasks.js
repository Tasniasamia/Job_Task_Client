import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useTasks = () => {
    const { isLoading, refetch, data:AllTask=[]} = useQuery({
        queryKey: ['todos'],
        queryFn: async() =>{
      
            const response = await fetch(`http://localhost:6030/TasksCollection`)
            // if (!response.ok) {
            //   throw new Error('Network response was not ok')
            // }
            return response.json()
          },
      })
      return [ isLoading, refetch, AllTask]
};

export default useTasks;