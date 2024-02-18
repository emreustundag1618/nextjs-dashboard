import DashboardSkeleton from "@/app/ui/skeletons";

// Here we use the router group such as (overview) to solve skeleton bugs
// Without a route group DashboardSkeleton applied to customers and invoices pages too
export default function Loading() {
    return <DashboardSkeleton />;
}