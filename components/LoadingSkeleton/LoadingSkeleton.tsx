export default function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse overflow-hidden rounded-2xl border bg-white shadow-sm"
        >
          {/* Image Skeleton */}
          <div className="h-48 w-full bg-gray-200" />

          {/* Content Skeleton */}
          <div className="space-y-4 p-4">
            <div className="flex justify-between">
              <div className="space-y-2">
                <div className="h-5 w-32 rounded bg-gray-200" />
                <div className="h-4 w-20 rounded bg-gray-200" />
              </div>

              <div className="h-8 w-8 rounded-full bg-gray-200" />
            </div>

            <div className="space-y-2">
              <div className="h-3 w-20 rounded bg-gray-200" />
              <div className="h-7 w-24 rounded bg-gray-200" />
            </div>

            <div className="flex justify-between">
              <div className="h-4 w-28 rounded bg-gray-200" />
              <div className="h-4 w-12 rounded bg-gray-200" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}