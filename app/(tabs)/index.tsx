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
import { Progress } from "~/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import {
  TrendingUp,
  DollarSign,
  Users,
  FileText,
  Clock,
  Star,
  ChevronRight,
} from "lucide-react-native";

const GITHUB_AVATAR_URI =
  "https://i.pinimg.com/originals/ef/a2/8d/efa28d18a04e7fa40ed49eeb0ab660db.jpg";

export default function HomeScreen() {
  const [monthlyProgress, setMonthlyProgress] = React.useState(78);

  const updateProgressValue = () => {
    setMonthlyProgress(Math.floor(Math.random() * 100));
  };

  const summaryStats = [
    {
      label: "Total Revenue",
      value: "$24,500",
      change: "+12%",
      color: "text-green-600",
      icon: DollarSign,
    },
    {
      label: "Active Projects",
      value: "8",
      change: "+3",
      color: "text-blue-600",
      icon: FileText,
    },
    {
      label: "Happy Clients",
      value: "42",
      change: "+5",
      color: "text-purple-600",
      icon: Users,
    },
    {
      label: "Avg Rating",
      value: "4.9",
      change: "★",
      color: "text-yellow-600",
      icon: Star,
    },
  ];

  const recentActivity = [
    {
      id: "1",
      action: "New project request",
      client: "TechCorp Inc.",
      time: "2 hours ago",
      type: "request",
    },
    {
      id: "2",
      action: "Project completed",
      client: "StartupXYZ",
      time: "1 day ago",
      type: "completed",
    },
    {
      id: "3",
      action: "Payment received",
      client: "RetailMax",
      time: "2 days ago",
      type: "payment",
    },
    {
      id: "4",
      action: "Client review",
      client: "DataFlow",
      time: "3 days ago",
      type: "review",
    },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "request":
        return <FileText className='text-blue-600' size={16} />;
      case "completed":
        return <TrendingUp className='text-green-600' size={16} />;
      case "payment":
        return <DollarSign className='text-green-600' size={16} />;
      case "review":
        return <Star className='text-yellow-600' size={16} />;
      default:
        return <Clock className='text-gray-600' size={16} />;
    }
  };

  return (
    <ScrollView className='flex-1 bg-background'>
      <View className='p-6'>
        {/* Welcome Header */}
        <Card className='mb-6'>
          <CardHeader className='items-center pb-4'>
            <Avatar alt='Profile Picture' className='w-20 h-20 mb-3'>
              <AvatarImage source={{ uri: GITHUB_AVATAR_URI }} />
              <AvatarFallback>
                <Text className='text-xl font-bold'>JD</Text>
              </AvatarFallback>
            </Avatar>
            <CardTitle className='text-center text-xl'>
              Welcome back, John!
            </CardTitle>
            <CardDescription className='text-center'>
              Here&apos;s your business overview
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Summary Stats Grid */}
        <View className='grid grid-cols-2 gap-4 mb-6'>
          {summaryStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className='flex-1'>
                <CardContent className='p-4'>
                  <View className='flex-row items-center justify-between mb-2'>
                    <IconComponent className={stat.color} size={20} />
                    <Text className={`text-sm font-medium ${stat.color}`}>
                      {stat.change}
                    </Text>
                  </View>
                  <Text className='text-2xl font-bold'>{stat.value}</Text>
                  <Text className='text-sm text-muted-foreground'>
                    {stat.label}
                  </Text>
                </CardContent>
              </Card>
            );
          })}
        </View>

        {/* Monthly Progress */}
        <Card className='mb-6'>
          <CardHeader>
            <CardTitle>Monthly Goal Progress</CardTitle>
            <CardDescription>Track your monthly revenue target</CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <View className='flex-row items-center justify-between'>
              <Text className='text-sm text-muted-foreground'>Progress:</Text>
              <Text className='text-sm font-medium'>
                {monthlyProgress}% of $30,000
              </Text>
            </View>
            <Progress
              value={monthlyProgress}
              className='h-3'
              indicatorClassName='bg-primary'
            />
            <Button
              variant='outline'
              onPress={updateProgressValue}
              className='w-full'
            >
              <Text>Update Progress</Text>
            </Button>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className='mb-6'>
          <CardHeader>
            <View className='flex-row items-center justify-between'>
              <CardTitle>Recent Activity</CardTitle>
              <Link href='/requests' asChild>
                <Button variant='ghost' size='sm'>
                  <View className='flex-row items-center'>
                    <Text className='text-sm mr-1'>View All</Text>
                    <ChevronRight size={16} />
                  </View>
                </Button>
              </Link>
            </View>
          </CardHeader>
          <CardContent className='space-y-3'>
            {recentActivity.map((activity) => (
              <View
                key={activity.id}
                className='flex-row items-center space-x-3 p-2 rounded-lg bg-secondary/30'
              >
                <View className='w-8 h-8 rounded-full bg-background items-center justify-center'>
                  {getActivityIcon(activity.type)}
                </View>
                <View className='flex-1'>
                  <Text className='font-medium'>{activity.action}</Text>
                  <Text className='text-sm text-muted-foreground'>
                    {activity.client}
                  </Text>
                </View>
                <Text className='text-xs text-muted-foreground'>
                  {activity.time}
                </Text>
              </View>
            ))}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className='mb-6'>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className='space-y-3'>
            <View className='flex-row gap-3'>
              <Link href='/requests' asChild className='flex-1'>
                <Button>
                  <Text className='text-primary-foreground font-medium'>
                    View Requests
                  </Text>
                </Button>
              </Link>
              <Link href='/services' asChild className='flex-1'>
                <Button variant='outline'>
                  <Text>Manage Services</Text>
                </Button>
              </Link>
            </View>
            <Link href='/profile' asChild>
              <Button variant='outline' className='w-full'>
                <Text>Update Profile</Text>
              </Button>
            </Link>
          </CardContent>
        </Card>
      </View>
    </ScrollView>
  );
}
