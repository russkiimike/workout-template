import React from 'react';
import { Trophy, Clock, CheckSquare } from 'lucide-react';

interface WorkoutCardProps {
  weight: number;
  equivalent: number;
  equivalentItem: string;
  duration: string;
  exercises: number;
  records: number;
  backgroundColor: string;
  opacity: number;
  imgurl: string;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({
  weight,
  equivalent,
  equivalentItem,
  duration,
  exercises,
  records,
  backgroundColor,
  opacity,
  imgurl,
}) => {
  return (
    <div
      className={`bg-${backgroundColor}-500 bg-opacity-70 text-center rounded-3xl p-4 sm:p-6 w-full text-white shadow-lg bg-opacity-${opacity}`}
    >
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold">GymStreak</h1>
        <span className="bg-blue-600 font-bold text-xs sm:text-sm py-1 px-2 sm:px-3 rounded-full">
          Workout Completed
        </span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold mb-2">
        {weight.toFixed(1)} kg Lifted!
      </h2>
      <p className="text-lg sm:text-xl mb-2">That is the equivalent of lifting:</p>
      <p className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
        {equivalent.toLocaleString()} {equivalentItem}
      </p>
      <div className="mb-4 sm:mb-6 flex justify-center">
        <img
          src={imgurl}
          alt="Mango"
          className="w-60 h-50 sm:w-70 sm:h-60 object-cover rounded-lg"
        />
      </div>
      <div className="flex justify-between text-base sm:text-lg">
        <div className="flex items-center">
          <Clock size={20} className="mr-1 sm:mr-2" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center">
          <CheckSquare size={20} className="mr-1 sm:mr-2" />
          <span>{exercises} Exercises</span>
        </div>
        <div className="flex items-center">
          <Trophy size={20} className="mr-1 sm:mr-2" />
          <span>{records} Records</span>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;