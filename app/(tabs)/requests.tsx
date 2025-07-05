import React from "react";
import { View, ScrollView } from "react-native";
import { Link } from "expo-router";
import { Text } from "~/components/ui/text";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Clock, DollarSign, MapPin, User } from "lucide-react-native";

const requestsData = [
  {
    id: "1",
    title: "Website Redesign",
    client: "TechCorp Inc.",
    status: "pending",
    amount: "$2,500",
    location: "San Francisco, CA",
    timeAgo: "2 hours ago",
    description: "Complete redesign of company website with modern UI/UX",
  },
  {
    id: "2",
    title: "Mobile App Development",
    client: "StartupXYZ",
    status: "in-progress",
    amount: "$8,000",
    location: "Remote",
    timeAgo: "1 day ago",
    description: "Build a React Native app for food delivery service",
  },
  {
    id: "3",
    title: "E-commerce Platform",
    client: "RetailMax",
    status: "pending",
    amount: "$15,000",
    location: "New York, NY",
    timeAgo: "3 days ago",
    description:
      "Develop a full-stack e-commerce platform with payment integration",
  },
  {
    id: "4",
    title: "API Integration",
    client: "DataFlow Systems",
    status: "completed",
    amount: "$1,200",
    location: "Austin, TX",
    timeAgo: "1 week ago",
    description: "Integrate third-party APIs for data synchronization",
  },
];

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

export default function RequestsScreen() {
  return (
    <ScrollView className='flex-1 bg-background'>
      <View className='p-6'>
        <View className='mb-6'>
          <Text className='text-2xl font-bold mb-2'>Service Requests</Text>
          <Text className='text-muted-foreground'>
            Manage your incoming project requests
          </Text>
        </View>

        <View className='space-y-4'>
          {requestsData.map((request) => (
            <Card key={request.id} className='border border-border'>
              <CardHeader className='pb-4'>
                <View className='flex-row justify-between items-start mb-2'>
                  <CardTitle className='flex-1 text-lg'>
                    {request.title}
                  </CardTitle>
                  <View
                    className={`px-2 py-1 rounded-full ${getStatusBg(request.status)}`}
                  >
                    <Text
                      className={`text-xs font-medium capitalize ${getStatusColor(request.status)}`}
                    >
                      {request.status.replace("-", " ")}
                    </Text>
                  </View>
                </View>
                <CardDescription>{request.description}</CardDescription>
              </CardHeader>

              <CardContent className='space-y-4'>
                <View className='flex-row items-center justify-between'>
                  <View className='flex-row items-center'>
                    <User className='text-muted-foreground mr-2' size={16} />
                    <Text className='text-sm'>{request.client}</Text>
                  </View>
                  <View className='flex-row items-center'>
                    <DollarSign className='text-green-600 mr-1' size={16} />
                    <Text className='text-sm font-semibold text-green-600'>
                      {request.amount}
                    </Text>
                  </View>
                </View>

                <View className='flex-row items-center justify-between'>
                  <View className='flex-row items-center'>
                    <MapPin className='text-muted-foreground mr-2' size={16} />
                    <Text className='text-sm text-muted-foreground'>
                      {request.location}
                    </Text>
                  </View>
                  <View className='flex-row items-center'>
                    <Clock className='text-muted-foreground mr-2' size={16} />
                    <Text className='text-sm text-muted-foreground'>
                      {request.timeAgo}
                    </Text>
                  </View>
                </View>

                <View className='flex-row gap-3 mt-4'>
                  <Link
                    href={`/requests/${request.id}`}
                    asChild
                    className='flex-1'
                  >
                    <Button>
                      <Text className='text-primary-foreground font-medium'>
                        Review
                      </Text>
                    </Button>
                  </Link>
                  <Button variant='outline' className='flex-1'>
                    <Text>Message</Text>
                  </Button>
                </View>
              </CardContent>
            </Card>
          ))}
        </View>

        {/* Summary Stats */}
        <Card className='mt-6'>
          <CardHeader>
            <CardTitle>Request Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <View className='flex-row justify-around'>
              <View className='items-center'>
                <Text className='text-2xl font-bold text-yellow-600'>2</Text>
                <Text className='text-sm text-muted-foreground'>Pending</Text>
              </View>
              <View className='items-center'>
                <Text className='text-2xl font-bold text-blue-600'>1</Text>
                <Text className='text-sm text-muted-foreground'>
                  In Progress
                </Text>
              </View>
              <View className='items-center'>
                <Text className='text-2xl font-bold text-green-600'>1</Text>
                <Text className='text-sm text-muted-foreground'>Completed</Text>
              </View>
            </View>
          </CardContent>
        </Card>
      </View>
    </ScrollView>
  );
}
