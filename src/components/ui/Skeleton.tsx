import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

const Skeleton: React.FC<SkeletonProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-gray-200/50", className)}
      {...props}
    />
  );
};

export const ProductSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-4 border border-gray-100 space-y-4">
      <Skeleton className="aspect-[4/5] w-full rounded-lg" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-1/3 mx-auto" />
        <Skeleton className="h-6 w-2/3 mx-auto" />
        <Skeleton className="h-6 w-1/2 mx-auto" />
      </div>
    </div>
  );
};

export default Skeleton;
