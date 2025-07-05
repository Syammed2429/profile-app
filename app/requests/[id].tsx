import React from "react";
import { View, ScrollView } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text } from "~/components/ui/text";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import {
  ArrowLeft,
  MapPin,
  User,
  DollarSign,
  Clock,
  Calendar,
} from "lucide-react-native";

// This would typically come from an API or database
const getRequestDetails = (id: string) => {
  const requests = {
    "1": {
      id: "1",
      title: "Website Redesign",
      client: "TechCorp Inc.",
      clientEmail: "contact@techcorp.com",
      status: "pending",
      amount: "$2,500",
      location: "San Francisco, CA",
      timeAgo: "2 hours ago",
      deadline: "2024-02-15",
      description:
        "Complete redesign of company website with modern UI/UX. The project involves creating a responsive design that works across all devices, implementing a new brand identity, and improving overall user experience.",
      requirements: [
        "Modern and responsive design",
        "Mobile-first approach",
        "SEO optimization",
        "Content management system",
        "Analytics integration",
      ],
      budget: {
        min: 2000,
        max: 3000,
        currency: "USD",
      },
    },
    "2": {
      id: "2",
      title: "Mobile App Development",
      client: "StartupXYZ",
      clientEmail: "team@startupxyz.com",
      status: "in-progress",
      amount: "$8,000",
      location: "Remote",
      timeAgo: "1 day ago",
      deadline: "2024-03-20",
      description:
        "Build a React Native app for food delivery service with real-time tracking, payment integration, and user authentication.",
      requirements: [
        "React Native development",
        "Real-time order tracking",
        "Payment gateway integration",
        "Push notifications",
        "Admin dashboard",
      ],
      budget: {
        min: 7000,
        max: 9000,
        currency: "USD",
      },
    },
    "3": {
      id: "3",
      title: "E-commerce Platform",
      client: "RetailMax",
      clientEmail: "dev@retailmax.com",
      status: "pending",
      amount: "$15,000",
      location: "New York, NY",
      timeAgo: "3 days ago",
      deadline: "2024-04-30",
      description:
        "Develop a full-stack e-commerce platform with payment integration, inventory management, and customer portal.",
      requirements: [
        "Full-stack development",
        "Payment processing",
        "Inventory management",
        "Customer portal",
        "Order management system",
      ],
      budget: {
        min: 12000,
        max: 18000,
        currency: "USD",
      },
    },
    "4": {
      id: "4",
      title: "API Integration",
      client: "DataFlow Systems",
      clientEmail: "api@dataflow.com",
      status: "completed",
      amount: "$1,200",
      location: "Austin, TX",
      timeAgo: "1 week ago",
      deadline: "2024-01-15",
      description:
        "Integrate third-party APIs for data synchronization between multiple systems.",
      requirements: [
        "API integration",
        "Data transformation",
        "Error handling",
        "Documentation",
        "Testing",
      ],
      budget: {
        min: 1000,
        max: 1500,
        currency: "USD",
      },
    },
  };

  return requests[id as keyof typeof requests];
};

