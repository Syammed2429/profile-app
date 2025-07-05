import React from "react";
import { View, ScrollView } from "react-native";
import { Text } from "~/components/ui/text";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Mail, Phone, MapPin, Calendar, Star } from "lucide-react-native";

const PROFILE_AVATAR =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face";

export default function ProfileScreen() {
  return (
    <ScrollView className='flex-1 bg-background'>
      <View className='p-6'>
        {/* Profile Header */}
        <Card className='mb-6'>
          <CardHeader className='items-center pb-4'>
            <Avatar alt="John Doe's Profile Picture" className='w-24 h-24 mb-4'>
              <AvatarImage source={{ uri: PROFILE_AVATAR }} />
              <AvatarFallback>
                <Text className='text-2xl font-bold'>JD</Text>
              </AvatarFallback>
            </Avatar>
            <CardTitle className='text-center text-2xl'>John Doe</CardTitle>
            <CardDescription className='text-center'>
              Senior Software Engineer
            </CardDescription>
            <View className='flex-row items-center mt-2'>
              <Star className='text-yellow-500 mr-1' size={16} />
              <Text className='text-sm text-muted-foreground'>4.8 Rating</Text>
            </View>
          </CardHeader>
        </Card>

        {/* Contact Information */}
        <Card className='mb-6'>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className='space-y-4'>
            <View className='flex-row items-center'>
              <Mail className='text-muted-foreground mr-3' size={20} />
              <Text>john.doe@example.com</Text>
            </View>
            <View className='flex-row items-center'>
              <Phone className='text-muted-foreground mr-3' size={20} />
              <Text>+1 (555) 123-4567</Text>
            </View>
            <View className='flex-row items-center'>
              <MapPin className='text-muted-foreground mr-3' size={20} />
              <Text>San Francisco, CA</Text>
            </View>
            <View className='flex-row items-center'>
              <Calendar className='text-muted-foreground mr-3' size={20} />
              <Text>Joined March 2020</Text>
            </View>
          </CardContent>
        </Card>

        {/* About */}
        <Card className='mb-6'>
          <CardHeader>
            <CardTitle>About</CardTitle>
          </CardHeader>
          <CardContent>
            <Text className='text-muted-foreground leading-6'>
              Passionate software engineer with 8+ years of experience in
              building scalable web and mobile applications. Specialized in
              React Native, TypeScript, and cloud technologies. Love solving
              complex problems and mentoring junior developers.
            </Text>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card className='mb-6'>
          <CardHeader>
            <CardTitle>Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <View className='flex-row flex-wrap gap-2'>
              {[
                "React Native",
                "TypeScript",
                "Node.js",
                "AWS",
                "GraphQL",
                "PostgreSQL",
                "Docker",
                "Kubernetes",
              ].map((skill) => (
                <View
                  key={skill}
                  className='bg-secondary px-3 py-1 rounded-full'
                >
                  <Text className='text-sm text-secondary-foreground'>
                    {skill}
                  </Text>
                </View>
              ))}
            </View>
          </CardContent>
        </Card>

        {/* Actions */}
        <View className='space-y-3'>
          <Button className='w-full'>
            <Text className='text-primary-foreground font-medium'>
              Edit Profile
            </Text>
          </Button>
          <Button variant='outline' className='w-full'>
            <Text>Settings</Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}
