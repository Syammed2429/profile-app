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
import {
  Code,
  Smartphone,
  Globe,
  Database,
  Cloud,
  Settings,
  Star,
  Clock,
  DollarSign,
} from "lucide-react-native";

const servicesData = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies",
    icon: Globe,
    price: "Starting at $2,000",
    duration: "2-6 weeks",
    rating: 4.9,
    features: [
      "Responsive Design",
      "SEO Optimized",
      "Fast Loading",
      "Mobile First",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps for iOS and Android using React Native",
    icon: Smartphone,
    price: "Starting at $5,000",
    duration: "4-12 weeks",
    rating: 4.8,
    features: [
      "Cross Platform",
      "Native Performance",
      "App Store Ready",
      "Push Notifications",
    ],
    technologies: ["React Native", "TypeScript", "Firebase", "Expo"],
  },
  {
    id: "backend-development",
    title: "Backend Development",
    description:
      "Scalable APIs and server-side applications with database integration",
    icon: Database,
    price: "Starting at $3,000",
    duration: "3-8 weeks",
    rating: 4.9,
    features: [
      "RESTful APIs",
      "Database Design",
      "Authentication",
      "Real-time Features",
    ],
    technologies: ["Node.js", "PostgreSQL", "MongoDB", "GraphQL"],
  },
  {
    id: "cloud-deployment",
    title: "Cloud Deployment",
    description: "Deploy and manage your applications on cloud platforms",
    icon: Cloud,
    price: "Starting at $800",
    duration: "1-2 weeks",
    rating: 4.7,
    features: [
      "Auto Scaling",
      "Load Balancing",
      "CI/CD Pipeline",
      "Monitoring",
    ],
    technologies: ["AWS", "Docker", "Kubernetes", "GitHub Actions"],
  },
  {
    id: "custom-development",
    title: "Custom Development",
    description: "Tailored solutions for specific business requirements",
    icon: Code,
    price: "Quote on request",
    duration: "Varies",
    rating: 5.0,
    features: ["Custom Solutions", "Integration", "Consultation", "Support"],
    technologies: [
      "Various",
      "As needed",
      "Best practices",
      "Industry standards",
    ],
  },
  {
    id: "maintenance",
    title: "Maintenance & Support",
    description: "Ongoing maintenance and support for existing applications",
    icon: Settings,
    price: "Starting at $500/month",
    duration: "Ongoing",
    rating: 4.8,
    features: ["Bug Fixes", "Updates", "Performance", "24/7 Support"],
    technologies: ["All platforms", "Monitoring tools", "Analytics", "Testing"],
  },
];

const ServiceCard = ({ service }: { service: (typeof servicesData)[0] }) => {
  const IconComponent = service.icon;

  return (
    <Card className='mb-4'>
      <CardHeader className='pb-4'>
        <View className='flex-row items-start justify-between'>
          <View className='flex-row items-center flex-1'>
            <View className='bg-primary/10 p-3 rounded-full mr-4'>
              <IconComponent className='text-primary' size={24} />
            </View>
            <View className='flex-1'>
              <CardTitle className='text-lg mb-1'>{service.title}</CardTitle>
              <View className='flex-row items-center'>
                <Star className='text-yellow-500 mr-1' size={14} />
                <Text className='text-sm text-muted-foreground'>
                  {service.rating}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <CardDescription className='mt-2'>
          {service.description}
        </CardDescription>
      </CardHeader>

      <CardContent className='space-y-4'>
        <View className='flex-row items-center justify-between'>
          <View className='flex-row items-center'>
            <DollarSign className='text-green-600 mr-2' size={16} />
            <Text className='text-sm font-semibold text-green-600'>
              {service.price}
            </Text>
          </View>
          <View className='flex-row items-center'>
            <Clock className='text-muted-foreground mr-2' size={16} />
            <Text className='text-sm text-muted-foreground'>
              {service.duration}
            </Text>
          </View>
        </View>

        <View>
          <Text className='text-sm font-medium mb-2'>Key Features:</Text>
          <View className='flex-row flex-wrap gap-1'>
            {service.features.map((feature, index) => (
              <View key={index} className='bg-secondary px-2 py-1 rounded'>
                <Text className='text-xs text-secondary-foreground'>
                  {feature}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View>
          <Text className='text-sm font-medium mb-2'>Technologies:</Text>
          <View className='flex-row flex-wrap gap-1'>
            {service.technologies.map((tech, index) => (
              <View key={index} className='bg-primary/10 px-2 py-1 rounded'>
                <Text className='text-xs text-primary'>{tech}</Text>
              </View>
            ))}
          </View>
        </View>

        <View className='flex-row gap-3 mt-4'>
          <Link href={`/services/${service.id}`} asChild className='flex-1'>
            <Button>
              <Text className='text-primary-foreground font-medium'>
                Learn More
              </Text>
            </Button>
          </Link>
          <Button variant='outline' className='flex-1'>
            <Text>Get Quote</Text>
          </Button>
        </View>
      </CardContent>
    </Card>
  );
};

export default function ServicesScreen() {
  return (
    <ScrollView className='flex-1 bg-background'>
      <View className='p-6'>
        <View className='mb-6'>
          <Text className='text-2xl font-bold mb-2'>Our Services</Text>
          <Text className='text-muted-foreground'>
            Professional development services to bring your ideas to life
          </Text>
        </View>

        {/* Quick Stats */}
        <Card className='mb-6'>
          <CardContent className='py-6'>
            <View className='flex-row justify-around'>
              <View className='items-center'>
                <Text className='text-2xl font-bold text-primary'>50+</Text>
                <Text className='text-sm text-muted-foreground'>Projects</Text>
              </View>
              <View className='items-center'>
                <Text className='text-2xl font-bold text-primary'>4.9</Text>
                <Text className='text-sm text-muted-foreground'>Rating</Text>
              </View>
              <View className='items-center'>
                <Text className='text-2xl font-bold text-primary'>100%</Text>
                <Text className='text-sm text-muted-foreground'>
                  Satisfaction
                </Text>
              </View>
            </View>
          </CardContent>
        </Card>

        {/* Services List */}
        <View>
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </View>

        {/* Contact CTA */}
        <Card className='mt-6'>
          <CardHeader>
            <CardTitle>Need Something Custom?</CardTitle>
            <CardDescription>
              Don&apos;t see what you&apos;re looking for? Let&apos;s discuss
              your specific requirements.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className='w-full'>
              <Text className='text-primary-foreground font-medium'>
                Contact Us
              </Text>
            </Button>
          </CardContent>
        </Card>
      </View>
    </ScrollView>
  );
}