export default function RequestDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const request = getRequestDetails(id);
  const insets = useSafeAreaInsets();

  if (!request) {
    return (
      <View className='flex-1 justify-center items-center bg-background'>
        <Text className='text-lg text-muted-foreground'>Request not found</Text>
        <Button
          variant='outline'
          className='mt-4'
          onPress={() => router.back()}
        >
          <Text>Go Back</Text>
        </Button>
      </View>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "text-yellow-600";
      case "in-progress":
        return "text-blue-600";
      case "completed":
        return "text-green-600";
      default:
        return "text-gray-600";
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100";
      case "in-progress":
        return "bg-blue-100";
      case "completed":
        return "bg-green-100";
      default:
        return "bg-gray-100";
    }
  };

  return (
    <ScrollView className='flex-1 bg-background'>
      <View
        className='p-6'
        style={{ paddingTop: Math.max(insets.top, 16) + 16 }}
      >
        {/* Header */}
        <View className='flex-row items-center mb-6'>
          <Button
            variant='ghost'
            size='sm'
            onPress={() => router.back()}
            className='mr-4'
          >
            <ArrowLeft size={20} />
          </Button>
          <Text className='text-2xl font-bold flex-1'>Request Details</Text>
          <View
            className={`px-3 py-1 rounded-full ${getStatusBg(request.status)}`}
          >
            <Text
              className={`text-sm font-medium capitalize ${getStatusColor(request.status)}`}
            >
              {request.status.replace("-", " ")}
            </Text>
          </View>
        </View>

        {/* Main Info */}
        <Card className='mb-6'>
          <CardHeader>
            <CardTitle className='text-xl'>{request.title}</CardTitle>
            <CardDescription className='text-base leading-6'>
              {request.description}
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <View className='flex-row items-center justify-between'>
              <View className='flex-row items-center'>
                <User className='text-muted-foreground mr-2' size={18} />
                <Text className='font-medium'>{request.client}</Text>
              </View>
              <View className='flex-row items-center'>
                <DollarSign className='text-green-600 mr-1' size={18} />
                <Text className='text-lg font-bold text-green-600'>
                  {request.amount}
                </Text>
              </View>
            </View>

            <View className='flex-row items-center justify-between'>
              <View className='flex-row items-center'>
                <MapPin className='text-muted-foreground mr-2' size={18} />
                <Text className='text-muted-foreground'>
                  {request.location}
                </Text>
              </View>
              <View className='flex-row items-center'>
                <Clock className='text-muted-foreground mr-2' size={18} />
                <Text className='text-muted-foreground'>{request.timeAgo}</Text>
              </View>
            </View>

            <View className='flex-row items-center'>
              <Calendar className='text-muted-foreground mr-2' size={18} />
              <Text className='text-muted-foreground'>
                Deadline: {request.deadline}
              </Text>
            </View>
          </CardContent>
        </Card>

        {/* Requirements */}
        <Card className='mb-6'>
          <CardHeader>
            <CardTitle>Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <View className='space-y-2'>
              {request.requirements.map((requirement, index) => (
                <View key={index} className='flex-row items-center'>
                  <View className='w-2 h-2 bg-primary rounded-full mr-3' />
                  <Text className='flex-1'>{requirement}</Text>
                </View>
              ))}
            </View>
          </CardContent>
        </Card>

        {/* Budget Info */}
        <Card className='mb-6'>
          <CardHeader>
            <CardTitle>Budget Range</CardTitle>
          </CardHeader>
          <CardContent>
            <View className='flex-row justify-between items-center'>
              <View>
                <Text className='text-sm text-muted-foreground'>Minimum</Text>
                <Text className='text-lg font-semibold'>
                  ${request.budget.min.toLocaleString()}
                </Text>
              </View>
              <View className='flex-1 mx-4'>
                <View className='h-2 bg-secondary rounded-full'>
                  <View className='h-2 bg-primary rounded-full w-2/3' />
                </View>
              </View>
              <View>
                <Text className='text-sm text-muted-foreground'>Maximum</Text>
                <Text className='text-lg font-semibold'>
                  ${request.budget.max.toLocaleString()}
                </Text>
              </View>
            </View>
          </CardContent>
        </Card>

        {/* Actions */}
        <View className='space-y-3'>
          {request.status === "pending" && (
            <>
              <Button className='w-full'>
                <Text className='text-primary-foreground font-medium'>
                  Accept Request
                </Text>
              </Button>
              <Button variant='destructive' className='w-full'>
                <Text className='text-destructive-foreground font-medium'>
                  Decline Request
                </Text>
              </Button>
            </>
          )}

          {request.status === "in-progress" && (
            <>
              <Button className='w-full'>
                <Text className='text-primary-foreground font-medium'>
                  Update Progress
                </Text>
              </Button>
              <Button variant='outline' className='w-full'>
                <Text>Message Client</Text>
              </Button>
            </>
          )}

          {request.status === "completed" && (
            <Button variant='outline' className='w-full'>
              <Text>View Invoice</Text>
            </Button>
          )}

          <Button variant='outline' className='w-full'>
            <Text>Contact Client</Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}
